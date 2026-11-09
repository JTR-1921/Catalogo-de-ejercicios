// src/ejercicios/ejercicio25.js

export const metadataEjercicio25 = {
  id: 25,
  titulo: "Teorema de Pitágoras (Hipotenusa)",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Calcula la hipotenusa de un triángulo rectángulo ingresando los dos catetos.",
  codigoCSharp: `double catetoa, catetob, hipotenusa;
Console.Write("Ingrese primer cateto: ");
catetoa = double.Parse(Console.ReadLine());
Console.Write("Ingrese segundo cateto: ");
catetob = double.Parse(Console.ReadLine());

hipotenusa = Math.Round(Math.Pow(Math.Pow(catetoa, 2) + Math.Pow(catetob, 2), 0.5), 2);

Console.WriteLine("");
Console.WriteLine("La hipotenusa es: {0}", hipotenusa);
Console.ReadLine();`
};

export function calcularHipotenusa(catetoAInput, catetoBInput) {
  const a = parseFloat(catetoAInput);
  const b = parseFloat(catetoBInput);

  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    return { error: "Por favor, ingresa valores numéricos positivos para ambos catetos." };
  }

  const hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  return {
    catetoA: a,
    catetoB: b,
    hipotenusa: Number(hipotenusa.toFixed(2)),
    error: null
  };
}