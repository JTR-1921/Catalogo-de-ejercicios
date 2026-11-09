// src/ejercicios/ejercicio24.js

export const metadataEjercicio24 = {
  id: 24,
  titulo: "Área de Triángulo (Fórmula de Herón)",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Calcula el área de un triángulo cualquiera dados sus tres lados utilizando la Fórmula de Herón.",
  codigoCSharp: `double ladoa, ladob, ladoc, sm, areatriangulo;

Console.Write("ingrese lado A: ");
ladoa = double.Parse(Console.ReadLine());
Console.Write("ingrese lado B: ");
ladob = double.Parse(Console.ReadLine());
Console.Write("ingrese lado C: ");
ladoc = double.Parse(Console.ReadLine());

sm = (ladoa + ladob + ladoc) / 2;
areatriangulo = Math.Round(Math.Sqrt(sm * (sm - ladoa) * (sm - ladob) * (sm - ladoc)), 2);

Console.WriteLine("El area del triangulo es: " + areatriangulo);
Console.ReadLine();`
};

export function calcularAreaTriangulo(ladoAInput, ladoBInput, ladoCInput) {
  const a = parseFloat(ladoAInput);
  const b = parseFloat(ladoBInput);
  const c = parseFloat(ladoCInput);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return { error: "Ingresa valores numéricos positivos para los tres lados." };
  }

  // Validación de la desigualdad triangular
  if (a + b <= c || a + c <= b || b + c <= a) {
    return { error: "Los lados ingresados no forman un triángulo válido (la suma de dos lados debe ser mayor al tercero)." };
  }

  const semiperimetro = (a + b + c) / 2;
  const area = Math.sqrt(
    semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c)
  );

  return {
    ladoA: a,
    ladoB: b,
    ladoC: c,
    semiperimetro: Number(semiperimetro.toFixed(2)),
    area: Number(area.toFixed(2)),
    error: null
  };
}