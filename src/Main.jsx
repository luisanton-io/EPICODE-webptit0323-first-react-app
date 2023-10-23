import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fruits from "./Fruits";

export default function Main() {
  const [counter, setCounter] = useState(0);

  const [inputText, setInputText] = useState("");

  // console.log("mambo", counter);

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

        <Col xs={12} className="d-flex justify-content-center">
          <Col xs={6} className="my-5 d-flex justify-content-center">
            <input
              className="form-control w-100"
              type="text"
              value={inputText}
              onChange={(event) => {
                // console.log(event.target.value);
                setInputText(event.target.value);
              }}
            />
          </Col>
        </Col>
        <Fruits />
      </Row>
    </Container>
  );
}
