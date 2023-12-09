import React from "react";

import Root from "./Root";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Employers from "./pages/Employers";
import Contact from "./pages/Contact";
import Enrollment from "./pages/Enrollment";
import StateAgencyEmployees from "./pages/StateAgencyEmployees";

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
      <Route
        path='admin-letters'
        element={<h1>AdministrativeLetters.html</h1>}
      />
      <Route
        path='domestic-partnership'
        element={
          <div>employerResourcesSub1.html (Domestic Partnership Forms)</div>
        }
      />
      <Route path='home' index element={<Home />} />
      <Route path='employees' element={<Employees />} />
      <Route path='employers' element={<Employers />} />
      <Route path='enrollment' element={<Enrollment />} />
      <Route path='contact' element={<Contact />} />
      <Route path='state-agency-employees' element={<StateAgencyEmployees />} />
      <Route
        path='qualifying-event'
        element={<div>employeeportalsub2 content here!!!! (QE)</div>}
      />
      <Route
        path='benefits-info'
        element={<div>Benefits Information Grid</div>}
      />

      <Route path='share' element={<div>employeePortalSub3 (SHARE)</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
