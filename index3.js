const filterbuttons = document.querySelectorAll(".Brands");
filterbuttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardCategory = card.dataset.brand;
      if (
        cardCategory === event.target.textContent ||
        event.target.textContent === "All"
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  })
);
