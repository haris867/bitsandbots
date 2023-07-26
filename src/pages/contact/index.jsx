import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";
import { Container, Card, Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Col
        md={11}
        className="d-flex justify-content-between align-items-center mt-3 mb-0 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-0">Contact Us</MainHeading>
      </Col>
    </Container>
  );
}
