// src/App.jsx
import { Ejercicio01UI } from "./componentes/Ejercicio01UI";
import { Ejercicio02UI } from "./componentes/Ejercicio02UI";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Catálogo de Ejercicios C# en React</h1>
      <Ejercicio01UI />
      <Ejercicio02UI />
    </div>
  );
}

export default App;