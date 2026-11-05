// src/ejercicios/ejercicio10.js

export const metadataEjercicio10 = {
  id: 10,
  titulo: "Suma de los Dígitos de un Número",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Descompone un número entero en sus dígitos individuales mediante el residuo módulo 10 y calcula la suma acumulada de todos ellos.",
  codigoCSharp: `int numero, suma, residuo;
suma = 0;
Console.WriteLine("ingresar un numero");
numero = int.Parse(Console.ReadLine());

do
{
    residuo = numero % 10;
    suma = suma + residuo;
    numero = (numero - (numero % 10)) / 10;
}
while (numero != 0);

Console.WriteLine("");
Console.WriteLine("la suma es de los digitos es: {0} ", suma);`
};

export function sumarDigitos(numeroInput) {
  const numOriginal = parseInt(numeroInput, 10);

  if (isNaN(numOriginal)) {
    return { error: "Por favor, ingresa un número entero válido." };
  }

  let numero = Math.abs(numOriginal);
  let suma = 0;
  const pasos = [];

  do {
    const residuo = numero % 10;
    suma += residuo;
    pasos.push({
      digito: residuo,
      numeroRestante: (numero - residuo) / 10,
      sumaAcumulada: suma
    });
    numero = Math.floor(numero / 10);
  } while (numero !== 0);

  return {
    numeroAbsoluto: Math.abs(numOriginal),
    esNegativo: numOriginal < 0,
    suma,
    pasos,
    error: null
  };
}