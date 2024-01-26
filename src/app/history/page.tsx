"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar/NavBar";
import HistoryListItem from "../components/historyListItem.tsx/HistoryListItem";

export default function History() {
  const cosa  = {
    date: "asfsa",
    patientName: "asfs",
    patientAge: 10,
    diagnosis: true,
    isLast: true
  }
  
  return (
    <>
      <Container className="my-3 h-100">
        <Row className="h-100">
          <Col className="my-1 h-100">
            <Card className="h-100" style={{ height: "100%" }}>
              <Card.Body>
                <HistoryListItem isLast={false} />
                <HistoryListItem isLast={false} />
                <HistoryListItem isLast={false} />
                <HistoryListItem isLast={true} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="my-1">
            <Card className="h-100">
              <Card.Body>
                asdfadsfa
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}