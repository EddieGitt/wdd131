// ============================================
// WealthFirst Africa — steps.js
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

// ── Steps Data (array of objects) ──
const steps = [
  {
    id: 1,
    title: 'Invest in Financial Education',
    tagline: 'Learn how money works before you try to make more of it.',
    description: 'Every self-made millionaire studied in the research by Tom Corley devoted at least 30 minutes daily to financial reading. Not novels — books on money, business, investing, and personal development. In Nigeria, financial education is rarely taught in school, which means you must take responsibility for teaching yourself.',
    actions: [
      'Read one financial book this month — start with Rich Dad Poor Dad',
      'Follow one credible financial educator online',
      'Spend 20 minutes daily reading about money management',
      'Watch one free financial literacy video on YouTube each week'
    ]
  },
  {
    id: 2,
    title: 'Track Every Naira You Spend',
    tagline: 'You cannot manage what you do not measure.',
    description: 'Before you can build wealth, you must understand exactly where your money goes. Most people who feel broke are not earning too little — they are leaking money through small, unconscious daily decisions. Tracking your spending for just 30 days reveals patterns that change how you think about money permanently.',
    actions: [
      'Download a free budgeting app or use a notebook',
      'Record every single expense for 30 days without exception',
      'Categorise your spending into needs, wants, and waste',
      'Review your spending weekly and identify the biggest leak'
    ]
  },
  {
    id: 3,
    title: 'Apply the 50/30/20 Budget Rule',
    tagline: 'Give every Naira a job before you spend it.',
    description: 'Once you know where your money goes, take control by giving it direction. The 50/30/20 rule — 50% to needs, 30% to wants, 20% to savings — is the simplest framework used by financially successful people worldwide. Use the calculator on our home page to apply this to your exact income right now.',
    actions: [
      'Calculate your budget using the tool on the home page',
      'Set up separate envelopes or accounts for needs, wants, and savings',
      'Automate your savings transfer on the day you receive income',
      'Review and adjust your budget every month'
    ]
  },
  {
    id: 4,
    title: 'Build a 3-Month Emergency Fund',
    tagline: 'Safety first — before any investment.',
    description: 'An emergency fund is not optional. It is the foundation that prevents one crisis from erasing years of progress. Without it, any unexpected expense — medical bill, job loss, car repair — forces you into debt. Three months of your basic expenses saved in a separate, accessible account gives you the security to take calculated risks and invest with confidence.',
    actions: [
      'Calculate your monthly basic expenses (rent, food, transport, bills)',
      'Multiply that number by three — that is your emergency fund target',
      'Open a separate savings account specifically for this fund',
      'Set a monthly savings goal and do not touch it for any non-emergency'
    ]
  },
  {
    id: 5,
    title: 'Create at Least One Extra Income Stream',
    tagline: 'One income stream is one crisis away from zero.',
    description: 'The average self-made millionaire has seven income streams. You do not start with seven — you start with two. Look at the skills you already have and identify how you can offer them to others for payment. In Nigeria\'s economy, a side income of even ₦20,000 a month invested consistently over 10 years creates transformational wealth.',
    actions: [
      'List five skills you already have that others would pay for',
      'Identify the easiest one to monetise this month',
      'Tell five people you know about your service or product',
      'Commit all extra income to your emergency fund or investments'
    ]
  },
  {
    id: 6,
    title: 'Start Investing — Even Small Amounts',
    tagline: 'Time in the market beats timing the market.',
    description: 'Once your emergency fund is in place, every Naira you save should be working for you. Investing is not for the rich — it is how people become rich. In Nigeria, accessible options include treasury bills, money market funds, the Nigerian Stock Exchange, and real estate investment trusts (REITs). Start with what you have, not with what you wish you had.',
    actions: [
      'Open an investment account with a licensed broker or fintech app',
      'Start with a minimum contribution — even ₦5,000 counts',
      'Choose low-risk options first (treasury bills, money market funds)',
      'Increase your investment amount by 1% each time your income grows'
    ]
  }
];

// ── Resources Data ──
const resources = [
  {
    icon: '📖',
    type: 'Book',
    title: 'Rich Dad Poor Dad',
    desc: 'Robert Kiyosaki — The most accessible introduction to financial thinking for beginners.',
    url: 'https://www.richdad.com'
  },
  {
    icon: '📖',
    type: 'Book',
    title: 'The Richest Man in Babylon',
    desc: 'George S. Clason — Timeless wealth principles through ancient parables. Free online.',
    url: 'https://www.gutenberg.org'
  },
  {
    icon: '🌐',
    type: 'Website',
    title: 'Investopedia',
    desc: 'Free financial education on every topic from budgeting to advanced investing.',
    url: 'https://www.investopedia.com'
  },
  {
    icon: '🎓',
    type: 'Programme',
    title: 'Tony Elumelu Foundation',
    desc: 'Free entrepreneurship training and seed funding for young African entrepreneurs.',
    url: 'https://www.tonyelumelufoundation.org'
  },
  {
    icon: '📱',
    type: 'App',
    title: 'Cowrywise',
    desc: 'Nigerian savings and investment app — start investing from ₦100.',
    url: 'https://cowrywise.com'
  },
  {
    icon: '📱',
    type: 'App',
    title: 'PiggyVest',
    desc: 'Lock away savings automatically and earn interest. Nigeria\'s leading savings app.',
    url: 'https://www.piggyvest.com'
  }
];

// ── Load progress from localStorage ──
function loadProgress() {
  const saved = localStorage.getItem('wfa-progress');
  return saved ? JSON.parse(saved) : [];
}

// ── Save progress to localStorage ──
function saveProgress(completedIds) {
  localStorage.setItem('wfa-progress', JSON.stringify(completedIds));
}

// ── Update progress bar ──
function updateProgressBar(completedIds) {
  const count = completedIds.length;
  const total = steps.length;
  const pct   = Math.round((count / total) * 100);

  const fill  = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');

  if (fill)  fill.style.width = `${pct}%`;
  if (label) label.textContent = `${count} of ${total} steps completed`;
}

// ── Render steps list ──
function renderSteps(completedIds) {
  const list = document.getElementById('steps-list');
  if (!list) return;

  list.innerHTML = steps.map(step => {
    const isDone = completedIds.includes(step.id);

    const actionItems = step.actions.map(a => `
      <li>${a}</li>
    `).join('');

    return `
      <article class="step-card ${isDone ? 'completed' : ''}" id="step-${step.id}">
        <div class="step-header">
          <div class="step-num">${step.id}</div>
          <div class="step-title-wrap">
            <h3>${step.title}</h3>
            <p class="step-tagline">${step.tagline}</p>
          </div>
        </div>
        <div class="step-body">
          <p>${step.description}</p>
          <ul class="step-actions-list">${actionItems}</ul>
        </div>
        <div class="step-footer">
          <button
            class="complete-btn"
            data-id="${step.id}"
            aria-pressed="${isDone}">
            ${isDone ? '✓ Completed' : 'Mark as Complete'}
          </button>
          <span class="step-badge">
            ${isDone ? '🟢 Done' : `Step ${step.id} of ${steps.length}`}
          </span>
        </div>
      </article>
    `;
  }).join('');

  // Add click listeners to all complete buttons
  list.querySelectorAll('.complete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      handleStepToggle(id);
    });
  });
}

// ── Toggle a step complete/incomplete ──
function handleStepToggle(id) {
  let completedIds = loadProgress();

  // Conditional branching
  if (completedIds.includes(id)) {
    completedIds = completedIds.filter(existingId => existingId !== id);
  } else {
    completedIds.push(id);
  }

  saveProgress(completedIds);
  renderSteps(completedIds);
  updateProgressBar(completedIds);
}

// ── Reset all progress ──
function initResetBtn() {
  const btn = document.getElementById('reset-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to reset all your progress?');
    if (confirmed) {
      saveProgress([]);
      renderSteps([]);
      updateProgressBar([]);
    }
  });
}

// ── Render resources ──
function renderResources() {
  const grid = document.getElementById('resources-grid');
  if (!grid) return;

  grid.innerHTML = resources.map(r => `
    <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-card">
      <span class="resource-icon" aria-hidden="true">${r.icon}</span>
      <div class="resource-body">
        <span class="resource-type">${r.type}</span>
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    </a>
  `).join('');
}

// ── INIT ──
setFooter();
initHamburger();

const completedIds = loadProgress();
renderSteps(completedIds);
updateProgressBar(completedIds);
initResetBtn();
renderResources();