import styled from "styled-components";

export const PrimaryButton = styled.button`
  border-radius: 5px;
  border: none;
  background: var(--color-primary);
  color: white;
  align-self: center;
  font-weight: 600;
  height: 38px;
  width: 100%;
  max-width: 180px;
  font-size: calc(0.9rem + 0.1vw);
  font-family: "Play", sans-serif;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: var(--color-secondary);
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
`;

export const GenreButton = styled(SecondaryButton)`
  flex: 1 0 80px;
`;
export const LogOutButton = styled(SecondaryButton)`
  flex: 1 0 120px;
`;
