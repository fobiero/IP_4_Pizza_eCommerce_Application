$(document).ready(() => {
    $('.submit').click(() => {
        const flavour = parseInt($('.flavour').val());
        const pSize = parseInt($('.size').val());
        const pCrust = parseInt($('.pcrust').val());
        const pToppins = parseInt($('.p_toppins').val());
        const pNum = parseInt($('.p_numb').val());

        if (flavour == '') {
            alert('choose flavour');
        } else if (pSize == '') {
            alert('Pick pizza size');
        } else if (pCrust == '') {
            alert('choose crust')
        } else if (pToppins == '') {
            alert('pick toppins')
        } else if (pNum == '') {
            alert('Please pick quantity')
        } else {
            const total = (flavour + pSize + pCrust + pToppins) * pNum;
            alert(total)
        }

    })
})