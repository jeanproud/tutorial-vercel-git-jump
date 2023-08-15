function toggleModal(modalDiv, modalImg){
    modalDiv.classList.toggle("visibility")
    modalImg.classList.toggle("visibility")
}


function engorgio(el){
    modal = document.getElementById("modal")
    modal.style.zIndex=100
    modalImg = document.getElementById("modalImg")
    modalImg.src=el.src
    toggleModal(modal, modalImg)
}

function reducio(el){
    modalImg = document.getElementById("modalImg")
    toggleModal(el, modalImg)
    setTimeout(() => { el.style.zIndex=0; }, 250);
}

function showGit(){   
    gitContent = document.getElementById("git") 
    gitContent.style.display="block"
}

function hideGit(){   
    gitContent = document.getElementById("git") 
    gitContent.style.display="none"
}
