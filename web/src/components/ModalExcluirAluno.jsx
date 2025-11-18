import { Modal, Button } from "react-bootstrap";

export default function ModalExcluirAluno({ show, onHide, aluno, onConfirm }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Aluno</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Tem certeza que deseja excluir o aluno
        <br />
        <strong>{aluno?.nome}</strong>?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
