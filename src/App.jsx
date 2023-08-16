import Login from "./pages/Login";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoInternetConnection from "./pages/NoInternet";
import ChequeDeposit from "./pages/ChequeDeposit/ChequeDeposit";
import ConfirmDetails from "./pages/ConfirmDetails/ConfirmDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "/deposit-cheque",
    element: <ChequeDeposit />,
  },
  {
    path: "/confirm",
    element: <ConfirmDetails />,
  },
]);

export default function App() {
  return (
    <div>
      <NoInternetConnection>
        <RouterProvider router={router} />
      </NoInternetConnection>
    </div>
  );
}
