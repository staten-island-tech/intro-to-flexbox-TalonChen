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
        <button class = "btn skin">Add to Cart</button>
      </div>
      `
    );
  });
}

getSkins(skins);

const filterbuttons = document.querySelectorAll(".categories"); // Target the buttons with class 'categories'

filterbuttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const category = event.target.textContent.toLowerCase(); // Get the button text and convert to lowercase

    if (category === "all") {
      // If "All" is clicked, show all skins
      filteredSkins = skins;
    } else {
      // Otherwise, filter the 'skins' array based on the category
      filteredSkins = skins.filter((skin) => skin.category === category);
    }

    // Call your existing function to re-render the marketplace with the filtered list
    getSkins(filteredSkins);
  })
);

`
function filterByCategory(category) {
  const bundles = document.querySelectorAll(".bundle");
  skins.forEach((bundle) => {
    const skinCategory = skin.getAttribute("category");
    if (skinCategory === category || skinCategory === "all") {
      card.style.display = "flex"; //contextual - be consistent
    } else {
      card.style.display = "none";
    }
  });
}

//created array
//find the container - querySelector
//create function to add 1 card to screen
// function inject(skins) {
// out card on screen
//insetadjacenthtml
//}

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

make array
find item in array, .find("name")
push item to cart
show cart
totale cart

put cards on screen with JS
make a cart (HTML, JS) an array
add to cart button


function filterByCategory((fill in)) {
  const (fill in) = document.querySelectorAll("(fill in)")
  (fill in).forEach(((fill in)) => {
    const (fill in) = (fill in).dataset.(fill in)
    if ((fill in) === (fill in) || (fill in) === "all"){
      (fill in).style.display = "flex";
    } else {
      (fill in).style.display = "none"
    }
  });
}


`;
