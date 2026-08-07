/* ====================== DATA ====================== */

/* Certificates */
const CERTS = [
  {
    img: 'Images/html.jpg',
    title: 'HTML Certificate',
    issuer: 'Great Learning',
    desc: 'Completed a comprehensive HTML course covering semantic markup, forms, tables, and modern HTML5 features.',
    badges: ['HTML', 'HTML5', 'Web Development']
  },
  {
    img: 'Images/CSS certificate by great learning.jpg',
    title: 'CSS Certificate',
    issuer: 'Great Learning',
    desc: 'Mastered CSS styling including flexbox, grid, animations, responsive design, and modern layout techniques.',
    badges: ['CSS', 'CSS3', 'Flexbox', 'Grid']
  },
  {
    img: 'Images/Responsvie-web-design.png',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    desc: 'Earned certification in responsive web design — building mobile-first, accessible, and adaptive web pages.',
    badges: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
  },
  {
    img: 'Images/certificate.png',
    title: 'Full Stack E-commerce Project',
    issuer: 'Great Learning',
    desc: 'Built a complete full-stack e-commerce platform using the MERN stack with authentication and payment integration.',
    badges: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    img: 'Images/CIT.jpeg',
    title: 'Certificate in Information Technology',
    issuer: 'Adnan computer classes Shahdadkot',
    desc: 'Completed a 6-month CIT course covering computer fundamentals, programming, and IT concepts. basics of computer hardware and software.',
    badges: ['Basic IT', 'Photoshop', 'MS Office', 'Excel', 'PowerPoint']
  }
];

/* Projects */
const PROJECTS = [
  {
    img: 'Images/Projects/ecommerce.png',
    emoji: '🛍️',
    title: 'E-Commerce Platform',
    desc: 'Full-stack MERN e-commerce platform with product catalog, cart, checkout, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    img: 'Images/Projects/Authentication.png',
    emoji: '💬',
    title: 'Real-time Chat App',
    desc: 'Real-time messaging application using Socket.io with instant message delivery and user presence.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB']
  },
  {
    img: 'Images/Projects/gallery.png',
    emoji: '📝',
    title: 'Notes App',
    desc: 'Full-stack notes application with CRUD operations, search, and user authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    img: 'Images/Projects/gallery.png',
    title: 'Gallery App',
    desc: 'Image gallery application with upload, categorization, and responsive grid layout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    img: 'Images/Projects/Authentication.png',

    title: 'Authentication System',
    desc: 'Secure authentication system with Gmail verification, JWT tokens, and protected routes.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT']
  },
  {
    img: 'Images/Projects/ecommerce.png',
    emoji: '🛒',
    title: 'E-Commerce Frontend',
    desc: 'Modern e-commerce frontend built with React — product listings, filters, and shopping cart UI.',
    tags: ['React', 'Tailwind CSS', 'Redux']
  }
];

/* Skills */
const SKILLS = [
  {
    cat: 'Frontend',
    items: [
      { n: 'React.js', w: 88 },
      { n: 'HTML5', w: 95 },
      { n: 'CSS3', w: 90 },
      { n: 'Tailwind CSS', w: 85 },
      { n: 'JavaScript', w: 82 }
    ]
  },
  {
    cat: 'Backend',
    items: [
      { n: 'Node.js', w: 80 },
      { n: 'Express.js', w: 78 },
      { n: 'MongoDB', w: 75 },
      { n: 'REST APIs', w: 80 },
      { n: 'Socket.io', w: 70 }
    ]
  },
  {
    cat: 'Programming',
    items: [
      { n: 'C++', w: 75 },
      { n: 'Python', w: 70 },
      { n: 'Problem Solving', w: 85 },
      { n: 'Data Structures', w: 72 }
    ]
  },
  {
    cat: 'Tools & Professional',
    items: [
      { n: 'Git & GitHub', w: 80 },
      { n: 'Vercel / Netlify', w: 78 },
      { n: 'Figma', w: 65 },
      { n: 'Communication', w: 85 }
    ]
  }
];

/* ====================== RENDER CERTIFICATES ====================== */
const cg = document.getElementById('certGrid');
CERTS.forEach(c => {
  cg.innerHTML += `
    <div class="cert-card" data-tilt>
      <div class="cert-img-wrap">
        <img src="${c.img}" alt="${c.title}" loading="lazy" decoding="async" width="600" height="375" />
        <div class="cert-overlay"><span>${c.issuer}</span></div>
      </div>
      <div class="cert-body">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="cert-badges">
          ${c.badges.map(b => `<span class="cert-badge">${b}</span>`).join('')}
        </div>
      </div>
    </div>`;
});

/* ====================== RENDER PROJECTS ====================== */
const pg = document.getElementById('projGrid');
PROJECTS.forEach(p => {
  pg.innerHTML += `
    <div class="proj-card" data-tilt>
      <div class="proj-link">↗</div>
      <div class="proj-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" width="600" height="340" />
      </div>
      <div class="proj-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>`;
});

/* ====================== RENDER SKILLS ====================== */
const sg = document.getElementById('skillsGrid');
SKILLS.forEach(cat => {
  sg.innerHTML += `
    <div class="skill-cat reveal">
      <h3>${cat.cat}</h3>
      ${cat.items.map(s => `
        <div class="skill-row">
          <div class="skill-name"><span>${s.n}</span><span style="color:var(--red)">${s.w}%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w:${s.w}%"></div></div>
        </div>`).join('')}
    </div>`;
});

/* ====================== CUSTOM CURSOR ====================== */
const dot = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function trackRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  dot.style.cssText = `left:${mx}px;top:${my}px`;
  ring.style.cssText = `left:${rx}px;top:${ry}px`;
  requestAnimationFrame(trackRing);
})();

document.querySelectorAll('a,button,.proj-card,.soc-btn,.stat-card,.info-card,.submit-btn,.cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

/* ====================== BACKGROUND CANVAS ====================== */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [], mouse = { x: 0, y: 0 };

function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
resize();
window.addEventListener('resize', resize);
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - .5) * 1.2;
    this.vy = (Math.random() - .5) * 1.2;
    this.r = Math.random() * 2 + .8;
    this.a = Math.random() * .4 + .1;
  }
  update() {
    const dx = mouse.x - this.x, dy = mouse.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 160) {
      const ang = Math.atan2(dy, dx);
      this.vx = Math.cos(ang) * 2.5;
      this.vy = Math.sin(ang) * 2.5;
      this.a = Math.min(1, this.a + .06);
    } else {
      this.a = Math.max(.1, this.a - .015);
    }
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
    this.x = Math.max(0, Math.min(W, this.x));
    this.y = Math.max(0, Math.min(H, this.y));
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.a})`;
    ctx.fill();
  }
}

for (let i = 0; i < 70; i++) particles.push(new Particle());

function animateBG() {
  ctx.clearRect(0, 0, W, H);
  const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
  g.addColorStop(0, 'rgba(239,68,68,.04)');
  g.addColorStop(1, 'transparent');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

  particles.forEach(p => { p.update(); p.draw(); });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 110) {
        ctx.strokeStyle = `rgba(239,68,68,${.22 * (1 - d / 110)})`;
        ctx.lineWidth = .8;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateBG);
}
animateBG();

/* ====================== 3D TILT HERO ====================== */
const heroInner = document.getElementById('heroInner');
document.addEventListener('mousemove', e => {
  const cx = innerWidth / 2, cy = innerHeight / 2;
  const rx2 = (e.clientY - cy) / cy * 8;
  const ry2 = (e.clientX - cx) / cx * -8;
  heroInner.style.transform = `perspective(900px) rotateX(${rx2}deg) rotateY(${ry2}deg)`;
});

/* ====================== 3D TILT CARDS ====================== */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 18;
    const y = ((e.clientY - r.top) / r.height - .5) * 18;
    card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
  });
});

/* ====================== SCROLL REVEAL ====================== */
const reveals = document.querySelectorAll('.reveal');
const skillCats = document.querySelectorAll('.skill-cat');

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      if (entry.target.classList.contains('skill-cat')) {
        entry.target.querySelectorAll('.skill-fill').forEach(f => {
          f.style.width = f.style.getPropertyValue('--w') || getComputedStyle(f).getPropertyValue('--w');
        });
      }
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));
skillCats.forEach(el => io.observe(el));

/* ====================== MOBILE MENU ====================== */
function toggleMob() {
  const m = document.getElementById('mobMenu');
  const ham = document.getElementById('ham');
  m.classList.toggle('open');
  ham.classList.toggle('open');
}
function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  document.getElementById('ham').classList.remove('open');
}

/* ====================== CONTACT FORM (Web3Forms) ====================== */
const form = document.getElementById('contactForm');
const submitBtn = form.querySelector('button[type="submit"]');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "913d3e15-c013-4151-adac-26b40f842da2");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;
  msg.style.display = 'none';

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      msg.className = 'form-msg ok';
      msg.textContent = '✓ Success! Your message has been sent.';
      form.reset();
    } else {
      msg.className = 'form-msg err';
      msg.textContent = '✗ Error: ' + data.message;
    }

  } catch (error) {
    msg.className = 'form-msg err';
    msg.textContent = '✗ Something went wrong. Please try again.';
  } finally {
    msg.style.display = 'block';
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    setTimeout(() => { msg.style.display = 'none'; }, 6000);
  }
});

/* ====================== ACTIVE NAV HIGHLIGHT ====================== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const sy = scrollY + 120;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (!link) return;
    if (sy >= s.offsetTop && sy < s.offsetTop + s.offsetHeight) {
      link.style.color = 'var(--red)';
    } else {
      link.style.color = '';
    }
  });
});
