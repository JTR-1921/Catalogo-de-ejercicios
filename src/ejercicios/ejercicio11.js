// src/ejercicios/ejercicio11.js

export const metadataEjercicio11 = {
  id: 11,
  titulo: "Emisión de Factura de Compra",
  categoria: "Estructuras Condicionales",
  descripcion:
    "Genera el detalle de una factura de compra aplicando el 15% de IVA y un descuento del 5% si el precio bruto es mayor o igual a 50.00 pesetas.",
  codigoCSharp: `double precio, numeroarticulos, precioventa, descuento, preciobruto, iva, totalpagar;

Console.Write("ingrese el precio: ");
precio = double.Parse(Console.ReadLine());
Console.Write("ingrese numero de articulos: ");
numeroarticulos = double.Parse(Console.ReadLine());

precioventa = precio * numeroarticulos;
iva = Math.Round(precioventa * 0.15, 2);
preciobruto = precioventa + iva;

if (preciobruto >= 50)
{
    descuento = Math.Round((preciobruto * 5) / 100, 2);
}
else
{
    descuento = 0;
}

totalpagar = preciobruto - descuento;

Console.WriteLine(" ");
Console.WriteLine(" Datos de la factura ");
Console.WriteLine(" ");
Console.WriteLine(" Precio de venta : " + precioventa);
Console.WriteLine(" Impuesto sobre el valor añadido (IVA) es: " + iva);
Console.WriteLine(" Precio bruto es : " + preciobruto);
Console.WriteLine(" Descuento es : " + descuento);
Console.WriteLine(" Total a pagar: " + totalpagar);`
};

export function calcularFactura(precioInput, cantidadInput) {
  const precio = parseFloat(precioInput);
  const cantidad = parseInt(cantidadInput, 10);

  if (isNaN(precio) || precio <= 0) {
    return { error: "Por favor, ingresa un precio unitario válido mayor a 0." };
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    return { error: "Por favor, ingresa una cantidad de artículos válida mayor a 0." };
  }

  const precioVenta = precio * cantidad;
  const iva = Number((precioVenta * 0.15).toFixed(2));
  const precioBruto = Number((precioVenta + iva).toFixed(2));

  const aplicaDescuento = precioBruto >= 50;
  const descuento = aplicaDescuento ? Number(((precioBruto * 5) / 100).toFixed(2)) : 0;
  const totalPagar = Number((precioBruto - descuento).toFixed(2));

  return {
    precio,
    cantidad,
    precioVenta,
    iva,
    precioBruto,
    aplicaDescuento,
    descuento,
    totalPagar,
    error: null
  };
}