// src/ejercicios/ejercicio20.js

export const metadataEjercicio20 = {
  id: 20,
  titulo: "Ecuación Cuadrática Completa",
  categoria: "Algoritmos Matemáticos",
  descripcion:
    "Calcula las soluciones reales y complejas (imaginarias) de una ecuación de segundo grado aX² + bX + c = 0.",
  codigoCSharp: `Console.Title = "soluciones de la ecuacion cuadratica";
double coefA, coefB, coefC, disc, s1, s2, s3, raiz1, raiz2, raizima1, raizima2;

Console.WriteLine("dada la ecuacion aX2 + bx + c = 0 ingresar los coeficientes a,b,c para calcular las posibles valores de X");
Console.WriteLine();
Console.WriteLine("ingrese el coeficiente a");
coefA = double.Parse(Console.ReadLine());
Console.WriteLine("ingrese el coeficiente b");
coefB = double.Parse(Console.ReadLine());
Console.WriteLine("ingrese el coeficiente c");
coefC = double.Parse(Console.ReadLine());

disc = (Math.Pow(coefB, 2) - 4 * coefA * coefC);

if (coefA == 0)
    Console.WriteLine("esta no es una ecuacion cuadratica coeficiente 'a' debe ser diferente de 0");
else if (disc > 0)
{
    s1 = Math.Round((-coefB + Math.Pow(disc, 0.5)) / (2 * coefA), 2);
    s2 = Math.Round((-coefB - Math.Pow(disc, 0.5)) / (2 * coefA), 2);
    Console.WriteLine(" el discriminante es positivo y se han obtenido las siguientes soluciones: x1 = {0} y x2 = {1}", s1, s2);
}
else if (disc == 0)
{
    s3 = Math.Round((-coefB / (2 * coefA)), 2);
    Console.WriteLine(" el discriminante es 0 se obtiene la siguiente solucion: s = {0}", s3);
}
else if ((4 * coefA * coefC) > (Math.Pow(coefB, 2)))
{
    raiz1 = Math.Round(-coefB / (2 * coefA), 3);
    raizima1 = Math.Round(Math.Sqrt((4 * coefA * coefC) - Math.Pow(coefB, 2)) / (2 * coefA), 4);
    raiz2 = Math.Round(-coefB / (2 * coefA), 3);
    raizima2 = Math.Round(-Math.Sqrt((4 * coefA * coefC) - Math.Pow(coefB, 2)) / (2 * coefA), 4);
    Console.WriteLine(" discrimiante es {0} se obtienen las siguientes raices imaginarias:x1 = {1}+i({2}) , x2= {3}+i({4})", disc, raiz1, raizima1, raiz2, raizima2);
}`
};

export function calcularEcuacionCuadratica(aInput, bInput, cInput) {
  const a = parseFloat(aInput);
  const b = parseFloat(bInput);
  const c = parseFloat(cInput);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return { error: "Por favor, ingresa coeficientes numéricos válidos." };
  }

  if (a === 0) {
    return { error: "Esta no es una ecuación cuadrática: el coeficiente 'a' debe ser diferente de 0." };
  }

  const discriminante = Math.pow(b, 2) - 4 * a * c;

  if (discriminante > 0) {
    const x1 = Number(((-b + Math.sqrt(discriminante)) / (2 * a)).toFixed(2));
    const x2 = Number(((-b - Math.sqrt(discriminante)) / (2 * a)).toFixed(2));
    return {
      tipo: "reales_distintas",
      discriminante: Number(discriminante.toFixed(2)),
      x1: `x₁ = ${x1}`,
      x2: `x₂ = ${x2}`,
      mensaje: "El discriminante es positivo. Se obtienen dos soluciones reales distintas.",
      error: null
    };
  } else if (discriminante === 0) {
    const x = Number((-b / (2 * a)).toFixed(2));
    return {
      tipo: "real_unica",
      discriminante: 0,
      x1: `x = ${x}`,
      x2: null,
      mensaje: "El discriminante es 0. Se obtiene una única solución real (raíz doble).",
      error: null
    };
  } else {
    const parteReal = Number((-b / (2 * a)).toFixed(3));
    const parteImaginaria = Number((Math.sqrt(-discriminante) / (2 * a)).toFixed(4));
    const absImg = Math.abs(parteImaginaria);

    return {
      tipo: "imaginarias",
      discriminante: Number(discriminante.toFixed(2)),
      x1: `x₁ = ${parteReal} + ${absImg}i`,
      x2: `x₂ = ${parteReal} - ${absImg}i`,
      mensaje: "El discriminante es negativo. Se obtienen dos raíces complejas imaginarias.",
      error: null
    };
  }
}