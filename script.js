// 🌙 Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
});

// 📜 Certificate Modal
function openCertificate(src) {
  document.getElementById("certificate-modal").style.display = "block";
  document.getElementById("certificate-img").src = src;
}

function closeCertificate() {
  document.getElementById("certificate-modal").style.display = "none";
}

// ✨ Scroll Animation (fade-in + slide-up)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
