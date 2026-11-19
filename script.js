const ether = document.getElementById("ether");
const ship = document.getElementById("ship");
const fog = document.getElementById("fog");

document.addEventListener("scroll", () => {
    let value = window.scrollY;

    ship.style.transform = `translateX(${value * 0.7}px)`;
    ether.style.transform = `translateY(${-value * 0.3}px)`;
    fog.style.transform = `translateX(${value * 0.2}px)`;
})