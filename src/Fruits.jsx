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

  // un po' come se scrivessimo qualcosa come:

  // const container = document.createElement("div")
  // container.classList.add("container")
  // const row = document.createElement("div")
  // row.classList.add("row")
  // container.appendChild(row)
  // const col = document.createElement("div")
  // col.classList.add("col")

  // ecc ecc ecc ecc ecc

  // console.log("Macarena");

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
