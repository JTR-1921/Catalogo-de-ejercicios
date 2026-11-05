// src/componentes/Ejercicio12UI.jsx
import { useState } from "react";
import { clasificarNumeros, metadataEjercicio12 } from "../ejercicios/ejercicio12";

export function Ejercicio12UI() {
  const [numeros, setNumeros] = useState([
    12, -5, 8, 0, -14, 23, 44, -9, 17, -2,
    30, 11, -8, 15, -20, 7, 0, -3, 18, 25
  ]);
  const [nuevoNumero, setNuevoNumero] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const agregarNumero = () => {
    if (nuevoNumero.trim() !== "") {
      setNumeros([...numeros, nuevoNumero]);
      setNuevoNumero("");
    }
  };

  const generar50Aleatorios = () => {
    const aleatorios = Array.from({ length: 50 }, () => Math.floor(Math.random() * 201) - 100);
    setNumeros(aleatorios);
  };

  const limpiarLista = () => {
    setNumeros([]);
  };

  const resultado = clasificarNumeros(numeros);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 12: {metadataEjercicio12.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio12.descripcion}</p>

      {/* Controles para añadir / generar */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <input
          type="number"
          value={nuevoNumero}
          onChange={(e) => setNuevoNumero(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarNumero()}
          placeholder="Ingresa número"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "140px"
          }}
        />
        <button
          onClick={agregarNumero}
          style={{ padding: "8px 14px", backgroundColor: "#646cff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          + Agregar
        </button>
        <button
          onClick={generar50Aleatorios}
          style={{ padding: "8px 14px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🎲 Generar 50 aleatorios
        </button>
        <button
          onClick={limpiarLista}
          style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          🗑 Limpiar
        </button>
      </div>

      {/* Chips de lista de números */}
      <div style={{ maxHeight: "100px", overflowY: "auto", display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px", padding: "8px", background: "#141414", borderRadius: "6px" }}>
        {numeros.map((n, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: "#2a2a2a",
              border: "1px solid #444",
              padding: "2px 8px",
              borderRadius: "12px",
              fontSize: "0.8rem",
              color: n > 0 ? "#81c784" : n < 0 ? "#e57373" : "#aaa"
            }}
          >
            {n}
          </span>
        ))}
      </div>

      {/* Resultados métricos */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <p style={{ margin: "0 0 12px 0", color: "#aaa", fontSize: "0.85rem" }}>
              Total de números procesados: <strong>{resultado.totalProcesados}</strong>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Pares</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#646cff" }}>{resultado.pares}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Impares</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#ff9800" }}>{resultado.impares}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Positivos</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#4caf50" }}>{resultado.positivos}</h3>
              </div>
              <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Negativos / Cero</span>
                <h3 style={{ margin: "4px 0 0 0", color: "#f44336" }}>{resultado.negativos + resultado.ceros}</h3>
              </div>
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
          <code>{metadataEjercicio12.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}