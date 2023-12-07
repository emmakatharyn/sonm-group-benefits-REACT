import React from "react";

import Root from "./Root";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Employers from "./pages/Employers";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enrollment";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
// import Button from "react-bootstrap/Button";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='home' index element={<Home />} />
      <Route path='/employees' element={<Employees />}></Route>
      <Route path='employers' element={<Employers />} />
      <Route path='enrollment' element={<Enrollment />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
