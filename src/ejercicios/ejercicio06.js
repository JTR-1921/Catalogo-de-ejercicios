// src/ejercicios/ejercicio06.js

export const metadataEjercicio06 = {
  id: 6,
  titulo: "Suma de los N Primeros Números Naturales",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula la suma acumulada de los primeros N números naturales mediante un bucle for y muestra el desglose de cada iteración.",
  codigoCSharp: `int x, numero, suma;
Console.Write("ingrese el numero N : ");
numero = int.Parse(Console.ReadLine());
suma = 0;

for (x = 1; x <= numero; x = x + 1)
{
    suma = suma + x;
    Console.WriteLine("n{0}: {1}", x, x);
}

Console.WriteLine("");
Console.WriteLine("La suma de la serie es: {0}", suma);`
};

export function calcularSumaNaturales(nInput) {
  const n = parseInt(nInput, 10);

  if (isNaN(n)) {
    return { error: "Por favor, ingresa un número entero válido." };
  }

  if (n <= 0) {
    return { error: "El valor de N debe ser un número entero positivo mayor a 0." };
  }

  let suma = 0;
  const iteraciones = [];

  for (let x = 1; x <= n; x++) {
    suma += x;
    iteraciones.push({ paso: x, valor: x, sumaAcumulada: suma });
  }

  // Fórmula matemática Gauss para verificación opcional: N * (N + 1) / 2
  const sumaFormula = (n * (n + 1)) / 2;

  return {
    n,
    suma,
    sumaFormula,
    iteraciones,
    error: null
  };
}