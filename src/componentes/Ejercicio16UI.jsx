// src/componentes/Ejercicio16UI.jsx
import { useState } from "react";
import { validarClavesAcceso, metadataEjercicio16 } from "../ejercicios/ejercicio16";

export function Ejercicio16UI() {
  const [c1, setC1] = useState("tienes");
  const [c2, setC2] = useState("que ser");
  const [c3, setC3] = useState("invitado");
  const [c4, setC4] = useState("para");
  const [c5, setC5] = useState("ingresar");

  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = validarClavesAcceso({ c1, c2, c3, c4, c5 });

  const autocompletarCorrecto = () => {
    setC1("tienes");
    setC2("que ser");
    setC3("invitado");
    setC4("para");
    setC5("ingresar");
  };

  const autocompletarIncorrecto = () => {
    setC1("tienes");
    setC2("que no ser");
    setC3("invitado");
    setC4("para");
    setC5("ingresar");
  };

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 16: {metadataEjercicio16.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio16.descripcion}</p>

      {/* Botones de prueba rápida */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button
          onClick={autocompletarCorrecto}
          style={{ padding: "6px 12px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem" }}
        >
          ✓ Cargar claves correctas
        </button>
        <button
          onClick={autocompletarIncorrecto}
          style={{ padding: "6px 12px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.85rem" }}
        >
          ✕ Cargar clave errónea
        </button>
      </div>

      {/* Formulario de las 5 Claves */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Clave 1:</label>
          <input
            type="text"
            value={c1}
            onChange={(e) => setC1(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Clave 2:</label>
          <input
            type="text"
            value={c2}
            onChange={(e) => setC2(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Clave 3:</label>
          <input
            type="text"
            value={c3}
            onChange={(e) => setC3(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Clave 4:</label>
          <input
            type="text"
            value={c4}
            onChange={(e) => setC4(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Clave 5:</label>
          <input
            type="text"
            value={c5}
            onChange={(e) => setC5(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Pantalla de Resultado de Acceso */}
      <div
        style={{
          padding: "16px",
          borderRadius: "6px",
          border: `1px solid ${resultado.accesoConcedido ? "#2d6a4f" : "#800606"}`,
          backgroundColor: resultado.accesoConcedido ? "#1b4332" : "#380d0d",
          textAlign: "center"
        }}
      >
        <h3 style={{ margin: 0, color: resultado.accesoConcedido ? "#a3cfbb" : "#ff9999", fontSize: "1.3rem" }}>
          {resultado.mensaje}
        </h3>
        {!resultado.accesoConcedido && (
          <p style={{ margin: "6px 0 0 0", fontSize: "0.85rem", color: "#ffcccc" }}>
            Fallo detectado en la clave #{resultado.pasoFallido}
          </p>
        )}
      </div>

      <button
        onClick={() => setVerCodigo(!verCodigo)}
        style={{
          marginTop: "16px",
          padding: "8px 14px",
          cursor: "pointer",
          background: "#333",
          color: "#fff",
          border: "1px solid #555",
          borderRadius: "4px"
        }}
      >
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre
          style={{
            background: "#121212",
            color: "#d4d4d4",
            padding: "12px",
            borderRadius: "6px",
            overflowX: "auto",
            fontSize: "14px",
            marginTop: "12px",
            border: "1px solid #333"
          }}
        >
          <code>{metadataEjercicio16.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}