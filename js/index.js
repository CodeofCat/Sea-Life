// Website visit counter Start

let visitor = document.getElementById("visiter_count");
let visitCount = localStorage.getItem("page_view");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
visitor.innerHTML = "You Visit: " + visitCount;

// Website visit counter End


// Search-bar Starts

let searchform = document.querySelector('.search-form');
let searchbtn = document.querySelector('#searchbtn');

searchbtn.addEventListener('click', () => {
  searchform.classList.toggle('active');
  navbar.classList.remove('active');
});

// Search-bar Ends


// Navbar Starts

let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menubtn');

menubtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  searchform.classList.remove('active');
});

// Navbar Ends


// Wondows Scroll-bar Starts

window.addEventListener('scroll', () => {
  searchform.classList.remove('active');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.head').classList.add('active');
  } else {
    document.querySelector('.head').classList.remove('active');
  }
});

window.addEventListener('load', () => {
  if (window.scrollY > 0) {
    document.querySelector('.head').classList.add('active');
  } else {
    document.querySelector('.head').classList.remove('active');
  }
});

// Windows Scroll-bar Ends


// Blur Cursor Effect Starts 
const movingMouse = document.getElementById("moviingcursoreffect");

document.addEventListener('mousemove', function (move) {
  movingMouse.style.top = move.y + "px";
  movingMouse.style.left = move.x + "px";
});
//  Blur Cursor Effect End

// Swiper Home Section Starts

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

// Swiper Home Section Ends


// FAQ's Section Starts

$('.faq-question').click(function () {
  $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
  $(this).next('.faq-answer').slideToggle();
});

// FAQ's Section Ends


// About Section Starts

$(document).ready(function() {
  $(".toggleBtn").click(function() {
    var target = $(this).data("target");
    $(target).fadeToggle("fast");
    $(this).text(function(_, text) {
      return text === "Read More" ? "Read Less" : "Read More";
    });
  });
});
// About Section Ends


// Swiper Review/Rate Section Starts

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  cssMode: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  keyboard: true,
});

// Swiper Review/Rate Section Ends


// Date time section Starts

const dateTime = document.getElementById("date_time");

setInterval(() => {
let now = new Date()
let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();
  dateTime.innerHTML = `<span class="time1">${date},</span><span class="time1">${time}</span> <br>  <span class="time2">www.sealife.com</span>`;
}, 1000);

// Date time section Ends


/* Back to top button Starts */
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  /* Back to top button Ends */



// Cards pop-up content feching Dyanimacally Section Starts

const cardImgs = ["imgs/10-min.jpeg", "imgs/11-min.jpeg", "imgs/4-min.jpeg"];
const cardSubHead = ["Storytelling", "Arts and Crafts Fair", "Science Exploration"];
const cardSubPara = ["Children's Library", "Art Studio", "Science Lab"];
const cardDates = ["July 15, 2023", "August 2, 2023", "September 10, 2023"];
const cardPara = [`
<p>Welcome to the magical world of Sea Life! Today, we have a special event designed just for children. Gather around as we embark on a captivating storytelling adventure that will transport you deep into the ocean realm.</p>`,

`<p>Welcome to the Arts and Crafts Fair at Sea Life's children's event! Get ready to unleash your creativity and imagination as we dive into a world of artistic wonders inspired by the ocean.At our fair.</p>`,

`<p>Welcome to the Science Exploration corner at Sea Life's children's event! Prepare to embark on a thrilling journey of discovery and delve into the fascinating world of marine science.
In the Marine Biology Lab, you can step into the shoes of a marine biologist and uncover the secrets of marine life.</p>`];

$(document).ready(function() {
  function openPopup(index, buttonId) {
    $(buttonId).click(function() {
      $('#popupContent').html(`
      <section id="card-readmore">
        <div class="card-read-content">
          <i id="closePopupBtn1" class="fas fa-times"></i>
          <img class="card-img" src=${cardImgs[index]} alt="card-img${index+1}">
          <h3 class="card-sub-head">${cardSubHead[index]}</h3>
          <p class="card-sub-para">${cardSubPara[index]}</p>
          <div class="icons">
            <a href=""><i class="fa-regular fa-calendar-days"></i>${cardDates[index]}</a>
          </div>
          ${cardPara[index]}
        </div>
      </section>
      `);
      $('#popupContainer').fadeIn();
    });
  }

  function closePopup() {
    $('#popupContainer').click(function(event) {
      if (event.target.id === 'popupContainer' || event.target.id === 'closePopupBtn1' || event.target.id === 'closePopupBtn') {
        $('#popupContainer').fadeOut();
      }
    });
  }

  for (let i = 0; i < cardImgs.length; i++) {
    const buttonId = `#openPopupBtn${i+1}`;
    openPopup(i, buttonId);
  }

  closePopup();
});



// Cards pop-up content feching Dyanimacally Section Ends
