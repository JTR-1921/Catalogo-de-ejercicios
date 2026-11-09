// src/ejercicios/ejercicio21.js

export const metadataEjercicio21 = {
  id: 21,
  titulo: "Operaciones Básicas con Contador",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Realiza la suma, resta, multiplicación y división de dos números repetidamente hasta alcanzar 10 procesos.",
  codigoCSharp: `double num1, num2, c, suma, resta, multiplicacion, division;
c = 0;

do
{
    c = c + 1;
    Console.WriteLine("PROCESO No{0}:", c);
    Console.Write("ingrese primer numero: ");
    num1 = double.Parse(Console.ReadLine());
    Console.Write("ingrese segundo numero: ");
    num2 = double.Parse(Console.ReadLine());

    suma = num1 + num2;
    resta = num1 - num2;
    multiplicacion = num1 * num2;
    division = Math.Round(num1 / num2, 2);

    Console.WriteLine("");
    Console.WriteLine("La suma es: " + suma);
    Console.WriteLine("La resta es : " + resta);
    Console.WriteLine("La multiplicacion es: " + multiplicacion);
    Console.WriteLine("La division es: " + division);
    Console.WriteLine(" ");
}
while (c <= 9);

Console.WriteLine("final del proceso");`
};

export function calcularOperaciones(num1Input, num2Input) {
  const num1 = parseFloat(num1Input);
  const num2 = parseFloat(num2Input);

  if (isNaN(num1) || isNaN(num2)) {
    return { error: "Por favor, ingresa dos números numéricos válidos." };
  }

  const suma = Number((num1 + num2).toFixed(2));
  const resta = Number((num1 - num2).toFixed(2));
  const multiplicacion = Number((num1 * num2).toFixed(2));
  const division = num2 !== 0 ? Number((num1 / num2).toFixed(2)) : "Indefinida (División por 0)";

  return {
    num1,
    num2,
    suma,
    resta,
    multiplicacion,
    division,
    error: null
  };
}