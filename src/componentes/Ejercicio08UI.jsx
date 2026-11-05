// src/componentes/Ejercicio08UI.jsx
import { useState } from "react";
import { calcularSalarioSimple, metadataEjercicio08 } from "../ejercicios/ejercicio08";

export function Ejercicio08UI() {
  const [horas, setHoras] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularSalarioSimple(horas, tarifa);

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP"
    }).format(valor);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 08: {metadataEjercicio08.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio08.descripcion}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "6px" }}>Horas Trabajadas:</label>
          <input
            type="number"
            min="0"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            placeholder="Ej: 40"
            style={{ width: "100%", padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "6px" }}>Tarifa por Hora (RD$):</label>
          <input
            type="number"
            min="0"
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            placeholder="Ej: 250"
            style={{ width: "100%", padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>
      </div>

      {horas !== "" && tarifa !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Horas:</strong> {resultado.horas} hrs | <strong>Tarifa:</strong> {formatoMoneda(resultado.tarifa)}/hr
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#4caf50" }}>
                El salario del trabajador es: {formatoMoneda(resultado.salario)}
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
          <code>{metadataEjercicio08.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}