"use client"

import { DiagnosisDetailDto } from "@/dtos/diagnosisDetail.dto"
import { calculateAge, exactDateFormatter } from "@/services/dateManagement.service"
import { getDiagnosisDetail } from "@/services/diagnosis.service"
import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const preparedMessages: { [key: string]: string } = {
    "normal": "El paciente no parece presentar ninguna anomalía en los pulmones, pese a lo dicho se recomienda encarecidamente realizar exámenes más exhaustivos para descartar cualquier posibilidad de enfermedad.",
    "large cell carcinoma": "El carcinoma de celulas grande es un tumor maligno dificil de combatir, sin embargo la medicina moderna ha encontrado formas de hacerle frente de manera parcialmente efectiva. Los tratamientos más comunes con la quimioterapia y la cirugía que busque extirpar el tumor y en algunos casos incluso todo el pulmon afectado.",
    "adenocarcinoma": "El adenocarcinoma pulmonar es una enfermedad que comunmente se suele tratar con cirugía, esto hasta la etapa IIIA, posterior a esta etapa las opciones de tratamiento se reducen a la quimioterapia y la radioterapia. Es un cáncer que posee una alta probabilidad de recaída y exige una atención inmediata para aumentar la efectividad del tratamiento. Es el tipo de cáncer de púlmon más comun que existe",
    "squamous cell carcinoma": "Es un tipo de cáncer de pulmón no microcítico, cuyas células se asemejan a las células planas (llamadas células escamosas) que revisten las vías respiratorias, sin tratar puede destruir el tejido sano cercano. Puede extenderse a los ganglios linfáticos o a otros órganos y puede ser mortal, aunque no es frecuente."
}

const preparedMessagesTitles: { [key: string]: string } = {
    "normal": "Pulmones sanos",
    "large cell carcinoma": "Se estima la presencia de carcinoma de células grandes",
    "adenocarcinoma": "Se estima la presencia de adenocarcinoma",
    "squamous cell carcinoma": "Se estima la presencia de carcinoma de células escamosas"
}

export default function ResultsDiagnosisIdPage({ params }: { params: { id: string } }) {
    const id = params.id
    const [diagnosisDetailData, setDiagnosisDetailData] = useState<DiagnosisDetailDto>()
    const [message, setMessage] = useState("Cargando...")

    useEffect(() => {
        const fetchDiagnosisDetail = async () => {
            await getDiagnosisDetail(parseInt(id)).then((diagnosisDetail) => {
                const originalDiagnosisResult = diagnosisDetail.diagnosisResult
                diagnosisDetail.diagnosisResult = preparedMessagesTitles[diagnosisDetail.diagnosisResult]
                setDiagnosisDetailData(diagnosisDetail)
                setMessage(preparedMessages[originalDiagnosisResult])
            })
        }

        fetchDiagnosisDetail()
    }, [])




    return (
        <>
            <Container className="my-5 ">
                <Row>
                    <Col className="mx-5">
                        <Card className="mx-5" style={{minWidth: "30em"}}>
                            <Card.Header style={{"backgroundColor": "#E8EEFA"}}>
                                <Container style={{"color": "#2B308B"}}>
                                    <div className="">

                                        <p className="fs-1 fw-bold">{diagnosisDetailData?.patientName}</p>
                                        <p className="fs-5" style={{fontWeight: "500"}}>{calculateAge(diagnosisDetailData?.patientDateOfBirth)} años <br />
                                        Atendido por el profesional: {diagnosisDetailData?.username} <br />
                                        {exactDateFormatter(diagnosisDetailData?.diagnosisDate)}
                                        </p>
                                    </div>
                                </Container>

                            </Card.Header>
                            <Card.Body>
                                <Container className="lh-sm">
                                    {/* <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-1 fw-bold">{diagnosisDetailData?.patientName}</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}>{calculateAge(diagnosisDetailData?.patientDateOfBirth)} años de edad</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}><strong>Atendido por el profesional:</strong> {diagnosisDetailData?.username}</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-medium" style={{ "color": "#6D6D6D" }}>{exactDateFormatter(diagnosisDetailData?.diagnosisDate)}</p>
                                        </Col>
                                    </Row> */}

                                    <Row className=" lh-base my-3 mx-3">
                                        <Col className="col-8" >
                                            <p className="fs-5 fw-medium" style={{color: "#2B308B", opacity: "70%"}}>
                                                {message}
                                            </p>
                                        </Col>
                                        <Col className="col-4 d-flex align-items-center justify-content-center" style={{backgroundColor: "#DEDFF9", borderRadius:"12px"}}>
                                            <p className="fs-4 fw-bolder text-center" style={{color: "#2B308B"}}>
                                                {diagnosisDetailData?.diagnosisResult}
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row className="mx-3 mt-5">
                                        <Col className="text-center d-flex align-items-center justify-content-center py-4" style={{backgroundColor: "#DEDFF9", borderRadius:"12px"}}>
                                            <p className="fs-5 mx-3" style={{color: "#2B308B", fontWeight: "600"}}>
                                                Se recuerda que la presente herramienta sirve únicamente al profesional de la salud como un apoyo y está impulsado por medio de inteligencia artificial y es propenso a cometer errores. Se recomiendan exámenes más exhaustivos independientemente de los resultados obtenidos                                            </p>
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