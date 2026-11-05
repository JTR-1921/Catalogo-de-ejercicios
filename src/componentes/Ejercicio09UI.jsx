// src/componentes/Ejercicio09UI.jsx
import { useState } from "react";
import { calcularEstadisticasNotas, metadataEjercicio09 } from "../ejercicios/ejercicio09";

export function Ejercicio09UI() {
  const [notas, setNotas] = useState(["14", "8", "16", "10"]);
  const [nuevaNota, setNuevaNota] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const agregarNota = () => {
    if (nuevaNota.trim() !== "") {
      setNotas([...notas, nuevaNota]);
      setNuevaNota("");
    }
  };

  const eliminarNota = (index) => {
    setNotas(notas.filter((_, i) => i !== index));
  };

  const resultado = calcularEstadisticasNotas(notas);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 09: {metadataEjercicio09.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio09.descripcion}</p>

      {/* Agregar Notas */}
      <div style={{ marginBottom: "16px", display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="number"
          min="0"
          max="20"
          step="0.5"
          value={nuevaNota}
          onChange={(e) => setNuevaNota(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarNota()}
          placeholder="Nota (0-20)"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "140px" }}
        />
        <button
          onClick={agregarNota}
          style={{ padding: "8px 14px", backgroundColor: "#646cff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          + Agregar Nota
        </button>
      </div>

      {/* Lista de Chips de Notas */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
        {notas.map((n, idx) => {
          const val = parseFloat(n);
          const esAprobada = val > 10.5;
          return (
            <span
              key={idx}
              style={{
                backgroundColor: esAprobada ? "#1b4332" : "#4a1213",
                color: esAprobada ? "#a3cfbb" : "#f1aeb5",
                border: `1px solid ${esAprobada ? "#2d6a4f" : "#842029"}`,
                padding: "4px 10px",
                borderRadius: "16px",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              #{idx + 1}: <strong>{n}</strong>
              <button
                onClick={() => eliminarNota(idx)}
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", fontWeight: "bold", padding: "0 2px" }}
              >
                ×
              </button>
            </span>
          );
        })}
      </div>

      {/* Resultados */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", border: "1px solid #333" }}>
              <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Aprobados (&gt;10.5):</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.ca} estudiante(s)</h3>
              <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#888" }}>
                Promedio: {resultado.promedioAprobadas !== null ? resultado.promedioAprobadas : "N/A"}
              </p>
            </div>

            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", border: "1px solid #333" }}>
              <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Desaprobados (≤10.5):</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#f44336" }}>{resultado.cd} estudiante(s)</h3>
              <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#888" }}>
                Promedio: {resultado.promedioDesaprobadas !== null ? resultado.promedioDesaprobadas : "N/A"}
              </p>
            </div>

            <div style={{ background: "#1e1e1e", padding: "12px", borderRadius: "4px", border: "1px solid #333" }}>
              <span style={{ fontSize: "0.8rem", color: "#aaa" }}>Promedio General:</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#646cff" }}>{resultado.promedioGeneral}</h3>
              <p style={{ margin: "2px 0 0 0", fontSize: "0.85rem", color: "#888" }}>
                Total notas: {resultado.totalNotas}
              </p>
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
          <code>{metadataEjercicio09.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}