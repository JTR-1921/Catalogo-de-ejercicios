// src/componentes/Ejercicio10UI.jsx
import { useState } from "react";
import { sumarDigitos, metadataEjercicio10 } from "../ejercicios/ejercicio10";

export function Ejercicio10UI() {
  const [numero, setNumero] = useState("");
  const [verCodigo, setVerCodigo] = useState(false);

  const resultado = sumarDigitos(numero);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 10: {metadataEjercicio10.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio10.descripcion}</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "6px" }}>Ingresa un número entero:</label>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Ej: 4587"
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "100%",
            maxWidth: "250px"
          }}
        />
      </div>

      {numero !== "" && (
        <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
          {resultado.error ? (
            <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
          ) : (
            <div>
              <p style={{ margin: "4px 0 12px 0" }}>
                <strong>Dígitos a sumar:</strong>{" "}
                {resultado.pasos.map((p) => p.digito).reverse().join(" + ")}
              </p>

              <h3 style={{ margin: "0 0 14px 0", color: "#4caf50" }}>
                La suma de los dígitos es: {resultado.suma}
              </h3>

              {/* Visualización en tabla del proceso paso a paso */}
              <div style={{ maxHeight: "200px", overflowY: "auto", border: "1px solid #3a3a3a", borderRadius: "4px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#1e1e1e", borderBottom: "1px solid #3a3a3a" }}>
                      <th style={{ padding: "6px 10px" }}>Paso</th>
                      <th style={{ padding: "6px 10px" }}>Dígito Extraído (Residuo)</th>
                      <th style={{ padding: "6px 10px" }}>Suma Parcial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultado.pasos.map((paso, idx) => (
                      <tr key={idx} style={{ borderBottom: "1px solid #2d2d2d" }}>
                        <td style={{ padding: "6px 10px", color: "#aaa" }}>Paso #{idx + 1}</td>
                        <td style={{ padding: "6px 10px", color: "#646cff", fontWeight: "bold" }}>{paso.digito}</td>
                        <td style={{ padding: "6px 10px", color: "#4caf50" }}>{paso.sumaAcumulada}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
          <code>{metadataEjercicio10.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}