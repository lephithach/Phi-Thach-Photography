const array = [
  {
    url: "../img/LPT_8097.jpg",
    title: "Phóng sự cưới",
  },
  {
    url: "../img/kyyeu/TriAn4.jpg",
    title: "Kỷ yếu",
  },
  {
    url: "../img/LPT_9370.jpg",
    title: "Chân dung",
  },
  {
    url: "../img/khac.jpg",
    title: "Khác",
  },
];

const imgContainer = document.querySelector(".gallery-container .row.album");

array.forEach((item) => {
  imgContainer.innerHTML += `
      <div class="col-md-6 col-lg-3 img-container">
        <div class="pic" style="background-image:url(${item.url})"></div>
         <p class="text">${item.title}</p>
       </div>
    `;
});

const navbar = document.querySelector("nav");
const sliderContainer = document.querySelector(".slider-container");

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY > 20) {
    navbar.classList.add("fix");
    sliderContainer.style.marginTop = "100px";
  } else {
    navbar.classList.remove("fix");
    sliderContainer.style.marginTop = "0px";
  }
});
