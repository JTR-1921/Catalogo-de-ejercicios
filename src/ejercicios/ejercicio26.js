// src/ejercicios/ejercicio26.js

export const metadataEjercicio26 = {
  id: 26,
  titulo: "Geometría del Círculo y Esfera",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Calcula la longitud de la circunferencia, el área del círculo y el volumen de la esfera dado un radio.",
  codigoCSharp: `double pi, radio, area, volumen, longitud;
pi = 3.14;

Console.Write("Ingrese el radio de la circunferencia: ");
radio = int.Parse(Console.ReadLine());

longitud = 2 * pi * radio;
area = Math.Round(pi * Math.Pow(radio, 2), 2);
volumen = Math.Round((4 / 3) * pi * Math.Pow(radio, 3), 2);

Console.WriteLine("");
Console.WriteLine("Longitud de la circunferencia: " + longitud);
Console.WriteLine("Area de la circunferencia: " + area);
Console.WriteLine("Volumen de la circunferencia: " + volumen);
Console.ReadLine();`
};

export function calcularGeometriaCirculo(radioInput) {
  const radio = parseFloat(radioInput);

  if (isNaN(radio) || radio <= 0) {
    return { error: "Por favor, ingresa un radio numérico mayor a 0." };
  }

  const pi = Math.PI;
  const longitud = 2 * pi * radio;
  const area = pi * Math.pow(radio, 2);
  const volumen = (4 / 3) * pi * Math.pow(radio, 3);

  return {
    radio,
    longitud: Number(longitud.toFixed(2)),
    area: Number(area.toFixed(2)),
    volumen: Number(volumen.toFixed(2)),
    error: null
  };
}