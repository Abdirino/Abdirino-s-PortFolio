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


// nav reveal on-scroll
let prevScroll = window.pageYOffset;
window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  if (prevScroll > currentScroll) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-60px";
  }
  prevScroll = currentScroll;
};

//end nav reveal on-scroll


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
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// end contact sec

// copyright
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
// end copyright

const barMenu = document.querySelector(".checkbtn");

barMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
  barMenu.classList.toggle("active");
}
