"use client"

import { Col, Container, Form, Row } from "react-bootstrap"
import NavBar from "../components/navbar/NavBar"
import { useState } from "react";
import axios from "axios";
import { post_diagnosis } from "@/services/diagnosis.service";

export default function ImageDiagnosis() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    imageUrl: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })

    console.log(formData);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    console.log(formData);
    event.preventDefault();
    
    await post_diagnosis(formData).then((response) => {
      console.log(response);
    })
    
  }


  return (
    <>
      <NavBar />
      <Container fluid className="mt-2">
        <Row className="text-center">
          <p className="fs-2 fw-bold">Ingresa los datos</p>
        </Row>

        <Row className="mx-5">
          <Container>
            <Form onSubmit={handleSubmit}>
              <Container fluid>
                <Row>
                  <Col className="col-8">
                    <Form.Group className="mb-3 text-start w-75" controlId="formBasicPatientName">
                      <Form.Label className="fw-bold">Nombre del paciente</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa el nombre del paciente" name="patientAge" onChange={handleInputChange}/>
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
                      <Form.Control type="date" placeholder="Ingresa el nombre del paciente" name="patientName" onChange={handleInputChange}/>
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
                      <Form.Control type="file" size="lg" name="imageUrl" onChange={handleInputChange}/>
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
