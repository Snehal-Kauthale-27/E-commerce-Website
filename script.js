
let slides = document.querySelectorAll("#brand");
let cards = document.querySelectorAll(".card");


let bar = document.getElementById("bar");

let count = 0
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;

});

function myFun() {
    slides.forEach(function (curVal) {
       curVal.style.transform = `translateX(-${count * 100}%)`;

    });
}


setInterval(function () {
    count++;
    if (count === slides.length) {
        count = 0;
    }
    myFun();
}, 2000);


if (bar) {
    bar.addEventListener("click", function () {
        let menu = document.querySelector("ul");
        if (menu) {
            menu.classList.toggle("showData");
        }
    });
}

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        window.open("https://www.wakefit.co/search-result?q=sofa", "_blank");
    });
});
