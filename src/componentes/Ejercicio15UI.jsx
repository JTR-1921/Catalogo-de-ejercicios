// src/componentes/Ejercicio15UI.jsx
import { useState } from "react";
import { calcularSumaProductoPares, metadataEjercicio15 } from "../ejercicios/ejercicio15";

export function Ejercicio15UI() {
  const [inicio, setInicio] = useState("20");
  const [fin, setFin] = useState("30");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularSumaProductoPares(inicio, fin);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 15: {metadataEjercicio15.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio15.descripcion}</p>

      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>Inicio del rango:</label>
          <input
            type="number"
            value={inicio}
            onChange={(e) => setInicio(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "120px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>Fin del rango:</label>
          <input
            type="number"
            value={fin}
            onChange={(e) => setFin(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "120px" }}
          />
        </div>
      </div>

      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <p style={{ margin: "0 0 10px 0", color: "#aaa", fontSize: "0.85rem" }}>
              Pares evaluados: <strong>{resultado.pares.join(", ")}</strong>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Suma de pares:</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.suma}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", overflowX: "auto" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Producto continuo:</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#ff9800", fontSize: "1.1rem" }}>{resultado.producto}</h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <button onClick={() => setVerCodigo(!verCodigo)} style={{ marginTop: "16px", padding: "8px 14px", cursor: "pointer", background: "#333", color: "#fff", border: "1px solid #555", borderRadius: "4px" }}>
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre style={{ background: "#121212", color: "#d4d4d4", padding: "12px", borderRadius: "6px", overflowX: "auto", fontSize: "14px", marginTop: "12px", border: "1px solid #333" }}>
          <code>{metadataEjercicio15.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}