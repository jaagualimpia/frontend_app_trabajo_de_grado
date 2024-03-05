"use client"

import { Container, Row, Col, Card } from "react-bootstrap"


export default function ResultsDiagnosisIdPage({ params }: { params: { id: string } }) {
    const id = params.id

    return (
        <>
            <Container className="my-5 ">
                <Row>
                    <Col className="mx-5">
                        <Card className="mx-5">
                            <Card.Body>
                                <Container className="lh-sm">
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-1 fw-bold">Usuario anonimo</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}>Edad no especificada</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}>Edad no especificada / 15 años</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}><strong>Atendido por el profesional:</strong> NOMBRE</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}>El día 15 de enero de 2023 a las 00:15 GMT horas del día</p>
                                        </Col>
                                    </Row>

                                    <Row className="text-center lh-base">
                                        <Col className="col-4">
                                            <p className="fs-4 fw-bolder">
                                                Se estima la presencia de un adenocarcinoma
                                            </p>
                                        </Col>
                                        <Col className="col-8">
                                            <p className="fs-5 fw-medium">
                                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                                                El adenocarcinoma generalmente se trata con cirugía para extirpar cualquier tejido glandular canceroso. También se extirpa una parte del tejido circundante. Las técnicas de cirugía mínimamente invasiva pueden reducir el tiempo de curación y minimizar las posibles infecciones.
                                            </p>
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