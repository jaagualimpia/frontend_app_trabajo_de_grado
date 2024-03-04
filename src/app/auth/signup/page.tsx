"use client"

import { authenticateUser, createUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap"


export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });

  const cardStyle = {
    backgroundColor: "#1E1E1E"
  }

  useEffect(() => {
    document.title = "Sign up"; // Cambia el título de la ventana del navegador
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    await createUser(formData).then(async (response) => {
      await authenticateUser(
        {
          email: formData.email,
          password: formData.password }).then((response) => {

            localStorage.setItem('access_token', response.access);
            router.replace("/")
      })
    });
  };

  return (
    <>
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
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                          <Form.Label className="text-white">Correo electronico</Form.Label>
                          <Form.Control type="email" onChange={handleInputChange} placeholder="Ingresa tu email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Label className="text-white">Nombre de usuario</Form.Label>
                          <Form.Control type="text" onChange={handleInputChange} placeholder="Ingresa tu nombre de usuario" name="username" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label className="text-white">Confirma tu contraseña</Form.Label>
                          <Form.Control type="password" onChange={handleInputChange} placeholder="Confirma tu contraseña" name="password" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                          <Form.Label className="text-white">Confirma tu contraseña</Form.Label>
                          <Form.Control type="password" onChange={handleInputChange} placeholder="Confirma tu contraseña" name="confirmPassword" />
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
    </>
  )
}