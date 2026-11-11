// src/ejercicios/ejercicio30.js

export const metadataEjercicio30 = {
  id: 30,
  titulo: "Promedio de Notas y Estado",
  categoria: "Estructuras Condicionales",
  descripcion:
    "Evalúa dos notas en escala vigesimal (0-20), calcula el promedio y determina si el estudiante está aprobado o desaprobado.",
  codigoCSharp: `double nota1, nota2, promedio;

Console.Write("ingrese primera nota: ");
nota1 = double.Parse(Console.ReadLine());
Console.Write("ingrese segunda nota: ");
nota2 = double.Parse(Console.ReadLine());

promedio = (nota1 + nota2) / 2;

if (nota1 >= 0 && nota1 <= 20 && nota2 >= 0 && nota2 <= 20)
{
    if (promedio >= 10.5 && promedio <= 20)
    {
        Console.WriteLine("");
        Console.WriteLine("Promedio: " + promedio);
        Console.WriteLine("aprobado");
    }
    else
    {
        Console.WriteLine("");
        Console.WriteLine("Promedio: " + promedio);
        Console.WriteLine("desaprobado");
    }
}
else
{
    Console.WriteLine("");
    Console.WriteLine("ERROR... Las notas ingresadas no se encuentran en la escala vigesimal (0-20)");
}
Console.ReadLine();`
};

export function calcularPromedioNotas(nota1Input, nota2Input) {
  const nota1 = parseFloat(nota1Input);
  const nota2 = parseFloat(nota2Input);

  if (isNaN(nota1) || isNaN(nota2)) {
    return { error: "Por favor, ingresa ambos valores numéricos." };
  }

  if (nota1 < 0 || nota1 > 20 || nota2 < 0 || nota2 > 20) {
    return { error: "ERROR... Las notas ingresadas no se encuentran en la escala vigesimal (0-20)." };
  }

  const promedio = Number(((nota1 + nota2) / 2).toFixed(2));
  const aprobado = promedio >= 10.5;

  return {
    nota1,
    nota2,
    promedio,
    aprobado,
    estado: aprobado ? "APROBADO" : "DESAPROBADO",
    error: null
  };
}