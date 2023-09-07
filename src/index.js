import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Pages/Main/Main";
import Students from "./Pages/Students/Students";
import Staff from "./Pages/Staff/Staff";
import Persons from "./Pages/Persons/Persons";
import ErrorPage from "./Pages/Error/Error";
import './global.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from "react-router-dom";

const Root = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="students" element={<Students />} />
      <Route path="staff" element={<Staff />} />
      <Route path="persons" element={<Persons />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
