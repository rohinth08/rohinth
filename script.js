function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  const typewriterTexts = document.querySelectorAll(".section__text__p2");
  let currentIndex = 0;

  function switchTypewriterText() {
    typewriterTexts[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % typewriterTexts.length;
    typewriterTexts[currentIndex].style.display = "inline-block";
  }

  setInterval(switchTypewriterText, 4000); // Switch every 4 seconds (adjust as needed)