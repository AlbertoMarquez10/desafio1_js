const precio = 400000


precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
let cantidadInicial = document.querySelector('.cantidad')
let total = document.querySelector('.valor-total')

function sumarCantidad(){
    let cantNueva = Number(cantidadInicial.innerHTML) + 1
    cantidadInicial.innerHTML = cantNueva
    let totalFinal = precio * cantNueva
    total.innerHTML = totalFinal

}
function restarCantidad(){
    let cantResta = Number(cantidadInicial.innerHTML) - 1
    cantidadInicial.innerHTML = cantResta
    let totalResta = precio * cantResta
    total.innerHTML = totalResta
    if (cantResta < 0){
        cantidadInicial.innerHTML = 0
        totalResta = 0
        total.innerHTML = totalResta
        alert("La cantidad de productos no puede ser menor que cero")
    }
}