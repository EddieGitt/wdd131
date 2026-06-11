// ============================================
// WealthFirst Africa — main.js (Home Page)
// Covers: functions, DOM, events, objects,
//         arrays, array methods, template
//         literals, localStorage, conditionals
// ============================================
 
// ── Footer ──
function setFooter() {
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
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
 
// ── Data ──
const stats = [
  { number: '70%',  label: 'of billionaires are self-made' },
  { number: '233',  label: 'millionaires studied for this content' },
  { number: '88%',  label: 'cite financial education as key' }
];
 
const principles = [
  {
    icon: '📚',
    title: 'Invest in Financial Education',
    desc: 'Before earning more, learn how money works. Self-made millionaires read at least 30 minutes of financial content daily.'
  },
  {
    icon: '🎯',
    title: 'Set Specific Written Goals',
    desc: 'People who write down specific financial goals are 42% more likely to achieve them than those who do not.'
  },
  {
    icon: '💰',
    title: 'Live Below Your Means',
    desc: 'Wealth is not what you earn — it is what you keep. Consistently spending less than you earn is the foundation of all wealth.'
  },
  {
    icon: '📈',
    title: 'Build Multiple Income Streams',
    desc: 'The average millionaire has seven income streams. Start with one side income and grow from there.'
  },
  {
    icon: '🛡️',
    title: 'Build an Emergency Fund First',
    desc: 'Before investing, save 3–6 months of expenses. Without this safety net, one crisis wipes out years of progress.'
  },
  {
    icon: '🤝',
    title: 'Surround Yourself With Growth',
    desc: 'Your financial outcomes are heavily influenced by the five people you spend the most time with. Choose deliberately.'
  }
];
 
const quotes = [
  {
    text: 'Before I made my first million, I spent years learning about business, not just doing business.',
    name: 'Aliko Dangote',
    title: 'Africa\'s Richest Self-Made Billionaire'
  },
  {
    text: 'Entrepreneurship is the key to Africa\'s economic transformation. It starts with one brave decision.',
    name: 'Tony Elumelu',
    title: 'Founder, Tony Elumelu Foundation'
  },
  {
    text: 'The habit of saving is itself an education. It fosters every virtue, teaches self-denial and cultivates the sense of order.',
    name: 'T.T. Munger',
    title: 'Investor and Author'
  }
];
 
// ── Render stat cards ──
function renderStats() {
  const container = document.getElementById('stat-cards');
  if (!container) return;
 
  container.innerHTML = stats.map(s => `
    <div class="stat-card">
      <span class="stat-number">${s.number}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');
}
 
// ── Render principles ──
function renderPrinciples() {
  const grid = document.getElementById('principles-grid');
  if (!grid) return;
 
  grid.innerHTML = principles.map(p => `
    <div class="principle-card">
      <span class="principle-icon">${p.icon}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}
 
// ── Render quotes ──
function renderQuotes() {
  const grid = document.getElementById('quotes-grid');
  if (!grid) return;
 
  grid.innerHTML = quotes.map(q => `
    <div class="quote-card">
      <blockquote>${q.text}</blockquote>
      <div>
        <span class="quote-name">${q.name}</span>
        <span class="quote-title">${q.title}</span>
      </div>
    </div>
  `).join('');
}
 
// ── Budget Calculator ──
function formatNaira(amount) {
  return `&#8358;${amount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}`;
}
 
function calculateBudget(income) {
  return {
    needs:   income * 0.50,
    wants:   income * 0.30,
    savings: income * 0.20
  };
}
 
function renderCalcResults(income) {
  const output = document.getElementById('calc-output');
  const tip    = document.getElementById('calc-tip');
  if (!output) return;
 
  // Conditional branching
  if (!income || income <= 0) {
    output.innerHTML = '';
    tip.textContent = 'Please enter a valid income amount.';
    return;
  }
 
  const budget = calculateBudget(income);
 
  const items = [
    { label: 'Needs (50%)',   amount: budget.needs,   cls: 'bar-needs',   pct: 50 },
    { label: 'Wants (30%)',   amount: budget.wants,   cls: 'bar-wants',   pct: 30 },
    { label: 'Savings (20%)', amount: budget.savings, cls: 'bar-savings', pct: 20 }
  ];
 
  output.innerHTML = items.map(item => `
    <div class="calc-result-item">
      <div class="calc-result-labels">
        <span>${item.label}</span>
        <strong>${formatNaira(item.amount)}</strong>
      </div>
      <div class="bar-track">
        <div class="bar-fill ${item.cls}" style="width:${item.pct}%"></div>
      </div>
    </div>
  `).join('');
 
  // Conditional tip based on income level
  if (income < 50000) {
    tip.textContent = 'Even on a low income, saving ₦1,000 a week adds ₦52,000 a year. Start small — start now.';
  } else if (income < 200000) {
    tip.textContent = 'Your savings target is solid. Consider a high-yield savings account or treasury bills for your 20%.';
  } else {
    tip.textContent = 'At this income level, explore index funds and real estate as vehicles for your savings allocation.';
  }
 
  // Store last calculation in localStorage
  localStorage.setItem('lastCalcIncome', String(income));
}
 
function initCalculator() {
  const btn   = document.getElementById('calc-btn');
  const input = document.getElementById('income-input');
  if (!btn || !input) return;
 
  // Restore last value
  const saved = localStorage.getItem('lastCalcIncome');
  if (saved) {
    input.value = saved;
    renderCalcResults(Number(saved));
  }
 
  btn.addEventListener('click', () => {
    renderCalcResults(Number(input.value));
  });
 
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') renderCalcResults(Number(input.value));
  });
}
 
// ── INIT ──
setFooter();
initHamburger();
renderStats();
renderPrinciples();
renderQuotes();
initCalculator();
 