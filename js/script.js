class Pizera {
    constructor(flavour, size, crust, toppings, number, delivery) {
        this.flavour = flavour;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
        this.delivery = delivery;
    }
}

$(document).ready(() => {
    $('.submit').click((e) => {
        e.preventDefault()

        const flavour = $('.flavour').val();
        const size = $('.size').val();
        const crust = $('.crust').val();
        const toppins = $("toppings").val();
        const number = $('#number').val();
        console.log(toppins);
    })
})