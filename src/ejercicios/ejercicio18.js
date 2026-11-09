// src/ejercicios/ejercicio18.js

export const metadataEjercicio18 = {
  id: 18,
  titulo: "Primera Vocal Leída",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Lee caracteres uno a uno y se detiene al detectar la primera vocal (a, e, i, o, u).",
  codigoCSharp: `string caracter;
int x;
x = 1;

do
{
    Console.WriteLine("ingrese caracter");
    caracter = Console.ReadLine();

    if (caracter.Equals("a") || (caracter.Equals("e")) ||
        (caracter.Equals("i")) || (caracter.Equals("o")) || (caracter.Equals("u")))
        x = 0;
}
while (x == 1);

Console.WriteLine("");
Console.WriteLine("La primera vocal ingresada fue: " + caracter);`
};

export function encontrarPrimeraVocal(textoEntrada) {
  if (!textoEntrada || typeof textoEntrada !== "string" || textoEntrada.length === 0) {
    return { error: "Por favor, ingresa un texto o conjunto de caracteres." };
  }

  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  const historialEvaluado = [];
  let primeraVocal = null;
  let posicion = -1;

  for (let i = 0; i < textoEntrada.length; i++) {
    const char = textoEntrada[i];
    const charMinuscula = char.toLowerCase();
    historialEvaluado.push(char);

    if (vocales.includes(charMinuscula)) {
      primeraVocal = char;
      posicion = i + 1;
      break;
    }
  }

  if (!primeraVocal) {
    return {
      encontrada: false,
      historialEvaluado,
      mensaje: "No se encontró ninguna vocal en los caracteres ingresados.",
      error: null
    };
  }

  return {
    encontrada: true,
    primeraVocal,
    posicion,
    historialEvaluado,
    error: null
  };
}