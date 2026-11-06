// src/componentes/Ejercicio13UI.jsx
import { useState } from "react";
import { calcularFactorial, metadataEjercicio13 } from "../ejercicios/ejercicio13";

export function Ejercicio13UI() {
  const [numero, setNumero] = useState("5");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularFactorial(numero);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 13: {metadataEjercicio13.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio13.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Ingresa un número (0-20):</label>
        <input
          type="number"
          min="0"
          max="20"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ej: 5"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "100%",
            maxWidth: "200px"
          }}
        />
      </div>

      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <h3 style={{ margin: "0 0 8px 0", color: "#4caf50" }}>
              {resultado.numero}! = {resultado.factorial.toLocaleString()}
            </h3>
            
            <p style={{ margin: "4px 0 0 0", color: "#aaa", fontSize: "0.9rem" }}>
              <strong>Desglose:</strong>{" "}
              {resultado.numero === 0 ? "1 (definición por convención)" : resultado.desglose.join(" × ")}
            </p>
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
          <code>{metadataEjercicio13.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}