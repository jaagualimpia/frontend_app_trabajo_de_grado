"use client"

import { DiagnosisDetailDto } from "@/dtos/diagnosisDetail.dto"
import { calculateAge, exactDateFormatter } from "@/services/dateManagement.service"
import { getDiagnosisDetail } from "@/services/diagnosis.service"
import { useEffect, useState } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const preparedMessages: {[key: string]: string} = {
    "normal": "El paciente no parece presentar ninguna anomalía en los pulmones, pese a lo dicho se recomienda encarecidamente realizar exámenes más exhaustivos para descartar cualquier posibilidad de enfermedad.",
    "large cell carcinoma": "El carcinoma de celulas grande es un tumor maligno dificil de combatir, sin embargo la medicina moderna ha encontrado formas de hacerle frente de manera parcialmente efectiva. Los tratamientos más comunes con la quimioterapia y la cirugía que busque extirpar el tumor y en algunos casos incluso todo el pulmon afectado.",
    "adenocarcinoma": "El adenocarcinoma pulmonar es una enfermedad que comunmente se suele tratar con cirugía, esto hasta la etapa IIIA, posterior a esta etapa las opciones de tratamiento se reducen a la quimioterapia y la radioterapia. Es un cáncer que posee una alta probabilidad de recaída y exige una atención inmediata para aumentar la efectividad del tratamiento. Es el tipo de cáncer de púlmon más comun que existe",
    "squamous cell carcinoma": "Es un tipo de cáncer de pulmón no microcítico, cuyas células se asemejan a las células planas (llamadas células escamosas) que revisten las vías respiratorias, sin tratar puede destruir el tejido sano cercano. Puede extenderse a los ganglios linfáticos o a otros órganos y puede ser mortal, aunque no es frecuente."
}

const preparedMessagesTitles: {[key: string]: string} = {
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
        const fetchDiagnosisDetail = async ()=>{
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
                        <Card className="mx-5">
                            <Card.Body>
                                <Container className="lh-sm">
                                    <Row className="my-0">
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
                                    </Row>

                                    <Row className="text-center lh-base">
                                        <Col className="col-4">
                                            <p className="fs-4 fw-bolder">
                                                {diagnosisDetailData?.diagnosisResult}
                                            </p>
                                        </Col>
                                        <Col className="col-8">
                                            <p className="fs-5 fw-medium">
                                                {message}
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row className="my-0">
                                        <Col className="text-center">
                                            <p className="fs-4 fw-bolder text-black" >
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