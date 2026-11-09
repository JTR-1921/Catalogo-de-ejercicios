// src/componentes/Ejercicio20UI.jsx
import { useState } from "react";
import { calcularEcuacionCuadratica, metadataEjercicio20 } from "../ejercicios/ejercicio20";

export function Ejercicio20UI() {
  const [a, setA] = useState("1");
  const [b, setB] = useState("-5");
  const [c, setC] = useState("6");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularEcuacionCuadratica(a, b, c);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 20: {metadataEjercicio20.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio20.descripcion}</p>

      {/* Formulario de Coeficientes */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Coeficiente a:</label>
          <input
            type="number"
            step="any"
            value={a}
            onChange={(e) => setA(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Coeficiente b:</label>
          <input
            type="number"
            step="any"
            value={b}
            onChange={(e) => setB(e.target.value)}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", boxSizing: "border-box" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Coeficiente c:</label>
          <input
            type="number"
            step="any"
            value={c}
            onChange={(e) => setC(e.target.value)}
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
            <p style={{ margin: "0 0 10px 0", color: "#aaa", fontSize: "0.85rem" }}>
              Discriminante (Δ = b² - 4ac): <strong style={{ color: "#fff" }}>{resultado.discriminante}</strong>
            </p>
            <p style={{ margin: "0 0 12px 0", color: "#aaa", fontSize: "0.85rem" }}>{resultado.mensaje}</p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ background: "#1e1e1e", padding: "12px 20px", borderRadius: "4px", flex: 1, textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Solución 1</span>
                <h3 style={{ margin: "4px 0 0 0", color: resultado.tipo === "imaginarias" ? "#ce93d8" : "#4caf50" }}>
                  {resultado.x1}
                </h3>
              </div>
              {resultado.x2 && (
                <div style={{ background: "#1e1e1e", padding: "12px 20px", borderRadius: "4px", flex: 1, textAlign: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Solución 2</span>
                  <h3 style={{ margin: "4px 0 0 0", color: resultado.tipo === "imaginarias" ? "#ce93d8" : "#2196f3" }}>
                    {resultado.x2}
                  </h3>
                </div>
              )}
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
          <code>{metadataEjercicio20.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}