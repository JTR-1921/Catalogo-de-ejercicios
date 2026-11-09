// src/componentes/Ejercicio28UI.jsx
import { useState } from "react";
import { calcularSumaSerie8aN, metadataEjercicio28 } from "../ejercicios/ejercicio28";

export function Ejercicio28UI() {
  const [numero, setNumero] = useState("15");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularSumaSerie8aN(numero);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 28: {metadataEjercicio28.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio28.descripcion}</p>

      {/* Entrada */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
          Número enésimo N (N ≥ 8):
        </label>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          style={{ width: "100%", maxWidth: "200px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
        />
      </div>

      {/* Resultado */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", marginBottom: "12px" }}>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Cantidad de Términos</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#2196f3" }}>{resultado.totalElementos}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Suma Total (S)</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50", fontSize: "1.4rem" }}>{resultado.suma}</h3>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: "0.85rem", color: "#aaa" }}>
              <strong>Serie evaluada:</strong> 8 + 9 + 10 + ... + {resultado.n}
            </p>
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
          <code>{metadataEjercicio28.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}