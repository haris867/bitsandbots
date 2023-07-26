import { styled } from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FormInput, FormLabel } from "../commonStyles/inputs";

export const AuthFormLabel = styled(FormLabel)`
  width: 80%;
`;
export const AuthFormInput = styled(FormInput)`
  width: 80%;
`;

export const AuthTabs = styled(Tabs)`
  border: solid 2px var(--color-quaternary);
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: var(--color-primary);
  border-radius: 5px;
`;
