// src/componentes/Ejercicio22UI.jsx
import { useState } from "react";
import { calcularCuboYRaiz, metadataEjercicio22 } from "../ejercicios/ejercicio22";

export function Ejercicio22UI() {
  const [numero, setNumero] = useState("8");
  const [historial, setHistorial] = useState([]);
  const [procesoFinalizado, setProcesoFinalizado] = useState(false);
  const [verCodigo, setVerCodigo] = useState(false);

  const procesarNumero = () => {
    if (procesoFinalizado) return;

    const res = calcularCuboYRaiz(numero);
    if (res.error) return;

    if (res.esCentinela) {
      setProcesoFinalizado(true);
    } else {
      setHistorial([
        ...historial,
        { id: historial.length + 1, ...res }
      ]);
    }
  };

  const reiniciarProcesos = () => {
    setHistorial([]);
    setProcesoFinalizado(false);
    setNumero("8");
  };

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 22: {metadataEjercicio22.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio22.descripcion}</p>

      {/* Controles de Entrada */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px", fontSize: "0.8rem", color: "#aaa" }}>
            Ingresa un número (0 para finalizar):
          </label>
          <input
            type="number"
            step="any"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && procesarNumero()}
            disabled={procesoFinalizado}
            style={{ width: "160px", padding: "8px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
          />
        </div>

        <button
          onClick={procesarNumero}
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
          + Calcular
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
          <strong>🛑 FINAL DEL PROCESO (Se ingresó el valor 0).</strong>
        </div>
      )}

      {/* Historial de Resultados */}
      <div style={{ background: "#252526", padding: "12px", borderRadius: "6px", border: "1px solid #3c3c3c", maxHeight: "180px", overflowY: "auto" }}>
        {historial.length === 0 ? (
          <p style={{ color: "#aaa", margin: 0, textAlign: "center" }}>Ingresa un número para calcular su cubo y raíz cuadrada.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {historial.map((proc) => (
              <div key={proc.id} style={{ background: "#1e1e1e", padding: "8px 12px", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333", fontSize: "0.85rem" }}>
                <span style={{ color: "#646cff", fontWeight: "bold" }}>PROCESO N°{proc.id}: N = {proc.numero}</span>
                <span>Cubo (N³): <strong style={{ color: "#4caf50" }}>{proc.cubo}</strong></span>
                <span>Raíz (√N): <strong style={{ color: "#2196f3" }}>{proc.raizcuadrada}</strong></span>
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
          <code>{metadataEjercicio22.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}