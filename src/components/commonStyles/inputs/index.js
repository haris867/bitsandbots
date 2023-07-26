import styled from "styled-components";

export const FormLabel = styled.label`
  font-size: calc(1rem + 0.5vw) !important;
  width: 100% !important;
  font-family: "Play", sans-serif;
  font-weight: bold !important;
`;
export const FormInput = styled.input`
  height: calc(2rem + 0.8vw) !important;
  color: var(--color-tertiary) !important;
  background: var(--color-secondary) !important;
  border: 2px solid var(--color-primary) !important;
  outline: none !important;
  width: 100% !important;
  font-family: "Play", sans-serif;
  &::placeholder {
    font-size: calc(0.8rem + 0.5vw) !important;
    font-weight: bold !important;
  }
`;
export const FormTextarea = styled.textarea`
  height: calc(4.5rem + 1.7vw) !important;
  font-family: "Play", sans-serif;
  width: 100% !important;
  background: var(--color-secondary) !important;
  border: 2px solid var(--color-primary) !important;
  outline: none !important;
  &::placeholder {
    font-size: calc(0.8rem + 0.5vw) !important;
    font-weight: bold !important;
  }
`;
