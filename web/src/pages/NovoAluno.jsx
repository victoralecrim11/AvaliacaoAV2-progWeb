import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import FormAluno from "../components/FormAluno";

export default function NovoAluno() {
  const navigate = useNavigate();

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
      .post("/alunos", payload)
      .then(() => {
        alert("Aluno cadastrado com sucesso!");
        navigate("/");
      })
      .catch(() => alert("Erro ao cadastrar aluno"));
  }

  return (
    <FormAluno
      titulo="Novo Aluno"
      onSubmit={handleSubmit}
      onCancelar={() => navigate("/")}
    />
  );
}
