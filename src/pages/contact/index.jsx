import {
  MainHeading,
  MainHeadingContainer,
} from "../../components/commonStyles/headings";
import { Container, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/commonStyles/buttons";
import {
  FormInput,
  FormLabel,
  FormTextarea,
} from "../../components/commonStyles/inputs";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  function onContactSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Col
        xs={10}
        md={11}
        className="d-flex justify-content-between align-items-center mt-3 mb-3 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-0">Contact</MainHeading>
      </Col>
      <Col xs={10} md={8} lg={6} className="mx-auto">
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={handleSubmit(onContactSubmit)}
        >
          <FormLabel className="mb-1" htmlFor="name">
            Full name
          </FormLabel>
          <FormInput
            className="mb-2"
            type="text"
            placeholder="Your full name"
            {...register("name")}
            required={true}
            // pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
            title="The name value must be minimum 2 characters long"
          />
          <FormLabel className="mb-1" htmlFor="subject">
            Subject
          </FormLabel>
          <FormInput
            className="mb-2"
            type="text"
            placeholder="Your subject"
            {...register("subject")}
            required={true}
            title="The name value must be minimum 5 characters long"
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
          />
          <PrimaryButton className="mt-2 my-4" type="submit">
            SUBMIT
          </PrimaryButton>
        </form>
      </Col>
    </Container>
  );
}
