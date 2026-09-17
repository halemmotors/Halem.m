// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("nav-open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // On mobile, tapping a top-level dropdown link (Our Brands / Services / Our Company)
    // should expand its submenu instead of doing nothing (since hover doesn't apply on touch).
    var dropdownLinks = siteNav.querySelectorAll(".dropdown > .company-link");
    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 900) {
          var parent = link.parentElement;
          var alreadyOpen = parent.classList.contains("dropdown-open");
          siteNav.querySelectorAll(".dropdown").forEach(function (d) {
            d.classList.remove("dropdown-open");
          });
          if (!alreadyOpen) {
            parent.classList.add("dropdown-open");
          }
          e.preventDefault();
        }
      });
    });

    // Close the mobile menu after a real link is followed / window resized back up
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        siteNav.classList.remove("nav-open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});

function accordion() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function changeImage(fileName) {
  let img = document.querySelector(".cuscarimg")
  img.setAttribute("src", fileName);
}