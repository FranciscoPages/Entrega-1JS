// Simulador de Tienda Online

const productos = [
    { id: 1, nombre: "Camisa", precio: 3000 },
    { id: 2, nombre: "Pantalón", precio: 5000 },
    { id: 3, nombre: "Zapatillas", precio: 10000 }
];

let carrito = [];

alert("Bienvenido a la Tienda Online");

let seguirComprando = true;

while (seguirComprando) {
    let listaProductos = "Elige un producto:\n";
    productos.forEach(producto => {
        listaProductos += `${producto.id} - ${producto.nombre} ($${producto.precio})\n`;
    });

    let opcion = parseInt(prompt(listaProductos));

    let productoElegido = productos.find(prod => prod.id === opcion);

    if (productoElegido) {
        carrito.push(productoElegido);
        alert(`${productoElegido.nombre} agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }

    seguirComprando = confirm("¿Querés seguir comprando?");
}

let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);

console.log("Productos en tu carrito:");
carrito.forEach(producto => console.log(`${producto.nombre} - $${producto.precio}`));
console.log(`Total a pagar: $${total}`);

alert(`Gracias por tu compra. Total: $${total}`);
