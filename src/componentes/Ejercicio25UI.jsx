// src/componentes/Ejercicio25UI.jsx
import { useState } from "react";
import { calcularHipotenusa, metadataEjercicio25 } from "../ejercicios/ejercicio25";

export function Ejercicio25UI() {
  const [catetoA, setCatetoA] = useState("3");
  const [catetoB, setCatetoB] = useState("4");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularHipotenusa(catetoA, catetoB);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 25: {metadataEjercicio25.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio25.descripcion}</p>

      {/* Entradas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Cateto A:</label>
          <input
            type="number"
            step="any"
            value={catetoA}
            onChange={(e) => setCatetoA(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Cateto B:</label>
          <input
            type="number"
            step="any"
            value={catetoB}
            onChange={(e) => setCatetoB(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Resultado */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#aaa" }}>Hipotenusa (h = √(a² + b²))</span>
            <h3 style={{ margin: "6px 0 0 0", color: "#4caf50", fontSize: "1.5rem" }}>
              {resultado.hipotenusa}
            </h3>
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
          <code>{metadataEjercicio25.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}