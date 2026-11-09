// src/componentes/Ejercicio14UI.jsx
import { useState } from "react";
import { calcularMedia, metadataEjercicio14 } from "../ejercicios/ejercicio14";

export function Ejercicio14UI() {
  const [numeros, setNumeros] = useState([
    15, 22, 8, 40, 10, 33, 17, 25, 12, 18
  ]);
  const [nuevoNumero, setNuevoNumero] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const agregarNumero = () => {
    if (nuevoNumero.trim() !== "") {
      setNumeros([...numeros, nuevoNumero]);
      setNuevoNumero("");
    }
  };

  const generar100Aleatorios = () => {
    const aleatorios = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
    setNumeros(aleatorios);
  };

  const limpiarLista = () => setNumeros([]);
  const resultado = calcularMedia(numeros);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 14: {metadataEjercicio14.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio14.descripcion}</p>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px", alignItems: "center" }}>
        <input
          type="number"
          value={nuevoNumero}
          onChange={(e) => setNuevoNumero(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarNumero()}
          placeholder="Ingresa número"
          style={{ padding: "8px 12px", borderRadius: "4px", border: "1px solid #444", backgroundColor: "#2a2a2a", color: "#fff", width: "140px" }}
        />
        <button onClick={agregarNumero} style={{ padding: "8px 14px", backgroundColor: "#646cff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          + Agregar
        </button>
        <button onClick={generar100Aleatorios} style={{ padding: "8px 14px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          🎲 Generar 100 aleatorios
        </button>
        <button onClick={limpiarLista} style={{ padding: "8px 14px", backgroundColor: "#c62828", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          🗑 Limpiar
        </button>
      </div>

      <div style={{ maxHeight: "80px", overflowY: "auto", display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px", padding: "8px", background: "#141414", borderRadius: "6px" }}>
        {numeros.map((n, idx) => (
          <span key={idx} style={{ backgroundColor: "#2a2a2a", border: "1px solid #444", padding: "2px 8px", borderRadius: "12px", fontSize: "0.8rem", color: "#aaa" }}>
            {n}
          </span>
        ))}
      </div>

      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px" }}>
            <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Total elementos</span>
              <h3 style={{ margin: "4px 0 0 0" }}>{resultado.totalElementos}</h3>
            </div>
            <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Suma acumulada</span>
              <h3 style={{ margin: "4px 0 0 0" }}>{resultado.suma}</h3>
            </div>
            <div style={{ background: "#1e1e1e", padding: "10px", borderRadius: "4px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", color: "#aaa" }}>Media / Promedio</span>
              <h3 style={{ margin: "4px 0 0 0", color: "#646cff" }}>{resultado.media}</h3>
            </div>
          </div>
        )}
      </div>

      <button onClick={() => setVerCodigo(!verCodigo)} style={{ marginTop: "16px", padding: "8px 14px", cursor: "pointer", background: "#333", color: "#fff", border: "1px solid #555", borderRadius: "4px" }}>
        {verCodigo ? "Ocultar código C#" : "Ver código C# original"}
      </button>

      {verCodigo && (
        <pre style={{ background: "#121212", color: "#d4d4d4", padding: "12px", borderRadius: "6px", overflowX: "auto", fontSize: "14px", marginTop: "12px", border: "1px solid #333" }}>
          <code>{metadataEjercicio14.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}