"use client"

import { Col, Container, Row } from "react-bootstrap";

interface HistoryListItemProps {
    date: string,
    patientName: string,
    patientAge: number,
    diagnosis: string
    isLast: boolean

}


export default function HistoryListItem({ date, patientName, patientAge, diagnosis, isLast }: HistoryListItemProps) {
    return (
        <>
            <Container fluid className="lh-1">
                <Row>
                    <Col>
                        <p className="fs-3 fw-bold mb-1">Fecha: 17/09/2050</p>

                    </Col>
                </Row>
                <Row className="py-0">
                    <Col>
                        <p className="fs-6 mb-2">Paciente: Anonimo - edad no especificada</p>
                    </Col>
                </Row>
                <Row className="py-0">
                    <Col className="mb-0">
                        <p className="fs-6 mb-0">Diagnostico: Se estima presencia de cáncer </p>
                    </Col>
                </Row>
                {isLast ? <></> : <hr/>}
            </Container>
        </>
    )
}