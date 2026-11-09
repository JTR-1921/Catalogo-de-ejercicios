// src/componentes/Ejercicio19UI.jsx
import { useState } from "react";
import { verificarParteFraccionaria, metadataEjercicio19 } from "../ejercicios/ejercicio19";

export function Ejercicio19UI() {
  const [numero, setNumero] = useState("15.75");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = verificarParteFraccionaria(numero);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 19: {metadataEjercicio19.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio19.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>
          Ingresa un número (entero o decimal):
        </label>
        <input
          type="number"
          step="any"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ej: 12.34"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "100%",
            maxWidth: "240px"
          }}
        />
      </div>

      {/* Tarjeta de resultado */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <div
              style={{
                padding: "12px",
                borderRadius: "6px",
                backgroundColor: resultado.tieneFraccionaria ? "#1a237e" : "#1b4332",
                border: `1px solid ${resultado.tieneFraccionaria ? "#3949ab" : "#2d6a4f"}`,
                marginBottom: "12px",
                textAlign: "center"
              }}
            >
              <h3 style={{ margin: 0, color: "#fff" }}>{resultado.mensaje}</h3>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Parte Entera</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.parteEntera}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Parte Fraccionaria</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>{resultado.parteFraccionaria}</h3>
              </div>
            </div>
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
          <code>{metadataEjercicio19.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}