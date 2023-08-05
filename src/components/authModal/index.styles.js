import { styled } from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import { Col } from "react-bootstrap";
import { FormInput, FormLabel } from "../commonStyles/inputs";

export const AuthFormLabel = styled(FormLabel)`
  width: 80% !important;
`;
export const AuthFormInput = styled(FormInput)`
  width: 80% !important;
`;

export const AuthTabs = styled(Tabs)`
  border: solid 2px var(--color-quaternary);
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: var(--color-primary);
  border-radius: 5px;
`;

export const AuthFormContainer = styled(Col)`
  min-height: 250px;
  background-color: var(--color-quaternary);
  margin: 50px auto;
  padding: 0;
  font-family: "Play", sans-serif;
  border-radius: 5px;
`;
