"use client"

import { Card, Col, Container, Row } from "react-bootstrap";


const AlternativeHistoryComponent = () => {
    return (
        <>
            <Container fluid className="my-5">
                <Row>
                    <Col>
                        <Card className="mx-4 my-5">
                            <Card.Body>
                                <Card.Title className="text-center fs-3 fw-bold">Historial</Card.Title>
                                <Card.Text className="fs-3 fw-medium text-center">
                                    No se encontraron resultados
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default AlternativeHistoryComponent;