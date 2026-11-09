// src/componentes/Ejercicio23UI.jsx
import { useState } from "react";
import { calcularOperacionesCentinela, metadataEjercicio23 } from "../ejercicios/ejercicio23";

export function Ejercicio23UI() {
  const [num1, setNum1] = useState("10");
  const [num2, setNum2] = useState("5");
  const [historialProcesos, setHistorialProcesos] = useState([]);
  const [procesoFinalizado, setProcesoFinalizado] = useState(false);
  const [verCodigo, setVerCodigo] = useState(false);

  const procesarOperacion = () => {
    if (procesoFinalizado) return;

    const res = calcularOperacionesCentinela(num1, num2);
    
    if (res.error) return;

    if (res.esCentinela) {
      setProcesoFinalizado(true);
    } else {
      setHistorialProcesos([
        ...historialProcesos,
        { id: historialProcesos.length + 1, ...res }
      ]);
    }
  };

  const reiniciarProcesos = () => {
    setHistorialProcesos([]);
    setProcesoFinalizado(false);
    setNum1("10");
    setNum2("5");
  };

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 23: {metadataEjercicio23.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio23.descripcion}</p>

      {/* Controles de Entrada */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Número 1 (0 para finalizar):
          </label>
          <input
            type="number"
            step="any"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            disabled={procesoFinalizado}
            style={{ width: "140px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Número 2:</label>
          <input
            type="number"
            step="any"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            disabled={procesoFinalizado}
            style={{ width: "100px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <button
          onClick={procesarOperacion}
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
          + Ejecutar Proceso
        </button>

        <button
          onClick={reiniciarProcesos}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Indicador de Fin de Proceso */}
      {procesoFinalizado && (
        <div style={{ padding: "10px", backgroundColor: "#380d0d", border: "1px solid #800606", borderRadius: "4px", marginBottom: "16px", color: "#ff9999", textAlign: "center" }}>
          <strong>🛑 FINAL DEL PROCESO (Primer número fue 0).</strong>
        </div>
      )}

      {/* Historial de Resultados */}
      <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", maxHeight: "180px", overflowY: "auto" }}>
        {historialProcesos.length === 0 ? (
          <p style={{ color: "#aaa", margin: 0, textAlign: "center" }}>Ingresa números para realizar cálculos aritméticos.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {historialProcesos.map((proc) => (
              <div key={proc.id} style={{ background: "#1e1e1e", padding: "8px 12px", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333", fontSize: "0.85rem" }}>
                <span style={{ color: "#646cff", fontWeight: "bold" }}>PROCESO N°{proc.id}: ({proc.num1}, {proc.num2})</span>
                <span>Suma: <strong style={{ color: "#4caf50" }}>{proc.suma}</strong></span>
                <span>Resta: <strong style={{ color: "#ff9800" }}>{proc.resta}</strong></span>
                <span>Mult: <strong style={{ color: "#2196f3" }}>{proc.multiplicacion}</strong></span>
                <span>Div: <strong style={{ color: "#ce93d8" }}>{proc.division}</strong></span>
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
          <code>{metadataEjercicio23.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}