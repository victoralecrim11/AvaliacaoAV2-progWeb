import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import ModalExcluirAluno from "../components/ModalExcluirAluno";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  function abrirModalExcluir(aluno) {
    setAlunoSelecionado(aluno);
    setMostrarModal(true);
  }

  function fecharModal() {
    setMostrarModal(false);
  }

  useEffect(() => {
    api
      .get("/alunos")
      .then((res) => setAlunos(res.data))
      .catch(() => alert("Erro ao carregar alunos"));
  }, []);

  function confirmarExclusao() {
    api
      .delete(`/alunos/${alunoSelecionado.id}`)
      .then(() => {
        alert("Aluno excluído com sucesso!");
        setAlunos((prev) => prev.filter((a) => a.id !== alunoSelecionado.id));
        setMostrarModal(false);
      })
      .catch(() => alert("Erro ao excluir aluno"));
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="titulo-pagina m-0">Lista de Alunos</h1>
        <Link to="/novo" className="btn btn-primary">
          Novo Aluno
        </Link>
      </div>

      <table className="tabela-detalhes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Curso</th>
            <th>Turma</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.curso}</td>
              <td>{aluno.turma}</td>
              <td>
                <Link to={`/editar/${aluno.id}`}>
                  <button className="btn-editar">Editar</button>
                </Link>

                <button
                  className="btn-excluir"
                  onClick={() => abrirModalExcluir(aluno)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmação */}
      <ModalExcluirAluno
        show={mostrarModal}
        onHide={fecharModal}
        aluno={alunoSelecionado}
        onConfirm={confirmarExclusao}
      />
    </div>
  );
}
