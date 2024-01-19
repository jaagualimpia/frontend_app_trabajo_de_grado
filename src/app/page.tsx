"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <Container>
              <Row>
                <Col className="text-center fw-bolder">
                  <h1>Brand</h1>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
