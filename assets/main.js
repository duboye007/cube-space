const scrollToBtn = document.querySelector(".btn");
const infoSection = document.querySelector("#more_section");

scrollToBtn.addEventListener("click", function (e) {
  const sectionLocation = infoSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionLocation.left + window.scrollX,
    top: sectionLocation.top + window.scrollY,
    behavior: "smooth"
  });
});
