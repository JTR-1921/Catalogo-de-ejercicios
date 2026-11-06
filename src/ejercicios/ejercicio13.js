// src/ejercicios/ejercicio13.js

export const metadataEjercicio13 = {
  id: 13,
  titulo: "Factorial de un Número",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Calcula el factorial N! de un número entero no negativo utilizando un bucle iterativo.",
  codigoCSharp: `int numero, factorial, i;
Console.Write("ingresar numero: ");
numero = int.Parse(Console.ReadLine());

factorial = 1;
for (i = 1; i <= numero; i++)
    factorial = factorial * i; //factorial *= i

Console.WriteLine("");
Console.WriteLine("Factorial: ");
Console.WriteLine(" {0}! = {1} ", numero, factorial);`
};

export function calcularFactorial(numeroInput) {
  const num = parseInt(numeroInput, 10);

  if (isNaN(num) || num < 0) {
    return { error: "Por favor, ingresa un número entero no negativo (>= 0)." };
  }

  if (num > 20) {
    return { error: "Por razones de precisión numérica, ingresa un número menor o igual a 20." };
  }

  let factorial = 1;
  const desglose = [];

  for (let i = 1; i <= num; i++) {
    factorial *= i;
    desglose.push(i);
  }

  return {
    numero: num,
    factorial,
    desglose,
    error: null
  };
}