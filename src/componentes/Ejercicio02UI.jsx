// src/componentes/Ejercicio02UI.jsx
import { useState } from "react";
import { calcularDescuentoSueldo, metadataEjercicio02 } from "../ejercicios/ejercicio02";

export function Ejercicio02UI() {
  const [sueldo, setSueldo] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularDescuentoSueldo(sueldo);

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP"
    }).format(valor);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", margin: "16px 0", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 02: {metadataEjercicio02.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio02.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Sueldo Bruto (RD$):</label>
        <input
          type="number"
          min="0"
          value={sueldo}
          onChange={(e) => setSueldo(e.target.value)}
          placeholder="Ej: 2500"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "100%", maxWidth: "250px" }}
        />
      </div>

      {sueldo !== "" && (
        <div style={{ background: "#252526", padding: "14px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0" }}>
                <strong>Sueldo Bruto:</strong> {formatoMoneda(resultado.sueldoBruto)}
              </p>
              <p style={{ margin: "4px 0", color: "#ff9800" }}>
                <strong>Descuento Aplicado:</strong> -{formatoMoneda(resultado.descuento)}
              </p>
              <h3 style={{ margin: "8px 0 0 0", color: "#4caf50" }}>
                Sueldo Neto: {formatoMoneda(resultado.sueldoNeto)}
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
          <code>{metadataEjercicio02.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}