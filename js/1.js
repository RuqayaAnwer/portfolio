

const menu = document.getElementById("menu");
const action = document.getElementById("action");

menu.addEventListener("click", () => {
    hundleMenu();
})
function hundleMenu() {
   
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");

    
}
/*----------------------------skills--------------------- */



  



















window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

/*swiper*/
var swiper = new Swiper(".mySwiper", {
    slidesPerViwe: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
  
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});