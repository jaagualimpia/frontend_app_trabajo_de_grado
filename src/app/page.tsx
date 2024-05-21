"use client"


import "./homeCss.css"

import { Card, Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/navbar/NavBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ListItemWithImage } from "./components/listItemWithImage/ListItemWithImage";
import { IconBasicButton } from "./components/iconBasicButton/IconBasicButton";
import Image from "next/image";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    document.title = "Inicio"
  }, [])

  return (
    <>
      <NavBar />
      <Row className="">
        {/* <div className="image-container">
          <p className="principal-image-text" style={{ "textAlign": "center" }}>SupportCCT</p>
          <img className="principal-image" src="/images/doctor-checking-tomography-front-view.jpg" alt="Home Image" height={"350"} />
        </div> */}

        <div className="contenedor">
          <Image className="w-100" src="/images/doctor-checking-tomography-front-view.jpg" alt="Snow" width={1000} height={350} />
          <p className="centrao fs-1">SupportCCT</p>
        </div>


      </Row>

      <Container fluid className="my-2 ">
        <Row className="mb-3">
          <Col className="d-flex align-items-center justify-content-center">
            <IconBasicButton text="Diagnostico" src="/icons/diagnostic-icon.svg" click={() => router.push("/image_diagnosis")}/>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <IconBasicButton text="Historial de reportes" src="/icons/report-icon.svg" click={() => router.push("/history")}/>
          </Col>
        </Row>


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
                      <p className="text-justify" style={{ textAlign: "justify" }}>En la herramienta desarrollada se construyo un sistema de inteligencia artificial que permite clasificar distintos tipos de cancer de púlmon junto con pulmones sanos
                        todo esto a partir de imagenes de tomografias computarizadas de pecho. Las clases que puede clasificar el modelo son:
                      </p>
                      <ul style={{ listStyleType: "none" }}>
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
                      <p className="text-justify" style={{ textAlign: "justify" }} >
                        El modelo fue entrenado haciendo uso de redes neuronales convolucionales, se utilizaron varias tecnicas de preprocesamiento como: Escalado a grises, normalización de pixeles y estandarización de tamaño de imagen. Además de esto también se aplicaron tecnicas de aumentado de datos para generar más elementos con los cuales entrenar la inteligencia artificial.
                      </p>
                      <p className="fw-bold fs-3 text-center">
                        Selección del modelo
                      </p>
                      <p className="text-justify" style={{ textAlign: "justify" }}>
                        Para la selección del modelo se dividio la información en tres subconjuntos. Un subconjunto de entrenamiento que conformaba aproximadamente el 70% de toda
                        la información, un subconjunto conformado a partir del de entrenamiento denominado subconjunto de validación que tomaría el 10% de los datos de entrenamiento para calcular algunas metricas con el fin de
                        calcular el valor de la función de perdida y el accuracy por cada epoca de entrenamiento y a partir de esta información guardar el modelo que
                        ofreciera los mejores resultados y un subconjunto de prueba con el cual se evaluaría la eficacia del modelo. También se determinaron varias metricas que serían utilizadas con el fin
                        de a partir de ellas escoger el modelo final que se utilizaría. Las metricas que se tuvieron en cuenta para la medición del desempeño del modelo de clasificación fueron:
                      </p>
                      <ul>
                        <li>Accuracy - sobre los datos de validación</li>
                        <li>F1 Score</li>
                        <li>Recall</li>
                        <li>Precision</li>
                        <li>Matriz de confusión</li>
                        <li>AUC (Area Under the Curve) - Esta metrica se calculo aplicando una estrategia de tipo OvR </li>
                      </ul>

                      <p style={{ textAlign: "justify" }}>
                        El modelo finalmente escogido lo fue debido a su superior desempeño con respecto a los otros con los que se le comparo. Los resultados que este demostro en las distintas metricas fueron:
                      </p>
                      <ul>
                        <li>F1 Score: <strong>0.77</strong></li>
                        <li>Recall: <strong>0.77</strong></li>
                        <li>Precision <strong>0.8</strong></li>
                        <li className="mb-3">
                          <Row>
                            <Col>
                              Matriz de confusión
                            </Col>
                            <Row className="justify-content-left">
                              <img src={"/images/conf_matrix.png"} alt={"Matriz de confusión"} style={{ height: "188px", width: "560px" }} />
                            </Row>
                          </Row>
                        </li>
                      </ul>
                      <p className="fs-3 fw-bold text-center" style={{ textAlign: "justify" }}>Configuración del modelo escogido</p>
                      <p>El modelo escogido fue entrenado durante 2000 epocas. Tomando aproximadamente 45 minutos el entrenamiento del mismo,
                        se utilizo una estructura de capas en la red neuronal que se devidia en 3 etapas. Una para el pre procesamiento y aumentado, otra para la convolución
                        y una última de clasificación. Para la ejecución del modelo se hizo uso de la libreria tensorflow y keras. El optimizador utilizado para el entrenamiento fue Adam y
                        la función de perdida utilizada fue &quot;Sparse categorical crossentropy&quot;.
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
