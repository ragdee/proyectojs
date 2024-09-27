//ecomerce royalsextensiones

const NOMBREPRODUCTO1 = "Luxury Shampoo & Acondicionador Kit";
let cantidadProducto1 = 0;
let valorProducto1 = 0;
let seleccion1 = false;

const NOMBREPRODUCTO2 = "#65 Extensiones Coletas Pony Tail 64 Cm";
let cantidadProducto2 = 0;
let valorProducto2 = 0;
let seleccion2 = false;

const NOMBREPRODUCTO3 = "Termo Protector Capilar 250ml";
let cantidadProducto3 = 0;
let valorProducto3 = 0;
let seleccion3 = false;

const NOMBREPRODUCTO4 = "#60 Extensiones Coletas Pony Tail 64 Cm";
let cantidadProducto4 = 0;
let valorProducto4 = 0;
let seleccion4 = false;

function mensajeInicial(){

    console.log("Bienvenido a Royals Extensiones");
    console.log("Productos Disponibles");
    console.log("1 Luxury Shampoo & Acondicionador Kit Precio: $19.900");
    console.log("2 #65 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
    console.log("3 Termo Protector Capilar 250ml Precio: $13.990");
    console.log("4 #60 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
    console.log(" ");    
}

function productosSeleccionados() {
    console.clear(); // Limpia la consola antes de mostrar los productos1 seleccionados
    mensajeInicial();
    console.log("Productos en el carrito:");

    if (seleccion1) {
        valorProducto1 = cantidadProducto1 * 19900;
        console.log("1 Luxury Shampoo & Acondicionador Kit Cantidad: " + cantidadProducto1 +" Subtotal: " + valorProducto1);
    }
    if (seleccion2) {
        valorProducto2 = cantidadProducto2 * 159990;
        console.log("2 #65 Extensiones Coletas Pony Tail 64 Cm Cantidad: " + cantidadProducto2 +" Subtotal: " + valorProducto2);
    }
    if (seleccion3) {
        valorProducto3 = cantidadProducto3 * 13990;
        console.log("3 Termo Protector Capilar 250ml Cantidad: " + cantidadProducto3 +" Subtotal: " + valorProducto3);
    }
    if (seleccion4) {
        valorProducto4 = cantidadProducto4 * 159990;
        console.log("4 #60 Extensiones Coletas Pony Tail 64 Cm Cantidad: " + cantidadProducto4 +" Subtotal: "+ valorProducto4);
    }
}

function calcularTotal() {
    return valorProducto1 + valorProducto2 + valorProducto3 + valorProducto4;
}



mensajeInicial();


let casoSwitch = "";

while (true) {
    casoSwitch = prompt("Si desea agregar un producto, Ingrese una Opcion (1-4) ó (0 para salir)");

    if (casoSwitch == 0) {
        console.log("Total a pagar: $" + calcularTotal());
        console.log("Gracias por su compra. ¡Hasta luego!");
        break;
    } else {
        switch (parseInt(casoSwitch)) {
            case 1:
                alert("Luxury Shampoo & Acondicionador Kit Precio: $19.900");
                cantidadProducto1 = parseInt(prompt(`¿Cuántos ${NOMBREPRODUCTO1} desea agregar?`));
                seleccion1 = true;
                productosSeleccionados();
                break;
            case 2:
                alert("#65 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
                cantidadProducto2 = parseInt(prompt(`¿Cuántos ${NOMBREPRODUCTO2} desea agregar?`));
                seleccion2 = true;
                productosSeleccionados();
                break;
            case 3:
                alert("Termo Protector Capilar 250ml Precio: $13.990");
                cantidadProducto3 = parseInt(prompt(`¿Cuántos ${NOMBREPRODUCTO3} desea agregar?`));
                seleccion3 = true;
                productosSeleccionados();
                break;
            case 4:
                alert("#60 Extensiones Coletas Pony Tail 64 Cm Precio: $159.990");
                cantidadProducto4 = parseInt(prompt(`¿Cuántos ${NOMBREPRODUCTO4} desea agregar?`));
                seleccion4 = true;
                productosSeleccionados();
                break;
            default:
                alert("Opción no válida. Por favor, ingrese un número entre 1 y 4, o 0 para salir.");
        }
    }
}