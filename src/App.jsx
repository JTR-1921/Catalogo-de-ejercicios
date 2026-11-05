// src/App.jsx
import { useState } from "react";
import { Ejercicio01UI } from "./componentes/Ejercicio01UI";
import { Ejercicio02UI } from "./componentes/Ejercicio02UI";
import { Ejercicio03UI } from "./componentes/Ejercicio03UI";
import { Ejercicio04UI } from "./componentes/Ejercicio04UI";
import { Ejercicio05UI } from "./componentes/Ejercicio05UI";
import { Ejercicio06UI } from "./componentes/Ejercicio06UI";
import { Ejercicio07UI } from "./componentes/Ejercicio07UI";


export default function App() {
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

  // Registro centralizado de los 30 ejercicios
  const listaEjercicios = [
    {
      id: 1,
      numero: "01",
      titulo: "Salario y Horas Extras",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio01UI />
    },
    {
      id: 2,
      numero: "02",
      titulo: "Descuento Escalonado",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio02UI />
    },
    {
      id: 3,
      numero: "03",
      titulo: "Cálculo de Descuento por Monto",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio03UI />
    },
    {
      id: 4,
      numero: "04",
      titulo: "Conversión de Segundos Restantes a Minutos",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio04UI />
    }, 
    {
      id: 5,
      numero: "05",
      titulo: "Desglose de Minutos a: Días, Horas y Minutos",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio05UI />
    },
    {
      id: 6,
      numero: "06",
      titulo: "Suma de los N Primeros Números Naturales",
      categoria: "Estructuras Repetitivas",
      componente: <Ejercicio06UI />
    },
    {
      id: 7,
      numero: "07",
      titulo: "Cálculo de Suma de Salarios",
      categoria: "Algoritmos Básicos",
      componente: <Ejercicio07UI />
    },
  ];

  const ejercicioActivo = listaEjercicios.find((e) => e.id === ejercicioSeleccionado);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px 16px", fontFamily: "sans-serif" }}>
      {/* Encabezado General */}
      <header style={{ marginBottom: "32px", borderBottom: "1px solid #333", paddingBottom: "16px" }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: "2rem" }}>Catálogo C# en React</h1>
        <p style={{ color: "#aaa", margin: 0 }}>
          Proyecto Final — {listaEjercicios.length} de 30 ejercicios implementados
        </p>
      </header>

      {/* Vista 1: Panel de Cuadrícula (Menú de Ejercicios) */}
      {!ejercicioActivo ? (
        <section>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#646cff" }}>Ejercicios</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px"
            }}
          >
            {listaEjercicios.map((ej) => (
              <div
                key={ej.id}
                onClick={() => setEjercicioSeleccionado(ej.id)}
                style={{
                  backgroundColor: "#1e1e1e",
                  border: "1px solid #333",
                  borderRadius: "10px",
                  padding: "16px",
                  cursor: "pointer",
                  transition: "transform 0.2s, border-color 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#646cff";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#2a2a2a",
                      color: "#646cff",
                      fontWeight: "bold",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      marginBottom: "10px"
                    }}
                  >
                    #{ej.numero}
                  </div>
                  <h3 style={{ margin: "0 0 6px 0", fontSize: "1.05rem", color: "#fff" }}>
                    {ej.titulo}
                  </h3>
                </div>
                <span style={{ fontSize: "0.75rem", color: "#888", marginTop: "12px" }}>
                  {ej.categoria}
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* Vista 2: Ejercicio Individual en Pantalla Completa */
        <section>
          <button
            onClick={() => setEjercicioSeleccionado(null)}
            style={{
              backgroundColor: "#2a2a2a",
              color: "#fff",
              border: "1px solid #444",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            ← Volver a Ejercicios
          </button>

          {ejercicioActivo.componente}
        </section>
      )}
    </div>
  );
}