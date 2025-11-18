import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import FormAluno from "../components/FormAluno";

export default function EditarAluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    api
      .get(`/alunos/${id}`)
      .then((res) => setAluno(res.data))
      .catch(() => alert("Erro ao carregar dados do aluno"));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);

    const payload = {
      nome: form.get("nome"),
      matricula: form.get("matricula"),
      curso: form.get("curso"),
      turma: form.get("turma"),
    };

    api
      .put(`/alunos/${id}`, payload)
      .then(() => {
        alert("Aluno atualizado com sucesso!");
        navigate("/");
      })
      .catch(() => alert("Erro ao atualizar aluno"));
  }

  if (!aluno) return <p className="container mt-4">Carregando...</p>;

  return (
    <FormAluno
      titulo="Editar Aluno"
      aluno={aluno}
      onSubmit={handleSubmit}
      onCancelar={() => navigate("/")}
    />
  );
}
