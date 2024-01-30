"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import HistoryListItem from "../components/historyListItem.tsx/HistoryListItem";
import Pagination from 'react-bootstrap/Pagination';


export default function History() {
  const cosa = {
    date: "asfsa",
    patientName: "asfs",
    patientAge: 10,
    diagnosis: true,
    isLast: true
  }

  const listItem = {
    date: "25/08/2002",
    patientName: "Anonimo",
    patientAge: 11,
    diagnosis: "Se estima presencia de cancer",
    isLast: true
  }

  return (
    <>
      <Container className="my-3 h-100">
        <Row className="h-100">
          <Col className="my-1 h-100">
            <Card className="h-100" style={{ height: "100%" }}>
              <Card.Body>
                <HistoryListItem date={listItem.date} patientName={listItem.patientName} patientAge={listItem.patientAge} diagnosis={listItem.diagnosis} isLast={false} />
                <HistoryListItem date={listItem.date} patientName={listItem.patientName} patientAge={listItem.patientAge} diagnosis={listItem.diagnosis} isLast={false} />
                <HistoryListItem date={listItem.date} patientName={listItem.patientName} patientAge={listItem.patientAge} diagnosis={listItem.diagnosis} isLast={false} />
                <HistoryListItem date={listItem.date} patientName={listItem.patientName} patientAge={listItem.patientAge} diagnosis={listItem.diagnosis} isLast={true} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="my-1">
            <Card className="h-100">
              <Card.Body>
                <Container fluid>
                  <Row style={{ backgroundColor: "#e3e3e3" }} className="mx-0">
                    <Col className="text-center">
                      <img style={{ height: "14rem", width: "20rem", borderRadius: "4px" }} src="https://storage.googleapis.com/kagglesdsdata/datasets/839140/1432479/Data/test/adenocarcinoma/000108%20%283%29.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240129%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240129T101356Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2c14a901921aecf36976dcd87bdeeee4fb2fbcc1a6c011a75ea647bcfb424f65a12435cc7056cc8865c6d8ab7643b5941fc5ec18e0630f6dfc1f80bcbd011e84d0751563fb51302193d5d2cb9e2502a0d0b4cea1325fa41423e906e3c8bc3e12c9c65e1a9756fb433a1c7f7acb6db3cd392f1e4583eb39cd0f5cdbd428f5b32baaf8a7818683fa8cbddf966f9003fa907dc6985aef73927f358734614c806194a30fada0dbb93bc2f09690e909f9c07306cfcfe71f7dcef87e29718e44f953404592beb582b4045cb868bbedd9650624aeec3fd34319b2b55252afd3112f33d4e1f9d3c8d188f4f7ffbb7c5a5102fc0d826c43711500a5408b217bb6d81fc2dd" alt="placeholder" />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col>
                      <p className="fs-4 fw-bold mb-1 lh-sm">Nombre: {listItem.patientName}</p>
                      <p className="fs-5 mb-1 lh-sm">Edad: {listItem.patientAge}</p>
                      <p className="fs-5 mb-1 lh-sm">Fecha:  29/01/2023</p>
                      <p className="fs-5 mb-1 lh-sm">Numero de referencia: 45114564</p>
                      <p className="fs-4 fw-bold mb-1 text-center lh-sm">Se estima presencia de cancer</p>

                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Pagination className="justify-content-center">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>

          </Col>
        </Row>
      </Container>
    </>
  )
}