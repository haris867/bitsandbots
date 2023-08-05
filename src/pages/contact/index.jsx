import { MainHeading } from "../../components/commonStyles/headings";
import { Container, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/commonStyles/buttons";
import {
  FormInput,
  FormLabel,
  FormTextarea,
} from "../../components/commonStyles/inputs";
import useAuthentication from "../../hooks/useAuth";
import useSendData from "../../hooks/api/sendData";
import { useState, useEffect } from "react";
import { load } from "../../hooks/storage";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  useAuthentication();

  const { register, handleSubmit, reset } = useForm();

  const { sendData, isLoading, isError } = useSendData();

  const loggedInUser = load("loggedInUser");

  const loggedInUserData = JSON.parse(loggedInUser);

  const [contactFormMessage, setContactFormMessage] = useState("");

  async function onContactSubmit(contact) {
    const url =
      "https://qg8g236v.api.sanity.io/v2021-10-21/data/mutate/production";
    const method = "POST";
    const data = {
      mutations: [
        {
          create: {
            _type: "contact",
            name: loggedInUserData.name,
            email: loggedInUserData.email,
            subject: contact.subject,
            message: contact.message,
          },
        },
      ],
    };

    const result = await sendData(data, url, method);

    if (result.error && result.error.length > 0) {
      setContactFormMessage(`${result.error}: ${result.message}`);
    } else if (result) {
      reset();
      setContactFormMessage("Form submitted successfully!");
    }
  }

  useEffect(() => {
    if (isLoading) {
      setContactFormMessage("Submitting form...");
    } else if (isError) {
      setContactFormMessage("Something went wrong. Please try again later.");
    }
  }, [isLoading, isError]);

  return (
    <Container>
      <Col
        xs={10}
        md={11}
        className="d-flex justify-content-between align-items-center mt-3 mb-3 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-0">Contact</MainHeading>
      </Col>
      <Helmet>
        <title>Bits & Bots | Contact</title>
      </Helmet>
      <Col xs={10} md={8} lg={6} className="mx-auto">
        <div className="fs-6 fw-bold text-center">{contactFormMessage}</div>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit(onContactSubmit)}
        >
          <FormLabel className="mb-1" htmlFor="subject">
            Subject
          </FormLabel>
          <FormInput
            className="mb-2"
            type="text"
            placeholder="Your subject"
            {...register("subject")}
            required={true}
            title="The name must be minimum 5 characters long"
            minLength={5}
          />
          <FormLabel className="mb-1" htmlFor="message">
            Your message
          </FormLabel>
          <FormTextarea
            className="mb-2"
            placeholder="Your message"
            {...register("message")}
            required={true}
            minLength="10"
            title="The message must be minimum 10 characters long"
          />
          <PrimaryButton className="mt-2 my-4" type="submit">
            SUBMIT
          </PrimaryButton>
        </form>
      </Col>
    </Container>
  );
}
