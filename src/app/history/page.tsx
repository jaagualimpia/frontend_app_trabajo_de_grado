"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import HistoryListItem from "../components/historyListItem.tsx/HistoryListItem";
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import { getDiagnosisHistory } from "@/services/diagnosis.service";
import { DiagnosisPaginationDto } from "@/dtos/diagnosisPagination.dto";
import { DiagnosisCardComponent } from "../components/diagnosisCardComponent/diagnosisCardComponent";


export default function History() {
  const [listItem, setListItem] = useState<DiagnosisPaginationDto>({
    count: 0,
    next: "",
    previous: "",
    results: []
  })

  const [diagnosisComponent, setDiagnosisComponent] = useState<any>(
    <DiagnosisCardComponent
      name={"Jorge Agualimpia"}
      patient_date_of_birth={"20"}
      diagnosis_date={"29/01/2023"}
      id={45114564}
      diagnosis_result={"Se estima presencia de cancer"} 
      image_url={""}
      />
  )

  useEffect(() => {
    const fetchDiagnosisHistory = async () => {
      await getDiagnosisHistory().then((response) => {
        setListItem(response)

        let firstItem = response.results[0]

        setDiagnosisComponent(
          <DiagnosisCardComponent
            name={firstItem.patientName}
            patient_date_of_birth={firstItem.patientDateOfBirth}
            diagnosis_date={firstItem.diagnosisDate}
            id={firstItem.id}
            diagnosis_result={"Se estima la presencia de cancer"}
            image_url={firstItem.imageUrl}
            />
        )
    })
}

fetchDiagnosisHistory()
  }, [])

// const cosa = {
//   date: "asfsa",
//   patientName: "asfs",
//   patientAge: 10,
//   diagnosis: true,
//   isLast: true
// }

// const listItem = {
//   date: "25/08/2002",
//   patientName: "Anonimo",
//   patientAge: 11,
//   diagnosis: "Se estima presencia de cancer",
//   isLast: true
// }

const onClickDiagnosisItem = (
  username: string,
  diagnosisDate: Date,
  patientDateOfBirth: Date,
  id: number,
  diagnosisResult: string,
  image_url: string
) => {

  setDiagnosisComponent(
    <DiagnosisCardComponent
      name={username}
      patient_date_of_birth={patientDateOfBirth}
      diagnosis_date={diagnosisDate}
      id={id}
      diagnosis_result={diagnosisResult}
      image_url={image_url}
      />)
}

let itemsToDisplay = listItem.results.map((item, index) => {
  return <HistoryListItem key={index}
    date={item.diagnosisDate}
    patientName={item.patientName}
    patientAge={item.patientDateOfBirth}
    diagnosis={item.diagnosisResult}
    isLast={index === listItem.results.length - 1}
    OnClick={() => {onClickDiagnosisItem(item.patientName, item.diagnosisDate, item.patientDateOfBirth, item.id, item.diagnosisResult, item.imageUrl)}}
  />
})


return (
  <>
    <Container className="my-3 h-100">
      <Row className="h-100">
        <Col className="my-1 h-100">
          <Card className="h-100" style={{ height: "100%" }}>
            <Card.Body>
              {itemsToDisplay}
            </Card.Body>
          </Card>
        </Col>

        <Col className="my-1">
          {/* <Card className="h-100">
              <Card.Body>
                <Container fluid>
                  <Row style={{ backgroundColor: "#e3e3e3" }} className="mx-0">
                    <Col className="text-center">
                      <img style={{ height: "14rem", width: "20rem", borderRadius: "4px" }} src="https://storage.googleapis.com/kagglesdsdata/datasets/839140/1432479/Data/test/adenocarcinoma/000108%20%283%29.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20240129%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240129T101356Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=2c14a901921aecf36976dcd87bdeeee4fb2fbcc1a6c011a75ea647bcfb424f65a12435cc7056cc8865c6d8ab7643b5941fc5ec18e0630f6dfc1f80bcbd011e84d0751563fb51302193d5d2cb9e2502a0d0b4cea1325fa41423e906e3c8bc3e12c9c65e1a9756fb433a1c7f7acb6db3cd392f1e4583eb39cd0f5cdbd428f5b32baaf8a7818683fa8cbddf966f9003fa907dc6985aef73927f358734614c806194a30fada0dbb93bc2f09690e909f9c07306cfcfe71f7dcef87e29718e44f953404592beb582b4045cb868bbedd9650624aeec3fd34319b2b55252afd3112f33d4e1f9d3c8d188f4f7ffbb7c5a5102fc0d826c43711500a5408b217bb6d81fc2dd" alt="placeholder" />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col>
                      <p className="fs-4 fw-bold mb-1 lh-sm">Nombre: {"Jorge Agualimpia"}</p>
                      <p className="fs-5 mb-1 lh-sm">Edad: 20</p>
                      <p className="fs-5 mb-1 lh-sm">Fecha:  29/01/2023</p>
                      <p className="fs-5 mb-1 lh-sm">Numero de referencia: 45114564</p>
                      <p className="fs-4 fw-bold mb-1 text-center lh-sm">Se estima presencia de cancer</p>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card> */}

          {/* <DiagnosisCardComponent name={"Jorge Agualimpia"} patient_date_of_birth={"20"} diagnosis_date={"29/01/2023"} id={45114564} diagnosis_result={"Se estima presencia de cancer"} /> */}
        
          {diagnosisComponent }

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