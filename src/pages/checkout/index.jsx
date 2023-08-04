import { useState, useEffect } from "react";
import { MainHeading } from "../../components/commonStyles/headings";
import { Container, Card, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { PrimaryButton } from "../../components/commonStyles/buttons";
import { Link } from "react-router-dom";
import { load } from "../../hooks/storage";
import useAuthentication from "../../hooks/useAuth";
import { CheckoutCartContainer } from "../../components/checkoutCartContainer";
import { useForm } from "react-hook-form";

const CartContainerDiv = styled.div`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  font-family: "Play", sans-serif;
`;

export default function Checkout() {
  useAuthentication();

  const { register, handleSubmit } = useForm();

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
      <Col xs={12} md={8} lg={6} className="mx-auto">
        <CheckoutCartContainer gameList={gameList} setGameList={setGameList} />
      </Col>
    </Container>
  );
}
