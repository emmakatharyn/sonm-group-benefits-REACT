import React from "react";

import Root from "./Root";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Contact from "./pages/Contact";

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
      <Route path='employees' element={<Employees />} />
      <Route path='employers' element={<Employers />} />
      <Route path='enrollment' element={<div>enrollment info</div>} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

function Employers() {
  return (
    <>
      <h4>Documents and Forms</h4>
      <ul>
        <li>item one</li>
        <li>item two</li>
        <li>item three</li>
        <li>item four</li>
      </ul>
    </>
  );
}

export default App;
