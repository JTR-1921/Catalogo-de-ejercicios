// src/componentes/Ejercicio06UI.jsx
import { useState } from "react";
import { calcularSumaNaturales, metadataEjercicio06 } from "../ejercicios/ejercicio06";

export function Ejercicio06UI() {
  const [numeroN, setNumeroN] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);
  const [mostrarTabla, setMostrarTabla] = useState(true);

  const resultado = calcularSumaNaturales(numeroN);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 06: {metadataEjercicio06.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio06.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Ingresa el número N:</label>
        <input
          type="number"
          min="1"
          max="500"
          value={numeroN}
          onChange={(e) => setNumeroN(e.target.value)}
          placeholder="Ej: 10"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "100%", maxWidth: "250px" }}
        />
      </div>

      {numeroN !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Límite de la serie (N):</strong> {resultado.n}
              </p>
              <h3 style={{ margin: "8px 0 12px 0", color: "#4caf50" }}>
                La suma de la serie es: {resultado.suma}
              </h3>

              {resultado.n <= 100 && (
                <div>
                  <button
                    onClick={() => setMostrarTabla(!mostrarTabla)}
                    style={{
                      padding: "4px 10px",
                      marginBottom: "10px",
                      cursor: "pointer",
                      backgroundColor: "#2a2a2a",
                      color: "#aaa",
                      border: "1px solid #444",
                      borderRadius: "4px",
                      fontSize: "0.85rem"
                    }}
                  >
                    {mostrarTabla ? "Ocultar desglose paso a paso" : "Ver desglose paso a paso"}
                  </button>

                  {mostrarTabla && (
                    <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #3a3a3a", borderRadius: "4px" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                        <thead>
                          <tr style={{ backgroundColor: "#1e1e1e", borderBottom: "1px solid #3a3a3a" }}>
                            <th style={{ padding: "6px 10px" }}>Paso (x)</th>
                            <th style={{ padding: "6px 10px" }}>Número</th>
                            <th style={{ padding: "6px 10px" }}>Suma Acumulada</th>
                          </tr>
                        </thead>
                        <tbody>
                          {resultado.iteraciones.map((it) => (
                            <tr key={it.paso} style={{ borderBottom: "1px solid #2d2d2d" }}>
                              <td style={{ padding: "6px 10px", color: "#646cff" }}>n{it.paso}</td>
                              <td style={{ padding: "6px 10px" }}>{it.valor}</td>
                              <td style={{ padding: "6px 10px", color: "#4caf50" }}>{it.sumaAcumulada}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

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
          <code>{metadataEjercicio06.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}