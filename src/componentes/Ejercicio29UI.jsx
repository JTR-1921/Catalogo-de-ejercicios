// src/componentes/Ejercicio29UI.jsx
import { useState } from "react";
import { registrarEgresoCaja, metadataEjercicio29 } from "../ejercicios/ejercicio29";

export function Ejercicio29UI() {
  const [montoEgreso, setMontoEgreso] = useState("25");
  const [historialEgresos, setHistorialEgresos] = useState([]);
  const [procesoFinalizado, setProcesoFinalizado] = useState(false);
  const [verCodigo, setVerCodigo] = useState(false);

  const FONDO_INICIAL = 371;

  const totalEgresos = historialEgresos.reduce((acc, curr) => acc + curr.egreso, 0);
  const restoCaja = FONDO_INICIAL - totalEgresos;

  const procesarEgreso = () => {
    if (procesoFinalizado) return;

    const res = registrarEgresoCaja(montoEgreso, totalEgresos, FONDO_INICIAL);
    
    if (res.error) return;

    if (res.esCentinela) {
      setProcesoFinalizado(true);
    } else {
      setHistorialEgresos([
        ...historialEgresos,
        { id: historialEgresos.length + 1, egreso: res.egreso, acumEgresos: res.totalEgresos, saldoActual: res.restoCaja }
      ]);
      setMontoEgreso("");
    }
  };

  const reiniciarCaja = () => {
    setHistorialEgresos([]);
    setProcesoFinalizado(false);
    setMontoEgreso("25");
  };

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 29: {metadataEjercicio29.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio29.descripcion}</p>

      {/* Tarjetas de Resumen Financiero */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px", marginBottom: "16px" }}>
        <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", textAlign: "center" }}>
          <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Fondo Inicial</span>
          <h3 style={{ margin: "4px 0 0 0", color: "#646cff" }}>${FONDO_INICIAL.toFixed(2)}</h3>
        </div>
        <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", textAlign: "center" }}>
          <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Total Egresos</span>
          <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>${totalEgresos.toFixed(2)}</h3>
        </div>
        <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", textAlign: "center" }}>
          <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Sobrante en Caja</span>
          <h3 style={{ margin: "4px 0 0 0", color: restoCaja >= 0 ? "#4caf50" : "#f44336" }}>${restoCaja.toFixed(2)}</h3>
        </div>
      </div>

      {/* Controles de Entrada */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Monto Egreso (-1 para finalizar):
          </label>
          <input
            type="number"
            step="any"
            value={montoEgreso}
            onChange={(e) => setMontoEgreso(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && procesarEgreso()}
            disabled={procesoFinalizado}
            style={{ width: "160px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <button
          onClick={procesarEgreso}
          disabled={procesoFinalizado}
          style={{
            padding: "8px 14px",
            backgroundColor: procesoFinalizado ? "#555" : "#646cff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: procesoFinalizado ? "not-allowed" : "pointer"
          }}
        >
          + Registrar Egreso
        </button>

        <button
          onClick={reiniciarCaja}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🔄 Reiniciar Caja
        </button>
      </div>

      {/* Indicador de Cierre */}
      {procesoFinalizado && (
        <div style={{ padding: "10px", backgroundColor: "#380d0d", border: "1px solid #800606", borderRadius: "4px", marginBottom: "16px", color: "#ff9999", textAlign: "center" }}>
          <strong>🛑 CIERRE DE CAJA COMPLETADO (Egreso centinela -1 ingresado).</strong>
        </div>
      )}

      {/* Historial de Egresos */}
      <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", maxHeight: "160px", overflowY: "auto" }}>
        {historialEgresos.length === 0 ? (
          <p style={{ color: "#aaa", margin: 0, textAlign: "center" }}>No hay egresos registrados aún.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {historialEgresos.slice().reverse().map((item) => (
              <div key={item.id} style={{ background: "#1e1e1e", padding: "8px 12px", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333", fontSize: "0.85rem" }}>
                <span style={{ color: "#646cff", fontWeight: "bold" }}>Egreso N°{item.id}</span>
                <span style={{ color: "#ff9800" }}>Monto: -${item.egreso.toFixed(2)}</span>
                <span style={{ color: "#aaa" }}>Acumulado: ${item.acumEgresos.toFixed(2)}</span>
                <span style={{ color: "#4caf50" }}>Saldo: ${item.saldoActual.toFixed(2)}</span>
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
          <code>{metadataEjercicio29.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}