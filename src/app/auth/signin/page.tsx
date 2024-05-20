"use client"

import { LoaderComponent } from "@/app/components/loaderComponent/loaderComponent";
import { authenticateUser } from "@/services/auth.service";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap"
import { showSnackbarErrorMessage } from "./errors/errors.messages";
import { BasicButton } from "@/app/components/basicButton/BasicButton";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    email: '',
  });
  const [errorSnackbar, setErrorSnackbar] = useState<any>(null)

  const cardStyle = {
    backgroundColor: "#E8EEFA"
  }

  useEffect(() => {
    document.title = "Sign in";
  }, [])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true)

    await authenticateUser(
      {

        email: formData.email,
        password: formData.password

      }).then((response) => {

        localStorage.setItem('access_token', response.access);
        router.push('/');

      }).catch(error => {

        setIsLoading(false)
        setErrorSnackbar(showSnackbarErrorMessage(error))
        setTimeout(() => { setErrorSnackbar(null) }, 3000)

      }).catch(error => {

        setIsLoading(false)
        setErrorSnackbar(showSnackbarErrorMessage(error))
        setTimeout(() => { setErrorSnackbar(null) }, 3000)

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
                    <p className="fs-1 fw-bolder" style={{ "color": "#2B308B" }}>Iniciar sesión en SupportCCT</p>
                  </Col>
                </Row>

                <Row>
                  <Col className="text-start">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label className="fw-bold" style={{ "color": "#2B308B" }}>Correo electronico</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Ingresa tu email" onChange={handleOnChange} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold" style={{ "color": "#2B308B" }}>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Ingresa tu contraseña" onChange={handleOnChange} />
                      </Form.Group>

                      {/* <button style={{ "color": "#FFFFF" }} className="btn btn-success w-100 mt-2 fw-bold">Ingresar</button> */}

                      <Row className="text-center">
                        <BasicButton text="Ingresar" />
                      </Row>
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
              <Link style={{"color": "#2B308B"}} className="fs-2 fw-bold link-opacity-75" href={"/auth/signup"}>¿No tienes una cuenta? crea una</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {isLoading && (<LoaderComponent />)}
      {errorSnackbar}
    </Container>
  )
}