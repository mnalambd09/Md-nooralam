// 🌙 Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});

// ✨ Scroll Animation (fade-in + slide-up)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 📜 Education Certificate Modal
function openEduCertificate(src) {
  const modal = document.getElementById("edu-certificate-modal");
  const img = document.getElementById("edu-certificate-img");
  img.src = src;
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // prevent background scroll
  document.addEventListener("keydown", escCloseEduModal);
  modal.addEventListener("click", backdropCloseEduModal);
}

function closeEduCertificate() {
  const modal = document.getElementById("edu-certificate-modal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", escCloseEduModal);
  modal.removeEventListener("click", backdropCloseEduModal);
}

function escCloseEduModal(e) {
  if (e.key === "Escape") closeEduCertificate();
}

function backdropCloseEduModal(e) {
  const content = document.querySelector("#edu-certificate-modal .modal-content");
  if (!content.contains(e.target)) {
    closeEduCertificate();
  }
}
