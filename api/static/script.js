
function engorgio(el){
    modal = document.getElementById("modal")
    modal.style.zIndex=100
    modal.classList.toggle("collapsed")
    modalImg = document.getElementById("modalImg")
    modalImg.src=el.src
    modalImg.classList.toggle("collapsed")
}

function reducio(el){
    el.classList.toggle("collapsed");
    modalImg = document.getElementById("modalImg")
    modalImg.classList.toggle("collapsed")
    setTimeout(() => { el.style.zIndex=0; }, 250);
}