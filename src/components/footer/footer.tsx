import { FooterNavbar, FooterNavbarItem, FooterWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <FooterNavbar>
        <FooterNavbarItem onClick={() => navigate("/")}>
          Главная
        </FooterNavbarItem>
        <FooterNavbarItem onClick={() => navigate("/research")}>
          Интевью
        </FooterNavbarItem>
        <FooterNavbarItem>Рецензии</FooterNavbarItem>
      </FooterNavbar>
    </FooterWrapper>
  );
}
