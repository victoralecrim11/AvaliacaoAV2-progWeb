import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function BarraSuperior() {
  return (
    // 1. bg="dark" define o fundo escuro.
    // 2. data-bs-theme="dark" (ou variant="dark") é crucial para definir a cor do texto para 'light' (branco).
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="mb-2">
      {/* Container não precisa de 'justify-content-center' para centralizar um único item. */}
      {/* Usar 'h-100' no Container não é geralmente necessário aqui. */}
      <Container>
        {/* 3. 'mx-auto' centraliza o item horizontalmente (funciona bem em Container). */}
        {/* 4. 'text-light' é a classe Bootstrap para texto branco (apesar de data-bs-theme já ajudar). */}
        {/* 5. 'h3' ou 'fs-3' para um tamanho de fonte maior (opcional, para destaque). */}
        {/* 6. 'm-0' remove margens. */}
        <Navbar.Brand className="mx-auto text-light m-0 fs-4">
          Sistema de Alunos
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}