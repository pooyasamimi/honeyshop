const galleryImg = document.querySelectorAll('.gallery__img')
let slideIndex= null
window.addEventListener("load", async function (){

    galleryImg.forEach((item) => {
        item.addEventListener('click', async () => {
            window.location.href = 'http://localhost:63342/samimi-shop/gallery.html?_ijt=29g1m3uqnv12eupel5o9sqnr37&_ij_reload=RELOAD_ON_SAVE'
            // alert(item.dataset.slideNumber)
            slideIndex = item.dataset.slideNumber
            alert(slideIndex)
        })
    })

    await alert(slideIndex)

    let swiper2 = new Swiper(".swiper-2", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // initialSlide: index
    });

    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)
    swiper2.slideTo(slideIndex)

})





async function sliderHandler(index){

    window.location.href = 'http://localhost:63342/samimi-shop/gallery.html?_ijt=29g1m3uqnv12eupel5o9sqnr37&_ij_reload=RELOAD_ON_SAVE'

}

