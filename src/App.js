import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routerRoot";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { RouterNav } from "./RouterNav";

// import Button from "react-bootstrap/Button";

function App() {
  return (
    <div>
      <Header />
      <RouterNav />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
    </div>
  );
}

export default App;
