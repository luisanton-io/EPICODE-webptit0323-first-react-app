// metodo .map degli array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Il metodo .map serve per trasformare un array in un altro array

import { Button, Col, Container, Row } from "react-bootstrap";

// const numbers = [1, 2, 3, 4, 5];

export default function Fruits() {
  const fruits = [
    "🍏",
    "🍎",
    "🍐",
    "🍊",
    "🍋",
    "🍌",
    "🍉",
    "🍇",
    "🍓",
    "🍈",
    "🍒",
    "🍑",
    "🥭",
    "🍍",
    "🥥",
    "🥝",
    "🍅",
  ];
  return (
    <Container>
      <h1>Fruits</h1>
      <Row className="row-gap-1">
        {fruits.map((fruit) => (
          <Col xs={3}>
            <Button className="w-100" onClick={() => alert("Fruit: " + fruit)}>
              {fruit}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
