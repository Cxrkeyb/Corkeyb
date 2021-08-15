let cerrarR = document.querySelectorAll(".closeResponsive")[0]
let cerrarS = document.querySelectorAll(".closeScannability")[0]
let cerrarT = document.querySelectorAll(".closeTypography")[0]
let cerrarLS = document.querySelectorAll(".closeLoadingSpeed")[0]
let abrirResponsive = document.querySelectorAll(".ctaR")[0]
let abrirScannability = document.querySelectorAll(".ctaS")[0]
let abrirTypography = document.querySelectorAll(".ctaT")[0]
let abrirLoadingSpeed = document.querySelectorAll(".ctaLS")[0]
let modalR = document.querySelectorAll(".modalResponsive")[0]
let modalS = document.querySelectorAll(".modalScannability")[0]
let modalT = document.querySelectorAll(".modalTypography")[0]
let modalLS = document.querySelectorAll(".modalLoadingSpeed")[0]
let modalCR = document.querySelectorAll(".modalContainerResponsive")[0]
let modalCS = document.querySelectorAll(".modalContainerScannability")[0]
let modalCT = document.querySelectorAll(".modalContainerTypography")[0]
let modalCLS = document.querySelectorAll(".modalContainerLoadingSpeed")[0]

abrirResponsive.addEventListener("click", function (e) {
    e.preventDefault();
    modalCR.style.opacity = "1";
    modalCR.style.visibility = "visible";
    modalR.classList.toggle("modalCloseResponsive");
})
abrirScannability.addEventListener("click", function (e) {
    e.preventDefault();
    modalCS.style.opacity = "1";
    modalCS.style.visibility = "visible";
    modalS.classList.toggle("modalCloseScannability");
})
abrirTypography.addEventListener("click", function (e) {
    e.preventDefault();
    modalCT.style.opacity = "1";
    modalCT.style.visibility = "visible";
    modalT.classList.toggle("modalCloseTypography");
})
abrirLoadingSpeed.addEventListener("click", function (e) {
    e.preventDefault();
    modalCLS.style.opacity = "1";
    modalCLS.style.visibility = "visible";
    modalLS.classList.toggle("modalCloseLoadingSpeed");
})
cerrarR.addEventListener("click", function () {
    modalR.classList.toggle("modalCloseResponsive");
    setTimeout(function () {
        modalCR.style.opacity = "0";
        modalCR.style.visibility = "hidden";
    }, 400)
})
cerrarS.addEventListener("click", function () {
    modalS.classList.toggle("modalCloseScannability");
    setTimeout(function () {
        modalCS.style.opacity = "0";
        modalCS.style.visibility = "hidden";
    }, 400)
})
cerrarT.addEventListener("click", function () {
    modalT.classList.toggle("modalCloseTypography");
    setTimeout(function () {
        modalCT.style.opacity = "0";
        modalCT.style.visibility = "hidden";
    }, 400)
})
cerrarLS.addEventListener("click", function () {
    modalLS.classList.toggle("modalCloseLoadingSpeed");
    setTimeout(function () {
        modalCLS.style.opacity = "0";
        modalCLS.style.visibility = "hidden";
    }, 400)
})

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalCR) {
        modal.classList.toggle("modalCloseResponsive");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 400)
    }
})