document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initTyping();
  initProjectReveals();
  initTerminal();
  initMatrix();
});

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initTyping() {
  // Edit the rotating hero messages here
  const phrases = [
    'IAM & Cloud Security Engineer',
    'Python automation for security operations',
    'Okta | SailPoint | Cloudflare WAF',
    'MSc Cyber Security @ Lancaster (2025–2026)'
  ];
  const el = document.getElementById('typing');
  const typeDelay = 80;
  const deleteDelay = 30;
  const jitter = 40;
  let idx = 0;
  let char = 0;
  let deleting = false;

  const tick = () => {
    const current = phrases[idx];
    if (!deleting) {
      char++;
      el.textContent = current.slice(0, char);
      if (char === current.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      char--;
      el.textContent = current.slice(0, char);
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % phrases.length;
      }
    }
    const delay = deleting ? deleteDelay : typeDelay;
    setTimeout(tick, delay + Math.random() * jitter);
  };

  tick();
}

function initProjectReveals() {
  document.querySelectorAll('.project-card .reveal').forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const isHidden = content.hasAttribute('hidden');
      content.toggleAttribute('hidden');
      btn.setAttribute('aria-expanded', String(isHidden));
      btn.textContent = isHidden ? 'hide log' : 'show log';
    });
  });
}

const OWNER_NAME = 'Sachin';
const GREETING_PREFIX = 'Hello';
const OWNER_EMAIL = 'sahi2959@gmail.com';

function initTerminal() {
  const logs = [
    '[OK] IAM automations loaded (Okta / SailPoint / Beyond Identity).',
    '[TASK] Cloudflare WAF rollout plan validated with OWASP + custom rules.',
    '[NOTE] CompTIA Security+ and Okta Professional certifications verified.',
    '[STUDY] MSc Cyber Security modules: risk, forensics, pen testing, cyber law.',
    '[PROJECT] Phishing Page Analyser and restaurant_analysis repos synced.',
    '[HINT] Type "email" to open a greeting email composer or "certification" to list badges.'
  ];
  const list = document.getElementById('log-list');
  const form = document.getElementById('log-form');
  const input = document.getElementById('log-entry');

  const renderLogs = () => {
    list.innerHTML = '';
    logs.slice(-50).forEach((line) => {
      const li = document.createElement('li');
      li.textContent = line;
      list.appendChild(li);
    });
    list.parentElement.scrollTop = list.parentElement.scrollHeight;
  };

  const commandHandlers = {
    email: ({ message }) => {
      const greeting = `${GREETING_PREFIX} ${OWNER_NAME},`;
      const custom = message || '';
      const body = encodeURIComponent([greeting, custom].filter(Boolean).join('\n\n'));
      const subject = encodeURIComponent('Hello from your portfolio');
      logs.push(custom ? '[CMD] Opening email composer with greeting and custom message...' : '[CMD] Opening email composer with greeting...');
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    },
    certification: () => {
      logs.push(
        '[CERT] CompTIA Security+ — validated foundational security skills.',
        '[CERT] Okta Professional Certified — proficiency in admin, policies, lifecycle.',
        '[CERT] Credentials available in certifications section.'
      );
    }
  };

  renderLogs();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    const [command, ...rest] = value.split(/\s+/);
    const normalizedCommand = command.toLowerCase();
    if (commandHandlers[normalizedCommand]) {
      logs.push(`[CMD] ${normalizedCommand}`);
      commandHandlers[normalizedCommand]({ raw: value, message: rest.join(' ') });
      renderLogs();
    } else {
      logs.push(`[USER] ${value}`);
      renderLogs();
    }
    input.value = '';
  });
}

function initMatrix() {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  const chars = '01▉▊▋░▒▓>_/:'.split('');
  let width, height, columns, drops;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / 16);
    drops = Array(columns).fill(1);
  };

  const draw = () => {
    ctx.fillStyle = 'rgba(5, 6, 10, 0.08)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#7aff9a';
    ctx.font = '14px Share Tech Mono, monospace';

    drops.forEach((y, i) => {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * 16;
      ctx.fillText(text, x, y * 16);
      if (y * 16 > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener('resize', resize);
}
