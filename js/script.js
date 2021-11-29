// get values from the user 

$(() => {
    $('.submit').click(() => {
        const pFlavors = $('.flavour').val();
        const pSize = $('.size').val();
        const pCrust = $('.pcrust').val();
        const pToppins = $('.p_toppins').val();
        const pNumber = $('.p_numb').val();

        class CalcOrder {
            constructor(flavour, size, crust, toppins, number, total) {
                this.flavour = flavour;
                this.size = size;
                this.crust = crust;
                this.toppins = toppins;
                this.number = number;
                this.total = total;
            }
        }
        let price, totalPrice;
        switch (pFlavors) {
            case flavour = 'chicken':
                switch (pSize) {
                    case pSize = 'regular':
                        price = 450;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else if (pCrust == 'thick') {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize = 'medium':
                        price = 750;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case pSize = 'large':
                        price = 1600;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                }
                break;
            case flavour = 'veges':
                switch (size) {
                    case pSize = 'regular':
                        price = 350;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else if (pCrust == 'thick') {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case size = 'medium':
                        price = 650;
                        if (pCrust == 'thin') {
                            totalPrice = (price * pNumber) + 100;
                        } else {
                            totalPrice = (price * pNumber) + 150;
                        }
                        break;
                    case size = 'large':
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
            case toppins = 'tomato':
                totalPrice = totalPrice + 75;
                break;
            case (toppins) = 'mushroom':
                totalPrice = totalPrice + 90;
                break;
            case toppins = 'beef':
                totalPrice = totalPrice + 210;
                break;
        }
        const customer = new CalcOrder();
        console.log(customer);
    })
})