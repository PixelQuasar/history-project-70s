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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  margin-top: 35vh;
`;

export const Header = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 10em;
  color: ${staticTheme.ayy4.red};
  font-weight: bold;
  letter-spacing: -8px;
  line-height: 80%;
  @media (max-width: 1400px) {
    font-size: 8em;
    letter-spacing: -7px;
  }
  @media (max-width: 1000px) {
    font-size: 7em;
    letter-spacing: -5px;
  }
  @media (max-width: 800px) {
    font-size: 5.5em;
    letter-spacing: -3px;
  }
  @media (max-width: 700px) {
    font-size: 4em;
    letter-spacing: -1px;
  }
`;

export const SubHeader = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 4em;
  font-weight: 60;
  color: ${staticTheme.ayy4.dark};
  text-align: center;
  letter-spacing: 16px;
  @media (max-width: 1400px) {
    font-size: 3em;
  }
  @media (max-width: 1000px) {
    font-size: 2em;
  }
  @media (max-width: 800px) {
    font-size: 1em;
  }
`;
