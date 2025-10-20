AOS.init({ duration: 1000 });

const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = [];
const particleCount = 120;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8,
    alpha: Math.random() * 0.5 + 0.3,
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(102,252,241,${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > width) p.dx *= -1;
    if (p.y < 0 || p.y > height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
