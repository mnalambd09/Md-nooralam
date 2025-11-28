/* Particles.js Custom Config */
tsParticles.load("particles-js", {
  "particles": {
    "number": { "value": 100 },
    color: { value: ["#ff0000", "#00ff00", "#0000ff"] }, // একাধিক রঙ কাজ করবে
    shape: { type: ["circle", "triangle", "star"] },
    "opacity": { "value": 0.7, "random": true },
    "size": { "value": 4, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#1e90ff",
      "opacity": 0.6,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 200, "line_linked": { "opacity": 0.7 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
