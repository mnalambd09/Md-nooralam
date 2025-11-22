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

/* ============================
   Education Certificate Modal
   ============================ */
let eduZoomLevel = 1;
let eduDragging = false;
let eduStartX, eduStartY, eduTranslateX = 0, eduTranslateY = 0;

function openEduCertificate(src) {
  const modal = document.getElementById("edu-certificate-modal");
  const img = document.getElementById("edu-certificate-img");
  img.src = src;
  eduZoomLevel = 1;
  eduTranslateX = 0;
  eduTranslateY = 0;
  img.style.transform = "scale(1) translate(0px,0px)";
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", escCloseEduModal);
  modal.addEventListener("click", backdropCloseEduModal);

  // Zoom with mouse wheel
  img.onwheel = function(e) {
    e.preventDefault();
    if (e.deltaY < 0) eduZoomLevel += 0.1;
    else eduZoomLevel = Math.max(0.5, eduZoomLevel - 0.1);
    updateEduTransform(img);
  };

  // Drag to move
  img.onmousedown = function(e) {
    eduDragging = true;
    eduStartX = e.clientX - eduTranslateX;
    eduStartY = e.clientY - eduTranslateY;
    img.style.cursor = "grabbing";
  };
  window.onmouseup = function() {
    eduDragging = false;
    img.style.cursor = "grab";
  };
  window.onmousemove = function(e) {
    if (!eduDragging) return;
    eduTranslateX = e.clientX - eduStartX;
    eduTranslateY = e.clientY - eduStartY;
    updateEduTransform(img);
  };
}

function updateEduTransform(img) {
  img.style.transform = `scale(${eduZoomLevel}) translate(${eduTranslateX}px, ${eduTranslateY}px)`;
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

/* ============================
   Experience Certificate Modal
   ============================ */
let expZoomLevel = 1;
let expDragging = false;
let expStartX, expStartY, expTranslateX = 0, expTranslateY = 0;

function openExpCertificate(src) {
  const modal = document.getElementById("exp-certificate-modal");
  const img = document.getElementById("exp-certificate-img");
  img.src = src;
  expZoomLevel = 1;
  expTranslateX = 0;
  expTranslateY = 0;
  img.style.transform = "scale(1) translate(0px,0px)";
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", escCloseExpModal);
  modal.addEventListener("click", backdropCloseExpModal);

  // Zoom with mouse wheel
  img.onwheel = function(e) {
    e.preventDefault();
    if (e.deltaY < 0) expZoomLevel += 0.1;
    else expZoomLevel = Math.max(0.5, expZoomLevel - 0.1);
    updateExpTransform(img);
  };

  // Drag to move
  img.onmousedown = function(e) {
    expDragging = true;
    expStartX = e.clientX - expTranslateX;
    expStartY = e.clientY - expTranslateY;
    img.style.cursor = "grabbing";
  };
  window.onmouseup = function() {
    expDragging = false;
    img.style.cursor = "grab";
  };
  window.onmousemove = function(e) {
    if (!expDragging) return;
    expTranslateX = e.clientX - expStartX;
    expTranslateY = e.clientY - expStartY;
    updateExpTransform(img);
  };
}

function updateExpTransform(img) {
  img.style.transform = `scale(${expZoomLevel}) translate(${expTranslateX}px, ${expTranslateY}px)`;
}

function closeExpCertificate() {
  const modal = document.getElementById("exp-certificate-modal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", escCloseExpModal);
  modal.removeEventListener("click", backdropCloseExpModal);
}

function escCloseExpModal(e) {
  if (e.key === "Escape") closeExpCertificate();
}

function backdropCloseExpModal(e) {
  const content = document.querySelector("#exp-certificate-modal .modal-content");
  if (!content.contains(e.target)) closeExpCertificate();
}
