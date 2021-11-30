// get values from the user 

$(() => {
    $('.submit').click(() => {
        const pFlavors = $('.flavour').val();
        const pSize = $('.size').val();
        const pCrust = $('.pcrust').val();
        const pToppins = $('.p_toppins').val();
        const pNumber = $('.p_numb').val();

        // alert(pFlavors);

        let price, totalPrice;
        switch (pFlavors) {
            case flavour = "chicken":
                switch (pSize) {
                    case pSize == 'regular':
                        price = 450;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else if (pCrust == 'thick') {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize == 'medium':
                        price = 750;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize == 'large':
                        price = 1600;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                }
                break;
            case flavour == 'veges':
                switch (pSize) {
                    case pSize == 'regular':
                        price = 350;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else if (pCrust == 'thick') {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize == 'medium':
                        price = 650;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize == 'large':
                        price = 1400;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                }
                break;
        }
        // break;
        switch (pToppins) {
            case pToppins == 'tomato':
                totalPrice = totalPrice + 75;
                break;
            case (pToppins) == 'mushroom':
                totalPrice = totalPrice + 90;
                break;
            case pToppins == 'beef':
                totalPrice = totalPrice + 210;
                break;
        };

        // make a new order 
        let calOrder = (totalPrice) => {
            return { totalPrice };
        };

        let order = calOrder()
            // console.log(order);
        $('.total-charge').show(order)
    });
    // add delivery & checkout price 
    $('#grand-total').click(() => {
        const customerName = $('#del_name').val();
        alert(`${customerName} : Thanks You!`);
    });
});