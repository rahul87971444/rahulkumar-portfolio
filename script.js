document.addEventListener("DOMContentLoaded", () => {

// Current year in footer
document.getElementById("year").textContent =
new Date().getFullYear();

// ======================
// Typing Effect
// ======================
const typingText =
"Aspiring CSE (IoT) Engineer | Python & Java Developer";

const leadEl = document.querySelector(".lead");
let i = 0;

function typeWriter() {
if (i < typingText.length) {
leadEl.innerHTML =
`<span class="typing">${typingText.substring(0, i + 1)}</span>`;
i++;
setTimeout(typeWriter, 80);
} else {
leadEl.innerHTML =
`<span class="typing">${typingText}</span>`;
}
}

typeWriter();

// ====================================
// Project Toggle Animation
// ====================================

document.querySelectorAll(".btn.primary").forEach(button => {

```
button.addEventListener("click", () => {

  const projectDetails =
    button.parentElement.querySelector(".projectDetails");

  projectDetails.classList.toggle("show");

  if (projectDetails.classList.contains("show")) {
    button.textContent = "Hide Details";
  } else {

    if (button.id === "viewProject1") {
      button.textContent =
        "Intelligent Home Automation System Using Hand Gesture Recognition";
    }

    if (button.id === "viewProject2") {
      button.textContent =
        "Robotic Object Sorting System";
    }

    if (button.id === "viewProject3") {
      button.textContent =
        "LearnLens AI";
    }
  }
});
```

});

// ================================
// Scroll Reveal Animation
// ================================
const sections = document.querySelectorAll(".section");

const reveal = () => {
sections.forEach(section => {
const rect = section.getBoundingClientRect();

```
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("show");
  }
});
```

};

window.addEventListener("scroll", reveal);
reveal();

});
