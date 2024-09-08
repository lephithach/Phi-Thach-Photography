function countdown30Minutes() {
  const timer = document.querySelector(".timer");

  const endDate = new Date().getTime() + 15 * 60 * 1000;

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
      minutes + ":" + ((seconds < 10 && "0" + seconds) || seconds);

    if (distance < 0) {
      clearInterval(x);
      demo.innerHTML = "Hết giờ!";
    }
  }, 1000);
}

countdown30Minutes();
