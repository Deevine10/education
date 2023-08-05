window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "./images/pexels-pixabay-210881.jpg") {
      icon.className = "./images/pexels-pixabay-210881.jpg";
    } else {
      icon.className = "./images/pexels-pixabay-210881.jpg";
    }
  });
});

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
});
