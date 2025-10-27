/*
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
*/

const cart = [];
let total = 0;
document.addEventListener("click", function (click) {
  if (click.target.classList.contains("add-to-cart")) {
    const cartName = click.target.dataset.name;
    const blockData = blocks.find((b) => b.name === cartName);
    if (blockData) {
      cart.push(blockData);
      document.querySelector("cart-items").insertAdjacentHTML(
        "afterbegin",
        `
        <p>${blockData.amount}x ${blockData.name} - ${blockData.price} Emerald </p>
        `
      );
    }
    total += blockData.price;
    document.querySelector(
      "total-price"
    ).innerHTML = `<h3>${total} Emeralds</h3>`;
  }
});
