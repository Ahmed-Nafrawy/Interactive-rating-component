"use strict";

const rateButtons = document.querySelectorAll(".btn");
const submit = document.querySelector(".btn-submit");
const ratingCard = document.querySelector(".rating-card");
const ratingPreview = document.querySelector(".rating-card--preview");
const ratingCount = document.querySelector(".rating-count--p");

let ratingValue = null;

rateButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    ratingValue = btn.value;
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
