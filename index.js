const skins = [
  {
    name: "Divergence",
    price: 2175,
    image: "images/divergence.jpg",
    category: "vandal all",
  },
  {
    name: "Bubblegum Deathwish",
    price: 2175,
    image: "images/bubblegum.jpg",
    category: "phantom all",
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
    category: "vandal all",
  },
  { name: "EX.O", price: 5350, image: "images/exo.jpg", category: "Knife" },
  {
    name: "Kuronami",
    price: 5350,
    image: "images/kuronami.jpg",
    category: "Knife all",
  },
  {
    name: "Mystbloom",
    price: 2175,
    image: "images/mystbloom.jpg",
    category: "phantom all",
  },
  {
    name: "Singularity",
    price: 2175,
    image: "images/singularity.jpg",
    category: "vandal all",
  },
  {
    name: "SplashX",
    price: 2175,
    image: "images/splashx.jpg",
    category: "vandal all",
  },
  {
    name: "Imperium",
    price: 4350,
    image: "images/imperium.jpg",
    category: "knife all",
  },
  {
    name: "Nocturnum",
    price: 5350,
    image: "images/nocturnum.jpg",
    category: "knife all",
  },
  {
    name: "Aemondir",
    price: 1775,
    image: "images/aemondir.jpg",
    category: "vandal all",
  },
  {
    name: "Cyrax",
    price: 2175,
    image: "images/cyrax.jpg",
    category: "vandal all",
  },
  {
    name: "Helix",
    price: 1775,
    image: "images/helix.jpg",
    category: "phantom all",
  },
  {
    name: "Spectrum",
    price: 2675,
    image: "images/spectrum.jpg",
    category: "phantom all",
  },
  {
    name: "Origin",
    price: 1775,
    image: "images/origin.jpg",
    category: "vandal all",
  },
  {
    name: "Protocol",
    price: 2475,
    image: "images/protocol.jpg",
    category: "phantom all",
  },
  {
    name: "Chronovoid",
    price: 2175,
    image: "images/chronovoid.jpg",
    category: "vandal all",
  },
  {
    name: "RGX 11Z PRO",
    price: 4350,
    image: "images/rgx.jpg",
    category: "knife all",
  },
  {
    name: "Sovereign",
    price: 4350,
    image: "images/sovereign.jpg",
    category: "knife all",
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
    `<div class="bundle category = ${skin.category}">
      <h2 class = "skin">${skin.name}</h2>
      <img src="${skin.image}"/>
      <h3 class = "price skin">${skin.price}</h3>
      <button class = "btn skin">Add to Cart</button>
    </div>
    `
  );
});
```
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
getSkins(); ```;

function filterByCategory(category) {
  const skins = document.querySelectorAll(".categories");
  skins.forEach((skin) => {
    const skinCategory = skin.getAttribute("category");
    if (skinCategory === category || skinCategory === "all") {
      card.style.display = "flex"; //contextual - be consistent
    } else {
      card.style.display = "none";
    }
  });
}
filterByGenre("vandal");

//make array

//find item in array, .find("name")
//push item to cart
//show cart
//totale cart

//put cards on screen with JS
//make a cart (HTML, JS) an array
//add to cart button
