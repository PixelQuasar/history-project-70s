import { LinkLogo, NavbarItem, NavbarWrapper } from "./styles.ts";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarWrapper>
      <NavbarItem onClick={() => navigate("/")}>
        <LinkLogo /> Главная
      </NavbarItem>
      <NavbarItem onClick={() => navigate("/quotes")}>
        <LinkLogo /> Рецензии
      </NavbarItem>
      <NavbarItem onClick={() => navigate("/research")}>
        <LinkLogo /> Интервью
      </NavbarItem>
    </NavbarWrapper>
  );
};
