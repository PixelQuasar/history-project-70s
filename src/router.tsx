import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page";
import RouterWrapper from "./components/router-wrapper/router-wrapper";
import InterviewPage from "./pages/interview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterWrapper />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "interview",
        element: <InterviewPage />,
      },
    ],
  },
]);

export default router;
