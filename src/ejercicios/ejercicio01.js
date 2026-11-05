// src/ejercicios/ejercicio01.js

export const metadataEjercicio01 = {
  id: 1,
  titulo: "Cálculo de Salario y Horas Extras",
  categoria: "Básicos y Algoritmos",
  descripcion:
    "Calcula el salario total considerando un recargo del 50% en la tarifa para las horas trabajadas que excedan las 40 horas semanales.",
  codigoCSharp: `double tarifa, horastrabajadas, horasextra, salario, tarifaextra;
Console.WriteLine("ingrese horas trabajadas");
horastrabajadas = double.Parse(Console.ReadLine());
Console.WriteLine("ingrese tarifa");
tarifa = double.Parse(Console.ReadLine());

if (horastrabajadas <= 40 && horastrabajadas >= 0)
{
    salario = horastrabajadas * tarifa;
    Console.WriteLine("el salario es: " + salario);
}
else if (horastrabajadas > 40)
{
    horasextra = horastrabajadas - 40;
    tarifaextra = tarifa + 0.5 * tarifa;
    salario = horasextra * tarifaextra + 40 * tarifa;
    Console.WriteLine("el salario es: " + salario);
}
else
{
    Console.WriteLine("las horas trabajadas no pueden ser negativas");
}`
};

export function calcularSalario(horasTrabajadas, tarifa) {
  const horas = parseFloat(horasTrabajadas);
  const tarifaPorHora = parseFloat(tarifa);

  if (isNaN(horas) || isNaN(tarifaPorHora)) {
    return { error: "Por favor, ingresa valores numéricos válidos." };
  }

  if (horas < 0 || tarifaPorHora < 0) {
    return { error: "Las horas trabajadas y la tarifa no pueden ser negativas." };
  }

  let horasNormales = 0;
  let horasExtras = 0;
  let tarifaExtra = tarifaPorHora * 1.5;
  let salarioNormal = 0;
  let salarioExtra = 0;
  let salarioTotal = 0;

  if (horas <= 40) {
    horasNormales = horas;
    salarioNormal = horasNormales * tarifaPorHora;
    salarioTotal = salarioNormal;
  } else {
    horasNormales = 40;
    horasExtras = horas - 40;
    salarioNormal = horasNormales * tarifaPorHora;
    salarioExtra = horasExtras * tarifaExtra;
    salarioTotal = salarioNormal + salarioExtra;
  }

  return {
    horasNormales,
    horasExtras,
    tarifaPorHora,
    tarifaExtra,
    salarioNormal,
    salarioExtra,
    salarioTotal,
    error: null
  };
}