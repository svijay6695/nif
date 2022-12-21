// Navbar
$().ready(function () {
  $(".navbar-toggler-icon").click(function () {
    console.log("Test");
    $("body").css("overflow", "hidden");
    $(".overlay-mobile").removeClass("hide");
    $(".mob-navbar").removeClass("hide");
  });

  $(".close").click(function () {
    $("body").css("overflow", "auto");
    $(".overlay-mobile").addClass("hide");
    $(".mob-navbar").addClass("hide");
  });
  $(".send-btn").click(function (e) {
    e.preventDefault;
    $("#contact").validate({
      rules: {
        name: {
          required: true,
        },
        mobile: {
          required: true,
        },
        email: {
          required: true,
        },
        location: {
          required: true,
        },
        subject: {
          required: true,
        },
        message: {
          required: true,
        },
      },
      messages: {
        name: "WE NEED YOUR NAME",
        mobile: "WE NEED YOUR MOBILE",
        email: "WE NEED YOUR EMAIL",
        location: "WE NEED YOUR LOCATION",
        subject: "WE NEED YOUR SUBJECT",
      },
      submitHandler: function () {},
    });
  });
});

function productFunction() {
  $(".main-navbar").css("display", "none");
  $(".product-navbar").css("display", "block");
}
function resourceFunction() {
  $(".main-navbar").css("display", "none");
  $(".resource-navbar").css("display", "block");
}
function closeFunction() {
  $(".main-navbar").css("display", "block");
  $(".resource-navbar").css("display", "none");
  $(".product-navbar").css("display", "none");
}

$().ready(function () {
  $(".testimonial-container").slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
  });

  // about
  $(".vision-row").slick({
    dots: false,
    slidesToShow: 2,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".feature-application-row").slick({
    dots: false,
    slidesToShow: 2,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".admin-right").slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
  });
});

$().ready(function () {
  $(".banner-container").slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
  });

  var $window = $(window);
  var windowsize = $window.width();

  if (windowsize < 991) {
    $(".awards ul").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      arrows: false,
    });
  }

  if (windowsize < 767) {
    $(".products-cards").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
    });
  }
});

$().ready(function () {
  $(".resources .buy-right").slick({
    dots: true,
    slidesToShow: 1,
    infinite: true,
    arrows: false,
  });
});

$().ready(function () {
  $(".order-cards").slick({
    dots: false,
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// logo
$().ready(function () {
  $(".partner-logos").slick({
    dots: false,
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

// Scroll Section
$(".slider").slick({
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
});

//ticking machine
var percentTime;
var tick;
var time = 0.1;
var progressBarIndex = 0;

$(".progressBarContainer .progressBar").each(function (index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);
});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  tick = setInterval(interval, 30);
}

function interval() {
  if (
    $(
      '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
    ).attr("aria-hidden") === "true"
  ) {
    progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data(
      "slickIndex"
    );
    startProgressbar();
  } else {
    percentTime += 1 / (time + 5);
    $(".inProgress" + progressBarIndex).css({
      width: percentTime + "%",
    });
    if (percentTime >= 100) {
      $(".single-item").slick("slickNext");
      progressBarIndex++;
      if (progressBarIndex > 2) {
        progressBarIndex = 0;
      }
      startProgressbar();
    }
  }
  var activeImg = $(`.item`);
  for (i = 0; i < activeImg.length; i++) {
    var currentImg = activeImg[i];
    if (progressBarIndex === i) {
      currentImg.classList.add("active");
    } else {
      currentImg.classList.remove("active");
    }
  }
}

function resetProgressbar() {
  $(".inProgress").css({
    width: 0 + "%",
  });
  clearInterval(tick);
}
startProgressbar();
// End ticking machine

$(".item").click(function () {
  clearInterval(tick);
  var goToThisIndex = $(this).find("span").data("slickIndex");
  $(".single-item").slick("slickGoTo", goToThisIndex, false);
  startProgressbar();
});

// Get the button
let mybutton = document.getElementById("scrollTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

$(".color-head").click(function () {
  $(".color-head").removeClass("active");
  $(this).addClass("active");
});
