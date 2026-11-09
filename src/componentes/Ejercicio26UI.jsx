// src/componentes/Ejercicio26UI.jsx
import { useState } from "react";
import { calcularGeometriaCirculo, metadataEjercicio26 } from "../ejercicios/ejercicio26";

export function Ejercicio26UI() {
  const [radio, setRadio] = useState("5");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularGeometriaCirculo(radio);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 26: {metadataEjercicio26.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio26.descripcion}</p>

      {/* Entrada */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Radio (r):</label>
        <input
          type="number"
          step="any"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
          style={{ width: "100%", maxWidth: "200px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
        />
      </div>

      {/* Resultados */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Longitud (2πr)</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#2196f3" }}>{resultado.longitud} u</h3>
            </div>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Área (πr²)</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.area} u²</h3>
            </div>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Volumen (⁴/₃πr³)</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>{resultado.volumen} u³</h3>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setVerCodigo(!verCodigo)}
        style={{ marginTop: "16px", padding: "8px 14px", cursor: "pointer", background: "#333", color: "#fff", border: "1px solid #555", borderRadius: "4px" }}
      >
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre style={{ background: "#121212", color: "#d4d4d4", padding: "12px", borderRadius: "6px", overflowX: "auto", fontSize: "14px", marginTop: "12px", border: "1px solid #333" }}>
          <code>{metadataEjercicio26.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}