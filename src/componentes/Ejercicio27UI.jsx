// src/componentes/Ejercicio27UI.jsx
import { useState } from "react";
import { calcularConsumoRestaurante, metadataEjercicio27 } from "../ejercicios/ejercicio27";

export function Ejercicio27UI() {
  const [monto, setMonto] = useState("150");
  const [consumos, setConsumos] = useState([]);
  const [verCodigo, setVerCodigo] = useState(false);

  const limiteAlcanzado = consumos.length >= 130;

  const agregarConsumo = () => {
    if (limiteAlcanzado) return;

    const res = calcularConsumoRestaurante(monto);
    if (res.error) return;

    setConsumos([
      ...consumos,
      { id: consumos.length + 1, ...res }
    ]);
  };

  const simularConsumos = (cantidad = 130) => {
    const nuevosConsumos = [];
    for (let i = 1; i <= cantidad; i++) {
      const aleatorio = Math.floor(Math.random() * 200) + 50; // Valores entre $50 y $250
      nuevosConsumos.push({
        id: i,
        ...calcularConsumoRestaurante(aleatorio)
      });
    }
    setConsumos(nuevosConsumos);
  };

  const reiniciar = () => {
    setConsumos([]);
    setMonto("150");
  };

  const totalAcumulado = consumos.reduce((acc, curr) => acc + curr.consumoFinal, 0);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 27: {metadataEjercicio27.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio27.descripcion}</p>

      {/* Controles e Inputs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Monto del Consumo ($):
          </label>
          <input
            type="number"
            step="any"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            disabled={limiteAlcanzado}
            style={{ width: "130px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <button
          onClick={agregarConsumo}
          disabled={limiteAlcanzado}
          style={{
            padding: "8px 14px",
            backgroundColor: limiteAlcanzado ? "#555" : "#646cff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: limiteAlcanzado ? "not-allowed" : "pointer"
          }}
        >
          + Agregar ({consumos.length}/130)
        </button>

        <button
          onClick={() => simularConsumos(130)}
          style={{ padding: "8px 14px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🎲 Simular 130 Consumos
        </button>

        <button
          onClick={reiniciar}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Panel de Resumen */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c", marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Total Acumulado (con descuentos):</span>
          <h3 style={{ margin: 0, color: "#4caf50", fontSize: "1.4rem" }}>
            ${totalAcumulado.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Historial de Consumos */}
      <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", maxHeight: "180px", overflowY: "auto" }}>
        {consumos.length === 0 ? (
          <p style={{ color: "#aaa", margin: 0, textAlign: "center" }}>No hay consumos registrados aún.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {consumos.slice().reverse().map((c) => (
              <div key={c.id} style={{ background: "#1e1e1e", padding: "8px 12px", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333", fontSize: "0.85rem" }}>
                <span style={{ color: "#646cff", fontWeight: "bold" }}>Consumo #{c.id}</span>
                <span>Original: ${c.montoOriginal.toFixed(2)}</span>
                <span style={{ color: c.aplicaDescuento ? "#ff9800" : "#aaa" }}>
                  Desc (15%): -${c.descuento.toFixed(2)}
                </span>
                <span style={{ color: "#4caf50", fontWeight: "bold" }}>
                  Final: ${c.consumoFinal.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setVerCodigo(!verCodigo)}
        style={{ marginTop: "16px", padding: "8px 14px", cursor: "pointer", background: "#333", color: "#fff", border: "1px solid #555", borderRadius: "4px" }}
      >
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre style={{ background: "#121212", color: "#d4d4d4", padding: "12px", borderRadius: "6px", overflowX: "auto", fontSize: "14px", marginTop: "12px", border: "1px solid #333" }}>
          <code>{metadataEjercicio27.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}