const exploreBtn = document.querySelector(".home__button");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    window.scrollTo(0, 450);
  });
}
