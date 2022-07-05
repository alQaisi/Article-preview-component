const share=document.querySelector(".share");
const shareIcon=document.querySelector(".share-icon");

document.addEventListener("click",evt=>{
    if((evt.target!==shareIcon && !share.classList.contains("hidden")) || evt.target==shareIcon){
        share.classList.toggle("hidden");
        shareIcon.classList.toggle("active");
    }
});