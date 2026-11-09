// src/componentes/Ejercicio24UI.jsx
import { useState } from "react";
import { calcularAreaTriangulo, metadataEjercicio24 } from "../ejercicios/ejercicio24";

export function Ejercicio24UI() {
  const [ladoA, setLadoA] = useState("5");
  const [ladoB, setLadoB] = useState("6");
  const [ladoC, setLadoC] = useState("7");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularAreaTriangulo(ladoA, ladoB, ladoC);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 24: {metadataEjercicio24.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio24.descripcion}</p>

      {/* Inputs para los tres lados */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Lado A:</label>
          <input
            type="number"
            step="any"
            value={ladoA}
            onChange={(e) => setLadoA(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Lado B:</label>
          <input
            type="number"
            step="any"
            value={ladoB}
            onChange={(e) => setLadoB(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Lado C:</label>
          <input
            type="number"
            step="any"
            value={ladoC}
            onChange={(e) => setLadoC(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Resultados */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Semiperímetro (s)</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>{resultado.semiperimetro}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Área del Triángulo</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50", fontSize: "1.4rem" }}>{resultado.area} u²</h3>
              </div>
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
          <code>{metadataEjercicio24.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}