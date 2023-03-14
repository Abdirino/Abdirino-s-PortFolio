// on-scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el))
// end on-scroll animation

// nav reveal on-scroll
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

//end nav reveal on-scroll

// popup menu
let popup = document.getElementById("popup");
function openPopup () {
    popup.classList.add("open-popup");
}
function closePopup () {
    popup.classList.remove("open-popup");
}
// end popup menu

// scroll to top button
const toTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}
// end scroll to top button

// loader
var load = document.querySelector(".loader");
function loadFun(){
    load.style.display = "none";
}
// end loader

// contact sec
const scriptURL = 'https://script.google.com/macros/s/AKfycbxcDxnOXn2Xmgx7C24EnOB-OOu6Iq3gRdzH5WWNUUXos-34NXoi3sCOsx4PtLa-mhpR/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent Successfully."
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 2000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })
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




