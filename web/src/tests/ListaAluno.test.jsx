
// ===================================================================
// 🎯 MOCK NECESSÁRIO PARA RESOLVER O ERRO document is not defined
// ===================================================================

// Mock do componente customizado
vi.mock('../components/ModalExcluirAluno', () => { /* ... seu mock */ });

// Mock do Modal do React-Bootstrap (caso seja o culpado principal)
vi.mock('react-bootstrap/Modal', async (importOriginal) => {
  const actual = await importOriginal();
  const MockModal = ({ children, show }) => show ? <div data-testid="rb-modal">{children}</div> : null;
  // Mockamos as partes que não causam problemas
  MockModal.Header = actual.Header;
  MockModal.Body = actual.Body;
  MockModal.Footer = actual.Footer;
  return { default: MockModal, ...actual };
});


// Mocka o componente ModalExcluirAluno
vi.mock('../components/ModalExcluirAluno', () => {
  // Retorna um componente de Mock que renderiza apenas os filhos se 'show' for true
  // e exibe o nome do aluno, onHide e onConfirm para validação.
  return {
    default: ({ show, aluno, onHide, onConfirm }) => {
      if (!show) return null; // Não renderiza se 'show' for false

      return (
        <div data-testid="mock-modal-excluir">
          {/* Simula o corpo do Modal para que o teste encontre o texto */}
          <p>Tem certeza que deseja excluir o aluno {aluno?.nome}?</p>
          <button onClick={onConfirm}>Excluir</button>
          <button onClick={onHide}>Cancelar</button>
        </div>
      );
    },
  };
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListaAlunos from "../pages/ListaAlunos";
import { vi, test, expect, beforeEach, afterEach } from "vitest";
import * as api from "../services/api"; 

// ===================================================================

const alunoMock = { id: 1, nome: "João", matricula: "123", curso: "ADS", turma: "2025" };

beforeEach(() => {
  // mocka GET /alunos para retornar um aluno
  vi.spyOn(api.api, "get").mockResolvedValue({ data: [alunoMock] });

  // mocka DELETE padrão (pode ser sobrescrito nos testes individuais)
  vi.spyOn(api.api, "delete").mockResolvedValue({ status: 200 });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("Renderiza lista de alunos com botões Editar e Excluir", async () => {
  render(<ListaAlunos />);

  // espera o nome do aluno aparecer (consulta assíncrona)
  const nome = await screen.findByText("João");
  expect(nome).toBeDefined();

  // verifica se os botões aparecem na linha do aluno
  const btnEditar = screen.getByText("Editar");
  const btnExcluir = screen.getByText("Excluir");

  expect(btnEditar).toBeInTheDocument();
  expect(btnExcluir).toBeInTheDocument();
});

test("Ao clicar em Excluir abre modal e confirma exclusão (DELETE chamado e item removido)", async () => {
  render(<ListaAlunos />);

  // espera o item aparecer
  await screen.findByText("João");

  // clica no botão Excluir da linha
  const btnExcluirTabela = screen.getByText("Excluir");
  await userEvent.click(btnExcluirTabela);

  // agora o modal mockado deve estar visível com o nome do aluno
  // procura o título do modal ou mensagem com o nome do aluno
  const confirmText = await screen.findByText(/Tem certeza que deseja excluir o aluno/i);
  expect(confirmText).toBeInTheDocument();
  expect(screen.getByText("João")).toBeInTheDocument(); // nome dentro do modal também aparece

  // espia a chamada delete para checar argumento (redefine mock para capturar)
  const deleteSpy = vi.spyOn(api.api, "delete").mockResolvedValue({ status: 200 });

  // clica no botão 'Excluir' DENTRO do modal mockado
  // Já que o mock renderiza um botão 'Excluir' e um 'Cancelar', pegamos o botão pelo role/texto
  // O Mock agora só tem UM botão 'Excluir', então o getByText funciona.
  const modalExcluirBtn = screen.getByRole('button', { name: "Excluir" }); 
  await userEvent.click(modalExcluirBtn);

  // espera que a chamada DELETE tenha sido realizada com o endpoint esperado
  await waitFor(() => {
    expect(deleteSpy).toHaveBeenCalledWith(`/alunos/${alunoMock.id}`);
  });

  // após a exclusão, o nome do aluno não deve mais estar na tabela
  await waitFor(() => {
    expect(screen.queryByText("João")).toBeNull();
  });
});