// src/ejercicios/ejercicio15.js

export const metadataEjercicio15 = {
  id: 15,
  titulo: "Suma y Producto de Pares en Rango",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Calcula la suma acumulada y el producto continuo de todos los números pares dentro de un rango determinado (ej. 20 a 30).",
  codigoCSharp: `int suma, producto, x;
suma = 0;
producto = 1;
for (x = 20; x <= 30; x = x + 2)
{
    suma = suma + x;
    producto = producto * x;
}
Console.WriteLine("Rango : numeros pares del 20 al 30");
Console.WriteLine("");
Console.WriteLine("La suma es: " + suma);
Console.WriteLine("El producto es: " + producto);`
};

export function calcularSumaProductoPares(inicioInput = 20, finInput = 30) {
  const inicio = parseInt(inicioInput, 10);
  const fin = parseInt(finInput, 10);

  if (isNaN(inicio) || isNaN(fin)) {
    return { error: "Por favor, ingresa números enteros válidos para el rango." };
  }

  if (inicio > fin) {
    return { error: "El inicio del rango no puede ser mayor que el fin." };
  }

  let suma = 0;
  let producto = BigInt(1);
  const pares = [];

  const primerPar = inicio % 2 === 0 ? inicio : inicio + 1;

  for (let i = primerPar; i <= fin; i += 2) {
    suma += i;
    producto *= BigInt(i);
    pares.push(i);
  }

  if (pares.length === 0) {
    return { error: "No hay números pares en el rango seleccionado." };
  }

  return {
    inicio,
    fin,
    pares,
    suma,
    producto: producto.toString(),
    error: null
  };
}