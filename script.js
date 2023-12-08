/* Select from the DOM */
var sliderImg = document.querySelector(".slider img");
var slider = document.querySelector(".slider");
var catagoryImgs = document.getElementsByClassName("catagoryimg");
var sliderBefore = document.querySelector(".slider #before");
var sliderAfter = document.querySelector(".slider #after");
var bothSliders = document.querySelectorAll(".slider a");
var des = document.getElementsByClassName("des");
var labsLink = document.getElementById("labs");
var phonesLink = document.getElementById("phones");
var makeupLink = document.getElementById("makeup");
var goToTop = document.querySelector("body span");
var allAddBtns = document.querySelectorAll(".item button");
var cartNum = document.querySelector("#cartnum");
var parent = document.querySelector(".parent");
var prices = document.getElementsByClassName("price");
var totalPrices = 0;
var total = document.getElementById("total");

console.log(parent);
var i = 0;
var count = 0;
var id = 0;

/* Arrays of imges */
var imgs = [
  "/imgs/slider (1).jpg",
  "/imgs/slider (2).jpg",
  "/imgs/slider (3).jpg",
  "/imgs/slider (4).jpg",
];
var phones = [
  "/imgs/phone (1).jpg",
  "/imgs/phone (2).jpg",
  "/imgs/phone (3).jpg",
  "/imgs/phone (4).jpg",
  "/imgs/phone (5).jpg",
  "/imgs/phone (6).jpg",
  "/imgs/phone (7).jpg",
  "/imgs/phone (8).jpg",
  "/imgs/phone (9).jpg",
];

var phonesDes = [
  "phone(1)",
  "phone(2)",
  "phone(3)",
  "phone(4)",
  "phone(5)",
  "phone(6)",
  "phone(7)",
  "phone(8)",
  "phone(9)",
];
var phonePrices = [
  "445",
  "653",
  "205",
  "778",
  "788",
  "669",
  "789",
  "778",
  "456",
];
var labs = [
  "/imgs/lab (1).jpg",
  "/imgs/lab (2).jpg",
  "/imgs/lab (3).jpg",
  "/imgs/lab (4).jpg",
  "/imgs/lab (5).jpg",
  "/imgs/lab (6).jpg",
  "/imgs/lab (7).jpg",
  "/imgs/lab (8).jpg",
  "/imgs/lab (9).jpg",
];
var labsDes = [
  "lab(1)",
  "lab(2)",
  "lab(3)",
  "lab(4)",
  "lab(5)",
  "lab(6)",
  "lab(7)",
  "lab(8)",
  "lab(9)",
];
var lapPrices = [
  "4454",
  "6537",
  "2056",
  "7787",
  "7889",
  "6690",
  "7890",
  "7780",
  "4560",
];
var makeups = [
  "/imgs/makeup (1).jpg",
  "/imgs/makeup (2).jpg",
  "/imgs/makeup (3).jpg",
  "/imgs/makeup (4).jpg",
  "/imgs/makeup (5).jpg",
  "/imgs/makeup (6).jpg",
  "/imgs/makeup (7).jpg",
  "/imgs/makeup (8).jpg",
  "/imgs/makeup (9).jpg",
];
var makeupsDes = [
  "makeup(1)",
  "makeup(2)",
  "makeup(3)",
  "makeup(4)",
  "makeup(5)",
  "makeup(6)",
  "makeup(7)",
  "makeup(8)",
  "makeup(9)",
];
var makeupPrices = ["44", "65", "25", "78", "88", "69.44", "78", "78", "46.8"];
sliderImg.setAttribute("src", imgs[0]);
phonesLink.classList.add("selected");
for (var i = 0; i < prices.length; i++) {
  prices[i].innerHTML = phonePrices[i] + "$";
}

/*  Intervals */
var sliderInterval = setInterval(function () {
  if (i >= imgs.length) {
    i = 0;
  } else {
    sliderImg.setAttribute("src", imgs[i]);
    i++;
  }
}, 2000);

/* Functions */
function addImgsArrays(arr1, arr2, arrDes, arrDes2, arrPrice, arrPrice2) {
  for (var i = 0; i < arr1.length; i++) {
    arr1[i].setAttribute("src", arr2[i]);
    arrDes[i].innerHTML = arrDes2[i];
    arrPrice[i].innerHTML = arrPrice2[i] + "$";
  }
}

/* Events */
for (var i = 0; i < bothSliders.length; i++) {
  bothSliders[i].addEventListener("mouseover", function () {
    clearInterval(sliderInterval);
  });
  bothSliders[i].addEventListener("mouseout", function () {
    sliderInterval = setInterval(function () {
      if (i >= imgs.length) {
        i = 0;
      } else {
        sliderImg.setAttribute("src", imgs[i]);
        i++;
      }
    }, 2000);
  });
}

sliderBefore.addEventListener("click", function (e) {
  e.preventDefault();
  var current = sliderImg.getAttribute("src");
  var index = imgs.indexOf(current);
  console.log(index);
  if (index == 0) index = imgs.length - 1;
  sliderImg.setAttribute("src", imgs[--index]);
});

console.log(sliderAfter);
sliderAfter.addEventListener("click", function (e) {
  e.preventDefault();
  var current = sliderImg.getAttribute("src");
  var index = imgs.indexOf(current);
  // console.log(index);
  if (index == imgs.length - 1) index = 0;
  // console.log(index);
  sliderImg.setAttribute("src", imgs[++index]);
});

labsLink.addEventListener("click", function (e) {
  e.preventDefault();
  addImgsArrays(catagoryImgs, labs, des, labsDes, prices, lapPrices);

  makeupLink.classList.remove("selected");
  phonesLink.classList.remove("selected");
  labsLink.classList.add("selected");
});

phonesLink.addEventListener("click", function (e) {
  e.preventDefault();
  addImgsArrays(catagoryImgs, phones, des, phonesDes, prices, phonePrices);
  makeupLink.classList.remove("selected");
  phonesLink.classList.add("selected");
  labsLink.classList.remove("selected");
});

makeupLink.addEventListener("click", function (e) {
  e.preventDefault();
  addImgsArrays(catagoryImgs, makeups, des, makeupsDes, prices, makeupPrices);
  makeupLink.classList.add("selected");
  phonesLink.classList.remove("selected");
  labsLink.classList.remove("selected");
});

goToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  var scrollPos = 100;
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    goToTop.classList.add("is-hidden");
  } else {
    // Scrolling DOWN
    goToTop.classList.remove("is-hidden");
  }
  scrollPos = windowY;
});
function addToCart(i) {
  console.log(i);
  var p;
  var newRow = document.createElement("tr");
  newRow.setAttribute("class", "here");
  newRow.classList.add("class", `row${id}`);
  parent.appendChild(newRow);
  var newPicCell = document.createElement("td");
  var newPic = document.createElement("img");
  newPic.setAttribute("class", "resize");
  var newName = document.createElement("td");
  var newPrice = document.createElement("td");

  var currentArray = document.querySelector(".selected").getAttribute("id");
  // console.log(currentArray.getAttribute("id"));
  if (currentArray == "phones") {
    newName.innerHTML = phonesDes[i];
    newPrice.innerHTML = phonePrices[i] + "$";
    p = phonePrices[i];
    newPic.setAttribute("src", phones[i]);
    totalPrices += Number(phonePrices[i]);
  } else if (currentArray == "labs") {
    newName.innerHTML = labsDes[i];
    newPrice.innerHTML = lapPrices[i] + "$";
    p = lapPrices[i];
    newPic.setAttribute("src", labs[i]);
    totalPrices += Number(lapPrices[i]);
  } else if (currentArray == "makeup") {
    newName.innerHTML = makeupsDes[i];
    newPrice.innerHTML = makeupPrices[i] + "$";
    p = makeupPrices[i];
    newPic.setAttribute("src", makeups[i]);
    totalPrices += Number(makeupPrices[i]);
  }
  total.innerHTML = totalPrices + "$";
  console.log(totalPrices);
  newRow.appendChild(newPicCell);
  newPicCell.appendChild(newPic);
  newPicCell.after(newName);
  newName.after(newPrice);
  var removeBtn = document.createElement("button");
  // removeBtn.setAttribute("class", "removebtn");
  removeBtn.innerHTML = "Remove";
  removeBtn.setAttribute("class", `p${p}`);
  newPrice.after(removeBtn);
  removeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    newRow.remove();
    totalPrices -= Number(e.target.getAttribute("class").substr(1));
    total.innerHTML = totalPrices;
    cartNum.innerHTML = --count;
  });
  id++;
}
// function removeProduct(id) {
//   console.log(id);
//   console.log(document.querySelector(`.row${id}`));
//   cartNum.innerHTML = count--;
// }

for (var i = 0; i < allAddBtns.length; i++) {
  allAddBtns[i].setAttribute("id", `${i}`);
}
for (var i = 0; i < allAddBtns.length; i++) {
  allAddBtns[i].addEventListener("click", function (e) {
    var index = Number(e.currentTarget.getAttribute("id"));
    addToCart(index);
    cartNum.innerHTML = ++count;
  });
}
var floatWindow = document.querySelector(".black-div div");
floatWindow.addEventListener("click", function (e) {
  e.stopPropagation();
});
var cartIcon = document.querySelector("#cart");
cartIcon.addEventListener("click", function () {
  blackDiv.classList.remove("hide-it");
  floatWindow.scrollIntoView();
});

var exitFloatWindow = document.querySelector(".black-div button");
var blackDiv = document.querySelector(".black-div");
exitFloatWindow.addEventListener("click", closeFloatingWindow);
blackDiv.addEventListener("click", closeFloatingWindow);
function closeFloatingWindow() {
  console.log(exitFloatWindow);
  blackDiv.classList.add("hide-it");
}
