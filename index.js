const skins = [
  {
    name: "Divergence",
    price: 2175,
    image: "images/divergence.jpg",
    category: "vandal",
  },
  {
    name: "Bubblegum Deathwish",
    price: 2175,
    image: "images/bubblegum.jpg",
    category: "phantom",
  },
  {
    name: "Doombringer",
    price: 2175,
    image: "images/doombringer.jpg",
    category: "phantom",
  },
  {
    name: "Evori Dreamwings",
    price: 2475,
    image: "images/evori.jpg",
    category: "vandal",
  },
  { name: "EX.O", price: 5350, image: "images/exo.jpg", category: "Knife" },
  {
    name: "Kuronami",
    price: 5350,
    image: "images/kuronami.jpg",
    category: "Knife",
  },
  {
    name: "Mystbloom",
    price: 2175,
    image: "images/mystbloom.jpg",
    category: "Phantom",
  },
  {
    name: "Singularity",
    price: 2175,
    image: "images/singularity.jpg",
    category: "Vandal",
  },
  {
    name: "SplashX",
    price: 2175,
    image: "images/splashx.jpg",
    category: "vandal",
  },
  {
    name: "Imperium",
    price: 4350,
    image: "images/imperium.jpg",
    category: "knife",
  },
  {
    name: "Nocturnum",
    price: 5350,
    image: "images/nocturnum.jpg",
    category: "knife",
  },
  {
    name: "Sovereign",
    price: 4350,
    image: "images/sovereign.jpg",
    category: "knife",
  },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
  { name: "a", price: 0, image: "img" },
];

//created array
//find the container - querySelector
//create function to add 1 card to screen
// function inject(skins) {
// out card on screen
//insetadjacenthtml
//}

//function inject(skins) {
//query the html where we inject the card
// const bundle = document.querySelector(".bundle");
//bundle.insertAdjacentHTML("afterbegin", `<h1>${skins.price}</h1>`);
//}
inject(skins[0]);
inject(skins[0]);
function inject(skins) {
  skins.forEach((skin) => {
    const bundle = document.querySelectorAll(".bundle");
    bundle.insertAdjacentHTML(
      "afterbegin",
      `<div class="bundle skin1">
    <h2 class="skin">${skin.name}</h2>
    <img src="${skin.image}"/>
    <h3 class="price skin">${skin.price}</h3>
  </div>`
    );
  });
}

inject(skins[0]);
