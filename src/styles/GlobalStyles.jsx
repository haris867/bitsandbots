import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    --color-primary: #0047A0;
    --color-secondary: #F5F5F5;
    --color-tertiary: #0F0F0F;
    --color-quaternary: #C7CFE6;
}
body {
  background-color: var(--color-secondary);
  color: var(--color-tertiary);
}
`;

export default GlobalStyle;
