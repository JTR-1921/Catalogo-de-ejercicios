// src/ejercicios/ejercicio23.js

export const metadataEjercicio23 = {
  id: 23,
  titulo: "Operaciones con Freno por Cero",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula suma, diferencia, producto y división repetidamente hasta ingresar un primer número igual a 0.",
  codigoCSharp: `double num1, num2, c, suma, resta, multiplicacion, division;
c = 0;
do
{
    c = c + 1;
    Console.WriteLine("PROCESO No{0}:", c);
    Console.Write("ingrese primer numero: ");
    num1 = double.Parse(Console.ReadLine());
    if (num1 != 0)
    {
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
}
while (num1 != 0);
Console.WriteLine(" ");
Console.WriteLine("FINAL DEL PROCESO");`
};

export function calcularOperacionesCentinela(num1Input, num2Input) {
  const num1 = parseFloat(num1Input);
  
  if (isNaN(num1)) {
    return { error: "Ingresa un primer número válido." };
  }

  if (num1 === 0) {
    return { esCentinela: true, error: null };
  }

  const num2 = parseFloat(num2Input);
  if (isNaN(num2)) {
    return { error: "Ingresa un segundo número válido." };
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
    esCentinela: false,
    error: null
  };
}
