// src/componentes/Ejercicio04UI.jsx
import { useState } from "react";
import { calcularSegundosRestantes, metadataEjercicio04 } from "../ejercicios/ejercicio04";

export function Ejercicio04UI() {
  const [segundos, setSegundos] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularSegundosRestantes(segundos);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 04: {metadataEjercicio04.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio04.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Tiempo en Segundos:</label>
        <input
          type="number"
          min="1"
          value={segundos}
          onChange={(e) => setSegundos(e.target.value)}
          placeholder="Ej: 135"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "100%", maxWidth: "250px" }}
        />
      </div>

      {segundos !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Segundos ingresados:</strong> {resultado.tiempoSegundos} s
              </p>
              <p style={{ margin: "4px 0", color: "#646cff" }}>
                <strong>Equivalencia actual:</strong> {resultado.minutos} min y {resultado.segundosRestantes} s
              </p>
              {resultado.esExacto ? (
                <h3 style={{ margin: "8px 0 0 0", color: "#4caf50" }}>
                  ¡Es un número exacto de minutos!
                </h3>
              ) : (
                <h3 style={{ margin: "8px 0 0 0", color: "#ff9800" }}>
                  Le faltan {resultado.faltantesParaSiguienteMinuto} segundos para convertirse en el siguiente minuto.
                </h3>
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
          <code>{metadataEjercicio04.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}