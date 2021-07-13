// Burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu_list_item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("menu_active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
  });
});

$(document).mouseup(function (e) {
  var div = $(".menu, .burger");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass("menu_active");
    $(".burger").removeClass("burger_active");
  }
});

// Slider
