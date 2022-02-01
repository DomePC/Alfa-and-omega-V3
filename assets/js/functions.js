let slider_mockups = document.querySelector(".mockup");
let background = document.querySelector(".mockup-background-image");
let mockups = [
  "black-t-shirt.png",
  "white-t-shirt.png",
  "hoddie-black.png",
  "mug.png",
  "black-hoddie.png",
  "t-shirt-black-txt.png",
  "two-mugs.png",
];
let body = document.querySelector("body");
let menu = document.querySelector(".menu");
let mobile_nav_button = document.querySelector(".mobile-nav-button");
let i = 0;

mobile_nav_button.addEventListener("click", () => {
  const visible = menu.getAttribute("data-visible");

  if (visible === "false") {
    menu.setAttribute("data-visible", true);
    mobile_nav_button.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
  } else if (visible === "true") {
    menu.setAttribute("data-visible", false);
    mobile_nav_button.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
  }
});

const back = () => {
  if (i <= 0) i = mockups.length;
  i--;
  return setImg(), setBack();
};

const next = () => {
  if (i >= mockups.length - 1) i = -1;
  i++;
  return setImg(), setBack();
};

const setImg = () => {
  return slider_mockups.setAttribute(
    "src",
    "assets/images/mockups/" + mockups[i]
  );
};

const setBack = () => {
  return background.setAttribute("src", "assets/images/mockups/" + mockups[i]);
};

window.onscroll = () => {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
};
