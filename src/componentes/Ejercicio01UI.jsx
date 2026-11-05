// src/componentes/Ejercicio01UI.jsx
import { useState } from "react";
import { calcularSalario, metadataEjercicio01 } from "../ejercicios/ejercicio01";

export function Ejercicio01UI() {
  const [horas, setHoras] = useState("");
  const [tarifa, setTarifa] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularSalario(horas, tarifa);

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP"
    }).format(valor);

  return (
    // Cambia la primera etiqueta <div> del componente por esta:
<div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", margin: "16px 0", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 01: {metadataEjercicio01.titulo}</h2>
      <p>{metadataEjercicio01.descripcion}</p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Horas Trabajadas:</label>
          <input
            type="number"
            min="0"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
            placeholder="Ej: 45"
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Tarifa por Hora (RD$):</label>
          <input
            type="number"
            min="0"
            value={tarifa}
            onChange={(e) => setTarifa(e.target.value)}
            placeholder="Ej: 200"
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      {horas !== "" && tarifa !== "" && (
        <div style={{ background: "#f9f9f9", padding: "12px", borderRadius: "6px" }}>
          {resultado.error ? (
            <p style={{ color: "red", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Horas Normales (hasta 40h):</strong> {resultado.horasNormales} hrs (
                {formatoMoneda(resultado.salarioNormal)})
              </p>
              <p style={{ margin: "4px 0" }}>
                <strong>Horas Extras (+50%):</strong> {resultado.horasExtras} hrs (
                {formatoMoneda(resultado.salarioExtra)})
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#2e7d32" }}>
                Salario Total: {formatoMoneda(resultado.salarioTotal)}
              </h3>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setVerCodigo(!verCodigo)}
        style={{
          marginTop: "12px",
          padding: "6px 12px",
          cursor: "pointer",
          background: "#eee",
          border: "none",
          borderRadius: "4px"
        }}
      >
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre
          style={{
            background: "#1e1e1e",
            color: "#d4d4d4",
            padding: "12px",
            borderRadius: "6px",
            overflowX: "auto",
            fontSize: "14px",
            marginTop: "8px"
          }}
        >
          <code>{metadataEjercicio01.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}