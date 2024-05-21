"use client"

import { Col, Container, Row } from "react-bootstrap";
import { calculateAge, formatDate } from "@/services/dateManagement.service";


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
            <Container fluid className="lh-1 my-3" onClick={OnClick} style={{cursor: "pointer", backgroundColor: "white", borderRadius: "12px", padding: "7px 0px 10px 5px"}}>
                <Row>
                    <Col>
                        <p className="fs-3 fw-bold mb-1" style={{color: "#2B308B"}}>Fecha: {formatDate(date)}</p>

                    </Col>
                </Row>
                <Row className="py-0">
                    <Col>
                        <p className="fs-6 mb-2" style={{color: "#2B308B"}}>Paciente: {patientName} - {calculateAge(patientAge)} años</p>
                    </Col>
                </Row>
                <Row className="py-0">
                    <Col className="mb-0">
                        <p className="fs-6 mb-0" style={{color: "#2B308B"}}>Diagnostico: {diagnosis}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}