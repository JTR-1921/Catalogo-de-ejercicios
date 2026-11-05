// src/ejercicios/ejercicio02.js

export const metadataEjercicio02 = {
  id: 2,
  titulo: "Descuento Escalonado de Sueldo",
  categoria: "Básicos y Algoritmos",
  descripcion:
    "Calcula el descuento progresivo aplicado al sueldo según tramos (10% hasta 1000, 5% entre 1000 y 2000, y 3% por encima de 2000) para obtener el sueldo neto.",
  codigoCSharp: `double sueldo, sueldoneto, descuento;
Console.WriteLine("ingrese el sueldo");
sueldo = double.Parse(Console.ReadLine());

if (sueldo <= 1000 && sueldo >= 0)
{
    descuento = sueldo * 0.1;
    sueldoneto = sueldo - descuento;
    Console.WriteLine("el descuento es: {0} y el sueldo neto es: {1}", descuento, sueldoneto);
}
else if (sueldo <= 2000 && sueldo >= 0)
{
    descuento = (sueldo - 1000) * 0.05 + (1000 * 0.1);
    sueldoneto = sueldo - descuento;
    Console.WriteLine("el descuento es: {0} y el sueldo neto es: {1}", descuento, sueldoneto);
}
else if (sueldo > 2000)
{
    descuento = (sueldo - 2000) * 0.03 + (1000 * 0.05) + (1000 * 0.10);
    sueldoneto = sueldo - descuento;
    Console.WriteLine("el descuento es: {0} y el sueldo neto es: {1}", descuento, sueldoneto);
}
else
{
    Console.WriteLine("error el sueldo no puede ser negativo");
}`
};

export function calcularDescuentoSueldo(sueldoInput) {
  const sueldo = parseFloat(sueldoInput);

  if (isNaN(sueldo)) {
    return { error: "Por favor, ingresa un valor numérico válido." };
  }

  if (sueldo < 0) {
    return { error: "Error: el sueldo no puede ser negativo." };
  }

  let descuento = 0;

  if (sueldo <= 1000) {
    descuento = sueldo * 0.10;
  } else if (sueldo <= 2000) {
    descuento = (1000 * 0.10) + ((sueldo - 1000) * 0.05);
  } else {
    descuento = (1000 * 0.10) + (1000 * 0.05) + ((sueldo - 2000) * 0.03);
  }

  const sueldoNeto = sueldo - descuento;

  return {
    sueldoBruto: sueldo,
    descuento,
    sueldoNeto,
    error: null
  };
}