let position = 0;

const slidesToShow = 1;
const slidesToScroll = 1;

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider__tracker');
const items = sliderWrapper.querySelectorAll('.slider__item');
const itemCount = items.length;
const prevBtn = slider.querySelector('.slider__btn-prev');
const nextBtn = slider.querySelector('.slider__btn-next');

const itemWidth = slider.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

const setPosition = () => {
    sliderWrapper.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    prevBtn.disabled = position === 0;
    nextBtn.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
};

prevBtn.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

nextBtn.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

checkBtns();