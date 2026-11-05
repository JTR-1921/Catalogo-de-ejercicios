// src/ejercicios/ejercicio12.js

export const metadataEjercicio12 = {
  id: 12,
  titulo: "Clasificación de 50 Números",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Evalúa una serie de 50 números enteros para contar cuántos son pares, impares, positivos y negativos.",
  codigoCSharp: `int x, numero, positivos, negativos, pares, impares;
pares = 0;
impares = 0;
positivos = 0;
negativos = 0;

for (x = 1; x <= 50; x = x + 1)
{
    Console.Write("ingrese {0}o numero: ", x);
    numero = int.Parse(Console.ReadLine());

    if (numero % 2 == 0)
    {
        pares = pares + 1;
    }
    else
    {
        impares = impares + 1;
    }

    if (numero > 0)
    {
        positivos = positivos + 1;
    }
    else
    {
        negativos = negativos + 1;
    }
}

Console.WriteLine(" ");
Console.WriteLine("la cantidad de numeros pares es: " + pares);
Console.WriteLine("la cantidad de numeros impares es: " + impares);
Console.WriteLine("la cantidad de numeros negativos es: " + negativos);
Console.WriteLine("la cantidad de numeros positivos es: " + positivos);`
};

export function clasificarNumeros(listaNumeros) {
  if (!Array.isArray(listaNumeros) || listaNumeros.length === 0) {
    return { error: "Ingresa al menos un número para realizar la clasificación." };
  }

  let pares = 0;
  let impares = 0;
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    const num = parseInt(listaNumeros[i], 10);

    if (isNaN(num)) {
      return { error: `El valor en la posición #${i + 1} (${listaNumeros[i]}) no es un número entero válido.` };
    }

    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }

    if (num > 0) {
      positivos++;
    } else if (num < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  return {
    totalProcesados: listaNumeros.length,
    pares,
    impares,
    positivos,
    negativos,
    ceros,
    error: null
  };
}