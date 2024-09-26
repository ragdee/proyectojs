//ecomerce royalsextensiones
/*

Productos Disponibles
1 Luxury Shampoo & Acondicionador Kit Precio: $19.900
2 #65 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990
3 Termo Protector Capilar 250ml Precio: $13.990
4 #60 Extensiones Coletas Pony Tail 64 Cm Precio: 159.990

*/

const NOMBREPRODUCTO1 = "Luxury Shampoo & Acondicionador Kit";
let cantidadProducto1=0;
let valorProducto1 = 0;
let seleccion1 = false;

const NOMBREPRODUCTO2 = "#65 Extensiones Coletas Pony Tail 64 Cm";
let cantidadProducto2=0;
let valorProducto2 = 0;
let seleccion2 = false;

const NOMBREPRODUCTO3 = "Termo Protector Capilar 250ml";
let cantidadProducto3=0;
let valorProducto3 = 0;
let seleccion3 = false;

const NOMBREPRODUCTO4 = "#60 Extensiones Coletas Pony Tail 64 Cm";
let cantidadProducto4=0;
let valorProducto4 = 0;
let seleccion4 = false;

let totalValorProductos = (valorProducto1+valorProducto2+valorProducto3+valorProducto4)



function productosSeleccionados() {

    let total = 0;

    if (seleccion1 === true) {
    console.log("1 Luxury Shampoo & Acondicionador Kit Cantidad:" + cantidadProducto1 + "Subtotal: "+(valorProducto1=cantidadProducto1*19900));
    }
    if (seleccion2 === true) {
        console.log("1 #65 Extensiones Coletas Pony Tail 64 Cm" + cantidadProducto2 + "Subtotal: "+(valorProducto2=cantidadProducto2*159990));
    }
    if (seleccion3 === true) {
        console.log("3 Termo Protector Capilar 250ml Cantidad:" + cantidadProducto3 + "Subtotal: "+(valorProducto3=cantidadProducto3*159990));
    }
    if (seleccion4 === true){
        console.log("4 #60 Extensiones Coletas Pony Tail 64 Cm" + cantidadProducto4 + "Subtotal: "+(valorProducto4=cantidadProducto4*13990));
    }
    
    };
    

// Mensaje Inicial
console.log("Bienvenido a Royals Extensiones");
console.log("Productos Disponibles");
console.log("1 Luxury Shampoo & Acondicionador Kit Precio: $19.900");
console.log("2 #65 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
console.log("3 Termo Protector Capilar 250ml Precio: $13.990");
console.log("4 #60 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
console.log("  ");
console.log("Productos en el carrito:");


let casoSwitch = "si";

while (casoSwitch === "si") {
    casoSwitch= prompt("¿Desea Agregar un Producto? R= si o no?");
    if (casoSwitch === "no") {
        console.log("Gracias por su compra. ¡Hasta luego!");
        break;
    }
    else if (casoSwitch === "si"){
        let entrada = prompt("Ingresar el número del producto a comprar");
    
        switch (parseInt(entrada)) {
            case 1:
                alert("Luxury Shampoo & Acondicionador Kit Precio: $19.900");
                cantidadProducto1 = prompt("¿cuantos " + NOMBREPRODUCTO1 + " desea agregar?");
                seleccion1 = true;
                productosSeleccionados();
                break;1
            case 2:
                alert("#65 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
                cantidadProducto2 = prompt("¿cuantos "+ NOMBREPRODUCTO2 + " desea agregar?");
                seleccion2 = true;
                productosSeleccionados();
                break;
            case 3:
                alert("Termo Protector Capilar 250ml Precio: $13.990");
                cantidadProducto3 = prompt("¿cuantos " + NOMBREPRODUCTO3+" desea agregar?");
                seleccion3 = true;
                productosSeleccionados();
                break;
            case 4:
                alert("#60 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
                cantidadProducto4 = prompt("¿cuantos " + NOMBREPRODUCTO4 + " desea agregar?");
                seleccion4 = true;
                productosSeleccionados();
                break;       
            
            default:
                alert("solo responde un articulo");
                break;
            }
    }
    else {
        alert("Por favor, responda 'si' o 'no'.");
        console.log("Total a pagar: $"+totalValorProductos);
    }

}



