// src/ejercicios/ejercicio19.js

export const metadataEjercicio19 = {
  id: 19,
  titulo: "Verificación de Parte Fraccionaria",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Determina si un número real ingresado tiene o no parte fraccionaria (decimales).",
  codigoCSharp: `double numero, pf;
Console.WriteLine("ingrese un numero");
numero = double.Parse(Console.ReadLine());

pf = Math.Truncate(numero);

if (numero == pf)
    Console.WriteLine("no tiene parte fraccionaria");
else
    Console.WriteLine("tiene parte fraccionaria");`
};

export function verificarParteFraccionaria(numeroInput) {
  if (numeroInput === "" || numeroInput === null || numeroInput === undefined) {
    return { error: "Por favor, ingresa un número." };
  }

  const numero = parseFloat(numeroInput);

  if (isNaN(numero)) {
    return { error: "El valor ingresado no es un número válido." };
  }

  const parteEntera = Math.trunc(numero);
  const tieneFraccionaria = numero !== parteEntera;
  const parteFraccionaria = Number(Math.abs(numero - parteEntera).toFixed(6));

  return {
    numero,
    parteEntera,
    parteFraccionaria,
    tieneFraccionaria,
    mensaje: tieneFraccionaria ? "Tiene parte fraccionaria" : "No tiene parte fraccionaria",
    error: null
  };
}