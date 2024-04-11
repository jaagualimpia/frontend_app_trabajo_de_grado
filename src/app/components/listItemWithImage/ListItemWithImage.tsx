import { Row, Col } from "react-bootstrap"

interface params {
    label: string
    imageSrc: string
    alt: string
}

export const ListItemWithImage = ({ label, imageSrc , alt}: params) => {
    return (
        <li className="mb-3">
            <Row className="text-center">
                <Col className="fw-bold my-2">
                    {label}
                </Col>
                <Row className="justify-content-center">
                    <img src={imageSrc} alt={alt} style={{height: "250px", width: "250px"}}/>
                </Row>
            </Row>
        </li>
    )
}