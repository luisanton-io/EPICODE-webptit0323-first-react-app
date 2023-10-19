import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fruits from "./Fruits";

export default function Main() {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <Row className="my-5">
        <Col xs={6}>{counter}</Col>

        <Col xs={6} className="d-flex justify-content-center">
          <Button
            variant="outline-success"
            className="rounded-0 custom-button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Add counter
          </Button>
        </Col>
        <Fruits />
      </Row>
    </Container>
  );
}
