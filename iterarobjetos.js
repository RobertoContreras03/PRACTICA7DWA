const producto = {
    nombre: "Laptop",
    precio: 8000,
    disponible: true
};
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}