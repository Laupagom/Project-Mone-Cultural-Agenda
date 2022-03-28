var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    },
});