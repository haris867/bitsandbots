import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import * as S from "./index.styles";
import Tab from "react-bootstrap/Tab";
import { PrimaryButton } from "../commonStyles/buttons";

const AuthFormContainer = styled(Col)`
  min-height: 250px;
  //   min-width: 300px;
  //   max-width: 500px;
  background-color: var(--color-quaternary);
  margin: 50px auto;
  padding: 0;
  font-family: "Play", sans-serif;
  border-radius: 5px;
`;

export default function AuthModal() {
  const { register, handleSubmit } = useForm();

  function onLoginSubmit(data) {
    console.log(data);
  }
  function onRegisterSubmit(data) {
    console.log(data);
  }

  return (
    <Row className="m-0">
      <AuthFormContainer xs={8} sm={6} md={4}>
        <S.AuthTabs
          defaultActiveKey="login"
          id="uncontrolled-tab-example"
          className="mb-2 auth-tabs"
        >
          <Tab eventKey="login" title="LOGIN">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit(onLoginSubmit)}
            >
              <S.AuthFormLabel className="mb-1" htmlFor="email">
                Email
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="email"
                placeholder="Your email address"
                {...register("email")}
                required={true}
                // pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
                title="The email value must be a valid email"
              />
              <S.AuthFormLabel className="mb-1" htmlFor="password">
                Password
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="password"
                placeholder="Your password"
                {...register("password")}
                required={true}
                minLength="8"
              />
              <PrimaryButton className="mt-2 my-4" type="submit">
                LOG IN
              </PrimaryButton>
            </form>
          </Tab>
          <Tab eventKey="register" title="REGISTER">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit(onRegisterSubmit)}
            >
              <S.AuthFormLabel className="mb-1" htmlFor="name">
                Full name
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="text"
                placeholder="Your full name"
                {...register("name")}
                required={true}
                // pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
                title="The email value must be a valid email"
              />
              <S.AuthFormLabel className="mb-1" htmlFor="email">
                Email
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="email"
                placeholder="Your email"
                {...register("email")}
                required={true}
                // pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
                title="The email value must be a valid email"
              />
              <S.AuthFormLabel className="mb-1" htmlFor="password">
                Password
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="password"
                placeholder="Your password"
                {...register("password")}
                required={true}
                minLength="8"
              />
              <PrimaryButton className="mt-2 my-4" type="submit">
                REGISTER
              </PrimaryButton>
            </form>
          </Tab>
        </S.AuthTabs>
      </AuthFormContainer>
    </Row>
  );
}
