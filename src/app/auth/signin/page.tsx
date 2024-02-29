"use client"
import { authenticateUser } from "@/services/auth.service";
import Link from "next/link"
import { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap"

export default function SignIn() {
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });
  
  const cardStyle = {
    backgroundColor: "#1E1E1E"
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    await authenticateUser(
      {
        email: formData.email,
        password: formData.password 
      }).then((response) => {
        
        const accesToken: string = response.access
        localStorage.setItem('access_token', accesToken)

    })
    
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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label className="text-white fw-bold">Correo electronico</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Ingresa tu email" onChange={handleOnChange}/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white fw-bold">Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleOnChange}/>
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