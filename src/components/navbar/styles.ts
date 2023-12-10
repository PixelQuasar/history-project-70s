import styled from "styled-components";
import logo from "../../assets/images/external-link.png";
import { staticTheme } from "../../styles/theme.ts";

export const NavbarWrapper = styled.div`
  display: flex;
  gap: 64px;
  margin-top: 32px;
`;

export const NavbarItem = styled.div`
  display: flex;
  color: ${staticTheme.ayy4.dark};
  font-family: "Courier New";
  font-weight: bold;
  opacity: 0.7;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
`;

export const LinkLogo = styled.div`
  background-image: url("${logo}");
  width: 24px;
  height: 24px;
  background-size: cover;
`;
