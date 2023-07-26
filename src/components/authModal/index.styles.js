import { styled } from "styled-components";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const FormLabel = styled.label`
  font-size: calc(1rem + 0.5vw) !important;
  width: 80%;
`;
export const FormInput = styled.input`
  height: calc(2rem + 0.8vw) !important;
  color: var(--color-tertiary) !important;
  background: var(--color-secondary) !important;
  border: 2px solid var(--color-primary) !important;
  outline: none !important;
  width: 80%;
  &::placeholder {
    font-size: calc(0.8rem + 0.5vw) !important;
    font-weight: bold !important;
  }
`;
export const FormTextarea = styled.textarea`
  height: calc(4.5rem + 0.7vw) !important;
`;

export const AuthTabs = styled(Tabs)`
  border: solid 2px var(--color-quaternary);
  padding: 0;
  display: flex;
  justify-content: space-around;
  background: var(--color-primary);
  border-radius: 5px;
`;
