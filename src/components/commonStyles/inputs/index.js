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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
`;
export const FormTextarea = styled.textarea`
  height: calc(6.5rem + 1.7vw) !important;
  font-family: "Play", sans-serif;
  width: 100% !important;
  background: var(--color-secondary) !important;
  border: 2px solid var(--color-primary) !important;
  outline: none !important;
  &::placeholder {
    font-size: calc(0.8rem + 0.5vw) !important;
    font-weight: bold !important;
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
`;

export const SearchInput = styled.input`
  flex: 1 0 100px;
  max-width: 500px;
  font-family: "Roboto Mono", sans-serif;
  min-height: calc(2.5rem + 0.7vw) !important;
  max-height: calc(2.5rem + 0.7vw) !important;
  outline: none !important;
  &::placeholder {
    font-size: calc(0.8rem + 0.5vw) !important;
    font-weight: bold !important;
  }
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
`;
