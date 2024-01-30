//* NOT:Global degiskenlerimi tanimlayip load event i ile localStorage 1 defa kaydettikten sonra hem degiskenlerimi hemde localStorage.setItem("taxRate", taxRate) i yoruma alabilirim cünkü kaydedildi artik

const taxRate = 0.18;
const shippingPrice = 25.99;
const freeShippingPrice = 3000;

// ! localStorage vs. sessionStorage
//? Global degiskenleri tanimlayip localStorage vs. sessionStorage atip sayfa her yload oldugunda verileri ordan cagirabiliriz

window.addEventListener("load", () => {
    localStorage.setItem("taxRate", taxRate);
    // // sessionStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    // // sessionStorage.setItem("shippingPrice", shippingPrice);
    localStorage.setItem("freeShippingPrice", freeShippingPrice);
    // // sessionStorage.setItem("freeShippingPrice", freeShippingPrice);

    ///total cart calc.
    calculateCartPrice();
});

//* NOT: burdaki Global degiskenleri console.log() icine yazmak yerine inceleden consolu acip degiskeni consola direk kopyalayinca calisir  örnegin navbarList degiskenini tutup direkt consola yazdigimizda hangi elementi yakaladigimizi görebiliriz

const navbarList = document.querySelector(".nav__list");
const productList = document.querySelector("div.main__product-painel"); //?basina div yazarak belirtirsek performans acisindan daha hizli olur

//! capturing
//?NOT:birden fazla parentElement kullanmak yerine closest() kullanmak daha mantiklidir
navbarList.addEventListener("click", (e) => {
    if (
        e.target.className == "nav__list--btn" ||
        e.target.getAttribute("class") == "fa-regular fa-trash-can"
    ) {
        //e.target.parentElement.firstElementChild.innerText = "My Cart";
        //e.target.previousElementSibling.innerText = "My Cart";
        //e.target vs. e.currentTarget
        //?foreach ==> array, nodeList te calisir
        productList.innerText = "No Product!";
        e.currentTarget.firstElementChild.innerText = "My Cart";
        //? NOT:e.target tiklanan elementi verirken e.currentTarget sabittir ve addEventListener in tanimlandigi elemandir burda navbarList  ve daha hizlidir
        calculateCartPrice();
    }
});

//!capturing
productList.addEventListener("click", (e) => {
    //minus
    if (e.target.className == "fa-solid fa-minus") {
        if (e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText--;
            calculateProductPrice(e.target);
        } else {
            if (
                confirm(
                    `${
                        e.target
                            .closest(".main__product-info")
                            .querySelector("h2").innerText
                    } will be removed!`
                )
            ) {
                e.target.closest(".main__product").remove();
                calculateCartPrice();
            }
        }
    }
    //plus
    else if (e.target.classList.contains("fa-plus")) {
        e.target.previousElementSibling.innerText++;
        calculateProductPrice(e.target);
    }
    //remove
    else if (e.target.id == "remove-product") {
        if (
            confirm(
                `${
                    e.target.closest(".main__product-info").querySelector("h2")
                        .innerText
                } will be removed!`
            )
        ) {
            e.target.closest(".main__product").remove();
            calculateCartPrice();
        }
    } else {
        alert("other element clicked");
    }
    //calculateCartPrice();
});

//target == minus || plus btn
const calculateProductPrice = (btn) => {
    //product line calculations
    const infoDiv = btn.closest(".main__product-info");
    //console.log(infoDiv);
    const price = infoDiv.querySelector(
        ".main__product-price strong"
    ).innerText;
    //console.log(price);
    const quantity = infoDiv.querySelector("#quantity").innerText;
    // console.log(quantity);
    infoDiv.querySelector(".main__product-line-price").innerText = (
        price * quantity
    ).toFixed(2);
    // console.log(typeof (price * quantity).toFixed(2));//string
    calculateCartPrice(); //calculateProductPrice güncellendigi her yerde CartPrice(sepet) güncellenmesi gerektigi icin buraya yazdik anacak remove durumlarinda product tamamen silindigi icin calculateProductPrice i hesaplamadik ama sepet güncellenmesi gerekiyor o nedenle oralara calculateCartPrice tekrar yazmak zorunda kaldik
};

const calculateCartPrice = () => {
    //cart total calculations
    const productPriceDivs = productList.querySelectorAll(
        ".main__product-line-price"
    );
    //?reduce calculation reduce() metodu ile
    const subTotalAlternatif = [...productPriceDivs]; //reduce icin array a dönüstürmeliyiz
    let subtotal = subTotalAlternatif.reduce((acc, curr) => {
        return acc + parseFloat(curr.innerText); //parseFloat  stringten float yapar
    }, 0);
    // console.log(subtotal);

    //?forEach() metodu ile
    //     let subtotal = 0;
    // productPriceDivs.forEach((price) => {
    //   subtotal += parseFloat(price.innerText);
    // });
    //   console.log(subtotal);

    const taxPrice = parseFloat(subtotal * localStorage.getItem("taxRate"));
    // console.log(taxPrice);

    // ?subTotal 3000 den büyükse shippingPrice 0 olmasi icin
    const shippingPrice =
        subtotal > 0 && subtotal < localStorage.getItem("freeShippingPrice")
            ? parseFloat(localStorage.getItem("shippingPrice"))
            : 0; //localStorage den gelen veriler string olarak gelir

    const totalPrice = (subtotal + shippingPrice + taxPrice).toFixed(2);
    // console.log(totalPrice);

    document.querySelector(".main__total h2").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-shipping span:nth-child(2)").innerText =
        shippingPrice.toFixed(2);
    document.querySelector("#cart-tax span:nth-child(2)").innerText =
        taxPrice.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText =
        totalPrice;

    ////////need to be improved!!
    if (productList.querySelectorAll(".main__product").length == 0) {
        productList.innerText = "No Product!";
        navbarList.firstElementChild.innerText = "My Cart";
    } else {
        navbarList.firstElementChild.innerText = `My Cart (${
            productList.querySelectorAll(".main__product").length
        } Products)`;
    }
};
