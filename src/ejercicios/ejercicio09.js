// src/ejercicios/ejercicio09.js

export const metadataEjercicio09 = {
  id: 9,
  titulo: "Estadísticas y Promedios de N Notas",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Procesa N notas de un estudiante (escala 0-20), clasificándolas en aprobadas (> 10.5) y desaprobadas (<= 10.5), calculando promedios individuales y el promedio general.",
  codigoCSharp: `double promedio, ca, cd, x, nota, acumuladasdesapro, acumuladasapro, acumuladas, promedioaprobadas, promediodesaprobadas;
string resp;
x = 1;
ca = 0;
cd = 0;
acumuladas = 0;
acumuladasapro = 0;
acumuladasdesapro = 0;

do
{
    Console.Write(" Introduce la nota: ");
    nota = int.Parse(Console.ReadLine());
    Console.Write(" ¿deseas ingresar otra nota?: ");
    resp = Console.ReadLine();
    Console.WriteLine("");

    if (nota <= 10.5 && nota >= 0)
    {
        cd = cd + 1;
        acumuladasdesapro = acumuladasdesapro + nota;
    }
    else if (nota > 10.5 && nota <= 20)
    {
        ca = ca + 1;
        acumuladasapro = acumuladasapro + nota;
    }

    acumuladas = acumuladas + nota;
    x = cd + ca;
    promedioaprobadas = Math.Round(acumuladasapro / ca, 1);
    promediodesaprobadas = Math.Round(acumuladasdesapro / cd, 1);
    promedio = Math.Round(acumuladas / x, 1);
}
while (resp == "si");

Console.Clear();
Console.WriteLine("la cantidad de notas desaprobadas es: " + cd);
Console.WriteLine("la cantidad de notas aprobadas es: " + ca);
Console.WriteLine("el promedio de las notas aprobadas es: " + promedioaprobadas);
Console.WriteLine("el promedio de las notas desaprobadas es: " + promediodesaprobadas);
Console.WriteLine("el promedio final es: " + promedio);`
};

export function calcularEstadisticasNotas(listaNotas) {
  if (!Array.isArray(listaNotas) || listaNotas.length === 0) {
    return { error: "Ingresa al menos una nota para calcular los resultados." };
  }

  let ca = 0; // Cantidad aprobadas
  let cd = 0; // Cantidad desaprobadas
  let acumuladasApro = 0;
  let acumuladasDesapro = 0;
  let acumuladasTotal = 0;

  for (let i = 0; i < listaNotas.length; i++) {
    const nota = parseFloat(listaNotas[i]);

    if (isNaN(nota) || nota < 0 || nota > 20) {
      return { error: `La nota #${i + 1} (${listaNotas[i]}) debe ser un número válido entre 0 y 20.` };
    }

    if (nota <= 10.5) {
      cd += 1;
      acumuladasDesapro += nota;
    } else {
      ca += 1;
      acumuladasApro += nota;
    }

    acumuladasTotal += nota;
  }

  const totalNotas = listaNotas.length;
  const promedioGeneral = (acumuladasTotal / totalNotas).toFixed(1);
  const promedioAprobadas = ca > 0 ? (acumuladasApro / ca).toFixed(1) : "N/A";
  const promedioDesaprobadas = cd > 0 ? (acumuladasDesapro / cd).toFixed(1) : "N/A";

  return {
    totalNotas,
    ca,
    cd,
    promedioGeneral: parseFloat(promedioGeneral),
    promedioAprobadas: ca > 0 ? parseFloat(promedioAprobadas) : null,
    promedioDesaprobadas: cd > 0 ? parseFloat(promedioDesaprobadas) : null,
    error: null
  };
}