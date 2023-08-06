// on-scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
// end on-scroll animation

// on-scroll animation
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove('show')
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer2.observe(el));
// end on-scroll animation

// scroll to top button
const toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// end scroll to top button

// contact sec
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxcDxnOXn2Xmgx7C24EnOB-OOu6Iq3gRdzH5WWNUUXos-34NXoi3sCOsx4PtLa-mhpR/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Successfully.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 700);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// end contact sec

// copyright
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
// end copyright

// hamburger sec
const barMenu = document.querySelector(".checkbtn");

barMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  barMenu.classList.toggle("active");
}
// hamburger sec

// Background Mode
let modeIcon = document.querySelector("#mode-icon");

modeIcon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    modeIcon.src = "./images/moon.png";
  } else {
    modeIcon.src = "./images/sun.png";
  }
};
// Background Mode
