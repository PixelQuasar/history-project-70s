import { LinkLogo, NavbarItem, NavbarWrapper } from "./styles.ts";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <NavbarItem>
        <LinkLogo /> Главная
      </NavbarItem>
      <NavbarItem>
        <LinkLogo /> Рецензии
      </NavbarItem>
      <NavbarItem onClick={() => navigate("/interview")}>
        <LinkLogo /> Интервью
      </NavbarItem>
    </NavbarWrapper>
  );
};
