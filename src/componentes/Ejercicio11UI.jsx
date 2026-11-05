// src/componentes/Ejercicio11UI.jsx
import { useState } from "react";
import { calcularFactura, metadataEjercicio11 } from "../ejercicios/ejercicio11";

export function Ejercicio11UI() {
  const [precio, setPrecio] = useState("12.50");
  const [cantidad, setCantidad] = useState("4");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = calcularFactura(precio, cantidad);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 11: {metadataEjercicio11.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio11.descripcion}</p>

      {/* Formulario de entrada */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>Precio Unitario (pts):</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #444",
              backgroundColor: "#2a2a2a",
              color: "#fff",
              width: "160px"
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "6px", fontSize: "0.85rem" }}>N° de Artículos:</label>
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #444",
              backgroundColor: "#2a2a2a",
              color: "#fff",
              width: "140px"
            }}
          />
        </div>
      </div>

      {/* Detalle de Factura */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <h3 style={{ margin: "0 0 12px 0", color: "#646cff", borderBottom: "1px solid #333", paddingBottom: "6px" }}>
              📋 Detalle de la Factura
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px", marginBottom: "14px" }}>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Precio de Venta (Subtotal):</span>
                <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{resultado.precioVenta.toFixed(2)} pts</p>
              </div>

              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>IVA (15%):</span>
                <p style={{ margin: "4px 0 0 0", color: "#e91e63", fontWeight: "bold" }}>+{resultado.iva.toFixed(2)} pts</p>
              </div>

              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Precio Bruto:</span>
                <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{resultado.precioBruto.toFixed(2)} pts</p>
              </div>

              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Descuento (5% si ≥ 50):</span>
                <p style={{ margin: "4px 0 0 0", color: resultado.aplicaDescuento ? "#4caf50" : "#aaa", fontWeight: "bold" }}>
                  {resultado.aplicaDescuento ? `-${resultado.descuento.toFixed(2)} pts` : "0.00 pts (No aplica)"}
                </p>
              </div>
            </div>

            <div style={{ background: "#1b4332", border: "1px solid #2d6a4f", padding: "12px", borderRadius: "6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "bold", color: "#a3cfbb" }}>Total a Pagar:</span>
              <span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff" }}>{resultado.totalPagar.toFixed(2)} pts</span>
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
          <code>{metadataEjercicio11.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}