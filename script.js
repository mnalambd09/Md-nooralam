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
// Zoom functionality for modal image
let zoomLevel = 1;

function enableZoom() {
  const img = document.getElementById("edu-certificate-img");
  img.style.transform = `scale(${zoomLevel})`;
  img.style.transition = "transform 0.2s ease";
  
  img.addEventListener("wheel", function(e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      // scroll up → zoom in
      zoomLevel += 0.1;
    } else {
      // scroll down → zoom out
      zoomLevel = Math.max(0.5, zoomLevel - 0.1); // সর্বনিম্ন 0.5x
    }
    img.style.transform = `scale(${zoomLevel})`;
  });
}

function openEduCertificate(src) {
  const modal = document.getElementById("edu-certificate-modal");
  const img = document.getElementById("edu-certificate-img");
  img.src = src;
  zoomLevel = 1; // reset zoom
  img.style.transform = "scale(1)";
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", escCloseEduModal);
  modal.addEventListener("click", backdropCloseEduModal);
  enableZoom();
}

function backdropCloseEduModal(e) {
  const content = document.querySelector("#edu-certificate-modal .modal-content");
  if (!content.contains(e.target)) {
    closeEduCertificate();
  }
}
