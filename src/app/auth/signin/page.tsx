"use client"
import Link from "next/link"
import { Card, Col, Container, Form, Row } from "react-bootstrap"

export default function SignIn() {
  const cardStyle = {
    backgroundColor: "#1E1E1E"
  }

  return (
    <Container >
      <Row className="mx-2">
        <Col className="mt-5 mx-5 mb-4">
          <Card style={cardStyle} className="mx-5">

            <Card.Body>
              <Container fluid>
                <Row className="text-center">
                  <Col>
                    <p className="text-white fs-1 fw-bolder">Iniciar sesión en Brand</p>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-start">
                    <Form>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label className="text-white fw-bold">Correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu email" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white fw-bold">Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                      </Form.Group>

                      <button className="btn btn-success w-100 mt-2 fw-bold">Ingresar</button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mx-2 text-center mt-4"> 
        <Col className="mx-5">
          <Card style={cardStyle} className="mx-5 py-3">
                <Card.Body>
                  <Link className="fs-2 fw-bold link-opacity-75" href={"/auth/signup"}>¿No tienes una cuenta? crea una</Link>
                </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}