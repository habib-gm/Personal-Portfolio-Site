const intro_scroll = document.querySelector(".scrollIntro");
const project_scrol = document.querySelector(".scrollproject");
win_height = 

intro_scroll.addEventListener("click", (e)=>{
    window.scrollTo({
        top: (parseInt(window.innerHeight) - 15),
        left: 0,
        behavior: 'smooth'
      });
})
project_scrol.addEventListener("click", (e)=>{

    window.scrollTo({
        top:((parseInt(window.innerHeight) - 20)*2),
        left: 0,
        behavior: 'smooth'
      });
})
