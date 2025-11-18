import Card from "react-bootstrap/Card";


export default function CardAluno({ aluno }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{aluno.nome}</Card.Title>
        <Card.Text>Matrícula: {aluno.matricula}</Card.Text>
      </Card.Body>
    </Card>
  );
}
