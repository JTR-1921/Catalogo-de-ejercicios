// src/ejercicios/ejercicio08.js

export const metadataEjercicio08 = {
  id: 8,
  titulo: "Cálculo de Salario Simple",
  categoria: "Algoritmos Básicos",
  descripcion:
    "Calcula el salario total de un trabajador multiplicando las horas trabajadas por la tarifa por hora ingresada.",
  codigoCSharp: `double horastrabajadas, tarifa, salario;
Console.Write("ingrese horas trabajadas: ");
horastrabajadas = double.Parse(Console.ReadLine());
Console.Write("ingrese tarifa: ");
tarifa = double.Parse(Console.ReadLine());

salario = horastrabajadas * tarifa;
Console.WriteLine("El salario del trabajador es: " + salario);
Console.ReadLine();`
};

export function calcularSalarioSimple(horasInput, tarifaInput) {
  const horas = parseFloat(horasInput);
  const tarifa = parseFloat(tarifaInput);

  if (isNaN(horas) || isNaN(tarifa)) {
    return { error: "Por favor, ingresa números válidos para horas y tarifa." };
  }

  if (horas < 0 || tarifa < 0) {
    return { error: "Las horas y la tarifa no pueden ser valores negativos." };
  }

  const salario = horas * tarifa;

  return {
    horas,
    tarifa,
    salario,
    error: null
  };
}