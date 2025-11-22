// 🌙 Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});

// ✨ Scroll Animation (fade-in + slide-up)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// 📜 Education Certificate Modal + Zoom + Drag
let zoomLevel = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

function openEduCertificate(src) {
  const modal = document.getElementById("edu-certificate-modal");
  const img = document.getElementById("edu-certificate-img");
  img.src = src;
  zoomLevel = 1;
  translateX = 0;
  translateY = 0;
  img.style.transform = "scale(1) translate(0px,0px)";
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", escCloseEduModal);
  modal.addEventListener("click", backdropCloseEduModal);

  // Zoom with mouse wheel
  img.onwheel = function(e) {
    e.preventDefault();
    if (e.deltaY < 0) zoomLevel += 0.1; // zoom in
    else zoomLevel = Math.max(0.5, zoomLevel - 0.1); // zoom out
    updateTransform(img);
  };

  // Drag to move
  img.onmousedown = function(e) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    img.style.cursor = "grabbing";
  };
  window.onmouseup = function() {
    isDragging = false;
    img.style.cursor = "grab";
  };
  window.onmousemove = function(e) {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform(img);
  };
}

function updateTransform(img) {
  img.style.transform = `scale(${zoomLevel}) translate(${translateX}px, ${translateY}px)`;
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
  if (!content.contains(e.target)) closeEduCertificate();
}
