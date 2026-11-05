// src/componentes/Ejercicio07UI.jsx
import { useState } from "react";
import { calcularSumaSalarios, metadataEjercicio07 } from "../ejercicios/ejercicio07";

export function Ejercicio07UI() {
  const [cantidadTrabajadores, setCantidadTrabajadores] = useState(2);
  const [trabajadores, setTrabajadores] = useState([
    { horasTrabajadas: "40", tarifa: "250" },
    { horasTrabajadas: "45", tarifa: "300" }
  ]);
  const [verCodigo, setVerCodigo] = useState(false);

  const handleCantidadChange = (nuevaCantidad) => {
    const num = Math.max(1, Math.min(20, parseInt(nuevaCantidad, 10) || 1));
    setCantidadTrabajadores(num);

    setTrabajadores((prev) => {
      const actualizados = [...prev];
      if (num > actualizados.length) {
        for (let i = actualizados.length; i < num; i++) {
          actualizados.push({ horasTrabajadas: "40", tarifa: "200" });
        }
      } else {
        actualizados.length = num;
      }
      return actualizados;
    });
  };

  const handleInputChange = (index, field, value) => {
    const actualizados = [...trabajadores];
    actualizados[index] = { ...actualizados[index], [field]: value };
    setTrabajadores(actualizados);
  };

  const resultado = calcularSumaSalarios(trabajadores);

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-DO", {
      style: "currency",
      currency: "DOP"
    }).format(valor);

  return (
    <div style={{ border: "1px solid #333", borderRadius: "8px", padding: "20px", backgroundColor: "#1e1e1e" }}>
      <h2>Ejercicio 07: {metadataEjercicio07.titulo}</h2>
      <p style={{ color: "#aaa" }}>{metadataEjercicio07.descripcion}</p>

      {/* Control de número de trabajadores */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
          Cantidad de trabajadores:
        </label>
        <input
          type="number"
          min="1"
          max="20"
          value={cantidadTrabajadores}
          onChange={(e) => handleCantidadChange(e.target.value)}
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2a2a2a",
            color: "#fff",
            width: "120px"
          }}
        />
      </div>

      {/* Formulario de entradas */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        {trabajadores.map((t, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "110px 1fr 1fr",
              gap: "12px",
              alignItems: "center",
              backgroundColor: "#252526",
              padding: "10px 14px",
              borderRadius: "6px",
              border: "1px solid #3c3c3c"
            }}
          >
            <span style={{ fontWeight: "bold", color: "#646cff" }}>Trabajador #{index + 1}:</span>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#aaa" }}>Horas Trab.:</label>
              <input
                type="number"
                min="0"
                value={t.horasTrabajadas}
                onChange={(e) => handleInputChange(index, "horasTrabajadas", e.target.value)}
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  border: "1px solid #444",
                  backgroundColor: "#1e1e1e",
                  color: "#fff"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", color: "#aaa" }}>Tarifa/Hora (RD$):</label>
              <input
                type="number"
                min="0"
                value={t.tarifa}
                onChange={(e) => handleInputChange(index, "tarifa", e.target.value)}
                style={{
                  width: "100%",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  border: "1px solid #444",
                  backgroundColor: "#1e1e1e",
                  color: "#fff"
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Panel de Resultados */}
      <div style={{ background: "#252526", padding: "16px", borderRadius: "6px", border: "1px solid #3c3c3c" }}>
        {resultado.error ? (
          <p style={{ color: "#f44336", margin: 0 }}>{resultado.error}</p>
        ) : (
          <div>
            <h3 style={{ margin: "0 0 12px 0", color: "#4caf50" }}>
              Suma Total de Salarios: {formatoMoneda(resultado.sumaTotal)}
            </h3>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ backgroundColor: "#1e1e1e", borderBottom: "1px solid #3a3a3a" }}>
                    <th style={{ padding: "6px 10px" }}>#</th>
                    <th style={{ padding: "6px 10px" }}>Horas</th>
                    <th style={{ padding: "6px 10px" }}>Tarifa</th>
                    <th style={{ padding: "6px 10px" }}>Salario Calculado</th>
                  </tr>
                </thead>
                <tbody>
                  {resultado.desglose.map((item) => (
                    <tr key={item.id} style={{ borderBottom: "1px solid #2d2d2d" }}>
                      <td style={{ padding: "6px 10px", color: "#646cff" }}>Trabajador #{item.id}</td>
                      <td style={{ padding: "6px 10px" }}>{item.horas} hrs</td>
                      <td style={{ padding: "6px 10px" }}>{formatoMoneda(item.tarifa)}</td>
                      <td style={{ padding: "6px 10px", color: "#4caf50" }}>{formatoMoneda(item.salario)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Código C# */}
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
          <code>{metadataEjercicio07.codigoCSharp}</code>
        </pre>
      )}
    </div>
  );
}