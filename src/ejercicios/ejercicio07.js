// src/ejercicios/ejercicio07.js

export const metadataEjercicio07 = {
  id: 7,
  titulo: "Suma de Salarios de Múltiples Trabajadores",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula el salario individual de N trabajadores a partir de sus horas trabajadas y tarifa por hora, y obtiene la suma total acumulada.",
  codigoCSharp: `double x, salario, horastrabajadas, tarifa, suma, numerotrabajadores;
suma = 0;
Console.Write("ingrese la cantidad de trabajadores: ");
numerotrabajadores = double.Parse(Console.ReadLine());

for (x = 1; x <= numerotrabajadores; x = x + 1)
{
    Console.WriteLine(" trabajador {0}: ", x);
    Console.Write(" horas trabajasdas : ");
    horastrabajadas = double.Parse(Console.ReadLine());
    Console.Write(" tarifa : ");
    tarifa = double.Parse(Console.ReadLine());
    Console.WriteLine("");
    salario = horastrabajadas * tarifa;
    suma = suma + salario;
}

Console.WriteLine("la suma de los salarios es : {0}", suma);`
};

export function calcularSumaSalarios(trabajadores) {
  if (!Array.isArray(trabajadores) || trabajadores.length === 0) {
    return { error: "Debe ingresar al menos un trabajador." };
  }

  let sumaTotal = 0;
  const desglose = [];

  for (let i = 0; i < trabajadores.length; i++) {
    const t = trabajadores[i];
    const horas = parseFloat(t.horasTrabajadas);
    const tarifa = parseFloat(t.tarifa);

    if (isNaN(horas) || isNaN(tarifa) || horas < 0 || tarifa < 0) {
      return { error: `Revisa los datos del Trabajador #${i + 1}: Horas y tarifa deben ser valores numéricos válidos y positivos.` };
    }

    const salario = horas * tarifa;
    sumaTotal += salario;

    desglose.push({
      id: i + 1,
      horas,
      tarifa,
      salario
    });
  }

  return {
    sumaTotal,
    desglose,
    cantidad: trabajadores.length,
    error: null
  };
}