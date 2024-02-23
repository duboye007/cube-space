"use strict";
const scrollToBtn = document.querySelector(".btn");
const infoSection = document.querySelector("#service__4");
const navLinkUL = document.querySelector(".nav__links");
const sectionsEl = document.querySelectorAll("section");
const slideEl = document.querySelectorAll(".slide");
const dotsEl = document.querySelector(".dots");
const sliderBtnRight = document.querySelector(".slider__btn--right");
const sliderBtnLeft = document.querySelector(".slider__btn--left");


scrollToBtn.addEventListener("click", function (e) {
  const sectionLocation = infoSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionLocation.left + window.scrollX,
    top: sectionLocation.top + window.scrollY,
    behavior: "smooth",
  });
});

// add event listner to a parent element

navLinkUL.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("nav__link")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});


// reveal section upon scrolling
const showSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.2,
});
//  add the class hiden to sections
sectionsEl.forEach((section) => {
  section.classList.add("section__hidden");
  sectionObserver.observe(section);
});

// function create dots elements
const createDots = function () {
  slideEl.forEach((_, index) => {
    dotsEl.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${index}"></button>`)
  });
};

const init = function (){
  createDots();
  goToSlide(currSlide);
  activateDots(currSlide);
}


let currSlide = 0
const maxSlide = slideEl.length - 1

// slide action
const goToSlide = function(slide) {
slideEl.forEach((slideEl, index) => {
  slideEl.style.transform = `translateX(${100 * (index - slide)}%)`;
});
}

const activateDots = function (slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};



// moving slides to the right
const slideRight = function() {
  if (currSlide === maxSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDots(currSlide)
}

// moving slides to the left
const slideLeft = function() {
  if(currSlide === 0){
    currSlide = maxSlide
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDots(currSlide)
}

init();
sliderBtnRight.addEventListener("click", slideRight);
sliderBtnLeft.addEventListener("click", slideLeft);

// when we use the arrow keys on the keyboard
document.addEventListener('keydown', function(event) {
  event.key === 'ArrowRight' && slideRight()

  event.key === 'ArrowLeft' && slideLeft()

})

// dots action for slide
dotsEl.addEventListener('click', function(event) {
  if(event.target.classList.contains("dots__dot")){
    const {slide} = event.target.dataset
    goToSlide(slide)
    activateDots(slide)
  }

})





