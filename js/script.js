// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");


const mouseCircleFn = (x,y)=>{
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
   
    mouseCircleFn(x, y);
  });

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
})
// End of Mouse Circle

// filter images
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })


    // sticky navigation menu

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();
});

