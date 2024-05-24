function remToPx(remValue) {
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    var pxValue = remValue * htmlFontSize;
    return pxValue;
}

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".stages_cards");
    const prevBtn = document.querySelector(".stages_pag__btn.prev");
    const nextBtn = document.querySelector(".stages_pag__btn.next");
    const bullets = document.querySelectorAll(".stages_pag__bullet");

    const slideWidth = remToPx(75);
    let currentIndex = 0;

    const updateSlider = () => {
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle("active", index === currentIndex);
        });
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === bullets.length - 1;
    };

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < bullets.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    updateSlider();
});
