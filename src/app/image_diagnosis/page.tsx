"use client"

import { Col, Container, Form, Row } from "react-bootstrap"
import NavBar from "../components/navbar/NavBar"

export default function ImageDiagnosis() {
  return (
    <>
      <NavBar />
      <Container fluid className="mt-2">
        <Row className="text-center">
          <p className="fs-2 fw-bold">Ingresa los datos</p>
        </Row>

        <Row className="mx-5">
          <Container>
            <Form>
              <Container fluid>
                <Row>
                  <Col className="col-8">
                    <Form.Group className="mb-3 text-start w-75" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Nombre del paciente</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa el nombre del paciente" />
                    </Form.Group>
                  </Col>
                  <Col className="align-self-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="No especificar"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-8">
                    <Form.Group className="mb-3 text-start w-75" controlId="formBasicEmail">
                      <Form.Label className="fw-bold">Fecha de nacimiento</Form.Label>
                      <Form.Control type="date" placeholder="Ingresa el nombre del paciente" />
                    </Form.Group>
                  </Col>
                  <Col className="align-self-center">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="No especificar"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group controlId="formFileLg" className="mb-3">
                      <Form.Label className="fw-bold">Escoge o arrastra la tomografia</Form.Label>
                      <Form.Control type="file" size="lg" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <button className="btn btn-danger w-100 py-2 fw-bold">Eliminar imagen</button>
                  </Col>
                  <Col>
                    <button className="btn btn-success w-100 py-2 fw-bold">Subir imagen</button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Container>
        </Row>

      </Container>
    </>
  )
}