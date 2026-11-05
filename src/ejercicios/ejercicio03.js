// src/ejercicios/ejercicio03.js

export const metadataEjercicio03 = {
  id: 3,
  titulo: "Cálculo de Descuento por Monto",
  categoria: "Algoritmos Básicos",
  descripcion:
    "Aplica un 10% de descuento si el monto supera 100, y un 20% si el monto está entre 0 y 100.",
  codigoCSharp: `double monto, descuento;
Console.WriteLine("ingrese monto");
monto = double.Parse(Console.ReadLine());

if (monto > 100)
{
    descuento = monto * 0.1;
    Console.WriteLine("el monto {0} tiene un descuento del {1}", monto, descuento);
}
else if (monto <= 100 && monto > 0)
{
    descuento = monto * 0.2;
    Console.WriteLine("el monto {0} tiene un descuento del {1}", monto, descuento);
}
else
{
    Console.WriteLine("error el monto no puede ser negativo");
}`
};

export function calcularDescuentoMonto(montoInput) {
  const monto = parseFloat(montoInput);

  if (isNaN(monto)) {
    return { error: "Por favor, ingresa un valor numérico válido." };
  }

  if (monto <= 0) {
    return { error: "Error: el monto debe ser mayor que cero." };
  }

  let porcentaje = 0;
  let descuento = 0;

  if (monto > 100) {
    porcentaje = 10;
    descuento = monto * 0.1;
  } else {
    porcentaje = 20;
    descuento = monto * 0.2;
  }

  const montoFinal = monto - descuento;

  return {
    monto,
    porcentaje,
    descuento,
    montoFinal,
    error: null
  };
}