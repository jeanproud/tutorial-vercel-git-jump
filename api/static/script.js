modalImg = document.getElementById("modalImg")
modal = document.getElementById("modal")
function engorgio(el){
    modal.style.zIndex=100
    modalImg.src=el.src
    modalImg.classList.toggle("collapsed")
}

function reducio(el){
    modalImg.classList.toggle("collapsed")
    el.style.zIndex=0
}