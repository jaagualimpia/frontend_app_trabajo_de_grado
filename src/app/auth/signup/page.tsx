"use client"

import { Card, Col, Container, Form, Row } from "react-bootstrap"


export default function SignUp() {
  const cardStyle = {
    backgroundColor: "#1E1E1E"
  }


  return (
    <>
      <Container className="text-center">
        <Row>
          <Col className="mt-5">
            <Card style={cardStyle} className="mx-4">

              <Card.Body>
                <Container fluid>
                  <Row>
                    <Col>
                      <Card.Title className="text-white fs-1">Crea una cuenta</Card.Title>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-white text-start">Email</Form.Label>
                          <Form.Control type="email" placeholder="Ingresa tu email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className="text-white">Contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label className="text-white">Confirma tu contraseña</Form.Label>
                          <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                        </Form.Group>

                        <button className="btn btn-primary">Crear cuenta</button>
                      </Form>
                    </Col>
                  </Row>
                </Container>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}