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
    title: "Phóng sự cưới",
  },
  {
    url: "../img/LPT_8097.jpg",
    title: "Phóng sự cưới",
  },
];

const imgContainer = document.querySelector(".gallery-container .row");
let text = "";
array.forEach((item) => {
  //   item.innerHTML = `
  //     <img src="${array[index].url}" alt="${array[index].title}" />
  //     <div class="pic-title">${array[index].title}</div>
  //   `;

  text += `
      <div class="col-lg-3 img-container">
          <div class="pic" style="background-image:url(${item.url})"></div>
          <p class="text">${item.title}</p>
        </div>
    `;
});
imgContainer.innerHTML = text;
