// src/ejercicios/ejercicio17.js

export const metadataEjercicio17 = {
  id: 17,
  titulo: "Clasificación por Deportes",
  categoria: "Estructuras Repetitivas",
  descripcion:
    "Clasifica personas según el deporte que practican (Fútbol, Básquet, Vóley y Ajedrez) validando la entrada.",
  codigoCSharp: `string deporte;
int vole, fut, aje, basq, c;
vole = 0;
fut = 0;
aje = 0;
basq = 0;
c = 1;

Console.WriteLine("LOS DEPORTES A INGRESAR PUEDEN SER FUTBOL, BASQUET, VOLEY Y AJEDREZ");

do
{
    c = c + 1;
    Console.Write("Ingrese deporte del {0}o alumno : ", c - 1);
    deporte = (Console.ReadLine());

    if (deporte == "voley")
    {
        vole = vole + 1;
    }
    else if (deporte == "futbol")
    {
        fut = fut + 1;
    }
    else if (deporte == "basquet")
    {
        basq = basq + 1;
    }
    else if (deporte == "ajedrez")
    {
        aje = aje + 1;
    }
    else
    {
        Console.WriteLine("error deporte no valido");
    }
}
while (c <= 10);

Console.WriteLine("");
Console.WriteLine("cantidad de voley: " + vole);
Console.WriteLine("cantidad de futbol: " + fut);
Console.WriteLine("cantidad de basquet: " + basq);
Console.WriteLine("cantidad de ajedrez: " + aje);`
};

export function clasificarDeportes(listaDeportes) {
  if (!Array.isArray(listaDeportes) || listaDeportes.length === 0) {
    return { error: "No hay registros de deportes para clasificar." };
  }

  let voley = 0;
  let futbol = 0;
  let basquet = 0;
  let ajedrez = 0;
  let invalidos = 0;

  listaDeportes.forEach((item) => {
    const dep = (item || "").toString().trim().toLowerCase();
    if (dep === "voley" || dep === "vóley") {
      voley++;
    } else if (dep === "futbol" || dep === "fútbol") {
      futbol++;
    } else if (dep === "basquet" || dep === "básquet") {
      basquet++;
    } else if (dep === "ajedrez") {
      ajedrez++;
    } else {
      invalidos++;
    }
  });

  return {
    totalRegistros: listaDeportes.length,
    voley,
    futbol,
    basquet,
    ajedrez,
    invalidos,
    error: null
  };
}