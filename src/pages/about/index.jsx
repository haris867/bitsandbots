import { MainHeading } from "../../components/commonStyles/headings";
import { Container, Col, Row } from "react-bootstrap";
import * as S from "./index.styles";
import useAuthentication from "../../hooks/useAuth";
import { Helmet } from "react-helmet";

export default function About() {
  useAuthentication();
  return (
    <Container>
      <Col
        xs={12}
        className="d-flex justify-content-between align-items-center my-3 mx-auto"
      >
        <MainHeading className="fs-2 fw-bold mb-0">About</MainHeading>
        <Helmet>
          <title>Bits & Bots | About</title>
        </Helmet>
      </Col>
      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className=" mb-4">
          <S.AboutCard>
            <div className="d-flex align-items-center">
              <S.AboutCardTitle>About Us</S.AboutCardTitle>
              <S.AboutCardImage src="/images/product-image.jpg" />
            </div>

            <S.AboutCardText>
              Welcome to Bits & Bots, the vibrant universe for gamers where the
              most fantastic, compelling, and high-quality video games are just
              a click away. Founded in 2023, we are an online video game store
              committed to fueling the passion of the gaming community with a
              rich variety of games to choose from.
            </S.AboutCardText>
            <S.AboutCardText>
              One key feature of Bits & Bots is our members-only access. We have
              created an exclusive community of registered users, providing a
              secure and dedicated platform for browsing and purchasing your
              favorite games. Registration also allows us to tailor
              recommendations based on your gaming preferences, bringing you one
              step closer to your next gaming adventure.
            </S.AboutCardText>
          </S.AboutCard>
        </Col>
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className=" mb-4">
          <S.AboutCard>
            <div className="d-flex align-items-center">
              <S.AboutCardTitle>Our mission</S.AboutCardTitle>
              <S.AboutCardImage src="/images/product-image2.jpg" />
            </div>
            <S.AboutCardText>
              At Bits & Bots, our mission is simple. We aim to provide an
              unrivaled experience to our members, offering an extensive catalog
              of games that cater to every taste, genre, and platform. Whether
              you're a dedicated fan of the classics or an enthusiast looking
              for the next big thing in gaming, we have something for everyone.
            </S.AboutCardText>
            <S.AboutCardText>
              Our team comprises passionate and seasoned gamers just like you.
              This fuels our drive to maintain a user-centric approach in our
              offerings, ensuring we meet your evolving gaming needs. We are
              dedicated to creating a reliable, seamless, and exciting shopping
              experience that goes beyond just a transaction.
            </S.AboutCardText>
          </S.AboutCard>
        </Col>
      </Row>
    </Container>
  );
}
