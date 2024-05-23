import './components/participants_swiper.js'
import './components/stages_swiper.js'
import './components/ticker.js'

if (window.innerWidth > 769) {
    let circle = document.querySelector('.hero_bg-round');
    let city = document.querySelector('.hero_bg-city');
    // let chess2 = document.querySelector('.hero_bg-chess-2')
    // let chess1 = document.querySelector('.hero_bg-chess-1')
    
    const updatePositions = () => {
        let val = window.scrollY;
        circle.style.marginTop = val * 0.8 + 'px';
        city.style.transform = `translateX(-50%) scale(${1 + val * 0.0003})`;
    };
    
    window.addEventListener('scroll', updatePositions);
    updatePositions();
}