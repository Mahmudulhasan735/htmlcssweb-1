

document.querySelector("#open-menu").addEventListener("click", function () {
  document.querySelector("nav.mainMenu").classList.toggle("showMenu");
});

const elementList = document.querySelectorAll("ul.menuList li");

const subMenuList = document.querySelectorAll("ul.menuList li ul.subMenuList");

elementList.forEach((singleLi) => {
  singleLi.addEventListener("click", function () {
    singleLi.querySelector("ul.subMenuList").classList.toggle("showSubMenu");

    singleLi.querySelector("ul li a span i").classList.toggle("fa-caret-up");
  });
});

subMenuList.forEach((singleSubMenu) => {
  singleSubMenu.closest("li").querySelector("a").innerHTML +=
    '<span><i class="fa fa-caret-down></i></span>';
});


const preloader = document.getElementById(loading);

function myFunction() {
  preloader.style.display = 'invisible';
}