const botao_mobile = document.querySelector(".menuMobile")

botao_mobile.addEventListener("click", () => {
    if (document.querySelector(".menu nav ul").style.display == "flex") {
        document.querySelector(".menu nav ul").style.display = "none"
    } else {
        document.querySelector(".menu nav ul").style.display = "flex"
    }
})