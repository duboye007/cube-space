"use strict";
const scrollToBtn = document.querySelector(".btn");
const infoSection = document.querySelector("#service__4");

scrollToBtn.addEventListener("click", function (e) {
  const sectionLocation = infoSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionLocation.left + window.scrollX,
    top: sectionLocation.top + window.scrollY,
    behavior: "smooth",
  });
});

// add event listner to a parent element
const navLinkUL = document.querySelector(".nav__links");
navLinkUL.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("nav__link")) {
    const id = event.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// add hidden class to all sections
const sectionsEl = document.querySelectorAll("section");

// reveal section upon scrolling
const showSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target)
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
