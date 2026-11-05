// src/App.jsx
import { useState } from "react";
import { Ejercicio01UI } from "./componentes/Ejercicio01UI";
import { Ejercicio02UI } from "./componentes/Ejercicio02UI";
import { Ejercicio03UI } from "./componentes/Ejercicio03UI";
import { Ejercicio04UI } from "./componentes/Ejercicio04UI";
import { Ejercicio05UI } from "./componentes/Ejercicio05UI";
import { Ejercicio06UI } from "./componentes/Ejercicio06UI";
import { Ejercicio07UI } from "./componentes/Ejercicio07UI";
import { Ejercicio08UI } from "./componentes/Ejercicio08UI";
import { Ejercicio09UI } from "./componentes/Ejercicio09UI";
import { Ejercicio10UI } from "./componentes/Ejercicio10UI";

export default function App() {
  const listaEjercicios = [
    { id: 1, numero: "01", titulo: "Cálculo de Salario", categoria: "Algoritmos Básicos", descripcion: "Calcula el salario mensual a partir de horas trabajadas y tarifa horaria.", componente: <Ejercicio01UI /> },
    { id: 2, numero: "02", titulo: "Promedio de Calificaciones", categoria: "Algoritmos Básicos", descripcion: "Calcula el promedio final de tres calificaciones parciales.", componente: <Ejercicio02UI /> },
    { id: 3, numero: "03", titulo: "Volumen de un Cilindro", categoria: "Algoritmos Matemáticos", descripcion: "Calcula el volumen de un cilindro dado su radio y su altura.", componente: <Ejercicio03UI /> },
    { id: 4, numero: "04", titulo: "Comisión de Ventas", categoria: "Estructuras Condicionales", descripcion: "Determina el sueldo neto sumando la comisión correspondiente según las ventas.", componente: <Ejercicio04UI /> },
    { id: 5, numero: "05", titulo: "Ecuación Cuadrática", categoria: "Algoritmos Matemáticos", descripcion: "Calcula las raíces reales o complejas de una ecuación de segundo grado.", componente: <Ejercicio05UI /> },
    { id: 6, numero: "06", titulo: "Suma N Naturales", categoria: "Estructuras Repetitivas", descripcion: "Calcula la suma acumulada de los primeros N números naturales.", componente: <Ejercicio06UI /> },
    { id: 7, numero: "07", titulo: "Suma de Salarios", categoria: "Estructuras Repetitivas", descripcion: "Calcula el salario individual de N trabajadores y la suma acumulada total.", componente: <Ejercicio07UI /> },
    { id: 8, numero: "08", titulo: "Salario Simple", categoria: "Algoritmos Básicos", descripcion: "Cálculo directo de salario multiplicando horas por tarifa.", componente: <Ejercicio08UI /> },
    { id: 9, numero: "09", titulo: "Estadísticas de Notas", categoria: "Estructuras Repetitivas", descripcion: "Clasifica N notas en aprobadas y desaprobadas con promedios específicos.", componente: <Ejercicio09UI /> },
    { id: 10, numero: "10", titulo: "Suma de Dígitos", categoria: "Algoritmos Matemáticos", descripcion: "Suma los dígitos individuales de cualquier número entero ingresado.", componente: <Ejercicio10UI /> }
  ];

  const TARJETAS_POR_PAGINA = 6;
  const [paginaActual, setPaginaActual] = useState(0);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

  const totalPaginas = Math.ceil(listaEjercicios.length / TARJETAS_POR_PAGINA);
  const inicio = paginaActual * TARJETAS_POR_PAGINA;
  const ejerciciosVisibles = listaEjercicios.slice(inicio, inicio + TARJETAS_POR_PAGINA);

  return (
    <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#646cff", marginBottom: "6px" }}>Catálogo Modular C# a React</h1>
        <p style={{ color: "#aaa", margin: 0 }}>
          Página {paginaActual + 1} de {totalPaginas} | {listaEjercicios.length} ejercicios registrados
        </p>

        {/* Controles del Carrusel */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", marginTop: "16px" }}>
          <button
            onClick={() => setPaginaActual((prev) => Math.max(0, prev - 1))}
            disabled={paginaActual === 0}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #444",
              backgroundColor: paginaActual === 0 ? "#222" : "#646cff",
              color: paginaActual === 0 ? "#555" : "#fff",
              cursor: paginaActual === 0 ? "not-allowed" : "pointer",
              fontWeight: "bold"
            }}
          >
            ◀ Anterior
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {Array.from({ length: totalPaginas }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPaginaActual(idx)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: paginaActual === idx ? "#646cff" : "#444",
                  cursor: "pointer"
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setPaginaActual((prev) => Math.min(totalPaginas - 1, prev + 1))}
            disabled={paginaActual === totalPaginas - 1}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #444",
              backgroundColor: paginaActual === totalPaginas - 1 ? "#222" : "#646cff",
              color: paginaActual === totalPaginas - 1 ? "#555" : "#fff",
              cursor: paginaActual === totalPaginas - 1 ? "not-allowed" : "pointer",
              fontWeight: "bold"
            }}
          >
            Siguiente ▶
          </button>
        </div>
      </header>

      {/* Si hay un ejercicio seleccionado, se muestra arriba en grande */}
      {ejercicioSeleccionado && (
        <section style={{ marginBottom: "40px", animation: "fadeIn 0.3s ease" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <span style={{ color: "#aaa", fontSize: "0.9rem" }}>Ejercicio activo: #{ejercicioSeleccionado.numero}</span>
            <button
              onClick={() => setEjercicioSeleccionado(null)}
              style={{
                padding: "6px 12px",
                backgroundColor: "#ce3939",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ✕ Cerrar Ejercicio
            </button>
          </div>
          {ejercicioSeleccionado.componente}
        </section>
      )}

      {/* Grid de 6 Tarjetas Compactas */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "20px"
        }}
      >
        {ejerciciosVisibles.map((ej) => {
          const estaActivo = ejercicioSeleccionado?.id === ej.id;
          return (
            <div
              key={ej.id}
              style={{
                backgroundColor: estaActivo ? "#2a2d42" : "#1e1e1e",
                border: `1px solid ${estaActivo ? "#646cff" : "#333"}`,
                borderRadius: "8px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ backgroundColor: "#646cff22", color: "#646cff", padding: "2px 8px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold" }}>
                    Ejercicio {ej.numero}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#888" }}>{ej.categoria}</span>
                </div>
                <h3 style={{ margin: "6px 0", color: "#fff", fontSize: "1.1rem" }}>{ej.titulo}</h3>
                <p style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: "1.4", minHeight: "38px" }}>{ej.descripcion}</p>
              </div>

              <button
                onClick={() => setEjercicioSeleccionado(ej)}
                style={{
                  marginTop: "14px",
                  padding: "10px",
                  backgroundColor: estaActivo ? "#4caf50" : "#2a2a2a",
                  color: "#fff",
                  border: `1px solid ${estaActivo ? "#4caf50" : "#444"}`,
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.2s"
                }}
              >
                {estaActivo ? "✓ Viendo este ejercicio" : "Ejecutar Ejercicio ▶"}
              </button>
            </div>
          );
        })}
      </main>
    </div>
  );
}
