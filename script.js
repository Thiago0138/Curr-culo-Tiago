(() => {
  const EN = {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "Marketing & Operations · Lisbon",
    "hero.lede": "Marketer with a master's in Marketing Management, building brands across digital and in-person — and co-founder of Khora, a Portuguese streetwear brand for techno culture.",
    "hero.cta1": "Get in touch",
    "hero.status": "Co-founder @ Khora Clothing",
    "stats.years": "years in marketing",
    "stats.master": "Marketing Management, IPAM",
    "stats.companies": "companies, 3 industries",
    "stats.brand": "brand co-founded",
    "about.title": "About",
    "about.p1": "I like brands with intent: one clear idea, told consistently at every touchpoint.",
    "about.p2": "I've worked across healthcare, retail, executive education and insurance — always between strategy and execution. I handle social media, email marketing, events, websites and campaign preparation, plus the operations that keep things running: client portfolio management, invoicing and payment control.",
    "s.1": "Dynamism & creativity",
    "s.2": "Time management",
    "s.3": "Communication",
    "s.4": "Problem solving",
    "s.5": "Adaptability",
    "s.6": "Team spirit",
    "khora.kicker": "Latest project",
    "khora.role": "Co-founder",
    "khora.tag": "100% Portuguese streetwear for techno and rave culture.",
    "khora.p1": "I co-founded Khora with another young entrepreneur to build the largest community around techno and dance — a space with no judgment, where anyone, regardless of appearance, origin or identity, can express themselves through music, movement and aesthetics.",
    "khora.p2": "In a market where rave culture is still marginalised and under-explored in Portugal, Khora emerges as an inclusive alternative: functional, premium and versatile pieces, built to withstand the intensity of a rave with the quality to be worn every day.",
    "khora.quote": "“More than clothing, we create belonging.”",
    "khora.doTitle": "From zero to finished product — I do it all",
    "khora.d1t": "Suppliers & production",
    "khora.d1": "Sourcing and negotiating with suppliers, quality control and 100% Portuguese production.",
    "khora.d2t": "Brand & product",
    "khora.d2": "Positioning, identity and collection development — from After Hours to Echoes.",
    "khora.d3t": "Marketing & community",
    "khora.d3": "Social media, content, photo shoots, event presence and partnerships across the techno scene.",
    "khora.d4t": "E-commerce & operations",
    "khora.d4": "Online store, launches, orders, stock and the day-to-day running of the business.",
    "khora.site": "Visit the store ↗",
    "exp.title": "Experience",
    "exp.1.when": "Jan 2025 — Present",
    "exp.1.role": "Marketing and Operations",
    "exp.1.desc": "Social media management, email marketing, event planning, website management, campaign preparation and content creation. On operations: client portfolio management, invoicing and payment control.",
    "exp.2.when": "Mar 2024 — Dec 2024",
    "exp.2.desc": "Social media management, email marketing, event planning, website management and campaign preparation.",
    "exp.3.when": "Jan 2022 — Oct 2023",
    "exp.3.role": "Marketing Assistant",
    "exp.3.desc": "Content review, campaign preparation, email marketing, organic campaign and social media management, competitive analysis and event organisation.",
    "exp.4.when": "Mar 2021 — Jun 2021",
    "exp.4.role": "Marketing Internship",
    "exp.4.desc": "Strategies for the mobile app, loyalty strategies and competitor analysis.",
    "edu.title": "Education",
    "edu.1": "Master in Marketing Management",
    "edu.2": "Degree in Marketing Management",
    "edu.3": "Google AdWords Certificate",
    "edu.4": "Insurance Agent, Broker or Reinsurance Intermediary",
    "edu.4b": "Non-Life and Life lines",
    "skills.title": "Tools",
    "skills.g1": "Marketing & CRM",
    "skills.g2": "Content & Web",
    "skills.g3": "Productivity",
    "skills.g4": "Insurance",
    "skills.g5": "Languages",
    "skills.portals": "Insurer portals",
    "lang.pt": "Portuguese — native",
    "lang.en": "English",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build<br /><em>something together.</em>",
    "contact.loc": "Lisbon, Portugal",
    "foot.top": "Back to top ↑",
  };

  // Snapshot the Portuguese text already in the HTML so we can switch back.
  const PT = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { PT[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => { PT[el.dataset.i18nHtml] = el.innerHTML; });

  const btn = document.getElementById("lang");
  const apply = (lang) => {
    const dict = lang === "en" ? EN : PT;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = dict[el.dataset.i18nHtml];
      if (v) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    btn.textContent = lang === "en" ? "PT" : "EN";
    try { localStorage.setItem("lang", lang); } catch (_) {}
  };

  let current = "pt";
  try { current = localStorage.getItem("lang") || current; } catch (_) {}
  if (current === "en") apply("en");
  btn.addEventListener("click", () => {
    current = current === "en" ? "pt" : "en";
    apply(current);
  });

  // Sticky nav border
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal on scroll
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
