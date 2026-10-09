/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  ROEUY MC — EASY EDIT CONFIGURATION                              ║
  ║  Update the values below. Add/remove objects in `links` to        ║
  ║  manage buttons. No backend, visitor count, or admin panel used.  ║
  ╚══════════════════════════════════════════════════════════════════╝
*/
const SITE_CONFIG = {
  profile: {
    name: "ROEUY MC",
    handle: "@roeuymc.1",
    image: "assets/profile.png",
    imageAlt: "ROEUY MC gaming avatar",
    bio: "Gaming 🎮 • Minecraft ⛏️ • Digital Store",
    bioKm: "អ្នកលេងហ្គេម • Minecraft • ហាងឌីជីថល",
    onlineLabel: "Online now",
    onlineLabelKm: "កំពុងអនឡាញ",
    creatorLabel: "Gaming creator",
    creatorLabelKm: "អ្នកបង្កើតមាតិកាហ្គេម"
  },

  /* Change every URL to your real destination before publishing. */
  links: [
    {
      title: "TikTok",
      titleKm: "TikTok",
      subtitle: "Follow me",
      subtitleKm: "តាមដានខ្ញុំ",
      icon: "music-2",
      color: "#ff4fd8",
      url: "https://www.tiktok.com/@roeuymc.1"
    },
    {
      title: "Telegram",
      titleKm: "Telegram",
      subtitle: "personal Account",
      subtitleKm: "អាខោនផ្ទាល់ខ្លួន",
      icon: "send",
      color: "#36d0ff",
      url: "https://t.me/nhngegbunroeuy"
    },
    {
      title: "Telegram Channel",
      titleKm: "Telegram Channel",
      subtitle: "My channel",
      subtitleKm: "Channel របស់ ROEUY MC",
      icon: "send",
      color: "#45b8ff",
      url: "https://t.me/roeuy_mc1"
    },
    {
      title: "Facebook",
      titleKm: "Facebook",
      subtitle: "Follow my page",
      subtitleKm: "តាមដានផេករបស់ខ្ញុំ",
      icon: "facebook",
      color: "#6b9dff",
      url: "https://web.facebook.com/profile.php?id=61579441601209"
    },
    {
      title: "YouTube",
      titleKm: "YouTube",
      subtitle: "Watch my videos",
      subtitleKm: "មើលវីដេអូរបស់ខ្ញុំ",
      icon: "youtube",
      color: "#ff5b62",
      url: "https://youtube.com/@roeuy_mc"
    },
    {
      title: "Channel VanStore",
      titleKm: "Channel VanStore",
      subtitle: "click to buy account minecraft",
      subtitleKm: "ចុចដើម្បីទិញអាខោន minecraft នៅ channel Van",
      icon: "send",
      color: "#ffb746",
      url: "https://t.me/vanstoremc"
    },
    {
      title: "ROEUY STORE",
      titleKm: "ហាង ROEUY",
      subtitle: "Shop now",
      subtitleKm: "ទិញឥឡូវនេះ",
      icon: "shopping-bag",
      color: "#b86bff",
      url: "https://t.me/roeuystore"
    }
  ],

  /* Small icon row in the footer. Remove an object to hide it. */
  socials: [
    { label: "TikTok", icon: "music-2", url: "https://www.tiktok.com/@roeuymc.1" },
    { label: "Telegram", icon: "send", url: "https://t.me/nhngegbunroeuy" },
    { label: "Facebook", icon: "facebook", url: "https://web.facebook.com/profile.php?id=61579441601209" },
    { label: "YouTube", icon: "youtube", url: "https://youtube.com/@roeuy_mc" }
  ],

  footer: {
    note: "Built for the next level.",
    noteKm: "បង្កើតឡើងសម្រាប់កម្រិតបន្ទាប់។"
  }
};

const TRANSLATIONS = {
  en: {
    copy: "Copy profile link",
    copied: "Profile link copied!",
    share: "Share",
    shareFallback: "Profile link copied — ready to share!",
    languageLabel: "Switch to Khmer",
    themeLabel: "Switch color theme",
    footerName: SITE_CONFIG.profile.name
  },
  km: {
    copy: "ចម្លងតំណប្រវត្តិរូប",
    copied: "បានចម្លងតំណរួចហើយ!",
    share: "ចែករំលែក",
    shareFallback: "បានចម្លងតំណ — រួចរាល់សម្រាប់ចែករំលែក!",
    languageLabel: "ប្ដូរទៅភាសាអង់គ្លេស",
    themeLabel: "ប្ដូរពណ៌ទំព័រ",
    footerName: SITE_CONFIG.profile.name
  }
};

let currentLanguage = localStorage.getItem("roeuymc-language") || "en";
let toastTimer;

const $ = (selector) => document.querySelector(selector);

function makeExternalLink({ label, url, className, icon }) {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.setAttribute("aria-label", label);
  anchor.title = label;
  anchor.innerHTML = `<i data-lucide="${icon}" aria-hidden="true"></i><span class="sr-only">${label}</span>`;
  return anchor;
}

function renderLinks(language = currentLanguage) {
  const list = $("#link-list");
  list.innerHTML = "";

  SITE_CONFIG.links.forEach((link, index) => {
    const label = language === "km" ? link.titleKm || link.title : link.title;
    const subtitle = language === "km" ? link.subtitleKm || link.subtitle : link.subtitle;
    const anchor = document.createElement("a");
    anchor.className = "link-button";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.setProperty("--link-color", link.color);
    anchor.style.animation = `page-in .45s cubic-bezier(.2,.85,.3,1) ${0.08 + index * 0.055}s both`;
    anchor.setAttribute("aria-label", `${label} — ${subtitle}`);
    anchor.innerHTML = `
      <span class="link-icon"><i data-lucide="${link.icon}" aria-hidden="true"></i></span>
      <span class="link-content">
        <span class="link-title">${label}</span>
        <span class="link-subtitle">${subtitle}</span>
      </span>
      <span class="link-arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>
    `;
    list.appendChild(anchor);
  });
}

function renderSocials() {
  const socialList = $("#social-list");
  socialList.innerHTML = "";
  SITE_CONFIG.socials.forEach((social) => {
    socialList.appendChild(makeExternalLink({
      label: `Open ${social.label}`,
      url: social.url,
      className: "social-button",
      icon: social.icon
    }));
  });
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "stroke-width": 2 } });
  }
}

function applyProfile() {
  const { profile } = SITE_CONFIG;
  $("#profile-name").textContent = profile.name;
  $("#profile-handle").textContent = profile.handle;
  $("#profile-image").src = profile.image;
  $("#profile-image").alt = profile.imageAlt;
  $("#footer-name").textContent = profile.name;
  $("#footer-year").textContent = new Date().getFullYear();
}

function applyLanguage(language) {
  currentLanguage = language;
  const isKhmer = language === "km";
  const t = TRANSLATIONS[language];
  const profile = SITE_CONFIG.profile;

  document.documentElement.lang = isKhmer ? "km" : "en";
  $("#profile-bio").textContent = isKhmer ? profile.bioKm : profile.bio;
  $("#profile-bio-km").textContent = isKhmer ? profile.bio : profile.bioKm;
  $("#online-label").textContent = isKhmer ? profile.onlineLabelKm : profile.onlineLabel;
  $("#follower-label").textContent = isKhmer ? profile.creatorLabelKm : profile.creatorLabel;
  $("#copy-label").textContent = t.copy;
  $("#share-label").textContent = t.share;
  $("#footer-note").textContent = isKhmer ? SITE_CONFIG.footer.noteKm : SITE_CONFIG.footer.note;

  const languageButton = $("#language-toggle");
  languageButton.setAttribute("aria-label", t.languageLabel);
  languageButton.title = t.languageLabel;
  languageButton.innerHTML = `<span aria-hidden="true">${isKhmer ? "EN" : "ខ្មែរ"}</span>`;
  $("#theme-toggle").setAttribute("aria-label", t.themeLabel);
  $("#theme-toggle").title = t.themeLabel;
  document.title = `${SITE_CONFIG.profile.name} | ${isKhmer ? "ហ្គេម និងហាងឌីជីថល" : "Gaming & Digital Store"}`;

  renderLinks(language);
  refreshIcons();
  localStorage.setItem("roeuymc-language", language);
}

function showToast(message) {
  const toast = $("#toast");
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

async function copyProfileLink(showFeedback = true) {
  const profileUrl = window.location.href;
  try {
    await navigator.clipboard.writeText(profileUrl);
  } catch (error) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = profileUrl;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    temporaryInput.remove();
  }
  if (showFeedback) showToast(TRANSLATIONS[currentLanguage].copied);
}

function setupTheme() {
  const savedTheme = localStorage.getItem("roeuymc-theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = savedTheme || (prefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;

  $("#theme-toggle").addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("roeuymc-theme", nextTheme);
    $("#theme-toggle").innerHTML = `<i data-lucide="${nextTheme === "dark" ? "sun" : "moon"}" aria-hidden="true"></i>`;
    refreshIcons();
  });
}

function createParticles() {
  const container = $("#particles");
  const colors = ["var(--purple)", "var(--green)", "#ffffff"];
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.cssText = `
      --size: ${2 + Math.random() * 2.5}px;
      --duration: ${7 + Math.random() * 9}s;
      --delay: ${-Math.random() * 13}s;
      --travel: ${(Math.random() - 0.5) * 80}px;
      --opacity: ${0.18 + Math.random() * 0.32};
      --color: ${colors[index % colors.length]};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
    `;
    container.appendChild(particle);
  }
}

function setupInteractions() {
  $("#language-toggle").addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "km" : "en");
  });

  $("#copy-button").addEventListener("click", () => copyProfileLink());

  $("#share-button").addEventListener("click", async () => {
    const shareData = {
      title: `${SITE_CONFIG.profile.name} | Gaming & Digital Store`,
      text: SITE_CONFIG.profile.bio,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Closing the native share sheet is expected; do not show an error.
      }
    } else {
      await copyProfileLink(false);
      showToast(TRANSLATIONS[currentLanguage].shareFallback);
    }
  });
}

function init() {
  applyProfile();
  renderSocials();
  setupTheme();
  applyLanguage(currentLanguage);
  createParticles();
  setupInteractions();
  refreshIcons();
}

document.addEventListener("DOMContentLoaded", init);
