// товары

const products = [
  // ВИНИЛ
  { id: 1, title: "Pink Floyd — The Dark Side of the Moon", price: 85000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/ru/1/15/The_Dark_Side_of_the_Moon.png" },
  { id: 2, title: "Pink Floyd — The Wall", price: 88000, category: "vinyl", image: "https://i.scdn.co/image/ab67616d0000b273b694e89ba937dd2631ff584c" },
  { id: 3, title: "The Beatles — Abbey Road", price: 90000, category: "vinyl", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3Oby8Cq11t-TxwGXffssxTtYFFexV4Wz6w&s" },
  { id: 4, title: "Led Zeppelin — IV", price: 82000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/ru/c/c7/Led_zeppelin_IV_front.jpg" },
  { id: 5, title: "Queen — A Night at the Opera", price: 86000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png" },
  { id: 6, title: "Nirvana — Nevermind", price: 79000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/ru/b/b7/NirvanaNevermindalbumcover.jpg" },
  { id: 7, title: "Radiohead — OK Computer", price: 83000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/ru/9/93/RadioheadOkComputer.jpg" },
  { id: 8, title: "David Bowie — Heroes", price: 81000, category: "vinyl", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvJJ1BvGLM8IMCElXJ7SMrWdxzttr9mOAqA&s" },
  { id: 9, title: "Metallica — Black Album", price: 88000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/ru/c/c2/Metallica_Album.jpg" },
  { id: 10, title: "AC/DC — Back in Black", price: 84000, category: "vinyl", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/ACDC_Back_in_Black.png" },

  // ПРОИГРЫВАТЕЛИ
  { id: 11, title: "Audio-Technica AT-LP60X", price: 210000, category: "players", image: "https://185504.selcdn.ru/static/hifi4you.reshop.kz/catalog/9564/67182200461025e7cc4c31_medium.jpg" },
  { id: 12, title: "Sony PS-LX310BT", price: 260000, category: "players", image: "data:image/jpeg;base64,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" },
  { id: 13, title: "Rega Planar 1", price: 350000, category: "players", image: "https://upscaleaudio.com/cdn/shop/products/PLANAR_1_WALNUT_EFFECT_frontview_nolid_LP.jpg?v=1741632220&width=1946" },
  { id: 14, title: "Pro-Ject Debut Carbon", price: 420000, category: "players", image: "https://m.media-amazon.com/images/I/718t2YSrB2L._AC_UF894,1000_QL80_.jpg" },
  { id: 15, title: "Denon DP-300F", price: 310000, category: "players", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYM4dM_BOF72hxI65z93QRm88ql2mHX4GFw&s" },

  // ГИТАРЫ
  { id: 16, title: "Fender Stratocaster", price: 520000, category: "instruments", image: "https://eldoradomusic.kz/wp-content/uploads/2020/04/FENDER-PLAYER-STRATOCASTER.jpg" },
  { id: 17, title: "Gibson Les Paul", price: 780000, category: "instruments", image: "https://ymusic.kz/images/detailed/36/e6b93238-0481-4edc-b496-ba25ac6248e9.png" },
  { id: 18, title: "Ibanez RG Series", price: 430000, category: "instruments", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpB2dibnsvAXHGsscTMOYNd90lUHXKRuOxA&s" },
  { id: 19, title: "Yamaha Pacifica", price: 290000, category: "instruments", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrTNKrAYz95xEDKM0Uk_XTXRxHvlLQlfKmw&s" },
  { id: 20, title: "PRS SE Custom", price: 610000, category: "instruments", image: "https://images.musicstore.de/images/1280/prs-se-custom-22-semi-hollow-grey-black_1_GIT0043714-000.jpg" },

  // КЛАВИШНЫЕ
  { id: 21, title: "Yamaha P-45", price: 340000, category: "instruments", image: "https://i.ebayimg.com/images/g/ZosAAOSwAStnkoxA/s-l400.jpg" },
  { id: 22, title: "Casio Privia PX-160", price: 360000, category: "instruments", image: "https://www.muzbazar.pro/UserFiles/2(3408).jpg" },
  { id: 23, title: "Roland FP-10", price: 390000, category: "instruments", image: "https://n.cdn.cdek.shopping/images/shopping/191e31f2c4504897a5d2309da1f0bd63.jpg?v=1" },

  // АКСЕССУАРЫ
  { id: 24, title: "Marshall MG15 Amplifier", price: 120000, category: "instruments", image: "https://avatars.mds.yandex.net/get-mpic/4397559/img_id2546312226765943653.jpeg/orig" },
  { id: 25, title: "Boss DS-1 Distortion", price: 45000, category: "instruments", image: "https://i.ebayimg.com/images/g/MGYAAeSweJ5oYayS/s-l1600.jpg" },
  { id: 26, title: "Shure SM58 Microphone", price: 98000, category: "instruments", image: "https://i0.wp.com/audiomax.kz/wp-content/uploads/2021/06/123123.jpg?fit=800%2C600&ssl=1" },
  { id: 27, title: "Audio-Technica ATH-M50x", price: 135000, category: "instruments", image: "https://i.ebayimg.com/images/g/xAYAAOSwZhNiZO-v/s-l500.jpg" },

  // ДОБАВИМ ЕЩЁ ВИНИЛА
  { id: 28, title: "Daft Punk — Random Access Memories", price: 87000, category: "vinyl", image: "https://vinylnation.co.nz/wp-content/uploads/2025/03/DPRAM10A.jpg" },
  { id: 29, title: "Kendrick Lamar — DAMN.", price: 82000, category: "vinyl", image: "https://avatars.mds.yandex.net/get-mpic/16413278/2a0000019a8afef7f2efaf6a24afd9b5bfce/orig" },
  { id: 30, title: "The Weeknd — After Hours", price: 80000, category: "vinyl", image: "https://avatars.mds.yandex.net/get-mpic/12618610/2a0000019b4ae551947887336317e54cdf0b/orig" },
  { id: 31, title: "Arctic Monkeys — AM", price: 79000, category: "vinyl", image: "https://avatars.mds.yandex.net/get-mpic/5315102/img_id6167492536576468653.jpeg/orig" },
  { id: 32, title: "Tame Impala — Currents", price: 83000, category: "vinyl", image: "https://i.ebayimg.com/images/g/YzkAAOSwnDRghutN/s-l500.jpg" },

  // ЕЩЁ ПРОИГРЫВАТЕЛИ
  { id: 33, title: "Technics SL-1200MK7", price: 650000, category: "players", image: "https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0408/users/beed4729ac0fa8921ea8aec9d3bd6de2e2350a1a/i-img1200x800-1691661693xyv4vq2334909.jpg" },
  { id: 34, title: "Pioneer DJ PLX-500", price: 420000, category: "players", image: "https://wikisound.store/template/img/product/4548.jpg" },
  { id: 35, title: "Lenco L-85", price: 180000, category: "players", image: "https://i.pinimg.com/736x/4f/7b/6c/4f7b6cb21e80f0d15626d9cfa3000139.jpg" },

  // ФИНАЛ
  { id: 36, title: "Vinyl Cleaning Kit", price: 25000, category: "instruments", image: "https://cdn1.ozone.ru/s3/multimedia-e/c600/6681852014.jpg" },
  { id: 37, title: "Turntable Slipmat", price: 15000, category: "instruments", image: "https://ir.ozone.ru/s3/multimedia-9/6270771345.jpg" },
  { id: 38, title: "Guitar Strings Ernie Ball", price: 8000, category: "instruments", image: "https://i.ebayimg.com/images/g/mJgAAeSwLb9owb6K/s-l1600.jpg" },
  { id: 39, title: "Studio Monitor KRK Rokit 5", price: 240000, category: "instruments", image: "https://prosound.ixbt.com/news/2024/march/27/image4b.jpg" },
  { id: 40, title: "Focusrite Scarlett 2i2", price: 165000, category: "instruments", image: "https://cdn1.ozone.ru/s3/multimedia-1-d/c600/7674920473.jpg" }
];

// корзина

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// каталог

const catalogContainer = document.querySelector(".catalog");

function renderProducts(list) {
  if (!catalogContainer) return;
  catalogContainer.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.price.toLocaleString()} ₸</p>
      <button class="btn add-btn" data-id="${product.id}">В корзину</button>
    `;
    catalogContainer.appendChild(card);
  });
}

renderProducts(products);

const filterButtons = document.querySelectorAll(".filters button");
const searchInput = document.getElementById("searchInput");

function filterAndSearch(category = "all", searchTerm = "") {
  let filtered = [];

  switch (category) {
    case "vinyl":
      filtered = products.filter(p => p.category === "vinyl");
      break;
    case "players":
      filtered = products.filter(p => p.category === "players");
      break;
    case "instruments":
      filtered = products.filter(p => p.category === "instruments");
      break;
    case "all":
    default:
      filtered = [...products]; // копия всех товаров
  }

  // теперь применяем поиск
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(term));
  }

  renderProducts(filtered);
}


// обработка поиска

if (searchInput) {
  searchInput.addEventListener("input", () => {

    const activeBtn = document.querySelector(".filters button.active");
    const category = activeBtn ? activeBtn.dataset.category : "all";

    filterAndSearch(category, searchInput.value);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    // активная кнопка
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    filterAndSearch(category, searchInput.value);
  });
});


// добавление / удаление

document.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn")) {
    const product = products.find(p => p.id == e.target.dataset.id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    alert("Товар добавлен в корзину");
  }

  if (e.target.classList.contains("remove-btn")) {
    cart.splice(e.target.dataset.index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
});

// отображение корзины

const cartContainer = document.querySelector(".cart-container");
const totalEl = document.getElementById("total");

function updateCart() {
  if (!cartContainer || !totalEl) return;

  cartContainer.innerHTML = "";

  cart.forEach((item, i) => {
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h4>${item.title}</h4>
          <p>${item.price.toLocaleString()} ₸</p>
          <button class="remove-btn" data-index="${i}">Удалить</button>
        </div>
      </div>
    `;
  });

  totalEl.textContent = cart.reduce((sum, i) => sum + i.price, 0).toLocaleString();
}

document.addEventListener("DOMContentLoaded", updateCart);

// валидация оплаты

const nameInput = document.getElementById("pay-name");
const cardInput = document.getElementById("pay-card");
const expInput = document.getElementById("pay-exp");
const cvcInput = document.getElementById("pay-cvc");

// имя — только буквы
if (nameInput) {
  nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
  });
}

// карта — 16 цифр
if (cardInput) {
  cardInput.addEventListener("input", () => {
    cardInput.value = cardInput.value.replace(/\D/g, "").slice(0, 16);
  });
}

// срок — MM/YY
if (expInput) {
  expInput.addEventListener("input", () => {
    let v = expInput.value.replace(/\D/g, "");
    if (v.length >= 3) {
      v = v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    expInput.value = v.slice(0, 5);
  });
}

// cvc — 3 цифры
if (cvcInput) {
  cvcInput.addEventListener("input", () => {
    cvcInput.value = cvcInput.value.replace(/\D/g, "").slice(0, 3);
  });
}

// очистить / оплатить

const clearBtn = document.getElementById("clear-cart");
const payBtn = document.getElementById("pay-btn");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    alert("Корзина очищена");
  });
}

if (payBtn) {
  payBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Корзина пуста");
      return;
    }

    if (
      !nameInput.value ||
      cardInput.value.length !== 16 ||
      expInput.value.length !== 5 ||
      cvcInput.value.length !== 3
    ) {
      alert("Проверьте данные карты");
      return;
    }

    alert("Оплата прошла успешно!");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });
}

// личный кабинет

const accountForm = document.getElementById("accountForm");
const accountView = document.getElementById("accountView");

const viewName = document.getElementById("viewName");
const viewAddress = document.getElementById("viewAddress");
const viewAdditional = document.getElementById("viewAdditional");

const editBtn = document.getElementById("editBtn");

// загрузка аккаунта
function loadAccount() {
  const data = JSON.parse(localStorage.getItem("account"));

  if (data) {
    accountForm.style.display = "none";
    accountView.style.display = "block";

    viewName.textContent = data.name;
    viewAddress.textContent = data.address;
    viewAdditional.textContent = data.additional || "—";
  }
}

// сохранение аккаунта
if (accountForm) {
  accountForm.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
      name: accountForm.name.value,
      address: accountForm.address.value,
      additional: accountForm.additional.value
    };

    localStorage.setItem("account", JSON.stringify(data));
    loadAccount();
  });
}

// редактирование
if (editBtn) {
  editBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("account"));

    accountForm.name.value = data.name;
    accountForm.address.value = data.address;
    accountForm.additional.value = data.additional;

    accountView.style.display = "none";
    accountForm.style.display = "block";
  });
}

document.addEventListener("DOMContentLoaded", loadAccount);