document.addEventListener('DOMContentLoaded', () => {
  initAccessibility();
  initSmoothScroll();
  initTyping();
  initProjectReveals();
  initTerminal();
  initMatrix();
});

const OWNER_NAME = 'Sachin';
const GREETING_PREFIX = 'Hello';
const OWNER_EMAIL = 'sahi2959@gmail.com';
const DEFAULT_FONT_SIZE = 16;

const translations = {
  en: {
    nav_home: 'home',
    nav_about: 'about',
    nav_skills: 'skills',
    nav_projects: 'projects',
    nav_timeline: 'timeline',
    nav_now: 'now',
    nav_volunteering: 'volunteering',
    nav_certifications: 'certifications',
    nav_terminal: 'terminal',
    nav_contact: 'contact',
    about_title: '// about_me',
    about_para1: 'Over three years of hands-on experience in IAM, cybersecurity automation, cloud security and backend development with practical skills in Okta, SailPoint, Cloudflare WAF and Python (ETL/REST/Flask).',
    about_para2: 'Delivered measurable outcomes, volunteered in a cybersecurity conference, and earned CompTIA Security+. Reliable, organised and patient, I communicate complex ideas clearly, coordinate cross-functional work effectively and thrive under pressure.',
    now_title: '// now_playing',
    now_intro: 'Currently designing a cyber exercise for supply chain attacks on critical infrastructure — with a spotlight on nuclear power plants.',
    now_goal: 'Goal: raise assurance against supply-chain pivots that silently cascade into OT environments.',
    now_cta_title: 'Want to collaborate?',
    now_cta_copy: 'If you have expertise in OT detection, incident drills, or nuclear sector nuances, I’d love to sync.',
    now_cta_btn: 'connect to collaborate',
    now_cta_note: 'Bonus points if you bring tabletop stories or chaos test ideas.',
    volunteering_title: '// volunteering',
    certifications_title: '// certifications',
    terminal_title: '// terminal_feed',
    terminal_subtitle: 'Recent activity logs',
    terminal_legend: 'legend',
    terminal_hint_email: 'open email composer with greeting',
    terminal_hint_cert: 'list certifications',
    terminal_hint_user_entry: 'any text logs as {code} entry',
    contact_title: '// contact',
    contact_intro: 'Always excited to collaborate on security research, tooling, and teaching.',
    email_subject: 'Hello from your portfolio',
    email_log_with_custom: '[CMD] Opening email composer with greeting and custom message...',
    email_log_no_custom: '[CMD] Opening email composer with greeting...',
    now_email_subject: 'Collaboration on Supply Chain Cyber Exercise',
    now_email_body: 'Hi Sachin,\n\nInterested in collaborating on your nuclear supply chain exercise. My focus areas:\n- '
  },
  es: {
    nav_home: 'inicio',
    nav_about: 'sobre mí',
    nav_skills: 'habilidades',
    nav_projects: 'proyectos',
    nav_timeline: 'cronología',
    nav_now: 'ahora',
    nav_volunteering: 'voluntariado',
    nav_certifications: 'certificaciones',
    nav_terminal: 'terminal',
    nav_contact: 'contacto',
    about_title: '// sobre_mí',
    about_para1: 'Más de tres años de experiencia práctica en IAM, automatización de ciberseguridad, seguridad en la nube y desarrollo backend con dominio de Okta, SailPoint, Cloudflare WAF y Python (ETL/REST/Flask).',
    about_para2: 'Resultados medibles, voluntariado en una conferencia de ciberseguridad y certificación CompTIA Security+. Comunico ideas complejas con claridad, coordino con equipos diversos y trabajo bien bajo presión.',
    now_title: '// ahora_en_marcha',
    now_intro: 'Diseñando un ejercicio cibernético sobre ataques de cadena de suministro en infraestructura crítica, con foco en plantas nucleares.',
    now_goal: 'Objetivo: mejorar la garantía frente a pivotes de cadena de suministro que se cuelan hasta los entornos OT.',
    now_cta_title: '¿Colaboramos?',
    now_cta_copy: 'Si aportas experiencia en detección OT, simulacros de incidentes o matices del sector nuclear, hablemos.',
    now_cta_btn: 'conectar para colaborar',
    now_cta_note: 'Se agradecen anécdotas de tabletop o ideas de caos engineering.',
    volunteering_title: '// voluntariado',
    certifications_title: '// certificaciones',
    terminal_title: '// flujo_terminal',
    terminal_subtitle: 'Registro de actividad reciente',
    terminal_legend: 'leyenda',
    terminal_hint_email: 'abrir correo con saludo',
    terminal_hint_cert: 'listar certificaciones',
    terminal_hint_user_entry: 'cualquier texto se registra como {code} entrada',
    contact_title: '// contacto',
    contact_intro: 'Siempre listo para colaborar en investigación, herramientas y enseñanza de seguridad.',
    email_subject: 'Hola desde tu portafolio',
    email_log_with_custom: '[CMD] Abriendo el correo con saludo y mensaje personalizado...',
    email_log_no_custom: '[CMD] Abriendo el correo con saludo...',
    now_email_subject: 'Colaboración en ejercicio de cadena de suministro',
    now_email_body: 'Hola Sachin,\n\nInteresado en colaborar en tu ejercicio de cadena de suministro para nuclear. Mis áreas de enfoque:\n- '
  },
  hi: {
    nav_home: 'होम',
    nav_about: 'परिचय',
    nav_skills: 'कौशल',
    nav_projects: 'प्रोजेक्ट्स',
    nav_timeline: 'समयरेखा',
    nav_now: 'अभी',
    nav_volunteering: 'स्वेच्छा',
    nav_certifications: 'प्रमाणपत्र',
    nav_terminal: 'टर्मिनल',
    nav_contact: 'संपर्क',
    about_title: '// परिचय',
    about_para1: 'तीन से अधिक वर्षों का IAM, साइबर सुरक्षा ऑटोमेशन, क्लाउड सुरक्षा और बैकएंड विकास अनुभव; Okta, SailPoint, Cloudflare WAF और Python (ETL/REST/Flask) में कुशल।',
    about_para2: 'मापनीय परिणाम दिए, साइबर सुरक्षा सम्मेलन में स्वयंसेवा किया, और CompTIA Security+ अर्जित किया। जटिल विचारों को स्पष्ट रूप से समझाता हूं, क्रॉस-फंक्शनल कार्य समन्वयित करता हूं और दबाव में शांत रहता हूं।',
    now_title: '// अभी_चल_रहा',
    now_intro: 'वर्तमान में आपूर्ति श्रृंखला हमलों के लिए एक साइबर अभ्यास डिज़ाइन कर रहा हूं, विशेष रूप से परमाणु संयंत्रों पर केंद्रित महत्वपूर्ण अवसंरचना के लिए।',
    now_goal: 'लक्ष्य: ऐसे आपूर्ति श्रृंखला पिवट के खिलाफ आश्वासन बढ़ाना जो चुपचाप OT वातावरण में प्रवेश करते हैं।',
    now_cta_title: 'सहयोग करना चाहेंगे?',
    now_cta_copy: 'यदि आपके पास OT डिटेक्शन, घटना अभ्यास या परमाणु क्षेत्र के अनुभव हैं, तो बात करते हैं।',
    now_cta_btn: 'सहयोग के लिए जुड़ें',
    now_cta_note: 'टेबलेटॉप अनुभव या कैओस टेस्ट विचार साझा करने पर अतिरिक्त अंक।',
    volunteering_title: '// स्वेच्छा',
    certifications_title: '// प्रमाणपत्र',
    terminal_title: '// टर्मिनल_फीड',
    terminal_subtitle: 'हाल की गतिविधि लॉग',
    terminal_legend: 'लीजेंड',
    terminal_hint_email: 'नमस्ते के साथ ईमेल खोलें',
    terminal_hint_cert: 'प्रमाणपत्र सूचीबद्ध करें',
    terminal_hint_user_entry: 'किसी भी टेक्स्ट को {code} एंट्री के रूप में लॉग किया जाता है',
    contact_title: '// संपर्क',
    contact_intro: 'सुरक्षा अनुसंधान, टूलिंग और शिक्षण में सहयोग के लिए हमेशा उत्साहित।',
    email_subject: 'आपके पोर्टफोलियो से नमस्ते',
    email_log_with_custom: '[CMD] अभिवादन और कस्टम संदेश के साथ ईमेल खोल रहा हूं...',
    email_log_no_custom: '[CMD] अभिवादन के साथ ईमेल खोल रहा हूं...',
    now_email_subject: 'सप्लाई चेन साइबर एक्सरसाइज सहयोग',
    now_email_body: 'Hi Sachin,\n\nमैं आपके परमाणु सप्लाई चेन अभ्यास पर सहयोग में रुचि रखता हूं। मेरे फोकस क्षेत्र:\n- '
  }
};

let currentLanguage = 'en';

function initAccessibility() {
  const root = document.documentElement;
  const body = document.body;
  const fontButtons = document.querySelectorAll('[data-font]');
  const contrastToggle = document.getElementById('contrast-toggle');
  const languageSelect = document.getElementById('language-select');
  const minSize = 14;
  const maxSize = 20;
  let fontSize = DEFAULT_FONT_SIZE;

  const setFontSize = (size) => {
    fontSize = Math.min(maxSize, Math.max(minSize, size));
    root.style.setProperty('--font-size', `${fontSize}px`);
  };

  fontButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-font');
      if (action === 'increase') setFontSize(fontSize + 2);
      if (action === 'decrease') setFontSize(fontSize - 2);
      if (action === 'reset') setFontSize(DEFAULT_FONT_SIZE);
    });
  });

  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      const isActive = body.classList.toggle('high-contrast');
      contrastToggle.setAttribute('aria-pressed', String(isActive));
    });
  }

  const applyLanguage = (lang) => {
    currentLanguage = lang;
    applyTranslations(lang);
    updateMailtoLinks(lang);
    if (languageSelect) languageSelect.value = lang;
  };

  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  // defaults
  setFontSize(DEFAULT_FONT_SIZE);
  applyLanguage('en');
  updateMailtoLinks('en');
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  const fallback = translations.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = dict[key] || fallback[key];
    if (!text) return;
    const code = el.querySelector('code');
    const codeText = el.dataset.code || (code ? code.textContent : '');
    if (codeText && text.includes('{code}')) {
      const [before, after] = text.split('{code}');
      el.textContent = '';
      if (before) el.append(document.createTextNode(before));
      const codeEl = document.createElement('code');
      codeEl.textContent = codeText;
      el.append(codeEl);
      if (after) el.append(document.createTextNode(after));
      return;
    }
    if ('value' in el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT')) {
      el.value = text;
    } else {
      el.textContent = text;
    }
  });
}

function updateMailtoLinks(lang) {
  const dict = translations[lang] || translations.en;
  const subject = dict.now_email_subject || 'Collaboration on Supply Chain Cyber Exercise';
  const body = dict.now_email_body || 'Hi Sachin,\n\nInterested in collaborating on your nuclear supply chain exercise. My focus areas:\n- ';
  const cta = document.getElementById('now-cta-link');
  if (cta) {
    cta.setAttribute('href', buildMailto(OWNER_EMAIL, subject, body));
  }
}

function buildMailto(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

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

function initTerminal() {
  const logs = [
    '[OK] IAM automations loaded (Okta / SailPoint / Beyond Identity).',
    '[TASK] Cloudflare WAF rollout plan validated with OWASP + custom rules.',
    '[NOTE] CompTIA Security+ and Okta Professional certifications verified.',
    '[STUDY] MSc Cyber Security modules: risk, forensics, pen testing, cyber law.',
    '[PROJECT] Phishing Page Analyser and restaurant_analysis repos synced.',
    '[EXERCISE] Designing supply-chain cyber exercise for critical infrastructure (nuclear focus).',
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
      const dict = translations[currentLanguage] || translations.en;
      const subjectText = dict.email_subject || 'Hello from your portfolio';
      const logWithCustom = dict.email_log_with_custom || '[CMD] Opening email composer with greeting and custom message...';
      const logNoCustom = dict.email_log_no_custom || '[CMD] Opening email composer with greeting...';
      const body = [greeting, custom].filter(Boolean).join('\n\n');
      logs.push(custom ? logWithCustom : logNoCustom);
      window.location.href = buildMailto(OWNER_EMAIL, subjectText, body);
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
    // Normalize consecutive spaces between command and payload (input was trimmed).
    const [command, ...rest] = value.split(/\s+/);
    const normalizedCommand = command.toLowerCase();
    if (commandHandlers[normalizedCommand]) {
      logs.push(`[CMD] ${normalizedCommand}`);
      commandHandlers[normalizedCommand]({ message: rest.join(' ') });
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
