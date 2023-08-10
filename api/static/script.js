function engorgio(el){
    modalImg = document.getElementById("modalImg")
    modalImg.src=el.src
    modal = document.getElementById("modal")
    modal.style.zIndex=100
}

function reducio(el){
    el.style.zIndex=0
}