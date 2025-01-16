const array = [
  {
    url: "../img/LPT_8097.jpg",
    title: "Phóng sự cưới",
  },
  {
    url: "../img/444935377_487526627066164_7476185495536316698_n.jpg",
    title: "Kỷ yếu",
  },
  {
    url: "../img/LPT_9370.jpg",
    title: "Chân dung",
  },
  {
    url: "../img/LPT_8097.jpg",
    title: "Khác",
  },
];

const imgContainer = document.querySelector(".gallery-container .row.album");

array.forEach((item) => {
  imgContainer.innerHTML += `
      <div class="col-lg-3 img-container">
        <div class="pic" style="background-image:url(${item.url})"></div>
         <p class="text">${item.title}</p>
       </div>
    `;
});
