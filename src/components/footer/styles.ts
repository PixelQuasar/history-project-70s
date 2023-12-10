import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  padding: 64px;
  box-sizing: border-box;
  z-index: 10;
`;

export const FooterNavbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterNavbarItem = styled.div`
  cursor: pointer;
  color: #ffffff;
  transition: 0.3s all;
  opacity: 0.8;
  font-size: 1.2em;
  width: fit-content;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
