console.log("FAQ Project")


const faq = document.querySelector(".faq");

faq.addEventListener("click", function(e){

    if(e.target.classList.contains("question")){
        e.stopPropagation();
        const currentItem = e.target.parentElement;
        const currentAns = currentItem.querySelector(".answer");

        currentAns.classList.toggle("show");
    }
})

document.addEventListener("click", function(){
    const allAns = document.querySelectorAll(".answer.show")

    allAns.forEach(ans => ans.classList.remove("show"))
 })