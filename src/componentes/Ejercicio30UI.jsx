// src/componentes/Ejercicio30UI.jsx
import { useState } from "react";
import { calcularPromedioNotas, metadataEjercicio30 } from "../ejercicios/ejercicio30";

export function Ejercicio30UI() {
  const [nota1, setNota1] = useState("12");
  const [nota2, setNota2] = useState("14");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularPromedioNotas(nota1, nota2);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 30: {metadataEjercicio30.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio20 ? metadataEjercicio30.descripcion : metadataEjercicio30.descripcion}</p>

      {/* Controles de Entrada */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Nota 1 (0 - 20):
          </label>
          <input
            type="number"
            step="any"
            min="0"
            max="20"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Nota 2 (0 - 20):
          </label>
          <input
            type="number"
            step="any"
            min="0"
            max="20"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* Resultado */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0, fontWeight: "bold" }}>{resultado.error}</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", textAlign: "center" }}>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Promedio Obtenido</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#646cff", fontSize: "1.5rem" }}>{resultado.promedio}</h3>
            </div>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Estado Académico</span>
              <h3 style={{ margin: "4px 0 0 0", color: resultado.aprobado ? "#4caf50" : "#f44336", fontSize: "1.4rem" }}>
                {resultado.estado}
              </h3>
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
          <code>{metadataEjercicio30.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}