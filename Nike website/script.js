"use strict";
//570 514
const ham_menu = document.querySelector(".ham_menu");
const mobie_menu = document.querySelector(".mobile-nav");
const shoeImg = document.querySelector(".shoe");
let count = 0;
let countCalled = 0;
function changeTheme() {
  if (countCalled > 1) {
    shoeImg.style.transform = "translateX(200%)";
    console.log(countCalled);
    setTimeout(() => {
      shoeImg.src = `img/shoe_${count}.png`;
      shoeImg.style.transform =
        "rotate(-25deg) translateX(-120px) translateY(25px)";
    }, 1000);
  }

  setTimeout(() => {
    if (count === 0) {
      console.log(count);
      document
        .querySelector(":root")
        .style.setProperty("--MainColor", "#0c0c0c");
      document
        .querySelector(":root")
        .style.setProperty("--MainColorVar", "#242424");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinear", "#353535");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinearVar", "#212121");
      count++;
    } else if (count === 1) {
      console.log(count);
      document
        .querySelector(":root")
        .style.setProperty("--MainColor", "#1815C6");
      document
        .querySelector(":root")
        .style.setProperty("--MainColorVar", "#4846EA");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinear", "#4865F6");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinearVar", "#0F2BB4");
      count++;
    } else if (count === 2) {
      console.log(count);
      document
        .querySelector(":root")
        .style.setProperty("--MainColor", "#A22626");
      document
        .querySelector(":root")
        .style.setProperty("--MainColorVar", "#DC4B4B");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinear", "#F86464");
      document
        .querySelector(":root")
        .style.setProperty("--TextLinearVar", "#EF1111");
      count = 0;
      console.log(count);
    }
  }, 1000);
}
ham_menu.addEventListener("click", function () {
  if (!ham_menu.classList.contains("open")) {
    mobie_menu.style.transform = "translateX(10px)";
    ham_menu.classList.add("open");
    ham_menu.children[0].setAttribute("name", "close-outline");
  } else {
    mobie_menu.style.transform = "translateX(100%)";
    ham_menu.classList.remove("open");
    ham_menu.children[0].setAttribute("name", "menu-outline");
  }
});

setInterval(() => {
  countCalled++;
  if (countCalled > 0) {
    changeTheme();
  }
}, 3000);
//<ion-icon name="close-outline"></ion-icon>
