let links = document.querySelectorAll(".title-and-nav-bar ul li a"); // Links of the website
let bodyContent = document.querySelectorAll(".content > div"); // body content in properties page
let featuresTitle = document.querySelectorAll(".description > div .title"); // Featured titles
let bestDealBtns = document.querySelectorAll(".titles-buttons button"); // best deal buttons
let bestContent = document.querySelectorAll(".content > div"); // best deal buttons content
let btnsArray = [...bestDealBtns]; // Create an array of best deal buttons
let animation = document.querySelector(".animation");

let reg = /\w+\.\w+/gi;


// Set header to be fixed after scrollY => 184
document.onscroll = () => {
  let miniNavBar = document.querySelector(".title-and-nav-bar");
  if (scrollY > 184) {
    miniNavBar.style.cssText =
      "width: 100%; padding-right: 100px; padding-left: 100px; background-color: white; position:fixed; top: 0; left: 0; z-index: 5; transition-duration: var(--transitionDuration); box-shadow: #eee 0px 0px 7px 3px;";
  } else miniNavBar.style.cssText = "position:none;";
};

// Add nav bar to the headrer aection in html


// Change the feature color if active and show its text content
featuresTitle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // Remove featured-active and show-text classes from unclicked elements
    for (let i = 0; i < featuresTitle.length; i++) {
      if (e.target !== featuresTitle[i]) {
        featuresTitle[i].classList.remove("featured-active");
        featuresTitle[i].nextElementSibling.classList.remove("show-text");
      }
    }
    // Add featured-active class to change color of an element if it does not contain it else remove the class to remove the color
    e.target.classList.toggle("featured-active");
    // Add show-text class to show text of an element if it does not contain it else remove the class to remove the text
    e.target.nextElementSibling.classList.toggle("show-text");
  });
});

// Active the button and change its color in best deal section (Home page)
bestDealBtns.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    for (let i = 0; i < bestDealBtns.length; i++) {
      bestDealBtns[i].classList.remove("show-content");
      bestContent[i].classList.remove("show-content");
    }
    e.target.classList.add("show-content");
    bestContent[btnsArray.indexOf(e.target)].classList.add("show-content");
  });
});

// onload event
window.addEventListener("load", function () {
  // Hide animation onloading page after 1.5 seconds
  animation.style.cssText = "display: fixed;";
  this.setTimeout(() => {
    animation.style.cssText = "display: none;";
  }, 2500);

  // Change link color based on the page
  let reg = /\w+\.\w+/gi;
  let links = document.querySelectorAll(".title-and-nav-bar ul li a"); // Links of the website
  links.forEach((ele) => {
    if (location.pathname.match(reg)[0] === `${ele.className}.html`) {
      ele.style.cssText = "color: #ff5100;";
    }
  });
  let navUl = document.querySelector(".title-and-nav-bar ul"); // nav ul
  let ScheduleVisit = document.querySelector(
    ".title-and-nav-bar ul li:last-child a"
  ); // Schedule a Visit link button
  // Remove events from Schedule a Visit button
  ScheduleVisit.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
  // Menu nav var
  let menuBtn = document.querySelector(".menu-btn-1");
  function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
  }
  menuBtn.onclick = () => {
    menuBtnFunction(menuBtn);
    console.log(navUl);
    navUl.classList.toggle("show-nav");
  };
});

// Set the js code to a specific page
if (location.pathname.match(reg)[0] === `index.html`) {
  // Variables
  let images = document.querySelectorAll(".mySwiper img"); // Images in swiper
  let image = document.querySelector(".top .video"); // Video image in video section
  let topImage = document.querySelector(".top"); // Top in video section

  // Set cursor to hand when grabbing the image
  images.forEach((ele) => {
    // Hand cursor
    ele.addEventListener("pointerdown", function (e) {
      // only on mouse left click
      if (e.button == 0) {
        ele.style.cssText = "cursor: grab";
      }
    });
    // Back to default cursor
    ele.addEventListener("pointerup", function () {
      ele.style.cssText = "cursor: default";
    });
  });

  // Set bottom to come after top with the image absoluted;
  window.onload = () => {
    topImage.style.cssText = `margin-bottom: ${image.clientHeight / 2}px;`;
  };

  // Properties page JS
} else if (location.pathname.match(reg)[0] === `properties.html`) {
  // Variables
  let bodyBtns = document.querySelectorAll(".titles-buttons button");
  // Active the button and change its color in body section (properties page)
  bodyBtns.forEach((ele) => {
    let content = document.querySelector(".content");
    let textContent = document.querySelectorAll(".content > div");
    let fullTextContentArr = textContent;
    ele.addEventListener("click", (e) => {
      content.style.cssText = "animation: fade-in 0.5s forwards;";
      setTimeout(() => {
        content.style.cssText = "animation: none;";
      },500)
      if (ele.textContent === "Apartment") {
        for (let i = 0; i < fullTextContentArr.length; i++) {
          if (!textContent[i].classList.contains("apartment")) {
            textContent[i].style.cssText = "display: none;";
          } else {
            textContent[i].style.cssText = "display: flex;";
          }
        }
      } else if (ele.textContent === "villa house") {
        for (let i = 0; i < fullTextContentArr.length; i++) {
          if (!textContent[i].classList.contains("villa")) {
            textContent[i].style.cssText = "display: none;";
          } else {
            textContent[i].style.cssText = "display: flex;";
          }
        }
      } else if (ele.textContent === "Penthouse") {
        for (let i = 0; i < fullTextContentArr.length; i++) {
          if (!textContent[i].classList.contains("penthouse")) {
            textContent[i].style.cssText = "display: none;";
          } else {
            textContent[i].style.cssText = "display: flex;";
          }
        }
      } else
        for (let i = 0; i < fullTextContentArr.length; i++) {
          fullTextContentArr[i].style.cssText = "display: flex;";
        }
    });
  });
}
