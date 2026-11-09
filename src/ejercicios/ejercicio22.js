// src/ejercicios/ejercicio22.js

export const metadataEjercicio22 = {
  id: 22,
  titulo: "Cubo y Raíz Cuadrada (Freno en 0)",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula el cubo y la raíz cuadrada de números ingresados repetidamente hasta que el usuario ingresa el valor 0.",
  codigoCSharp: `double numero, c, cubo, raizcuadrada;
c = 0;

do
{
    c = c + 1;
    Console.WriteLine("PROCESO No{0}:", c);
    Console.Write("ingrese un numero: ");
    numero = double.Parse(Console.ReadLine());

    if (numero != 0)
    {
        cubo = Math.Pow(numero, 3);
        raizcuadrada = Math.Round(Math.Pow(numero, 0.5), 2);

        Console.WriteLine("El cubo es: " + cubo);
        Console.WriteLine("La raiz cuadrada es: " + raizcuadrada);
        Console.WriteLine("");
    }
}
while (numero != 0);

Console.WriteLine("");
Console.WriteLine("FINAL DEL PROCESO");`
};

export function calcularCuboYRaiz(numeroInput) {
  const numero = parseFloat(numeroInput);

  if (isNaN(numero)) {
    return { error: "Por favor, ingresa un número válido." };
  }

  if (numero === 0) {
    return { esCentinela: true, error: null };
  }

  const cubo = Number(Math.pow(numero, 3).toFixed(2));
  let raizcuadrada = null;

  if (numero < 0) {
    const parteImaginaria = Number(Math.sqrt(Math.abs(numero)).toFixed(2));
    raizcuadrada = `${parteImaginaria}i (Imaginaria)`;
  } else {
    raizcuadrada = Number(Math.sqrt(numero).toFixed(2));
  }

  return {
    numero,
    cubo,
    raizcuadrada,
    esCentinela: false,
    error: null
  };
}