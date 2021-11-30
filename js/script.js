$(document).ready(() => {
    $('.submit').click(() => {
        const flavour = parseInt($('.flavour').val());
        const pSize = parseInt($('.size').val());
        const pCrust = parseInt($('.pcrust').val());
        const pToppins = parseInt($('.p_toppins').val());
        const pNum = parseInt($('.p_numb').val());
        // const gPrice = parseInt($('.grand_total').val());
        if (flavour == '') {
            alert('choose flavour');
        } else if (pSize == '') {
            alert('Pick pizza size');
        } else if (pCrust == '') {
            alert('choose crust')
        } else if (pToppins == '') {
            alert('pick toppins')
        } else if (pNum == '') {
            alert('Please enter quantity')
        } else {
            const total = (flavour + pSize + pCrust + pToppins) * pNum;
            $('.totalCheck').text(total);
            localStorage.setItem("total", total);
        }

    })

    $('.grand_total').click(() => {
        const grandName = $('.delName').val();
        const grandTot = $('.delLoc').val();

        let deliveryCost = 0;
        if (grandName == '' && grandTot == '') {
            deliveryCost = 0;
        } else {
            deliveryCost = 200;
        }

        const total = parseInt(localStorage.getItem("total"));
        const grandprice = total + deliveryCost;
        $('.grandCheck').text(grandprice);


        alert(` Thank you! We will call you on ${grandName} and your order will be delivered to ${grandTot} . Check out the total checkOut Price`);
    })
})