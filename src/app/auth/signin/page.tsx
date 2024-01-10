"use client"
import { Card, Col, Container, Form, Row } from "react-bootstrap"

export default function SignIn() {
  const cardStyle = {
    backgroundColor: "#1E1E1E"
  }

  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <Card style={cardStyle} className="mx-4">

            <Card.Body>
              <Container fluid>
                <Row className="text-center">
                  <Col>
                    <p className="text-white h1">Crea una cuenta en the brand</p>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-start">
                    <Form>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label className="text-white">Correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="text-white">Confirma tu contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Confirma tu contraseña" />
                      </Form.Group>

                      <button className="btn btn-success w-100 mt-2"><strong>Crear cuenta</strong></button>
                    </Form>
                  </Col>
                </Row>
              </Container>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}