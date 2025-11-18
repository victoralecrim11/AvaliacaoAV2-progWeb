import { useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";

export default function DetalhesAluno() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    api
      .get(`/alunos/${id}`)
      .then((res) => setAluno(res.data))
      .catch(() => alert("Erro ao carregar detalhes do aluno"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!aluno) return <p>Carregando...</p>;

  return (
    <div className="container">
      <h1 className="titulo-pagina">Aluno</h1>

      <table className="tabela-detalhes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Turma</th>
            <th>Curso</th>
            <th>Matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{aluno.id}</td>
            <td>{aluno.nome}</td>
            <td>{aluno.turma}</td>
            <td>{aluno.curso}</td>
            <td>{aluno.matricula}</td>
            <td>
              <button className="btn-editar">Editar</button>
              <button className="btn-excluir">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
