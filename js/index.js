window.onload = function () {
    let form = document.getElementById("form");
    form.addEventListener("submit", logSubmit);
    form.onload = changeTotalPrice();

}

function logSubmit(event) {
    event.preventDefault();
}


function changeHoteles() {
    let value = document.getElementById("numberHotel").value;
    if (value >= 1 && value <= 50) {
        document.getElementById("priceHotel").innerHTML = value * 60;
    }
    else {
        document.getElementById("numberHotel").value = 1;
        document.getElementById("priceHotel").innerHTML = 60;

    }
    changeTotalPrice()
}

function changeVuelos() {
    let value = document.getElementById("vueloSelect").value;
    document.getElementById("priceVuelo").innerHTML = value;
    changeTotalPrice()
}


function changeCoche() {
    let value = document.getElementById("numberCoche").value;
    let price = 0;
    if (value >= 1 && value <= 50) {
        if (value >= 7) {
            price = value * 40 - 50

        } else if (value >= 3) {
            price = value * 40 - 20;

        } else {
            price = value * 40;
        }
        document.getElementById("priceCoche").innerHTML = price;

    }
    else {
        document.getElementById("numberCoche").value = 1;
        document.getElementById("priceCoche").innerHTML = 40;

    }
    changeTotalPrice();

}


function changeTotalPrice() {
    let hotel = Number.parseInt(document.getElementById("priceHotel").innerHTML);
    let vuelo = Number.parseInt(document.getElementById("priceVuelo").innerHTML);
    let coche = Number.parseInt(document.getElementById("priceCoche").innerHTML);

    console.log("h: "+hotel+ " v:"+vuelo+" c: "+coche);
    document.getElementById("totalPrice").innerHTML = hotel + vuelo + coche;


}