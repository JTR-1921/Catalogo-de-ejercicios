// src/componentes/Ejercicio21UI.jsx
import { useState } from "react";
import { calcularOperaciones, metadataEjercicio21 } from "../ejercicios/ejercicio21";

export function Ejercicio21UI() {
  const [num1, setNum1] = useState("12");
  const [num2, setNum2] = useState("4");
  const [historialProcesos, setHistorialProcesos] = useState([]);
  const [verCodigo, setVerCodigo] = useState(false);

  const procesarOperacion = () => {
    if (historialProcesos.length >= 10) return;

    const res = calcularOperaciones(num1, num2);
    if (!res.error) {
      setHistorialProcesos([
        ...historialProcesos,
        { id: historialProcesos.length + 1, ...res }
      ]);
    }
  };

  const simular10Procesos = () => {
    const simulados = [];
    for (let i = 1; i <= 10; i++) {
      const n1 = Math.floor(Math.random() * 50) + 1;
      const n2 = Math.floor(Math.random() * 20) + 1;
      simulados.push({
        id: i,
        ...calcularOperaciones(n1, n2)
      });
    }
    setHistorialProcesos(simulados);
  };

  const reiniciarProcesos = () => {
    setHistorialProcesos([]);
  };

  const alcanzadoLimite = historialProcesos.length >= 10;

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 21: {metadataEjercicio21.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio21.descripcion}</p>

      {/* Controles de Entrada y Acciones */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Número 1:</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            disabled={alcanzadoLimite}
            style={{ width: "100px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>Número 2:</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            disabled={alcanzadoLimite}
            style={{ width: "100px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <button
          onClick={procesarOperacion}
          disabled={alcanzadoLimite}
          style={{
            padding: "8px 14px",
            backgroundColor: alcanzadoLimite ? "#555" : "#646cff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: alcanzadoLimite ? "not-allowed" : "pointer"
          }}
        >
          + Ejecutar Proceso ({historialProcesos.length}/10)
        </button>

        <button
          onClick={simular10Procesos}
          style={{ padding: "8px 14px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🎲 Simular 10 Procesos
        </button>

        <button
          onClick={reiniciarProcesos}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Indicador de Estado */}
      {alcanzadoLimite && (
        <div style={{ padding: "10px", backgroundColor: "#1b4332", border: "1px solid #2d6a4f", borderRadius: "4px", marginBottom: "16px", color: "#a3cfbb", textAlign: "center" }}>
          <strong>¡Final del proceso! Se han ejecutado los 10 cálculos solicitados.</strong>
        </div>
      )}

      {/* Historial de Procesos */}
      <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", maxHeight: "180px", overflowY: "auto" }}>
        {historialProcesos.length === 0 ? (
          <p style={{ color: "#aaa", margin: 0, textAlign: "center" }}>No hay procesos ejecutados aún. Ingresa datos o simula 10 procesos.</p>
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
          <code>{metadataEjercicio21.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}