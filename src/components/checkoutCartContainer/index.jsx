import styled from "styled-components";
import { Container, Card, Col, Row } from "react-bootstrap";
import { TiDelete, TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../commonStyles/buttons";
import { remove, save } from "../../hooks/storage";
import { useForm } from "react-hook-form";
import {
  FormInput,
  FormLabel,
  FormTextarea,
} from "../../components/commonStyles/inputs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const CartContainerDiv = styled.div`
  background-color: var(--color-quaternary);
  border-radius: 5px;
  font-family: "Play", sans-serif;
`;

const RatingIcon = styled(TiStar)`
  fill: var(--color-primary) !important;
  font-size: calc(1.4rem + 0.4vw) !important;
`;

const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Play", sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 0.3vw);
  margin: 10px 0;
`;

export function CheckoutCartContainer({ gameList = [], setGameList }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function calculateTotalPrice() {
    return gameList.reduce((total, game) => total + game.price, 0);
  }

  const { register: registerCheckout, handleSubmit: handleSubmitCheckout } =
    useForm();

  function onOrderSubmit(data) {
    remove("cart");
    window.location.href = `/games`;
  }

  return (
    <div>
      {gameList.length > 0 ? (
        <div className="d-flex flex-column">
          <CartContainerDiv className="d-flex flex-wrap justify-content-center p-3">
            {gameList.map((game) => (
              <Col
                xs={12}
                sm={10}
                className="d-flex m-2"
                style={{ backgroundColor: "var(--color-secondary)" }}
                key={game._id}
              >
                <Col xs={1} className="m-2 d-flex">
                  <img
                    src={game.imageUrl}
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="w-100"
                  />
                </Col>
                <Col
                  xs={10}
                  className="my-2 fw-bold d-flex justify-content-between align-items-center"
                >
                  <p className="m-0">{game.name}</p>
                  <div className="d-flex justify-content-between">
                    <p className="m-0">NOK {game.price}</p>
                  </div>
                </Col>
              </Col>
            ))}
            <div className="d-flex justify-content-between">
              <div>Total items in cart: {gameList.length}</div>
            </div>
          </CartContainerDiv>
          <TotalPriceContainer>
            <div className="d-flex justify-content-between">
              <div>YOUR TOTAL IS: </div>
              <div>NOK {calculateTotalPrice()}</div>
            </div>
          </TotalPriceContainer>
          <Col xs={12} className="mx-auto">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmitCheckout(handleShow)}
            >
              <FormLabel className="mb-1" htmlFor="name">
                Full name
              </FormLabel>
              <FormInput
                className="mb-2"
                type="text"
                placeholder="Your full name"
                {...registerCheckout("name")}
                required={true}
                title="The name value must be minimum 5 characters long"
                minLength={5}
              />
              <FormLabel className="mb-1" htmlFor="address">
                Address
              </FormLabel>
              <FormInput
                className="mb-2"
                type="text"
                placeholder="Your address"
                {...registerCheckout("address")}
                required={true}
                title="The name value must be minimum 5 characters long"
                minLength={5}
              />
              <div className="d-flex justify-content-between">
                <Col xs={5}>
                  <FormLabel className="mb-1" htmlFor="zip">
                    ZIP code
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your ZIP code"
                    {...registerCheckout("zip")}
                    required={true}
                    title="The ZIP code must be minimum 4 characters long"
                    minLength={4}
                  />
                </Col>
                <Col xs={5}>
                  <FormLabel className="mb-1" htmlFor="city">
                    City
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your city"
                    {...registerCheckout("city")}
                    required={true}
                    title="The city value must be minimum 4 characters long"
                    minLength={4}
                  />
                </Col>
              </div>
              <FormLabel className="mb-1" htmlFor="cardNumber">
                Card number
              </FormLabel>
              <FormInput
                className="mb-2"
                type="text"
                placeholder="Your card number"
                {...registerCheckout("cardNumber")}
                required={true}
                title="The card number value must be minimum 15 digits long"
                minLength={15}
                maxLength={16}
                pattern="[0-9]{15,}"
              />
              <div className="d-flex justify-content-between">
                <Col xs={5}>
                  <FormLabel className="mb-1" htmlFor="expiryDate">
                    Expiry date
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your expiry date"
                    {...registerCheckout("expiryDate")}
                    required={true}
                    title="The expiry date must be in MM/YY format"
                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  />
                </Col>
                <Col xs={5}>
                  <FormLabel className="mb-1" htmlFor="cvc">
                    CVC
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your CVC"
                    {...registerCheckout("cvc")}
                    required={true}
                    title="The CVC number must be minimum 3 digits long"
                    minLength={3}
                    maxLength={3}
                    pattern="[0-9]{3,}"
                  />
                </Col>
              </div>
              <PrimaryButton className="mt-2 my-4">PLACE ORDER</PrimaryButton>
            </form>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm payment</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-center">
                Click CONFIRM to place your order.
              </Modal.Body>
              <Modal.Footer className="d-block text-center">
                <PrimaryButton onClick={onOrderSubmit}>CONFIRM</PrimaryButton>
              </Modal.Footer>
            </Modal>
          </Col>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <CartContainerDiv className="p-4 my-3 text-center fs-5 fw-bold">
            YOUR CART IS EMPTY
          </CartContainerDiv>
          <Link to="/games" className="text-center">
            <PrimaryButton>BROWSE GAMES</PrimaryButton>
          </Link>
        </div>
      )}
    </div>
  );
}
