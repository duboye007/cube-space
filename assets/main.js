'use strict'
const scrollToBtn = document.querySelector(".btn");
const infoSection = document.querySelector("#service__4");

scrollToBtn.addEventListener("click", function (e) {
  const sectionLocation = infoSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionLocation.left + window.scrollX,
    top: sectionLocation.top + window.scrollY,
    behavior: "smooth"
  });
});

// add event listner to a parent element
const navLinkUL = document.querySelector('.nav__links')
navLinkUL.addEventListener('click', function(event){
  event.preventDefault()

  if(event.target.classList.contains('nav__link')){
    const id = event.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})