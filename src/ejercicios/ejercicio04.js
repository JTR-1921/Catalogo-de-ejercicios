// src/ejercicios/ejercicio04.js

export const metadataEjercicio04 = {
  id: 4,
  titulo: "Conversión de Segundos Restantes a Minutos",
  categoria: "Algoritmos Básicos",
  descripcion:
    "Calcula cuántos minutos enteros equivalen a una cantidad de segundos dada y cuántos segundos faltan para completar el siguiente minuto exacto.",
  codigoCSharp: `int tiemposegundos, minutos, segundosrestantes;
Console.WriteLine("ingrese el tiempo en segundos");
tiemposegundos = int.Parse(Console.ReadLine());

if (tiemposegundos < 60 && tiemposegundos > 0)
{
    segundosrestantes = 60 - tiemposegundos;
    Console.WriteLine("Le falta {0} segundos para convertirse en minuto", segundosrestantes);
}
else if (tiemposegundos >= 60)
{
    minutos = (tiemposegundos - (tiemposegundos % 60)) / 60;
    segundosrestantes = tiemposegundos % 60;
    Console.WriteLine("equivale a {0} minutos y le faltan {1} segundos para convertirse en minuto", minutos, segundosrestantes);
}
else
{
    Console.WriteLine("la cantidad de segundos debe ser un numero positivo");
}`
};

export function calcularSegundosRestantes(segundosInput) {
  const tiempoSegundos = parseInt(segundosInput, 10);

  if (isNaN(tiempoSegundos)) {
    return { error: "Por favor, ingresa un número entero válido." };
  }

  if (tiempoSegundos <= 0) {
    return { error: "La cantidad de segundos debe ser un número positivo mayor a cero." };
  }

  let minutos = 0;
  let segundosRestantes = 0;
  let faltantesParaSiguienteMinuto = 0;

  if (tiempoSegundos < 60) {
    minutos = 0;
    segundosRestantes = tiempoSegundos;
    faltantesParaSiguienteMinuto = 60 - tiempoSegundos;
  } else {
    minutos = Math.floor(tiempoSegundos / 60);
    segundosRestantes = tiempoSegundos % 60;
    faltantesParaSiguienteMinuto = segundosRestantes === 0 ? 0 : 60 - segundosRestantes;
  }

  return {
    tiempoSegundos,
    minutos,
    segundosRestantes,
    faltantesParaSiguienteMinuto,
    esExacto: segundosRestantes === 0,
    error: null
  };
}