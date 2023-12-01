import { createBrowserRouter } from "react-router-dom";

export const pagesComponents = [
  {
    name: "Home",
    path: "HOME",
    element: <div>HOME</div>,
  },
  {
    name: "Stay Well Health Center",
    path: "https://healthcenters.proactive-md.com/state-of-new-mexico/stay-well-health-center-santa-fe/",
    element: <div>STAY WELL HEALTH CENTER</div>,
  },
  {
    name: "Employee Resources",
    path: "employeePortal",
    element: <div>EMPLOYEE RESOURCES</div>,
  },
  {
    name: "Employer Resources",
    path: "employerResources",
    element: <div>EMPLOYER RESOURCES</div>,
  },
  {
    name: "Enroll Here",
    path: "enrollmentInformation",
    element: <div>ENROLL HERE</div>,
  },
  {
    name: "Contact Us",
    path: "#contact-section",
    element: <div>CONTACT US</div>,
  },
];

export const router = createBrowserRouter(pagesComponents);
