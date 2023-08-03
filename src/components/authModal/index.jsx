import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import { styled } from "styled-components";
import * as S from "./index.styles";
import Tab from "react-bootstrap/Tab";
import { PrimaryButton } from "../commonStyles/buttons";
import { load, save } from "../../hooks/storage";

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
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    reset: resetLogin,
  } = useForm();
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    reset: resetRegister,
  } = useForm();

  const [activeTab, setActiveTab] = useState("login");
  const [loginFormMessage, setLoginFormMessage] = useState(false);
  const [registerFormValidated, setRegisterFormValidated] = useState(false);

  function onLoginSubmit(data) {
    let users = load("users");
    users = users ? JSON.parse(users) : [];

    const user = users.find(
      (user) =>
        user.email.toLowerCase() === data.email.toLowerCase() &&
        user.password === data.password
    );

    if (user) {
      save("loggedInUser", JSON.stringify(user));
      resetLogin();
      setLoginFormMessage("Logging in...");
      setTimeout(() => {
        window.location.href = `/games`;
      }, 1500);
    } else {
      setLoginFormMessage("Invalid email or password");
    }
  }
  function onRegisterSubmit(data) {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    var users = load("users");
    users = users ? JSON.parse(users) : [];

    console.log(users);

    users.push(newUser);

    save("users", JSON.stringify(users));
    resetRegister();
    setTimeout(() => {
      setActiveTab("login");
    }, 2000);
    setRegisterFormValidated(true);
  }

  return (
    <Row className="m-0">
      <AuthFormContainer xs={8} sm={6} md={4}>
        <S.AuthTabs
          activeKey={activeTab}
          onSelect={(t) => setActiveTab(t)}
          id="uncontrolled-tab-example"
          className="mb-2 auth-tabs"
        >
          <Tab eventKey="login" title="LOGIN">
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleLoginSubmit(onLoginSubmit)}
            >
              <div>{loginFormMessage}</div>
              {/* {loginFormValidated && <div>Logging in...</div>} */}
              <S.AuthFormLabel className="mb-1" htmlFor="email">
                Email
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="email"
                placeholder="Your email address"
                {...registerLogin("email")}
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
                {...registerLogin("password")}
                required={true}
                title="The password must be at least 8 characters"
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
              onSubmit={handleRegisterSubmit(onRegisterSubmit)}
            >
              {registerFormValidated && <div>Registered successfully!</div>}
              <S.AuthFormLabel className="mb-1" htmlFor="name">
                Full name
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="text"
                placeholder="Your full name"
                {...registerRegister("name")}
                required={true}
                minLength={5}
                title="The name must be at least 5 characters"
              />
              <S.AuthFormLabel className="mb-1" htmlFor="email">
                Email
              </S.AuthFormLabel>
              <S.AuthFormInput
                className="mb-2"
                type="email"
                placeholder="Your email"
                {...registerRegister("email")}
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
                {...registerRegister("password")}
                required={true}
                title="The password must be at least 8 characters"
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
