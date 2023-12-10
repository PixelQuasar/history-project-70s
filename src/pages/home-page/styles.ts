import styled from "styled-components";
import "@fontsource/roboto/900.css";
import { staticTheme } from "../../styles/theme.ts";

export const HomePageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${staticTheme.ayy4.pale};
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
  z-index: 5;
  margin-top: 25vh;
`;

export const Header = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 10em;
  color: ${staticTheme.ayy4.red};
  font-weight: bold;
  letter-spacing: -8px;
  line-height: 80%;
`;

export const SubHeader = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 4em;
  font-weight: 60;
  color: ${staticTheme.ayy4.dark};
  letter-spacing: 16px;
`;
