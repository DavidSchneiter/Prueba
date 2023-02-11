function getMiddle(s) {
  let medio = 0;
  let palabra = "";
  if (s.length > 2) {
    medio = s.length / 2 - 1;
    console.log(medio);
  }
  if (s.length % 2 == 0) {
    palabra = s.substr(medio, 2);
  } else {
    palabra = s.substr(medio, 1);
  }
  return palabra;
}

const a = [
  { name: "a", price: 35 },
  { name: "c", price: 5 },
  { name: "b", price: 5 },
];

function sortear(obj) {
  const array = obj.sort(function (a, b) {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });
  return array;
}

// console.log(sortear(a));

let counter = 1;

function promesa() {
  return new Promise((resolve, reject) => {
    counter = counter + 1;
    resolve(counter);
  });
}

async function getResultsFromPromises(promises) {
  try {
    const results = await Promise.all(promises).then((values) => {
      console.log(values);
    });
    return results;
  } catch (error) {
    console.error(error);
  }
}

console.log("HOLA GIT");
console.log("HOLA GIT 2");

// const b = getResultsFromPromises([promesa(), promesa()]);
// console.log(b);

const c = ["New Folder", "New Folder (2)", "New Folder (3)", "New Folder (4)"];

function nuevoFolders(array) {
  if (array[0] != "New Folder") return "New Folder";
  for (let i = 1; i <= array.length; i++) {
    if (array[i] == `New Folder (${i + 1})`) {
      continue;
    } else {
      return `New Folder (${i + 1})`;
    }
  }
}

console.log(nuevoFolders(c));

// alert(`¡OFERTA!
// Si su compra es menor a $7000, tendrá un descuento del 10%,
// y si su compra es mayor a $7000, su descuento será de 20%. Elija el número del producto que desea comprar:`);

// const productos = [
//   { id: 1, nombre: "Anteojo metal clasico", precio: 8000 },
//   { id: 2, nombre: "Anteojo zilo", precio: 10000 },
//   { id: 3, nombre: "Anteojo tr90", precio: 6000 },
// ];

// let elegirProducto = Number(
//   prompt(`
//                                  Anteojo:                     PRECIO:
//                                  ${productos.map((el) => {
//                                    return `${el.id}-${el.nombre}:     $ ${el.precio} \n`;
//                                  })}

//                                  0-Para acabar y salir.`)
// );

// //Inicializamos las variables que almacenarán las cantidades totales de los productos a comprar, y la variable del monto total.
// let cantidad_1 = 0;
// let cantidad_2 = 0;
// let cantidad_3 = 0;
// let total = 0.0;

// //Función que realiza la acumulación de los montos por cada producto elegido.
// function acumulaTotal(id, cantidad) {
//   const obj = productos.find((producto) => producto.id == id);
//   const precio = obj.precio;
//   total += precio * cantidad;
//   console.log(obj);
//   return total;
// }

// //Frente a la elección de cada producto se pregunta el número a comprar.
// while (elegirProducto != "0") {
//   switch (elegirProducto) {
//     case 1:
//       let cant1 = Number(
//         prompt(`El producto elegido es "Metal Clasico", indique la cantidad: `)
//       );
//       acumulaTotal(elegirProducto, cant1); //acumula el monto total a pagar
//       cantidad_1 += cant1; //acumula la cantidad total del producto 1
//       break;
//     case 2:
//       let cant2 = Number(
//         prompt(`El producto elegido es "Zilo", indique la cantidad: `)
//       );
//       acumulaTotal(elegirProducto, cant2); //acumula el monto total a pagar
//       cantidad_2 += cant2; //acumula la cantidad total del producto 2
//       break;
//     case 3:
//       let cant3 = Number(
//         prompt(`El producto elegido es "TR90", indique la cantidad: `)
//       );
//       acumulaTotal(elegirProducto, cant3); //acumula el monto total a pagar
//       cantidad_3 += cant3; //acumula la cantidad total del producto 3
//       break;
//     default:
//       alert("Ingrese una opción válida.");
//       break;
//   }
//   //Se presenta el menú de elección nuevamente hasta que el usuario elija "0" y salga del menú.
//   elegirProducto = Number(
//     prompt(`
//                                  Anteojo:                     PRECIO:
//                                  ${productos.map((el) => {
//                                    return `${el.id}-${el.nombre}:     $ ${el.precio} \n`;
//                                  })}

//                                  0-Para acabar y salir.`)
//   );
// }

// // Se presenta el resumen de la compra, indicando el precio unitario y las cantidades elegidas
// // Además se indica el monto total a pagar.
// alert(`
//        Resumen de la compra:        PRECIO:           CANT.:
//        ${productos.map((el) => {
//          return `${el.id}-${el.nombre}:     $ ${el.precio} \n`;
//        })}
//        >> ${cantidad_1}
//        >> ${cantidad_2}
//        >> ${cantidad_3}
//        El monto total de la compra es de $ ${total}`);

// let descuento = 0;
// let comentario = "";

// const res = productos.map((el) => {
//   if (el.precio > 7000) {
//     return {
//       name: el.nombre,
//       price: el.precio,
//       descuento: el.precio * 0.2,
//       comentario: "[Monto mayor a $7000, 20% de descuento]",
//     };
//   } else {
//     return {
//       name: el.nombre,
//       price: el.precio,
//       descuento: el.precio * 0.1,
//       comentario: "[Monto menor a $7000, 10% de descuento]",
//     };
//   }
// });
// console.log(res);

// const filtroPrecio = productos.filter((producto) => producto.precio < 7000);

// const listaDeProductos = productos.map((producto) => producto.nombre);

// console.log(listaDeProductos);
// console.log(filtroPrecio);
