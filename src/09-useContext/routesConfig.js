import { MainApp } from "./MainApp";
import { AboutPage, HomePage, LoginPage } from "./pages";
import ErrorPage from "./pages/ErrorPage";

 
export const routesConfig=[
    {
      path: "/",
      element: <MainApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "login",
          element: <LoginPage />
        },
        {
          path: "about",
          element: <AboutPage />,
      }
      ]
    },
  ];