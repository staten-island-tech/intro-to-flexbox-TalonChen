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
  { name: "EX.O", price: 5350, image: "images/exo.jpg", category: "knife" },
  {
    name: "Kuronami",
    price: 5350,
    image: "images/kuronami.jpg",
    category: "knife",
  },
  {
    name: "Mystbloom",
    price: 2175,
    image: "images/mystbloom.jpg",
    category: "phantom",
  },
  {
    name: "Singularity",
    price: 2175,
    image: "images/singularity.jpg",
    category: "vandal",
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
    category: "knife",
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
    category: "vandal",
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

const marketplace = document.querySelector(".marketplace");
const buttons = document.querySelectorAll(".categories");

function getSkins(skins) {
  marketplace.innerHTML = "";
  skins.forEach((skin) => {
    marketplace.insertAdjacentHTML(
      "afterbegin",
      `<div class="bundle" data-category="${skin.category}">
        <h2 class = "skin">${skin.name}</h2>
        <img src="${skin.image}" alt = ${skin.name} />
        <h3 class = "price skin">${skin.price}</h3>
        <button class = "btn skin add" data-name="${skin.name}">Add to Cart</button>
      </div>
      `
    );
  });
}

getSkins(skins);

const filterbuttons = document.querySelectorAll(".categories");

filterbuttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const category = event.target.textContent.toLowerCase();
    if (category === "all") {
      filteredSkins = skins;
    } else {
      filteredSkins = skins.filter((skin) => skin.category === category);
    }
    getSkins(filteredSkins);
  })
);

const cart = [];
let total = 0;

document.addEventListener("click", function (click) {
  if (click.target.classList.contains("add")) {
    // Get the skin's name
    const skinName = click.target.dataset.name;
    // Find the corresponding skin object in the array
    const skinData = skins.find((s) => s.name === skinName);

    if (skinData) {
      // Cart items
      cart.push(skinData);
      document.querySelector(".cartItems").insertAdjacentHTML(
        "afterbegin",
        `
        <p>${skinData.name} - ${skinData.price} VP</p>
        `
      );
      //Price
      total += skinData.price;
      document.querySelector(
        ".totalPrice"
      ).innerHTML = `<h3>Total: ${total} VP</h3>`;
    }
  }
});
