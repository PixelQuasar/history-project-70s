import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import router from "./router";
import { staticTheme } from "./styles/theme.ts";

const AppWrapper = styled.div`
  background-color: ${staticTheme.ayy4.pale};
  color: ${staticTheme.black};
  min-height: 100vh;
`;

export default function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
}
