"use client"

import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

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
                      <h1 className="text-center fs-1 fw-bold">Brand name</h1>
                    </Col>
                  </Row>

                  <Row className="mx-3">
                    <Col>
                      <p className="lh-lg">Este es un trabajo realizado por estudiantes de la universidad San Buenaventura de Cali, el propósito del presente proyecto es el de apoyar el diagnostico del cáncer de pulmón.</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <p className="text-center fs-1 mb-4 fw-bold">Recursos</p>
                    </Col>
                  </Row>

                  <Row className="text-center mx-3">
                    <Col style={{ cursor: "pointer" }} onClick={() => router.push("https://github.com/jaagualimpia/frontend_app_trabajo_de_grado")}>
                      <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github image" style={{ height: "100px" }} />
                      <p className="fw-bold fs-5">Repositorio frontend app</p>
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github image" style={{ height: "100px" }} />
                      <p className="fw-bold fs-5">Repositorio backend app</p>
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/2560px-Google_Colaboratory_SVG_Logo.svg.png" alt="github image" style={{ height: "100px" }} />
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
