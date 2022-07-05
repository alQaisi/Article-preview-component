const share=document.querySelector(".share");
const shareIcon=document.querySelector(".share-icon");

shareIcon.addEventListener("click",()=>{
    share.classList.toggle("hidden");
    shareIcon.classList.toggle("active");
})