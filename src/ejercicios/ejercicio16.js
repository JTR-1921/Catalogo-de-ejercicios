// src/ejercicios/ejercicio16.js

export const metadataEjercicio16 = {
  id: 16,
  titulo: "Control de Acceso a la Fiesta",
  categoria: "Estructuras Condicionales",
  descripcion:
    "Valida el ingreso secuencial de 5 claves secretas. Si todas coinciden exactamente, permite el acceso a la fiesta.",
  codigoCSharp: `string c1, c2, c3, c4, c5;

Console.Write("ingrese primera clave: ");
c1 = Console.ReadLine();
if (c1 != "tienes")
    Console.WriteLine("TE EQUIVOCASTE DE FIESTA");
else
{
    Console.Write("ingrese segunda clave: ");
    c2 = Console.ReadLine();
    if (c2 != "que ser")
        Console.WriteLine("TE EQUIVOCASTE DE FIESTA");
    else
    {
        Console.Write("ingrese tercera clave: ");
        c3 = Console.ReadLine();
        if (c3 != "invitado")
            Console.WriteLine("TE EQUIVOCASTE DE FIESTA");
        else
        {
            Console.Write("ingrese cuarta clave: ");
            c4 = Console.ReadLine();
            if (c4 != "para")
                Console.WriteLine("TE EQUIVOCASTE DE FIESTA");
            else
            {
                Console.Write("ingrese quinta clave: ");
                c5 = Console.ReadLine();
                if (c5 != "ingresar")
                    Console.WriteLine("TE EQUIVOCASTE DE FIESTA");
                else
                {
                    Console.WriteLine("");
                    Console.WriteLine("BIENVENIDO A LA FIESTA");
                }
            }
        }
    }
}`
};

export function validarClavesAcceso(claves) {
  const clavesCorrectas = ["tienes", "que ser", "invitado", "para", "ingresar"];

  if (!claves || typeof claves !== "object") {
    return { accesoConcedido: false, mensaje: "TE EQUIVOCASTE DE FIESTA", pasoFallido: 1 };
  }

  const c1 = (claves.c1 || "").trim().toLowerCase();
  const c2 = (claves.c2 || "").trim().toLowerCase();
  const c3 = (claves.c3 || "").trim().toLowerCase();
  const c4 = (claves.c4 || "").trim().toLowerCase();
  const c5 = (claves.c5 || "").trim().toLowerCase();

  const entradas = [c1, c2, c3, c4, c5];

  for (let i = 0; i < clavesCorrectas.length; i++) {
    if (entradas[i] !== clavesCorrectas[i]) {
      return {
        accesoConcedido: false,
        mensaje: "TE EQUIVOCASTE DE FIESTA",
        pasoFallido: i + 1
      };
    }
  }

  return {
    accesoConcedido: true,
    mensaje: "BIENVENIDO A LA FIESTA",
    pasoFallido: null
  };
}