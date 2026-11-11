// src/ejercicios/ejercicio29.js

export const metadataEjercicio29 = {
  id: 29,
  titulo: "Control de Egresos de Caja (Barner)",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Registra egresos diarios partiendo de un fondo de caja inicial de $371.00. El proceso finaliza al ingresar -1 como egreso centinela.",
  codigoCSharp: `double caja, egreso, cont, totalegresos, restocaja;
totalegresos = 0;
caja = 371;
cont = 0;

do
{
    cont = cont + 1;
    Console.Write("Ingrese {0} egreso: ", cont);
    egreso = double.Parse(Console.ReadLine());
    totalegresos = totalegresos + egreso;
    restocaja = caja - totalegresos;
}
while (egreso != -1);

Console.WriteLine("");
Console.WriteLine("El total de egresos es: {0}", totalegresos + 1);
Console.WriteLine("Lo sobrante en caja es: {0}", restocaja - 1);
Console.ReadLine();`
};

export function registrarEgresoCaja(egresoInput, totalEgresosPrevio, fondoCaja = 371) {
  const egreso = parseFloat(egresoInput);

  if (isNaN(egreso)) {
    return { error: "Por favor, ingresa un valor numérico válido." };
  }

  if (egreso === -1) {
    return {
      esCentinela: true,
      totalEgresos: Number(totalEgresosPrevio.toFixed(2)),
      restoCaja: Number((fondoCaja - totalEgresosPrevio).toFixed(2)),
      error: null
    };
  }

  if (egreso < 0) {
    return { error: "El egreso no puede ser negativo (utiliza -1 para finalizar)." };
  }

  const nuevoTotalEgresos = totalEgresosPrevio + egreso;
  const nuevoRestoCaja = fondoCaja - nuevoTotalEgresos;

  return {
    egreso: Number(egreso.toFixed(2)),
    totalEgresos: Number(nuevoTotalEgresos.toFixed(2)),
    restoCaja: Number(nuevoRestoCaja.toFixed(2)),
    esCentinela: false,
    error: null
  };
}