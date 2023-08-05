import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../commonStyles/buttons";
import { remove } from "../../hooks/storage";
import { useForm } from "react-hook-form";
import { FormInput, FormLabel } from "../../components/commonStyles/inputs";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import useSendData from "../../hooks/api/sendData";
import { calculateTotalPrice } from "../../utils/helpers";
import {
  CartContainerDiv,
  CartGameContainer,
  TotalPriceContainer,
} from "../commonStyles/cart";

export function CheckoutCartContainer({ gameList = [], setGameList }) {
  const { sendData, isLoading, isError } = useSendData();
  const [formData, setFormData] = useState(null);
  const [orderFormMessage, setOrderFormMessage] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register: registerCheckout,
    handleSubmit: handleSubmitCheckout,
    reset: resetCheckout,
  } = useForm();

  function handleFormSubmit(data) {
    setFormData(data);
    handleShow();
  }

  async function onOrderSubmit() {
    if (!formData) return;

    const url =
      "https://qg8g236v.api.sanity.io/v2021-10-21/data/mutate/production";
    const method = "POST";
    const orderData = {
      mutations: [
        {
          create: {
            _type: "orders",
            name: formData.name,
            address: formData.address,
            zip: formData.zip,
            city: formData.city,
            totalAmount: calculateTotalPrice(gameList),
            gamesOrdered: gameList.map((game) => ({
              _type: "reference",
              _key: game._id,
              _ref: game._id,
            })),
          },
        },
      ],
    };

    const result = await sendData(orderData, url, method);

    if (result.error && result.error.length > 0) {
      setOrderFormMessage(`${result.error}: ${result.message}`);
    } else if (result) {
      remove("cart");
      resetCheckout();
      setOrderFormMessage("Order submitted successfully!");
      handleClose();
      setTimeout(() => {
        window.location.href = `/games`;
      }, 2000);
    }
  }

  useEffect(() => {
    if (isLoading) {
      setOrderFormMessage("Placing order...");
    } else if (isError) {
      setOrderFormMessage("Something went wrong. Please try again later.");
    }
  }, [isLoading, isError]);

  return (
    <div>
      {gameList.length > 0 ? (
        <div className="d-flex flex-column">
          <CartContainerDiv className="d-flex flex-wrap justify-content-center p-3 pb-2">
            {gameList.map((game) => (
              <CartGameContainer
                xs={12}
                sm={10}
                className="d-flex m-2"
                key={game._id}
              >
                <Col xs={1} className="m-2 d-flex">
                  <img
                    src={game.imageUrl}
                    alt={game.name}
                    className="w-100 object-fit-contain"
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
              </CartGameContainer>
            ))}
            <div className="d-flex justify-content-between">
              <div>
                Total items in cart:{" "}
                <span className="fw-bold">{gameList.length}</span>
              </div>
            </div>
          </CartContainerDiv>
          <TotalPriceContainer>
            <div className="d-flex justify-content-between">
              <div>YOUR TOTAL IS: </div>
              <div>NOK {calculateTotalPrice(gameList)}</div>
            </div>
          </TotalPriceContainer>
          <Col xs={12} className="mx-auto">
            <div className="fs-6 fw-bold text-center">{orderFormMessage}</div>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmitCheckout(handleFormSubmit)}
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
                title="The name must be minimum 5 characters long"
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
                title="The address must be minimum 5 characters long"
                minLength={5}
              />
              <div className="d-flex justify-content-between w-100">
                <Col xs={6} className="pe-2">
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
                <Col xs={6} className="ps-2">
                  <FormLabel className="mb-1" htmlFor="city">
                    City
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your city"
                    {...registerCheckout("city")}
                    required={true}
                    title="The city must be minimum 4 characters long"
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
                title="The card number must be minimum 15 digits long"
                minLength={15}
                maxLength={16}
                pattern="[0-9]{15,}"
              />
              <div className="d-flex justify-content-between w-100">
                <Col xs={6} className="pe-2">
                  <FormLabel className="mb-1" htmlFor="expiryDate">
                    Expiry date
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="MM/YY"
                    {...registerCheckout("expiryDate")}
                    required={true}
                    title="The expiry date must be in MM/YY format"
                    pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  />
                </Col>
                <Col xs={6} className="ps-2">
                  <FormLabel className="mb-1" htmlFor="cvc">
                    CVC
                  </FormLabel>
                  <FormInput
                    className="mb-2"
                    type="text"
                    placeholder="Your CVC"
                    {...registerCheckout("cvc")}
                    required={true}
                    title="The CVC number must be 3 digits long"
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
              <Modal.Body className="text-center fw-bold">
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
