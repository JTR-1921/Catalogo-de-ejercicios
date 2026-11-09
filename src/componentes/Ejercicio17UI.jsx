// src/componentes/Ejercicio17UI.jsx
import { useState } from "react";
import { clasificarDeportes, metadataEjercicio17 } from "../ejercicios/ejercicio17";

export function Ejercicio17UI() {
  const [deportes, setDeportes] = useState([
    "futbol", "voley", "basquet", "ajedrez", "futbol", 
    "voley", "futbol", "basquet", "ajedrez", "voley"
  ]);
  const [nuevoDeporte, setNuevoDeporte] = useState("futbol");
  const [verCodigo, setVerCodigo] = useState(false);

  const agregarDeporte = (dep) => {
    setDeportes([...deportes, dep]);
  };

  const generarMuestraAleatoria = (cantidad = 50) => {
    const opciones = ["futbol", "voley", "basquet", "ajedrez"];
    const nuevaLista = Array.from({ length: cantidad }, () => 
      opciones[Math.floor(Math.random() * opciones.length)]
    );
    setDeportes(nuevaLista);
  };

  const limpiarLista = () => setDeportes([]);
  const resultado = clasificarDeportes(deportes);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 17: {metadataEjercicio17.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio17.descripcion}</p>

      {/* Controles de Selección e Ingreso */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <select
          value={nuevoDeporte}
          onChange={(e) => setNuevoDeporte(e.target.value)}
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff" }}
        >
          <option value="futbol">⚽ Fútbol</option>
          <option value="voley">🏐 Vóley</option>
          <option value="basquet">🏀 Básquet</option>
          <option value="ajedrez">♟️ Ajedrez</option>
        </select>

        <button
          onClick={() => agregarDeporte(nuevoDeporte)}
          style={{ padding: "8px 14px", backgroundColor: "#646cff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          + Registrar persona
        </button>

        <button
          onClick={() => generarMuestraAleatoria(50)}
          style={{ padding: "8px 14px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🎲 Generar 50 muestras
        </button>

        <button
          onClick={limpiarLista}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🗑 Limpiar
        </button>
      </div>

      {/* Lista de Registros */}
      <div style={{ maxHeight: "90px", overflowY: "auto", display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px", padding: "8px", background: "#141414", borderRadius: "6px" }}>
        {deportes.map((d, idx) => (
          <span key={idx} style={{ backgroundColor: "#2a2a2a", border: "1px solid #444", padding: "2px 8px", borderRadius: "12px", fontSize: "0.8rem", color: "#fff" }}>
            {d}
          </span>
        ))}
      </div>

      {/* Tarjetas de Resultados */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <p style={{ margin: "0 0 12px 0", color: "#aaa", fontSize: "0.85rem" }}>
              Total de registros procesados: <strong>{resultado.totalRegistros}</strong>
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "10px" }}>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>⚽ Fútbol</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.futbol}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>🏐 Vóley</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>{resultado.voley}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>🏀 Básquet</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#2196f3" }}>{resultado.basquet}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>♟️ Ajedrez</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#9c27b0" }}>{resultado.ajedrez}</h3>
              </div>
            </div>
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
          <code>{metadataEjercicio17.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}