"use strict";

const rateButtons = document.querySelectorAll(".btn");
const submit = document.querySelector(".btn-submit");
const ratingCard = document.querySelector(".rating-card");
const ratingPreview = document.querySelector(".rating-card--preview");
const ratingCount = document.querySelector(".rating-count--p");

const starsContainer = document.querySelector(".rating-stars--c");

let ratingValue = null;

rateButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    ratingValue = Number(btn.value);

    starsContainer.innerHTML = "";
    for (let i = 1; i <= ratingValue; i++) {
      const wrapper = document.createElement("div");
      wrapper.classList = "rating-star";
      wrapper.style.animationDelay = `${i * 80}`;

      const el = document.createElement("img");
      el.src = "./images/icon-star.svg";
      el.alt = "Star icon";
      el.classList = "star";

      starsContainer.appendChild(wrapper);
      wrapper.appendChild(el);
    }
  })
);

submit.addEventListener("click", function (e) {
  e.preventDefault();

  if (ratingValue) {
    ratingCount.textContent = `You selected ${ratingValue} out of ${rateButtons.length}`;

    ratingCard.classList.add("fade-out");

    setTimeout(() => {
      ratingCard.style.display = "none";

      ratingPreview.style.display = "flex";
      setTimeout(() => {
        ratingPreview.classList.add("show-card");
      }, 20);
    }, 400);
  } else alert("Please select a rating before submitting!");
});
