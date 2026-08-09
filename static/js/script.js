/* ==========================
   TYPING ANIMATION
========================== */

const words = [
  "Aspiring Web Developer",

  "SEO Specialist",

  "Front-End Developer",

  "Continuous Learner",
];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.innerHTML =
      currentWord.substring(0, charIndex) + '<span class="cursor">|</span>';

    charIndex++;

    if (charIndex > currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.innerHTML =
      currentWord.substring(0, charIndex) + '<span class="cursor">|</span>';

    charIndex--;

    if (charIndex < 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();
/* ==========================
   SCROLL ANIMATION
========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((element) => {
  observer.observe(element);
});
/* ==========================
   COUNTER
========================== */

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.dataset.target;

    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* ==========================
   THEME TOGGLE
========================== */

const themeToggle = document.getElementById("theme-toggle");

function applyTheme(isLight) {
  document.body.classList.toggle("light-mode", isLight);
  if (themeToggle) {
    themeToggle.textContent = isLight ? "🌙" : "☀";
    themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
  }
}

if (themeToggle) {
  applyTheme(localStorage.getItem("theme") === "light");

  themeToggle.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-mode");
    applyTheme(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

/* ==========================
   CERTIFICATE MODAL
========================== */

function openCertificate(image) {
  const modal = document.getElementById("certificateModal");
  const preview = document.getElementById("certificatePreview");

  preview.src = image;
  modal.style.display = "flex";
}

function closeCertificate() {
  const modal = document.getElementById("certificateModal");

  modal.style.display = "none";
}

const modal = document.getElementById("certificateModal");

if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeCertificate();
    }
  });
}
