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
    name: "Aemondir",
    price: 1775,
    image: "images/aemondir.jpg",
    category: "vandal",
  },
  {
    name: "Cyrax",
    price: 2175,
    image: "images/cyrax.jpg",
    category: "vandal",
  },
  {
    name: "Helix",
    price: 1775,
    image: "images/helix.jpg",
    category: "phantom",
  },
  {
    name: "Spectrum",
    price: 2675,
    image: "images/spectrum.jpg",
    category: "phantom",
  },
  {
    name: "Origin",
    price: 1775,
    image: "images/origin.jpg",
    category: "vandal",
  },
  {
    name: "Protocol",
    price: 2475,
    image: "images/protocol.jpg",
    category: "phantom",
  },
  {
    name: "Chronovoid",
    price: 2175,
    image: "images/chronovoid.jpg",
    category: "valorant",
  },
  {
    name: "RGX 11Z PRO",
    price: 4350,
    image: "images/rgx.jpg",
    category: "knife",
  },
  {
    name: "Sovereign",
    price: 4350,
    image: "images/sovereign.jpg",
    category: "knife",
  },
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

skins.forEach((skin) => {
  document.querySelector(".marketplace").insertAdjacentHTML(
    "afterbegin",
    `<div class="bundle">
      <h2 class = "skin">${skin.name}</h2>
      <img src="${skin.image}"/>
      <h3 class = "price skin">${skin.price}</h3>
      <button class = "btn skin">Add to Cart</button>
    </div>
    `
  );
});

function getSkins() {
  const buttons = document.querySelectorAll(".btn");
  //not needed unless we want filter etc.
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      //console.log(event.target);
      console.log(
        event.target.closest(".marketplace").getAttribute("skins-name"),
        event.target.textContent
      );
    })
  );
}
getSkins();
//make array

//find item in array, .find("name")
//push item to cart
//show cart
//totale cart

//put cards on screen with JS
//make a cart (HTML, JS) an array
//add to cart button
