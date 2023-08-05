import { useState, useEffect } from "react";
import { MainHeading } from "../../components/commonStyles/headings";
import { Container, Col } from "react-bootstrap";
import { load } from "../../hooks/storage";
import useAuthentication from "../../hooks/useAuth";
import { CheckoutCartContainer } from "../../components/checkoutCartContainer";
import { Helmet } from "react-helmet-async";

export default function Checkout() {
  useAuthentication();

  const [gameList, setGameList] = useState(JSON.parse(load("cart")) || []);
  useEffect(() => {
    setGameList(JSON.parse(load("cart")) || []);
  }, []);
  return (
    <Container>
      <Col
        md={11}
        lg={8}
        className="d-flex justify-content-between align-items-center mt-3 mb-0 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-3">Checkout</MainHeading>
      </Col>
      <Helmet>
        <title>Bits & Bots | Checkout</title>
      </Helmet>
      <Col xs={12} md={8} lg={6} className="mx-auto">
        <CheckoutCartContainer gameList={gameList} setGameList={setGameList} />
      </Col>
    </Container>
  );
}
