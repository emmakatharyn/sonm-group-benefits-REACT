import React from "react"
import { RouterProvider } from "react-router-dom";
import { router, pagesComponents } from "./routerRoot";
import logo from "./logo.png";
import "./App.css";

// import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

function Header() {
  return (
    <header className='container-lg'>
      <img src={logo} alt='State of New Mexico Seal' />
      <h1 className='display-5'>State of New Mexico | Group Benefits Plan</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <button
          class='navbar-toggler ms-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav'>
            {pagesComponents.map((page) => (
              <li class='nav-item'>
                <a class='nav-link' href={page.path}>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
