var factura = {
    numero: 201,
    cliente: "Libreria Milagrosa",
    divisa: "dolares",
    total: 600,
    IVA: 0.13
}
var numeroFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFactura = factura.total;
console.log('La factura ' + numeroFactura + ' es de ' + totalFactura + '' + monedaFactura)