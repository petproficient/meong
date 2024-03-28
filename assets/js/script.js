'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



// Fungsi untuk menangani klik pada tautan WhatsApp
function handleWhatsAppClick(event) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin Anda
  
  // Pesan yang ingin Anda kirimkan
  var message = encodeURIComponent("Halo, saya ingin bertanya tentang produk dari toko Meong...");

  // Buat URL khusus untuk membuka WhatsApp dengan chat admin dan pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + message;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink = document.getElementById("whatsappLink");
whatsappLink.addEventListener("click", handleWhatsAppClick);
