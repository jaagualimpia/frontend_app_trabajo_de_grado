"use client"

import { Col, Container, Row } from "react-bootstrap";
import { formatDate } from "@/services/dateManagement.service";


interface HistoryListItemProps {
    date: Date,
    patientName: string,
    patientAge: Date,
    diagnosis: string,
    isLast: boolean,
    OnClick: () => void
}



export default function HistoryListItem({ date, patientName, patientAge, diagnosis, isLast, OnClick}: HistoryListItemProps) {

    return (
        <>
            <Container fluid className="lh-1" onClick={OnClick} style={{cursor: "pointer"}}>
                <Row>
                    <Col>
                        <p className="fs-3 fw-bold mb-1">Fecha: {formatDate(date)}</p>

                    </Col>
                </Row>
                <Row className="py-0">
                    <Col>
                        <p className="fs-6 mb-2">Paciente: {patientName} - edad no especificada</p>
                    </Col>
                </Row>
                <Row className="py-0">
                    <Col className="mb-0">
                        <p className="fs-6 mb-0">Diagnostico: {diagnosis}</p>
                    </Col>
                </Row>
                {isLast ? <></> : <hr/>}
            </Container>
        </>
    )
}