"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ListItemWithImage } from "./components/listItemWithImage/ListItemWithImage";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Inicio"
  }, [])

  return (
    <>
      <NavBar />
      <Container className="my-5 ">
        <Row>
          <Col className="mx-5">
            <Card className="mx-5">
              <Card.Body>
                <Container>
                  <Row className="mb-3">
                    <Col>
                      <h1 className="text-center fs-1 fw-bold">SupportCCT</h1>
                    </Col>
                  </Row>

                  <Row className="mx-3">
                    <Col>
                      <p className="lh-md">Este es un trabajo realizado por estudiantes de la universidad San Buenaventura de Cali. <br />
                        En la herramienta desarrollado se construyo un sistema de inteligencia artificial que permite clasificar distintos tipos de cancer de púlmon junto con pulmones sanos. Las clases que se clasifica son:
                      </p>
                      <ul>
                        <Container>
                          <Row>
                            <Col>
                              <ListItemWithImage label="Pulmones sanos" imageSrc="/images/normal_lung_image.jpg" alt="Imagen de púlmones normales" />
                            </Col>
                            <Col>
                              <ListItemWithImage label="Carcinoma de celulas grandes" imageSrc="/images/large_cell_carcinoma.png" alt="Imagen de carcinoma de celulas grandes" />
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <ListItemWithImage label="Carcinoma de celulas escamosas" imageSrc="/images/squamous_cell_carcinoma.png" alt="Imagen de carcinoma de celulas escamosas" />
                            </Col>
                            <Col>
                              <ListItemWithImage label="Adenocarcinoma" imageSrc="/images/Adenocarcinoma.png" alt="Imagen de adenocarcinoma" />
                            </Col>
                          </Row>
                        </Container>
                      </ul>
                      <p className="lh-md">
                        El modelo fue entrenado haciendo uso de redes neuronales convolucionales y utilizando varias tecnicas de preprocesamiento
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="text-center fs-1 mb-4 fw-bold">Recursos</p>
                    </Col>
                  </Row>

                  <Row className="text-center mx-3">
                    <Col style={{ cursor: "pointer" }} onClick={() => router.push("https://github.com/jaagualimpia/frontend_app_trabajo_de_grado/tree/joragucai")}>
                      <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github image" style={{ height: "100px" }} />
                      <p className="fw-bold fs-5">Repositorio frontend app</p>
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github image" style={{ height: "100px" }} onClick={() => router.push("https://github.com/jaagualimpia/backend_app_trabajo_de_grado/tree/joragucai")} />
                      <p className="fw-bold fs-5">Repositorio backend app</p>
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/2560px-Google_Colaboratory_SVG_Logo.svg.png" alt="github image" style={{ height: "100px" }}
                        onClick={() => router.push("https://www.kaggle.com/code/jorgeagualimpia/notebook-del-trabajo-de-grado-final ")}
                      />
                      <p className="fw-bold fs-5">Jupyter notebook del modelo de IA</p>
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
