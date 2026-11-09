// src/ejercicios/ejercicio14.js

export const metadataEjercicio14 = {
  id: 14,
  titulo: "Media de 100 Números",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula el promedio (media) de 100 números ingresados por el usuario.",
  codigoCSharp: `double suma, media, x, numero;
suma = 0;
for (x = 1; x <= 100; x = x + 1)
{
    Console.Write("ingrese {0}o numero: ", x);
    numero = double.Parse(Console.ReadLine());
    suma = suma + numero;
}
media = Math.Round(suma / 100, 2);
Console.WriteLine("");
Console.WriteLine("la media de los 100 numero ingresados es: " + media);`
};

export function calcularMedia(listaNumeros) {
  if (!Array.isArray(listaNumeros) || listaNumeros.length === 0) {
    return { error: "Ingresa al menos un número para calcular la media." };
  }

  let suma = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    const num = parseFloat(listaNumeros[i]);
    if (isNaN(num)) {
      return { error: `El valor en la posición #${i + 1} no es válido.` };
    }
    suma += num;
  }

  const media = Number((suma / listaNumeros.length).toFixed(2));

  return {
    totalElementos: listaNumeros.length,
    suma: Number(suma.toFixed(2)),
    media,
    error: null
  };
}