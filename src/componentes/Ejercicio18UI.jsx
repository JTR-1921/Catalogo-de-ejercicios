// src/componentes/Ejercicio18UI.jsx
import { useState } from "react";
import { encontrarPrimeraVocal, metadataEjercicio18 } from "../ejercicios/ejercicio18";

export function Ejercicio18UI() {
  const [texto, setTexto] = useState("xyz-a-123");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = encontrarPrimeraVocal(texto);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 18: {metadataEjercicio18.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio18.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>
          Ingresa una secuencia de caracteres:
        </label>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ej: rst-e-99"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "100%",
            maxWidth: "300px"
          }}
        />
      </div>

      {/* Resultado de la búsqueda */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Secuencia procesada hasta el freno:</span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "6px" }}>
                {resultado.historialEvaluado.map((char, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "2px 8px",
                      borderRadius: "4px",
                      backgroundColor: idx === resultado.historialEvaluado.length - 1 && resultado.encontrada ? "#2e7d32" : "#333",
                      color: "#fff",
                      fontWeight: "bold",
                      border: "1px solid #444"
                    }}
                  >
                    '{char}'
                  </span>
                ))}
              </div>
            </div>

            {resultado.encontrada ? (
              <div style={{ background: "#1b4332", border: "1px solid #2d6a4f", padding: "12px", borderRadius: "6px" }}>
                <p style={{ margin: 0, color: "#a3cfbb", fontSize: "1.1rem" }}>
                  🎉 La primera vocal ingresada fue: <strong style={{ color: "#fff", fontSize: "1.3rem" }}>"{resultado.primeraVocal}"</strong> (en la posición #{resultado.posicion})
                </p>
              </div>
            ) : (
              <div style={{ background: "#380d0d", border: "1px solid #800606", padding: "12px", borderRadius: "6px" }}>
                <p style={{ margin: 0, color: "#ff9999" }}>{resultado.mensaje}</p>
              </div>
            )}
          </div>
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
          <code>{metadataEjercicio18.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}