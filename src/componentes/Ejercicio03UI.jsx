// src/componentes/Ejercicio03UI.jsx
import { useState } from "react";
import { calcularDescuentoMonto, metadataEjercicio03 } from "../ejercicios/ejercicio03";

export function Ejercicio03UI() {
  const [monto, setMonto] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularDescuentoMonto(monto);

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP"
    }).format(valor);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 03: {metadataEjercicio03.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio03.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Monto de Compra (RD$):</label>
        <input
          type="number"
          min="0"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Ej: 150"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "100%", maxWidth: "250px" }}
        />
      </div>

      {monto !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Monto Original:</strong> {formatoMoneda(resultado.monto)}
              </p>
              <p style={{ margin: "4px 0", color: "#ff9800" }}>
                <strong>Descuento Aplicado ({resultado.porcentaje}%):</strong> -{formatoMoneda(resultado.descuento)}
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#4caf50" }}>
                Monto Final: {formatoMoneda(resultado.montoFinal)}
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
          <code>{metadataEjercicio03.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}