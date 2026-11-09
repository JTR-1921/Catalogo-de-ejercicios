// src/ejercicios/ejercicio27.js

export const metadataEjercicio27 = {
  id: 27,
  titulo: "Consumos de Restaurante con Descuento",
  categoria: "Estructuras Repetitivas y Condicionales",
  descripcion:
    "Procesa consumos de un restaurante (hasta 130). Aplica un 15% de descuento a consumos mayores a $130 y calcula el total acumulado.",
  codigoCSharp: `double consumo, descuento, total, c;
c = 1;
total = 0;

do
{
    c = c + 1;
    Console.Write("Ingrese {0}o consumo: ", c - 1);
    consumo = double.Parse(Console.ReadLine());

    if (consumo > 130)
    {
        descuento = consumo * 0.15;
    }
    else
    {
        descuento = 0;
    }

    consumo = consumo - descuento;
    total = total + consumo;
}
while (c <= 130);

Console.WriteLine("");
Console.WriteLine("El total de los consumos es: " + total);
Console.WriteLine("FIN DEL PROCESO");
Console.ReadLine();`
};

export function calcularConsumoRestaurante(montoInput) {
  const monto = parseFloat(montoInput);

  if (isNaN(monto) || monto <= 0) {
    return { error: "Por favor, ingresa un monto numérico válido mayor a 0." };
  }

  const aplicaDescuento = monto > 130;
  const descuento = aplicaDescuento ? monto * 0.15 : 0;
  const consumoFinal = monto - descuento;

  return {
    montoOriginal: Number(monto.toFixed(2)),
    aplicaDescuento,
    descuento: Number(descuento.toFixed(2)),
    consumoFinal: Number(consumoFinal.toFixed(2)),
    error: null
  };
}