// src/componentes/Ejercicio05UI.jsx
import { useState } from "react";
import { desglosarMinutos, metadataEjercicio05 } from "../ejercicios/ejercicio05";

export function Ejercicio05UI() {
  const [minutos, setMinutos] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = desglosarMinutos(minutos);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 05: {metadataEjercicio05.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio05.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Tiempo en Minutos:</label>
        <input
          type="number"
          min="0"
          value={minutos}
          onChange={(e) => setMinutos(e.target.value)}
          placeholder="Ej: 2885"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "100%", maxWidth: "250px" }}
        />
      </div>

      {minutos !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Minutos ingresados:</strong> {resultado.tiempoTotal} min
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#4caf50" }}>
                Equivale a: {resultado.dias} día(s), {resultado.horas} hora(s) y {resultado.minutos} minuto(s)
              </h3>
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
          <code>{metadataEjercicio05.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}