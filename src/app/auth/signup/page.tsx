"use client"

import { LoaderComponent } from "@/app/components/loaderComponent/loaderComponent";
import { authenticateUser, createUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap"
import { showSignUpSnackbarErrorMessage } from "./errors/errors.messages";
import { BasicButton } from "@/app/components/basicButton/BasicButton";


export default function SignUp() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
  });
  const [errorSnackbar, setErrorSnackbar] = useState<any>(null)

  const cardStyle = {
    backgroundColor: "#E8EEFA"
  }

  useEffect(() => {
    document.title = "Sign up";
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

    setIsLoading(true)

    await createUser(formData).then(async (response) => {


      await authenticateUser(
        {
          email: formData.email,
          password: formData.password

        }).then((response) => {

          localStorage.setItem('access_token', response.access);
          router.replace("/")

        }).catch(error => {

          setErrorSnackbar(showSignUpSnackbarErrorMessage(error))
          setIsLoading(false)
          setTimeout(() => { setErrorSnackbar(null) }, 3000)

        })
    }).catch(error => {
      setErrorSnackbar(showSignUpSnackbarErrorMessage(error))
      setIsLoading(false)
      setTimeout(() => { setErrorSnackbar(null) }, 3000)
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
                      <p className="h1 fw-bold" style={{ "color": "#2B308B" }}>Crea una cuenta en SupportCCT</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="text-start">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                          <Form.Label className="fw-bold" style={{ "color": "#2B308B" }} >Correo electronico</Form.Label>
                          <Form.Control type="email" onChange={handleInputChange} placeholder="Ingresa tu email" name="email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Label className="fw-bold" style={{ "color": "#2B308B" }} >Nombre de usuario</Form.Label>
                          <Form.Control type="text" onChange={handleInputChange} placeholder="Ingresa tu nombre de usuario" name="username" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                          <Form.Label className="fw-bold" style={{ "color": "#2B308B" }} >Digita tu contraseña</Form.Label>
                          <Form.Control type="password" onChange={handleInputChange} placeholder="Ingresa tu contraseña" name="password" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                          <Form.Label className="fw-bold" style={{ "color": "#2B308B" }} >Confirma tu contraseña</Form.Label>
                          <Form.Control type="password" onChange={handleInputChange} placeholder="Confirma tu contraseña" name="confirmPassword" />
                        </Form.Group>

                        {/* <button className="btn btn-success w-100 mt-2"><strong>Crear cuenta</strong></button> */}

                        <Row className="text-center">
                          <BasicButton text="Crear cuenta" />
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Container>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {isLoading && (<LoaderComponent />)}
      {errorSnackbar}
    </>
  )
}