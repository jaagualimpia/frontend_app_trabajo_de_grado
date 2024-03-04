"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import HistoryListItem from "../components/historyListItem.tsx/HistoryListItem";
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";
import { getDiagnosisHistory } from "@/services/diagnosis.service";
import { DiagnosisPaginationDto } from "@/dtos/diagnosisPagination.dto";
import { DiagnosisCardComponent } from "../components/diagnosisCardComponent/diagnosisCardComponent";
import { useSearchParams } from "next/navigation";

export default function History() {
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get("page")!) || 1

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
      document.title = "Historial";
    
    const fetchDiagnosisHistory = async () => {
      await getDiagnosisHistory(page).then((response) => {
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
          {diagnosisComponent }
        </Col>
      </Row>
      <Row>
        <Col>
          <Pagination className="justify-content-center">
            <Pagination.First href="/history?page=1"/>
            <Pagination.Prev href={`/history?page=${page - 1}`} disabled={!(page != 1)}/>
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next href={`/history?page=${page + 1}`} disabled={page >= Math.ceil(listItem.count / 4)}/>
            <Pagination.Last href={`/history?page=${Math.ceil(listItem.count / 4)}`}/>
          </Pagination>

        </Col>
      </Row>
    </Container>
  </>
)
}