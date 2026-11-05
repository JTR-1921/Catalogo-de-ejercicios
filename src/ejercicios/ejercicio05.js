// src/ejercicios/ejercicio05.js

export const metadataEjercicio05 = {
  id: 5,
  titulo: "Desglose de Minutos a: Días, Horas y Minutos",
  categoria: "Algoritmos Básicos",
  descripcion:
    "Convierte una cantidad total de minutos en su equivalente exacto en días, horas y minutos restantes.",
  codigoCSharp: `int tiempo, dias, horas, minutos, x;
Console.WriteLine("ingrese un tiempo en minutos");
tiempo = int.Parse(Console.ReadLine());

if (tiempo >= 0)
{
    dias = (tiempo - (tiempo % 60)) / 1440;
    x = tiempo % 1440;
    horas = (x - (x % 60)) / 60;
    minutos = x % 60;
    Console.WriteLine("equivale a {0} dias con {1} horas y {2} minutos", dias, horas, minutos);
}
else
{
    Console.WriteLine("el tiempo no puede ser negativo");
}`
};

export function desglosarMinutos(minutosInput) {
  const tiempo = parseInt(minutosInput, 10);

  if (isNaN(tiempo)) {
    return { error: "Por favor, ingresa un número entero válido." };
  }

  if (tiempo < 0) {
    return { error: "Error: el tiempo no puede ser negativo." };
  }

  const dias = Math.floor(tiempo / 1440);
  const residuoDías = tiempo % 1440;
  const horas = Math.floor(residuoDías / 60);
  const minutos = residuoDías % 60;

  return {
    tiempoTotal: tiempo,
    dias,
    horas,
    minutos,
    error: null
  };
}