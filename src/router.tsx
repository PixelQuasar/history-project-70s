import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page";
import RouterWrapper from "./components/router-wrapper/router-wrapper";
import InterviewPage from "./pages/interview";
import { InterviewBlock } from "./pages/interview/components/interview-block/interview-block.tsx";
import { QuotesPage } from "./pages/quotes-page/quotes-page.tsx";

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
        path: "research",
        element: <InterviewPage />,
      },
      {
        path: "interview/:id",
        element: <InterviewBlock />,
      },
      {
        path: "quotes",
        element: <QuotesPage />,
      },
    ],
  },
]);

export default router;
