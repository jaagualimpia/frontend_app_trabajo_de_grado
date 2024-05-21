"use client"

import { calculateAge, formatDate } from "@/services/dateManagement.service"
import { Card, Container, Row, Col } from "react-bootstrap"

export const DiagnosisCardComponent = (
    {
        name,
        patient_date_of_birth,
        diagnosis_date,
        id,
        diagnosis_result,
        image_url
    }: { [key: string]: any }) => {

    return (
        <>
            <Card className="h-100">
                <Card.Body>
                    <Container fluid>
                        <Row style={{ backgroundColor: "#e3e3e3" }} className="mx-0">
                            <Col className="text-center">
                                <img style={{ height: "14rem", width: "20rem", borderRadius: "4px" }} src={image_url} alt="placeholder" />
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col>
                                <p className="fs-4 fw-bold mb-1 lh-sm" style={{ "color": "#2B308B" }}>Nombre: {name}</p>
                                <p className="fs-5 mb-1 lh-sm" style={{ "color": "#2B308B" }}>Edad: {calculateAge(patient_date_of_birth)}</p>
                                <p className="fs-5 mb-1 lh-sm" style={{ "color": "#2B308B" }}>Fecha:  {formatDate(diagnosis_date)}</p>
                                <p className="fs-5 mb-1 lh-sm" style={{ "color": "#2B308B" }}>Numero de referencia: {id}</p>

                                <Container fluid style={{"borderRadius": "12px", backgroundColor: "#E8EEFA"}} className="mt-5 py-2">
                                    <p className="fs-4 fw-bold mb-1 text-center lh-sm" style={{ "color": "#2B308B" }}>{diagnosis_result}</p>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}