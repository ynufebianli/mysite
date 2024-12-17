window.addEventListener("scroll", function() {
    let tou = document.querySelector(".tou");
    if (window.scrollY > 0) {
        tou.classList.add("bian");
    }else{
        tou.classList.remove("bian"); 
    }
})