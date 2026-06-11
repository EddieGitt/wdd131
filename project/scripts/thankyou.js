// ============================================
// WealthFirst Africa — thankyou.js
// ============================================

// ── Footer ──
function setFooter() {
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
}

// ── Hamburger ──
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}

// ── Read signup count from localStorage and display ──
function displaySignupCount() {
  const countEl = document.getElementById('total-signups');
  if (!countEl) return;

  const count = Number(localStorage.getItem('wfa-signup-count')) || 0;

  countEl.textContent = String(count);
}

// ── Read URL params and personalise the message ──
function personaliseMessage() {
  const params   = new URLSearchParams(window.location.search);
  const name     = params.get('fullName');
  const heading  = document.querySelector('.thankyou-card h1');

  // Conditional: only personalise if name was submitted
  if (name && heading) {
    heading.textContent = `You're In, ${name.split(' ')[0]}!`;
  }
}

// ── INIT ──
setFooter();
initHamburger();
displaySignupCount();
personaliseMessage();