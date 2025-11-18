import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaAlunos from "./pages/ListaAlunos";
import NovoAluno from "./pages/NovoAluno";
import EditarAluno from "./pages/EditarAluno";
import DetalhesAluno from "./pages/DetalhesAluno";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaAlunos />} />
        <Route path="/aluno/:id" element={<DetalhesAluno />} />
        <Route path="/novo" element={<NovoAluno />} />
        <Route path="/editar/:id" element={<EditarAluno />} />
      </Routes>
    </BrowserRouter>
  );
}
