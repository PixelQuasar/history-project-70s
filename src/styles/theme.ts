import { DefaultTheme } from "styled-components";

const mainPalette = {
  bgPrimary: "#111111",
  redPrimary: "#a73e2c",
  redDark: "#732820",
  redPale: "#e69552",
  yellowPrimary: "#deaa31",
  yellowDark: "#c58129",
  yellowSaturated: "#ffd64a",
  yellowPale: "#ffda94",
  whitePrimary: "",
  whitePale: "",
  whiteDark: "",
  white: "#ffffff",
  black: "#000000",
  darkPrimary: "#090706",
  darkSecondary: "#1d1613",
  darkPale: "#332923",
  bgSecondary: "#1D1D20",
  textPrimary: "#FFFFFF",
  textSecondary: "#AAAAAA",
  accentOne: "#9486FC",
  accentTwo: "#E186FC",
  accentThree: "#86C3FC",
  error: "#ffffff",
  warning: "#ffffff",
  success: "#ffffff",
  neutralSecondary: "#ffffff",
  ayy4: {
    dark: "#00303b",
    pale: "#f1f2da",
    red: "#ff7777",
    yellow: "#ffce96",
    redPale: "#ee8888",
  },
  transparent: (value: number) => `rgba(0, 0, 0, ${value})`,
};

export const staticTheme = mainPalette;

const basicTheme: DefaultTheme = {
  colors: mainPalette,
};

export default basicTheme;
