document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("logoSlider");
  let scrollX = 0;

  // Duplikat konten untuk loop seamless
  slider.innerHTML += slider.innerHTML;

  function animateSlider() {
    scrollX += 1;
    slider.style.transform = `translateX(-${scrollX}px)`;

    // Reset ketika mencapai tengah
    if (scrollX >= slider.scrollWidth / 2) {
      scrollX = 0;
    }

    requestAnimationFrame(animateSlider);
  }

  animateSlider();
});
