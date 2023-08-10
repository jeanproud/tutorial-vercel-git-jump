function engorgio(el){
    imgName = el.id;
    modalImg = document.getElementById("modalImg")
    modalImg.src=el.src
    modal = document.getElementById("modal")
    modal.style.zIndex=100
}