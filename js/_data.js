const array = [
  {
    url: "../img/chandung/LPT_2724.JPG",
    title: "Kỷ yếu",
    id: "kyyeu",
  },
  {
    url: "../img/LPT_8097.jpg",
    title: "Phóng sự cưới",
    id: "psc",
  },
  {
    url: "../img/LPT_9370.jpg",
    title: "Chân dung",
    id: "chandung",
  },
  {
    url: "../img/khac.jpg",
    title: "Khác",
    id: "khac",
  },
];

const imgContainer = document.querySelector(".gallery-container .row.album");

array.forEach((item) => {
  imgContainer.innerHTML += `
      <a class="col-md-6 col-lg-3 img-container" href="#${item.id}">
        <div class="pic" style="background-image:url(${item.url})"></div>
        <p class="text">${item.title}</p>
      </a>
    `;
});

const navbar = document.querySelector("nav");
const sliderContainer = document.querySelector(".slider-container .row");

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  if (window.scrollY > 20) {
    navbar.classList.add("fix");
    sliderContainer.style.paddingTop = "100px";
  } else {
    navbar.classList.remove("fix");
    sliderContainer.style.paddingTop = "0px";
  }
});
