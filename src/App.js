import React from "react";
import { Container } from "reactstrap";
import Formulario from "./Formulario";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container className="themed-container" fluid="lg">
        <Formulario />
      </Container>
    </div>
  );
}
