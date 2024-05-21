"use client"

import { Card, Col, Container, Form, Row } from "react-bootstrap"
import NavBar from "../components/navbar/NavBar"
import { useEffect, useState } from "react";
import { post_diagnosis } from "@/services/diagnosis.service";
import { useRouter } from "next/navigation";
import { LoaderComponent } from "../components/loaderComponent/loaderComponent";
import "./ImageDiagnosisStyles.css"

interface imageDiagnosisProps {
  patientName: string,
  patientAge: string,
  imageUrl: any

}

export default function ImageDiagnosis() {
  const [formData, setFormData] = useState<imageDiagnosisProps>({
    patientName: '',
    patientAge: '',
    imageUrl: '',
  });
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

  useEffect(() => {
    document.title = "Diagnostico";
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.type === 'file' && event.target.files) {
      console.log(event.target.files);
      setFormData({
        ...formData,
        ["imageUrl"]: event.target.files[0]
      })
    } else {

      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(formData);
    event.preventDefault();

    setIsLoading(true)

    await post_diagnosis(formData).then((response) => {
      router.push('/results/' + response.id);
    })

  }

  const handlePatientNameSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.getElementById('patientNameControl')?.setAttribute('disabled', String(event.target.checked));

      setFormData({
        ...formData,
        ["patientName"]: "Usuario anonimo",
      })

      return
    }

    document.getElementById('patientNameControl')?.removeAttribute('disabled');
  }

  const handlePatientAgeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      document.getElementById('patientAgeControl')?.setAttribute('disabled', String(event.target.checked));

      setFormData({
        ...formData,
        ["patientAge"]: new Date().toISOString().split('T')[0],
      })

      return
    }

    document.getElementById('patientAgeControl')?.removeAttribute('disabled');;
  }


  return (
    <>
      <style jsx global>{`
                body {
                    background-color: #F4F8FF;
                    color: white;
                }
            `}</style>
      <NavBar />

      <Container fluid className="mt-2 limiter">
        <Card className="mx-5 mt-4">
          <Card.Body>
            <Container fluid>
              <Row className="text-center">
                <p className="fs-2 fw-bold" style={{ "color": "#2B308B" }}>Ingresa los datos</p>
              </Row>

              <Row className="mx-5">
                <Container>
                  <Form onSubmit={handleSubmit}>
                    <Container fluid>
                      <Row>
                        <Col className="col-8">
                          <Form.Group className="mb-3 text-start w-75" controlId="patientNameControl">
                            <Form.Label className="fw-bold" style={{ "color": "#2B308B", }} >Nombre del paciente</Form.Label>
                            <Form.Control style={{ "backgroundColor": "#F3F4FD" }} type="text" placeholder="Ingresa el nombre del paciente" name="patientName" onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                        <Col className="align-self-center">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="No especificar"
                            onChange={handlePatientNameSwitch}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col className="col-8">
                          <Form.Group className="mb-3 text-start w-75" controlId="patientAgeControl">
                            <Form.Label className="fw-bold" style={{ "color": "#2B308B" }} >Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" style={{ "backgroundColor": "#F3F4FD" }} placeholder="Ingrese la fecha de nacimiento del paciente" name="patientAge" onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                        <Col className="align-self-center">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="No especificar"
                            onChange={handlePatientAgeSwitch}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label className="fw-bold" style={{ "color": "#2B308B" }}>Escoge o arrastra la tomografia</Form.Label>
                            <Form.Control style={{ "backgroundColor": "#F3F4FD" }} type="file" size="lg" name="imageUrl" onChange={handleInputChange} />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          {/* <button className="btn btn-danger w-100 py-2 fw-bold">Eliminar imagen</button> */}
                          <button className="radius-button-custom-outlined">Eliminar imagen</button>
                        </Col>
                        <Col>
                          {/* <button className="btn btn-success w-100 py-2 fw-bold">Subir imagen</button> */}
                          <button className="radius-button-custom">Subir imagen</button>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col>
                        </Col>
                      </Row>
                    </Container>
                  </Form>
                </Container>
                {isLoading && (<LoaderComponent />)}
              </Row>
            </Container>
          </Card.Body>
        </Card>

      </Container>
    </>
  )
}
