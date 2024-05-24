function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return pxValue;
}

document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slidesContainer = document.querySelector(".participants_swiper");
    let totalSlides = Array.from(document.querySelectorAll(".participants_card"));
    let currentSlideElement = document.querySelector(".current");
    let totalSlidesElement = document.querySelector(".total");
    const prevButton = document.querySelector(".participants_pag__btn.prev");
    const nextButton = document.querySelector(".participants_pag__btn.next");
    let scrollWidth;

    const checkWidth = () => {
        if (document.documentElement.clientWidth >= 769) {
            totalSlides = totalSlides.slice(0, -2);
            totalSlidesElement.textContent = totalSlides.length + 2;
            scrollWidth = remToPx(41.4);
        } else {
            totalSlidesElement.textContent = totalSlides.length;
            scrollWidth = remToPx(73.3);
        }
    };
    checkWidth();

    function showSlide(index) {
        if (document.documentElement.clientWidth >= 769) {
            currentSlideElement.textContent = index + 2;
        } else {
            currentSlideElement.textContent = index;
        }

        const translateValue = -(index - 1) * scrollWidth + "px";
        slidesContainer.style.transform = "translateX(" + translateValue + ")";
    }

    if (document.documentElement.clientWidth < 769) {
        showSlide(1);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides.length) % totalSlides.length || totalSlides.length;
        showSlide(currentSlide);
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 4000);
    }

    function nextSlide() {
        currentSlide = (currentSlide % totalSlides.length) + 1;
        showSlide(currentSlide);
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 4000);
    }

    let intervalId = setInterval(nextSlide, 4000);
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
});
