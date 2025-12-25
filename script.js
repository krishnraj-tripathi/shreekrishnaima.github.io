/* Hamburger Menu */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Smooth Scroll */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.classList.remove("active");
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* Hero Canvas Particles */
const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let particles = [];
const colors = ["#ffd700", "#ffffff"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 3 + 1;
    this.dx = (Math.random() - 0.5);
    this.dy = (Math.random() - 0.5);
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
    this.draw();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animate);
}
animate();
