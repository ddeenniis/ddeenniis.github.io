// Slider Slick
$(".slider__wrapper").slick({
  adaptiveHeight: true,
  nextArrow:
    '<button type="button" class="slick-next"><img src="img/slider/right.png" /></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><img src="img/slider/left.png" /></button>',
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  fade: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
});

// Modal
$("[data-modal=modal-consultation]").on("click", function () {
  $(".overlay, #modal-consultation").fadeIn();
  $("body").addClass("show-modal");
});

$(".modal__close").on("click", function () {
  $(".overlay, .modal").fadeOut();
  $("body").removeClass("show-modal");
});

$(".btn_catalog").each(function (i) {
  $(this).on("click", function () {
    $("#modal-order .modal__descr").text($(".catalog__item h3").eq(i).text());
    $(".overlay, #modal-order").fadeIn();
  });
});

$(document).mouseup(function (e) {
  var div = $(".modal");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.fadeOut();
    $("body").removeClass("show-modal");
    $(".overlay").fadeOut();
  }
});

// Tabs on Jquery
$("ul.catalog__tabs").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.catalog__wrapper")
    .find("div.catalog__content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});

// Validation Form
function validateForm() {
  $("#consultation-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      tel: {
        required: true,
        minlength: 13,
        maxlength: 13,
        digits: true,
      },
      email: {
        require: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Пожалуйста введите своё имя",
        minlength: jQuery.validator.format(
          "Минимальное количество символов - {0}"
        ),
        maxlength: jQuery.validator.format(
          "Максимальное количество символов - {0}"
        ),
      },
      tel: {
        required: "Пожалуйста введите свой номер телефона",
        minlength: jQuery.validator.format(
          "Минимальное количество символов - {0}"
        ),
        maxlength: jQuery.validator.format(
          "Максимальное количество символов - {0}"
        ),
        digits: "Номер должен состоять из цифр",
      },
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Неверный формат почты",
      },
    },
  });
}

validateForm();

// Mask
$("input[name=tel]").mask("+38(099)9999999");

// Toggle Card
function toggleCard(className) {
  $(className).each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog__item-front").eq(i).toggleClass("active");
      $(".catalog__item-back").eq(i).toggleClass("active");
    });
  });
}

toggleCard(".catalog__item-next");
toggleCard(".catalog__item-prev");
