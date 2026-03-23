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
    nav_about: 'about me',
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
    code_user_prefix: '[USER]',
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
    code_user_prefix: '[USUARIO]',
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
    code_user_prefix: '[उपयोगकर्ता]',
    contact_title: '// संपर्क',
    contact_intro: 'सुरक्षा अनुसंधान, टूलिंग और शिक्षण में सहयोग के लिए हमेशा उत्साहित।',
    email_subject: 'आपके पोर्टफोलियो से नमस्ते',
    email_log_with_custom: '[CMD] अभिवादन और कस्टम संदेश के साथ ईमेल खोल रहा हूं...',
    email_log_no_custom: '[CMD] अभिवादन के साथ ईमेल खोल रहा हूं...',
    now_email_subject: 'सप्लाई चेन साइबर एक्सरसाइज सहयोग',
    now_email_body: 'Hi Sachin,\n\nमैं आपके परमाणु सप्लाई चेन अभ्यास पर सहयोग में रुचि रखता हूं। मेरे फोकस क्षेत्र:\n- '
  },
  de: {
    nav_home: 'start',
    nav_about: 'über mich',
    nav_skills: 'fähigkeiten',
    nav_projects: 'projekte',
    nav_timeline: 'laufbahn',
    nav_now: 'aktuell',
    nav_volunteering: 'ehrenamt',
    nav_certifications: 'zertifizierungen',
    nav_terminal: 'terminal',
    nav_contact: 'kontakt',
    about_title: '// über_mich',
    about_para1: 'Über drei Jahre praktische Erfahrung in IAM, Security-Automatisierung, Cloud-Sicherheit und Backend-Entwicklung mit Know-how in Okta, SailPoint, Cloudflare WAF und Python (ETL/REST/Flask).',
    about_para2: 'Messbare Ergebnisse geliefert, bei einer Security-Konferenz unterstützt und die CompTIA Security+ erworben. Kommuniziere klar, koordiniere Teams effektiv und bleibe unter Druck ruhig.',
    now_title: '// jetzt_spiele',
    now_intro: 'Entwerfe derzeit eine Cyber-Übung zu Lieferkettenangriffen auf kritische Infrastruktur mit Fokus auf Kernkraftwerke.',
    now_goal: 'Ziel: Sicherheit gegen Lieferketten-Pivots stärken, die unbemerkt in OT-Umgebungen eindringen.',
    now_cta_title: 'Lust auf Zusammenarbeit?',
    now_cta_copy: 'Wenn du Erfahrung in OT-Detection, Incident-Drills oder Besonderheiten des Nuklearsektors hast, lass uns sprechen.',
    now_cta_btn: 'verbinden & kooperieren',
    now_cta_note: 'Bonus, wenn du Tabletop-Stories oder Chaos-Ideen mitbringst.',
    volunteering_title: '// ehrenamt',
    certifications_title: '// zertifizierungen',
    terminal_title: '// terminal_feed',
    terminal_subtitle: 'Aktuelle Aktivitätsprotokolle',
    terminal_legend: 'legende',
    terminal_hint_email: 'E-Mail mit Gruß öffnen',
    terminal_hint_cert: 'Zertifizierungen auflisten',
    terminal_hint_user_entry: 'beliebiger Text wird als {code}-Eintrag protokolliert',
    code_user_prefix: '[BENUTZER]',
    contact_title: '// kontakt',
    contact_intro: 'Immer bereit für Zusammenarbeit bei Security-Research, Tools und Lehre.',
    email_subject: 'Hallo von deinem Portfolio',
    email_log_with_custom: '[CMD] Öffne E-Mail mit Gruß und individueller Nachricht...',
    email_log_no_custom: '[CMD] Öffne E-Mail mit Gruß...',
    now_email_subject: 'Zusammenarbeit Lieferketten-Übung',
    now_email_body: 'Hi Sachin,\n\nInteresse an einer Zusammenarbeit zu deiner nuklearen Lieferketten-Übung. Meine Schwerpunkte:\n- '
  },
  it: {
    nav_home: 'home',
    nav_about: 'su di me',
    nav_skills: 'competenze',
    nav_projects: 'progetti',
    nav_timeline: 'percorso',
    nav_now: 'ora',
    nav_volunteering: 'volontariato',
    nav_certifications: 'certificazioni',
    nav_terminal: 'terminal',
    nav_contact: 'contatti',
    about_title: '// su_di_me',
    about_para1: 'Oltre tre anni di esperienza pratica in IAM, automazione di sicurezza, cloud security e sviluppo backend con Okta, SailPoint, Cloudflare WAF e Python (ETL/REST/Flask).',
    about_para2: 'Risultati misurabili, volontariato in una conferenza di sicurezza e certificazione CompTIA Security+. Comunico in modo chiaro, coordino team cross-funzionali e rendo bene sotto pressione.',
    now_title: '// in_corso',
    now_intro: 'Sto progettando un’esercitazione cyber su attacchi alla supply chain per infrastrutture critiche con focus sulle centrali nucleari.',
    now_goal: 'Obiettivo: aumentare la resilienza contro pivot di supply chain che raggiungono silenziosamente gli ambienti OT.',
    now_cta_title: 'Collaboriamo?',
    now_cta_copy: 'Se hai esperienza in rilevamento OT, tabletop o settore nucleare, parliamone.',
    now_cta_btn: 'connettiamoci',
    now_cta_note: 'Punti extra per storie tabletop o idee di chaos testing.',
    volunteering_title: '// volontariato',
    certifications_title: '// certificazioni',
    terminal_title: '// terminal_feed',
    terminal_subtitle: 'Log attività recenti',
    terminal_legend: 'legenda',
    terminal_hint_email: 'apri email con saluto',
    terminal_hint_cert: 'elenca certificazioni',
    terminal_hint_user_entry: 'qualsiasi testo è registrato come voce {code}',
    code_user_prefix: '[UTENTE]',
    contact_title: '// contatti',
    contact_intro: 'Sempre entusiasta di collaborare su ricerca, tooling e formazione in sicurezza.',
    email_subject: 'Ciao dal tuo portfolio',
    email_log_with_custom: '[CMD] Apro l’email con saluto e messaggio personalizzato...',
    email_log_no_custom: '[CMD] Apro l’email con saluto...',
    now_email_subject: 'Collaborazione esercitazione supply chain',
    now_email_body: 'Ciao Sachin,\n\nMi interessa collaborare alla tua esercitazione sulla supply chain nucleare. I miei focus:\n- '
  },
  fr: {
    nav_home: 'accueil',
    nav_about: 'à propos',
    nav_skills: 'compétences',
    nav_projects: 'projets',
    nav_timeline: 'parcours',
    nav_now: 'maintenant',
    nav_volunteering: 'bénévolat',
    nav_certifications: 'certifications',
    nav_terminal: 'terminal',
    nav_contact: 'contact',
    about_title: '// à_propos',
    about_para1: 'Plus de trois ans d’expérience pratique en IAM, automatisation sécurité, sécurité cloud et backend avec Okta, SailPoint, Cloudflare WAF et Python (ETL/REST/Flask).',
    about_para2: 'Résultats mesurables, bénévolat lors d’une conférence cybersécurité et certification CompTIA Security+. Communication claire, coordination d’équipe et calme sous pression.',
    now_title: '// en_cours',
    now_intro: 'Conception d’un exercice cyber sur les attaques chaîne d’approvisionnement pour infrastructures critiques, avec focus sur les centrales nucléaires.',
    now_goal: 'Objectif : renforcer l’assurance face aux pivots supply chain qui atteignent discrètement les environnements OT.',
    now_cta_title: 'On collabore ?',
    now_cta_copy: 'Si tu as de l’expertise en détection OT, exercices d’incident ou secteur nucléaire, discutons-en.',
    now_cta_btn: 'se connecter pour collaborer',
    now_cta_note: 'Bonus pour les histoires de tabletop ou d’idées de chaos.',
    volunteering_title: '// bénévolat',
    certifications_title: '// certifications',
    terminal_title: '// flux_terminal',
    terminal_subtitle: 'Journaux d’activité récents',
    terminal_legend: 'légende',
    terminal_hint_email: 'ouvrir un email avec salutation',
    terminal_hint_cert: 'lister les certifications',
    terminal_hint_user_entry: 'tout texte est journalisé comme entrée {code}',
    code_user_prefix: '[UTILISATEUR]',
    contact_title: '// contact',
    contact_intro: 'Toujours partant pour collaborer en recherche, outils et enseignement sécurité.',
    email_subject: 'Bonjour depuis ton portfolio',
    email_log_with_custom: '[CMD] Ouverture de l’email avec salutation et message personnalisé...',
    email_log_no_custom: '[CMD] Ouverture de l’email avec salutation...',
    now_email_subject: 'Collaboration exercice supply chain',
    now_email_body: 'Bonjour Sachin,\n\nIntéressé pour collaborer à ton exercice supply chain nucléaire. Mes axes :\n- '
  },
  nl: {
    nav_home: 'start',
    nav_about: 'over mij',
    nav_skills: 'skills',
    nav_projects: 'projecten',
    nav_timeline: 'tijdlijn',
    nav_now: 'nu',
    nav_volunteering: 'vrijwilligerswerk',
    nav_certifications: 'certificeringen',
    nav_terminal: 'terminal',
    nav_contact: 'contact',
    about_title: '// over_mij',
    about_para1: 'Meer dan drie jaar ervaring met IAM, security-automatisering, cloudbeveiliging en backend-ontwikkeling met Okta, SailPoint, Cloudflare WAF en Python (ETL/REST/Flask).',
    about_para2: 'Meetbare resultaten geleverd, vrijwilliger bij een security-conferentie en CompTIA Security+. Communiceert helder, coördineert teams en blijft rustig onder druk.',
    now_title: '// nu_bezig',
    now_intro: 'Ontwerp een cyberoefening rond supply-chain-aanvallen op kritieke infrastructuur, met focus op kerncentrales.',
    now_goal: 'Doel: zekerheid vergroten tegen supply-chain-pivots die ongemerkt OT-omgevingen bereiken.',
    now_cta_title: 'Samenwerken?',
    now_cta_copy: 'Heb je ervaring met OT-detectie, incident-drills of de nucleaire sector? Laten we praten.',
    now_cta_btn: 'verbinden voor samenwerking',
    now_cta_note: 'Bonus voor tabletop-verhalen of chaos-testideeën.',
    volunteering_title: '// vrijwilligerswerk',
    certifications_title: '// certificeringen',
    terminal_title: '// terminal_feed',
    terminal_subtitle: 'Recente activiteitenlog',
    terminal_legend: 'legenda',
    terminal_hint_email: 'open e-mail met begroeting',
    terminal_hint_cert: 'certificeringen tonen',
    terminal_hint_user_entry: 'elke tekst wordt als {code}-regel gelogd',
    code_user_prefix: '[GEBRUIKER]',
    contact_title: '// contact',
    contact_intro: 'Altijd enthousiast om samen te werken aan security research, tooling en onderwijs.',
    email_subject: 'Hallo vanuit je portfolio',
    email_log_with_custom: '[CMD] E-mail openen met begroeting en aangepast bericht...',
    email_log_no_custom: '[CMD] E-mail openen met begroeting...',
    now_email_subject: 'Samenwerking supply-chain-oefening',
    now_email_body: 'Hi Sachin,\n\nIk wil graag meewerken aan je oefening voor de nucleaire supply chain. Mijn focusgebieden:\n- '
  },
  cy: {
    nav_home: 'cartref',
    nav_about: 'amdanaf i',
    nav_skills: 'sgiliau',
    nav_projects: 'prosiectau',
    nav_timeline: 'llinell amser',
    nav_now: 'nawr',
    nav_volunteering: 'gwirfoddoli',
    nav_certifications: 'ardystiadau',
    nav_terminal: 'terfynell',
    nav_contact: 'cyswllt',
    about_title: '// amdanaf_i',
    about_para1: 'Dros dair blynedd o brofiad IAM, awtomeiddio diogelwch, diogelwch cwmwl a backend gyda Okta, SailPoint, Cloudflare WAF a Python (ETL/REST/Flask).',
    about_para2: 'Canlyniadau mesuradwy, gwirfoddoli mewn cynhadledd seiber ac ennill CompTIA Security+. Yn cyfathrebu’n glir ac yn cydlynu dan bwysau.',
    now_title: '// yn_awr',
    now_intro: 'Ar hyn o bryd yn dylunio ymarfer seiber ar ymosodiadau cadwyn gyflenwi ar seilwaith critigol gyda ffocws ar orsafoedd niwclear.',
    now_goal: 'Nod: codi hyder yn erbyn pivots cadwyn gyflenwi sy’n sleifio i amgylcheddau OT.',
    now_cta_title: 'Hoffech gydweithio?',
    now_cta_copy: 'Os oes gennych arbenigedd OT, ymarferion digwyddiadau neu fewnwelediad niwclear, gadewch i ni siarad.',
    now_cta_btn: 'cysylltu i gydweithio',
    now_cta_note: 'Bonws am straeon tabletop neu syniadau prawf chaos.',
    volunteering_title: '// gwirfoddoli',
    certifications_title: '// ardystiadau',
    terminal_title: '// llif_terfynell',
    terminal_subtitle: 'Log gweithgaredd diweddar',
    terminal_legend: 'allwedd',
    terminal_hint_email: 'agor e-bost gyda chyfarch',
    terminal_hint_cert: 'rhestru ardystiadau',
    terminal_hint_user_entry: 'cofnodir unrhyw destun fel cofnod {code}',
    code_user_prefix: '[DEFNYDDIWR]',
    contact_title: '// cyswllt',
    contact_intro: 'Bob amser yn awyddus i gydweithio ar ymchwil, offer a dysgu diogelwch.',
    email_subject: 'Helo o dy bortffolio',
    email_log_with_custom: '[CMD] Yn agor e-bost gyda chyfarch a neges bersonol...',
    email_log_no_custom: '[CMD] Yn agor e-bost gyda chyfarch...',
    now_email_subject: 'Cydweithio ar ymarfer cadwyn gyflenwi',
    now_email_body: 'Helo Sachin,\n\nHoffwn gydweithio ar dy ymarfer cadwyn gyflenwi niwclear. Fy meysydd ffocws:\n- '
  },
  ga: {
    nav_home: 'baile',
    nav_about: 'fúm féin',
    nav_skills: 'scileanna',
    nav_projects: 'tionscadail',
    nav_timeline: 'amlíne',
    nav_now: 'anois',
    nav_volunteering: 'deonach',
    nav_certifications: 'deimhnithe',
    nav_terminal: 'críochfort',
    nav_contact: 'teagmháil',
    about_title: '// fúm_féin',
    about_para1: 'Breis agus trí bliana taithí phraiticiúil in IAM, uathoibriú slándála, slándáil néal agus forbairt backend le Okta, SailPoint, Cloudflare WAF agus Python (ETL/REST/Flask).',
    about_para2: 'Torthaí inbhraite, oibrí deonach i gcomhdháil slándála agus CompTIA Security+. Cumarsáid shoiléir agus comhordú foirne faoi bhrú.',
    now_title: '// ag_tarlú_anois',
    now_intro: 'Ag dearadh cleachtadh cibear ar ionsaithe slabhra soláthair ar bhonneagar criticiúil le fócas ar ghléasraí núicléacha.',
    now_goal: 'Cuspóir: muinín a ardú i gcoinne pivots slabhra soláthair a shleamhnaíonn go ciúin isteach in OT.',
    now_cta_title: 'An ndéanfaimid comhoibriú?',
    now_cta_copy: 'Má tá saineolas OT, druileanna teagmhais nó léargas núicléach agat, labhraímis.',
    now_cta_btn: 'ceangal le comhoibriú',
    now_cta_note: 'Bónas do scéalta tabletop nó smaointe chaos.',
    volunteering_title: '// obair_dheonach',
    certifications_title: '// deimhnithe',
    terminal_title: '// beathú_críochfoirt',
    terminal_subtitle: 'Log gníomhaíochta le déanaí',
    terminal_legend: 'eochair',
    terminal_hint_email: 'oscail ríomhphost le beannú',
    terminal_hint_cert: 'liostaigh deimhnithe',
    terminal_hint_user_entry: 'logáiltear aon téacs mar iontráil {code}',
    code_user_prefix: '[ÚSÁIDEOIR]',
    contact_title: '// teagmháil',
    contact_intro: 'I gcónaí ar bís le haghaidh taighde, uirlisiú agus teagasc slándála.',
    email_subject: 'Dia dhuit ó do phortfóilió',
    email_log_with_custom: '[CMD] Ríomhphost á oscailt le beannú agus teachtaireacht phearsanta...',
    email_log_no_custom: '[CMD] Ríomhphost á oscailt le beannú...',
    now_email_subject: 'Comhoibriú ar chleachtadh slabhra soláthair',
    now_email_body: 'Hi Sachin,\n\nBa mhaith liom comhoibriú ar do chleachtadh slabhra soláthair núicléach. Mo bhéim:\n- '
  },
  sv: {
    nav_home: 'hem',
    nav_about: 'om mig',
    nav_skills: 'färdigheter',
    nav_projects: 'projekt',
    nav_timeline: 'tidslinje',
    nav_now: 'nu',
    nav_volunteering: 'volontärt',
    nav_certifications: 'certifieringar',
    nav_terminal: 'terminal',
    nav_contact: 'kontakt',
    about_title: '// om_mig',
    about_para1: 'Över tre års erfarenhet av IAM, säkerhetsautomatisering, molnsäkerhet och backend med Okta, SailPoint, Cloudflare WAF och Python (ETL/REST/Flask).',
    about_para2: 'Mätbara resultat, volontär vid en säkerhetskonferens och CompTIA Security+. Kommunicerar tydligt, koordinerar team och är lugn under press.',
    now_title: '// pågående',
    now_intro: 'Designar en cyberövning om supply-chain-angrepp mot kritisk infrastruktur med fokus på kärnkraftverk.',
    now_goal: 'Mål: stärka trygghet mot supply-chain-pivots som tyst når OT-miljöer.',
    now_cta_title: 'Ska vi samarbeta?',
    now_cta_copy: 'Har du OT-detektion, incidentövningar eller kärnkraftserfarenhet? Hör av dig.',
    now_cta_btn: 'anslut för att samarbeta',
    now_cta_note: 'Bonus för tabletop-berättelser eller chaos-idéer.',
    volunteering_title: '// volontärt',
    certifications_title: '// certifieringar',
    terminal_title: '// terminal_feed',
    terminal_subtitle: 'Senaste aktivitetsloggar',
    terminal_legend: 'legend',
    terminal_hint_email: 'öppna e-post med hälsning',
    terminal_hint_cert: 'lista certifieringar',
    terminal_hint_user_entry: 'valfri text loggas som {code}-post',
    code_user_prefix: '[ANVÄNDARE]',
    contact_title: '// kontakt',
    contact_intro: 'Alltid peppad på samarbete kring säkerhetsforskning, verktyg och undervisning.',
    email_subject: 'Hej från din portfolio',
    email_log_with_custom: '[CMD] Öppnar e-post med hälsning och anpassat meddelande...',
    email_log_no_custom: '[CMD] Öppnar e-post med hälsning...',
    now_email_subject: 'Samarbete supply-chain-övning',
    now_email_body: 'Hej Sachin,\n\nIntresserad av att samarbeta på din nukleära supply-chain-övning. Mina fokusområden:\n- '
  }
};

let currentLanguage = 'en';

function initAccessibility() {
  const root = document.documentElement;
  const body = document.body;
  const fontButtons = document.querySelectorAll('[data-font]');
  const contrastToggle = document.getElementById('contrast-toggle');
  const languageSelect = document.getElementById('language-select');
  const themeSelect = document.getElementById('theme-select');
  const minSize = 14;
  const maxSize = 20;
  let fontSize = DEFAULT_FONT_SIZE;
  const themes = ['dark', 'light', 'neon', 'grey'];

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

  const applyTheme = (theme) => {
    const target = themes.includes(theme) ? theme : 'dark';
    body.classList.remove(...themes.map((t) => `theme-${t}`));
    if (target !== 'dark') {
      body.classList.add(`theme-${target}`);
    }
    if (themeSelect) themeSelect.value = target;
  };

  if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      applyTheme(e.target.value);
    });
  }

  // defaults
  setFontSize(DEFAULT_FONT_SIZE);
  applyTheme('dark');
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
    const codeKey = el.dataset.codeKey;
    // Precedence: translation for codeKey > data-code attribute > inline <code> content.
    const codeText =
      (codeKey && (dict[codeKey] || fallback[codeKey])) ||
      el.dataset.code ||
      (code ? code.textContent : '');
    if (codeText && text.includes('{code}')) {
      const parts = text.split('{code}');
      el.textContent = '';
      parts.forEach((part, idx) => {
        if (part) el.append(document.createTextNode(part));
        if (idx < parts.length - 1) {
          const codeEl = document.createElement('code');
          codeEl.textContent = codeText;
          el.append(codeEl);
        }
      });
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

function createCommandHandlers(logs, renderLogs) {
  return {
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

  const commandHandlers = createCommandHandlers(logs, renderLogs);

  renderLogs();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    // Normalize internal consecutive spaces between command and payload (input is already trimmed).
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
