import { createBrowserRouter } from "react-router-dom";

export const pagesComponents = [
  { path: "HOME", element: <div>HOME</div> },
  {
    path: "STAY WELL HEALTH CENTER",
    element: <div>STAY WELL HEALTH CENTER</div>,
  },
  { path: "EMPLOYEE RESOURCES", element: <div>EMPLOYEE RESOURCES</div> },
  { path: "EMPLOYER RESOURCES", element: <div>EMPLOYER RESOURCES</div> },
  { path: "ENROLL HERE", element: <div>ENROLL HERE</div> },
  { path: "CONTACT US", element: <div>CONTACT US</div> },
];

export const router = createBrowserRouter(pagesComponents);
