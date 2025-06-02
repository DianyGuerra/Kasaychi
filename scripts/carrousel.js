
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  let index = 0;

  function showSlide(i) {
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${i * slideWidth}px)`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  // Cambia de imagen automáticamente cada 5 segundos
  setInterval(() => {
    nextSlide();
  }, 5000);

