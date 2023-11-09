const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");

const navbar = document.getElementById("navbar");
const smallNavbar = document.getElementById("small-navbar");

function openMenu() {
	hamburger.classList.add("hidden");
	close.classList.remove("hidden");
	smallNavbar.classList.remove("small-navbar");
	smallNavbar.classList.add("hidden");
	navbar.classList.remove("hidden");
	navbar.classList.add("navbar");
}

function closeMenu() {
	hamburger.classList.remove("hidden");
	close.classList.add("hidden");
	navbar.classList.remove("navbar");
	navbar.classList.add("hidden");
	smallNavbar.classList.remove("hidden");
	smallNavbar.classList.add("small-navbar");
}
