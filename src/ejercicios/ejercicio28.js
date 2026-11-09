// src/ejercicios/ejercicio28.js

export const metadataEjercicio28 = {
  id: 28,
  titulo: "Suma de Serie (8 a N)",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula la suma consecutiva de números enteros desde 8 hasta un número enésimo N ingresado por el usuario.",
  codigoCSharp: `int numero, suma, x;
suma = 0;
Console.Write("Ingrese el numero enesimo: ");
numero = int.Parse(Console.ReadLine());

if (numero < 8)
{
    Console.WriteLine("");
    Console.WriteLine("Error el numero ingresado es menor a 8");
}
else
{
    for (x = 8; x <= numero; x = x + 1)
    {
        suma = suma + x;
    }
    Console.WriteLine("");
    Console.WriteLine("La suma de la serie de rango 8 hasta {0}, con un incremento de 1 es: {1}", numero, suma);
}
Console.ReadLine();`
};

export function calcularSumaSerie8aN(nInput) {
  const n = parseInt(nInput, 10);

  if (isNaN(n)) {
    return { error: "Por favor, ingresa un número entero válido." };
  }

  if (n < 8) {
    return { error: "Error: El número ingresado debe ser mayor o igual a 8." };
  }

  let suma = 0;
  const desglosado = [];
  for (let x = 8; x <= n; x++) {
    suma += x;
    if (n - 8 <= 15 || x === 8 || x === n || x === 9) {
      desglosado.push(x);
    }
  }

  return {
    n,
    suma,
    desglosado,
    totalElementos: n - 8 + 1,
    error: null
  };
}