import { Form, Row, Col, Button, Card } from "react-bootstrap";

export default function FormAluno({ titulo, onSubmit, aluno, onCancelar }) {
  return (
    <main className="container py-4">
      <h3 className="mb-3">{titulo}</h3>

      <Card className="shadow-sm">
        <Card.Body>
          <Form onSubmit={onSubmit}>
            
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome completo"
                  required
                  name="nome"
                  defaultValue={aluno?.nome}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Matrícula:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite a matrícula"
                  required
                  name="matricula"
                  defaultValue={aluno?.matricula}
                />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Curso:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o curso"
                  required
                  name="curso"
                  defaultValue={aluno?.curso}
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label>Turma:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite a turma"
                  required
                  name="turma"
                  defaultValue={aluno?.turma}
                />
              </Col>
            </Row>

            <hr className="my-4" />

            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={onCancelar}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Salvar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </main>
  );
}
