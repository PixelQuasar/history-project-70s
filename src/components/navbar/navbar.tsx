import { LinkLogo, NavbarItem, NavbarWrapper } from "./styles.ts";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <LinkLogo /> Главная
      </NavbarItem>
      <NavbarItem>
        <LinkLogo /> Рецензии
      </NavbarItem>
      <NavbarItem>
        <LinkLogo /> Интервью
      </NavbarItem>
    </NavbarWrapper>
  );
};
