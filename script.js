/* =========================================================
   CUSTOMIZATION — edit this section only
   ========================================================= */

const birthdayConfig = {
  herName: "Maithri",
  /* Optional — shown on letter / finale if filled */
  yourName: "",
  /* Optional custom MP3 — leave as-is; built-in Happy Birthday song always plays */
  musicFile: "assets/music.mp3",
  useBuiltInSong: true, /* Happy Birthday melody via Web Audio (works with no MP3) */
  celebrationSound: "", /* optional short celebration mp3 — leave empty to skip */
  birthdayDate: "October 13",
  /* Month is 1–12 · used for countdown + day badge */
  birthdayMonth: 10,
  birthdayDay: 13,

  /* Scene 3 — personal message (typing animation) */
  personalMessage:
    "Some people make ordinary days feel a little better just by being around.\n\nAnd honestly, you're one of those people.\n\nSo this year, instead of just saying Happy Birthday, I wanted to make something especially for you.\n\nI hope this little surprise makes you smile.",

  /* Scene 5 — little secret moment */
  secretMomentLine1: "You're actually one of my favorite people to talk to.",
  secretMomentLine2: "Yeah... I said it. 😅❤️",

  /* Scene 6 — interactive cards (existing) */
  specialThings: [
    {
      title: "Your Smile",
      text: "Somehow it makes everything feel a little brighter.",
    },
    {
      title: "Your Eyes",
      text: "Your eyes are so beautiful — they hold a kind of quiet magic that's hard to look away from.",
    },
    {
      title: "Your Personality",
      text: "There's something about you that's genuinely unforgettable.",
    },
    {
      title: "Your Energy",
      text: "You have a way of making moments more fun.",
    },
    {
      title: "The Little Things",
      text: "Sometimes it's the smallest things that people remember most.",
    },
    {
      title: "Just You",
      text: "You don't have to be anything other than yourself.",
    },
  ],

  /* Scene 7 — Little Things I Notice (flip cards) */
  noticeCards: [
    {
      title: "Your Eyes 👀",
      text: "Okay, I'll admit it... your eyes are genuinely attractive. They're one of those things I notice without even trying.",
    },
    {
      title: "Your Smile 😊",
      text: "Your smile has a way of making the whole moment feel better.",
    },
    {
      title: "Your Random Moments 😂",
      text: "Some of the random things you say are honestly the moments I remember the most.",
    },
    {
      title: "Just You ❤️",
      text: "I don't really know how to explain it. I just like being around you.",
    },
  ],

  /* Scene 8 — choose one responses */
  chooseResponse1: "Good choice... but honestly...",
  chooseResponse2: "It's kind of all three. 😌❤️",

  /* Scene 9 — tap stars to collect wishes */
  wishes: [
    "May your year be soft where you need softness.",
    "May every good thing find its way to you.",
    "May you never forget how bright you already are.",
    "May laughter visit you often.",
    "May you feel loved — today and every day after.",
  ],

  /* Birthday fortune (picked at random when she opens the card) */
  fortunes: [
    "A quiet wish you made is already on its way to you.",
    "This year will surprise you in the softest, best ways.",
    "Your smile is about to open a door you didn't expect.",
    "The best chapter starts the moment you believe you deserve it.",
    "You will feel deeply seen — and it will feel like home.",
  ],

  /* Scene 11 — closing lines (still shown after letter) */
  finalLine1: "And that's my little surprise for you ❤️",
  finalLine2:
    "I hope this year brings you happiness, laughter, amazing memories, and everything you're hoping for.",

  /* Envelope letter — fully editable */
  letterMessage:
    "Happy Birthday, {herName}. ❤️\n\nI hope you know how special you are.\n\nI hope you keep smiling, keep being yourself, and keep making the people around you happy just by being you.\n\nToday is yours — every star in this sky is cheering for you.",

  /* Scene 12 — grand finale */
  lastMessage: "Keep smiling. You deserve it.",
  closingBlessing: "You are very special to me. ❤️",
  secretMessage:
    "If nobody told you today: you matter more than you know. Happy Birthday.",

  /* Easter eggs */
  easterEggTap: "Okay, you found the secret 😭❤️",

  /* Finale — memory moments (tap through) */
  memoryMoments: [
    { title: "Your laugh", text: "It turns ordinary seconds into something worth remembering." },
    { title: "Your presence", text: "The room feels softer when you're in it." },
    { title: "Your heart", text: "Quietly kind. Quietly brave. Quietly unforgettable." },
    { title: "This day", text: "A whole sky dedicated to celebrating you." },
  ],

  /* Tap through these on the finale */
  yearPromises: [
    "This year, may your softest days still feel full of light.",
    "This year, may you be brave enough to choose what makes you happy.",
    "This year, may you be surrounded by people who see you clearly.",
    "This year, may every ordinary Tuesday still hold a little magic.",
  ],

  lanternWishes: [
    "May joy find you easily.",
    "May your year glow from the inside out.",
    "May every wish you whisper come true softly.",
    "May you feel celebrated — today and always.",
  ],

  /* Mystery doors — every door is a win */
  doorSurprises: [
    "Behind this door: a reminder that you're someone's favorite person to talk to.",
    "Behind this door: proof that your smile is a whole mood.",
    "Behind this door: a soft little truth — you make ordinary days feel rare.",
  ],

  /* Heart constellation unlock message (Scene 2) */
  heartUnlockMessage:
    "A whole constellation, shaped like how you make people feel. ❤️",

  /* Magic orb truths (Scene 8 — after doors) */
  orbTruths: [
    "You make ordinary moments feel rare.",
    "Your energy stays with people long after you leave.",
    "Being around you feels like soft sunlight.",
    "You are easier to celebrate than you know.",
    "Your smile is somebody's favorite part of the day.",
  ],

  /* Sparkler reveal message (after fortune card) */
  sparklerMessage:
    "You're the spark in everyone's day.\n\nKeep glowing, keep smiling,\nand keep being exactly who you are.\n\nHappy Birthday, {herName}.",

  /* Falling compliments */
  compliments: [
    "Radiant",
    "Kind",
    "Unforgettable",
    "Soft magic",
    "Bright soul",
    "Beautiful",
    "One of a kind",
    "Pure light",
    "Wonderful",
    "Extra special",
  ],

  /* Double-tap photo secret */
  photoSecret: "Okay… this photo still makes me smile. Every. Single. Time.",

  shareText: "Someone made a little birthday surprise just for me ✨",

  /* Timing (ms) — optional fine-tuning */
  typeSpeed: 28,
  photoSequenceDelay: 1100,
  lastThingDelay: 1600,
  celebrationThenNext: 3600,
  cinematicIntroMs: 2800,
  cakePreambleMs: 2200,
  totalScenes: 13,
};

/* =========================================================
   App logic — no need to edit below for basic customization
   ========================================================= */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const isCoarse =
    window.matchMedia("(pointer: coarse)").matches ||
    navigator.maxTouchPoints > 0;

  const isLowPower =
    isCoarse ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    (navigator.deviceMemory && navigator.deviceMemory <= 4);

  const PARTICLE_SCALE = isLowPower ? 0.45 : 1;
  const MAX_TRAIL = isLowPower ? 8 : 16;
  const TOTAL = birthdayConfig.totalScenes || 12;

  const state = {
    scene: 1,
    musicReady: false,
    musicAvailable: false,
    musicPlaying: false,
    musicFadeTimer: null,
    musicMode: "synth", /* synth | file */
    audioCtx: null,
    masterGain: null,
    songTimer: null,
    songLoopTimer: null,
    songStartTime: 0,
    lyricsTimer: null,
    blowStream: null,
    blowRaf: null,
    fortuneOpened: false,
    doorOpened: false,
    sparklerLit: false,
    heartBuilt: false,
    orbOpened: false,
    photoSecretShown: false,
    surpriseOpened: false,
    typingTimer: null,
    photoTimers: [],
    lastTimers: [],
    fxTimers: [],
    sceneTimers: [],
    candlesBlown: false,
    cardsOpened: 0,
    noticeOpened: 0,
    wishesCollected: 0,
    giftUnwrapped: false,
    secretUnlocked: false,
    secretMomentDone: false,
    letterOpened: false,
    chooseDone: false,
    finaleHeartDone: false,
    introDone: false,
    shootTimer: null,
    countdownTimer: null,
    promiseIndex: 0,
    finaleAnim: null,
    fireworks: [],
    logoTaps: [],
    bottomEggShown: false,
    parallaxBound: false,
  };

  const els = {
    app: document.getElementById("app"),
    starfield: document.getElementById("starfield"),
    fxLayer: document.getElementById("fx-layer"),
    balloonLayer: document.getElementById("balloon-layer"),
    cursorTrail: document.getElementById("cursor-trail"),
    sky: document.querySelector(".sky"),
    cinematicVeil: document.getElementById("cinematic-veil"),
    cineStars: document.getElementById("cine-stars"),
    cineName: document.getElementById("cine-name"),
    musicToggle: document.getElementById("music-toggle"),
    musicIcon: document.querySelector(".music-icon"),
    audio: document.getElementById("bg-music"),
    celebSound: document.getElementById("celeb-sound"),
    lyricsBar: document.getElementById("lyrics-bar"),
    lyricsLine: document.getElementById("lyrics-line"),
    sparkleRain: document.getElementById("sparkle-rain"),
    constellation: document.getElementById("name-constellation"),
    constellationCanvas: document.getElementById("constellation-canvas"),
    fortuneStage: document.getElementById("fortune-stage"),
    btnFortune: document.getElementById("btn-fortune"),
    fortuneText: document.getElementById("fortune-text"),
    blowHint: document.getElementById("blow-hint"),
    blowMeter: document.getElementById("blow-meter"),
    blowMeterFill: document.getElementById("blow-meter-fill"),
    hbSingAlong: document.getElementById("hb-sing-along"),
    progress: document.getElementById("progress"),
    dayBadge: document.getElementById("day-badge"),
    tapHint: document.getElementById("tap-hint"),
    typedMessage: document.getElementById("typed-message"),
    typeCursor: document.getElementById("type-cursor"),
    btnKeepGoing: document.getElementById("btn-keep-going"),
    herPhoto: document.getElementById("her-photo"),
    photoFallback: document.getElementById("photo-fallback"),
    photoFrame: document.getElementById("photo-frame"),
    photoStage: document.getElementById("photo-stage"),
    photoParallax: document.getElementById("photo-parallax"),
    photoOrbit: document.getElementById("photo-orbit"),
    photoLine1: document.getElementById("photo-line-1"),
    photoLine2: document.getElementById("photo-line-2"),
    photoCaption: document.getElementById("photo-caption"),
    photoSub: document.getElementById("photo-sub"),
    btnTheresMore: document.getElementById("btn-theres-more"),
    giftWrap: document.getElementById("gift-wrap"),
    btnUnwrap: document.getElementById("btn-unwrap"),
    specialCards: document.getElementById("special-cards"),
    cardsProgress: document.getElementById("cards-progress"),
    cardsComplete: document.getElementById("cards-complete"),
    btnAfterCards: document.getElementById("btn-after-cards"),
    noticeCards: document.getElementById("notice-cards"),
    btnAfterNotice: document.getElementById("btn-after-notice"),
    chooseOptions: document.getElementById("choose-options"),
    chooseResponse: document.getElementById("choose-response"),
    chooseLine1: document.getElementById("choose-line-1"),
    chooseLine2: document.getElementById("choose-line-2"),
    wishSky: document.getElementById("wish-sky"),
    wishReveal: document.getElementById("wish-reveal"),
    btnAfterWishes: document.getElementById("btn-after-wishes"),
    cake: document.getElementById("birthday-cake"),
    cakeStage: document.getElementById("cake-stage-wrap") || document.querySelector(".cake-stage"),
    cakeCloseEyes: document.getElementById("cake-close-eyes"),
    cakeOpenEyes: document.getElementById("cake-open-eyes"),
    cakeLine1: document.getElementById("cake-line-1"),
    cakeLine2: document.getElementById("cake-line-2"),
    wishText: document.getElementById("wish-text"),
    btnBlow: document.getElementById("btn-blow"),
    wishLocked: document.getElementById("wish-locked"),
    hbBurst: document.getElementById("hb-burst"),
    hbMoreWrap: document.getElementById("hb-more-wrap"),
    btnAfterWish: document.getElementById("btn-after-wish"),
    btnLittleSecret: document.getElementById("btn-little-secret"),
    secretForgot: document.getElementById("secret-forgot"),
    secretReveal: document.getElementById("secret-reveal"),
    secretLine1: document.getElementById("secret-line-1"),
    secretLine2: document.getElementById("secret-line-2"),
    btnAfterSecret: document.getElementById("btn-after-secret"),
    btnOpenLetter: document.getElementById("btn-open-letter"),
    letterCard: document.getElementById("letter-card"),
    letterBody: document.getElementById("letter-body"),
    letterSign: document.getElementById("letter-sign"),
    scene11Continue: document.getElementById("scene-11-continue"),
    lastPrompt: document.getElementById("last-prompt"),
    lastMessage: document.getElementById("last-message"),
    finaleName: document.getElementById("finale-name"),
    finaleCanvas: document.getElementById("finale-canvas"),
    finaleHeartBtn: document.getElementById("finale-heart-btn"),
    finaleHeartBurst: document.getElementById("finale-heart-burst"),
    finaleSign: document.getElementById("finale-sign"),
    promiseDeck: document.getElementById("promise-deck"),
    promiseCard: document.getElementById("promise-card"),
    promiseText: document.getElementById("promise-text"),
    promiseDots: document.getElementById("promise-dots"),
    secretHeart: document.getElementById("secret-heart"),
    secretMessage: document.getElementById("secret-message"),
    closingBlessing: document.getElementById("closing-blessing"),
    finaleActions: document.getElementById("finale-actions"),
    btnReplay: document.getElementById("btn-replay"),
    btnShare: document.getElementById("btn-share"),
    btnFireworks: document.getElementById("btn-fireworks"),
    countdownBlock: document.getElementById("countdown-block"),
    countdownLabel: document.getElementById("countdown-label"),
    countdownGrid: document.getElementById("countdown-grid"),
    countdownStatic: document.getElementById("countdown-static"),
    logoEgg: document.getElementById("logo-egg"),
    easterToast: document.getElementById("easter-toast"),
    memoryLane: document.getElementById("memory-lane"),
    memoryTrack: document.getElementById("memory-track"),
    lanternStage: document.getElementById("lantern-stage"),
    btnLantern: document.getElementById("btn-lantern"),
    lanternSky: document.getElementById("lantern-sky"),
    finaleAurora: document.getElementById("finale-aurora"),
    chooseStage: document.getElementById("choose-stage"),
    doorStage: document.getElementById("door-stage"),
    doorReveal: document.getElementById("door-reveal"),
    btnAfterDoors: document.getElementById("btn-after-doors"),
    sparklerStage: document.getElementById("sparkler-stage"),
    btnSparkler: document.getElementById("btn-sparkler"),
    sparklerEmbers: document.getElementById("sparkler-embers"),
    sparklerMessage: document.getElementById("sparkler-message"),
    photoSecret: document.getElementById("photo-secret"),
    photoSecretHint: document.getElementById("photo-secret-hint"),
    complimentRain: document.getElementById("compliment-rain"),
    catchStar: document.getElementById("catch-star"),
    heartSky: document.getElementById("heart-sky"),
    heartPoints: document.getElementById("heart-points"),
    heartProgress: document.getElementById("heart-progress"),
    heartUnlock: document.getElementById("heart-unlock"),
    orbStage: document.getElementById("orb-stage"),
    btnOrb: document.getElementById("btn-orb"),
    orbReveal: document.getElementById("orb-reveal"),
    nameFireworks: document.getElementById("name-fireworks"),
  };

  function scaledCount(n) {
    return Math.max(1, Math.round(n * PARTICLE_SCALE));
  }

  function clearSceneTimers() {
    state.sceneTimers.forEach(clearTimeout);
    state.sceneTimers = [];
  }

  function later(fn, ms) {
    const id = setTimeout(fn, ms);
    state.sceneTimers.push(id);
    return id;
  }

  function fillTemplate(str) {
    return String(str || "")
      .replace(/\{herName\}/g, birthdayConfig.herName)
      .replace(/\{yourName\}/g, birthdayConfig.yourName || "");
  }

  function applyConfig() {
    document.querySelectorAll("[data-her-name]").forEach((node) => {
      node.textContent = birthdayConfig.herName;
    });
    document.querySelectorAll("[data-your-name]").forEach((node) => {
      const name = (birthdayConfig.yourName || "").trim();
      if (!name) {
        const wrap = node.closest(".signature") || node;
        wrap.hidden = true;
        return;
      }
      node.textContent = name;
      const wrap = node.closest(".signature") || node;
      wrap.hidden = false;
    });
    document.querySelectorAll("[data-config]").forEach((node) => {
      const key = node.getAttribute("data-config");
      if (key && birthdayConfig[key] != null) {
        node.textContent = birthdayConfig[key];
      }
    });
    if (els.herPhoto) {
      els.herPhoto.alt = `A photo of ${birthdayConfig.herName}`;
    }
    buildProgress();
    buildSpecialCards();
    buildNoticeCards();
    buildWishStars();
    updateDayBadge();
    setupCountdown();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Progress ---------- */

  function buildProgress() {
    if (!els.progress) return;
    els.progress.innerHTML = "";
    for (let i = 1; i <= TOTAL; i++) {
      const dot = document.createElement("span");
      dot.className = "progress-dot";
      dot.setAttribute("aria-hidden", "true");
      dot.dataset.scene = String(i);
      els.progress.appendChild(dot);
    }
  }

  function updateProgress(n) {
    if (!els.progress) return;
    if (n >= 2) els.progress.hidden = false;
    els.progress.querySelectorAll(".progress-dot").forEach((dot) => {
      const s = Number(dot.dataset.scene);
      dot.classList.toggle("is-done", s < n);
      dot.classList.toggle("is-current", s === n);
    });
  }

  /* ---------- Day badge + countdown ---------- */

  function getBirthdayDateThisYear() {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      birthdayConfig.birthdayMonth - 1,
      birthdayConfig.birthdayDay,
      0,
      0,
      0,
      0
    );
  }

  function updateDayBadge() {
    if (!els.dayBadge) return;
    const now = new Date();
    const y = now.getFullYear();
    const bday = new Date(y, birthdayConfig.birthdayMonth - 1, birthdayConfig.birthdayDay);
    const today = new Date(y, now.getMonth(), now.getDate());
    const diff = Math.round((bday - today) / 86400000);

    let text = "";
    if (diff === 0) text = "It's your day ✦";
    else if (diff > 0 && diff <= 30) text = `${diff} day${diff === 1 ? "" : "s"} until your birthday`;
    else if (diff < 0 && diff >= -7) text = "Birthday week magic ✦";
    else text = birthdayConfig.birthdayDate;

    els.dayBadge.textContent = text;
    els.dayBadge.hidden = false;
  }

  function setupCountdown() {
    if (!els.countdownBlock) return;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const bday = getBirthdayDateThisYear();
    const diffDays = Math.round((bday - today) / 86400000);

    els.countdownBlock.hidden = false;

    if (diffDays === 0) {
      if (els.countdownGrid) els.countdownGrid.hidden = true;
      if (els.countdownLabel) els.countdownLabel.hidden = true;
      if (els.countdownStatic) {
        els.countdownStatic.hidden = false;
        els.countdownStatic.textContent = "Today is your day. 🎂❤️";
      }
      return;
    }

    if (diffDays < 0) {
      if (els.countdownGrid) els.countdownGrid.hidden = true;
      if (els.countdownLabel) els.countdownLabel.hidden = true;
      if (els.countdownStatic) {
        els.countdownStatic.hidden = false;
        els.countdownStatic.textContent = "Your special day was worth celebrating. ❤️";
      }
      return;
    }

    if (els.countdownGrid) els.countdownGrid.hidden = false;
    if (els.countdownLabel) {
      els.countdownLabel.hidden = false;
      els.countdownLabel.textContent = "Something special is coming...";
    }
    if (els.countdownStatic) els.countdownStatic.hidden = true;
    tickCountdown();
    if (state.countdownTimer) clearInterval(state.countdownTimer);
    state.countdownTimer = setInterval(tickCountdown, 1000);
  }

  function tickCountdown() {
    const target = getBirthdayDateThisYear().getTime();
    const now = Date.now();
    let left = Math.max(0, target - now);
    const days = Math.floor(left / 86400000);
    left %= 86400000;
    const hours = Math.floor(left / 3600000);
    left %= 3600000;
    const mins = Math.floor(left / 60000);
    left %= 60000;
    const secs = Math.floor(left / 1000);

    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(v);
    };
    set("cd-days", days);
    set("cd-hours", hours);
    set("cd-mins", mins);
    set("cd-secs", secs);
  }

  /* ---------- Special cards ---------- */

  function updateCardsProgress() {
    const total = birthdayConfig.specialThings.length;
    if (els.cardsProgress) {
      els.cardsProgress.textContent = `Tap each one to open · ${state.cardsOpened}/${total}`;
    }
    if (state.cardsOpened >= total) {
      if (els.cardsComplete) els.cardsComplete.hidden = false;
      if (els.btnAfterCards) els.btnAfterCards.disabled = false;
      if (!prefersReducedMotion) spawnHearts(scaledCount(8));
    }
  }

  function buildSpecialCards() {
    if (!els.specialCards) return;
    els.specialCards.innerHTML = "";
    state.cardsOpened = 0;

    birthdayConfig.specialThings.forEach((item, index) => {
      const num = String(index + 1).padStart(2, "0");
      const card = document.createElement("div");
      card.className = "special-card";
      card.setAttribute("role", "listitem");

      const header = document.createElement("button");
      header.type = "button";
      header.className = "special-card-header";
      header.setAttribute("aria-expanded", "false");
      header.setAttribute("aria-controls", `special-body-${index}`);
      header.innerHTML = `
        <span class="card-num">${num}</span>
        <span class="card-label">${escapeHtml(item.title)}</span>
        <span class="card-chevron" aria-hidden="true">›</span>
      `;

      const body = document.createElement("div");
      body.id = `special-body-${index}`;
      body.className = "special-card-body";
      body.textContent = item.text;

      header.addEventListener("click", (e) => {
        if (card.classList.contains("is-open")) return;
        card.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
        state.cardsOpened += 1;
        updateCardsProgress();
        burstAt(e.clientX, e.clientY, scaledCount(5));
      });

      card.appendChild(header);
      card.appendChild(body);
      els.specialCards.appendChild(card);
    });

    updateCardsProgress();
    if (els.btnAfterCards) els.btnAfterCards.disabled = true;
    if (els.cardsComplete) els.cardsComplete.hidden = true;
  }

  /* ---------- Notice flip cards ---------- */

  function buildNoticeCards() {
    if (!els.noticeCards) return;
    els.noticeCards.innerHTML = "";
    state.noticeOpened = 0;
    if (els.btnAfterNotice) els.btnAfterNotice.disabled = true;

    (birthdayConfig.noticeCards || []).forEach((item, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "notice-card";
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-expanded", "false");
      card.setAttribute("aria-label", `Reveal: ${item.title}`);

      const prompt = document.createElement("span");
      prompt.className = "notice-prompt";
      prompt.textContent = "Tap to reveal ✨";

      const content = document.createElement("span");
      content.className = "notice-content";
      content.hidden = true;

      const title = document.createElement("span");
      title.className = "notice-title";
      title.textContent = item.title;

      const text = document.createElement("span");
      text.className = "notice-text";
      text.textContent = item.text;

      content.appendChild(title);
      content.appendChild(text);
      card.appendChild(prompt);
      card.appendChild(content);

      card.addEventListener("click", (e) => {
        if (card.classList.contains("is-open")) return;
        card.classList.add("is-open");
        card.setAttribute("aria-expanded", "true");
        prompt.hidden = true;
        content.hidden = false;
        state.noticeOpened += 1;
        burstAt(e.clientX, e.clientY, scaledCount(6));
        if (!prefersReducedMotion) spawnHearts(scaledCount(2));
        if (state.noticeOpened >= (birthdayConfig.noticeCards || []).length) {
          if (els.btnAfterNotice) els.btnAfterNotice.disabled = false;
        }
      });

      els.noticeCards.appendChild(card);
    });
  }

  /* ---------- Wish stars ---------- */

  function buildWishStars() {
    if (!els.wishSky) return;
    els.wishSky.innerHTML = "";
    state.wishesCollected = 0;
    state.fortuneOpened = false;
    state.sparklerLit = false;
    if (els.wishReveal) els.wishReveal.textContent = "";
    if (els.btnAfterWishes) els.btnAfterWishes.hidden = true;
    if (els.fortuneStage) els.fortuneStage.hidden = true;
    if (els.sparklerStage) els.sparklerStage.hidden = true;
    if (els.btnFortune) els.btnFortune.classList.remove("is-open");
    if (els.fortuneText) {
      els.fortuneText.hidden = true;
      els.fortuneText.textContent = "";
    }
    const fortuneFront =
      els.btnFortune && els.btnFortune.querySelector(".fortune-front");
    if (fortuneFront) fortuneFront.hidden = false;
    if (els.btnSparkler) els.btnSparkler.classList.remove("is-lit");
    if (els.sparklerEmbers) els.sparklerEmbers.innerHTML = "";
    if (els.sparklerMessage) {
      els.sparklerMessage.hidden = true;
      els.sparklerMessage.textContent = "";
    }

    const positions = [
      { left: "12%", top: "18%" },
      { left: "68%", top: "12%" },
      { left: "40%", top: "38%" },
      { left: "78%", top: "48%" },
      { left: "22%", top: "58%" },
    ];

    birthdayConfig.wishes.forEach((wish, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "wish-star";
      btn.setAttribute("role", "listitem");
      btn.setAttribute("aria-label", `Wish ${index + 1}`);
      btn.style.left = positions[index % positions.length].left;
      btn.style.top = positions[index % positions.length].top;
      btn.innerHTML = `<span aria-hidden="true">✦</span>`;

      btn.addEventListener("click", (e) => {
        if (btn.classList.contains("is-collected")) return;
        btn.classList.add("is-collected");
        state.wishesCollected += 1;
        if (els.wishReveal) {
          els.wishReveal.textContent = wish;
          els.wishReveal.classList.remove("pop");
          void els.wishReveal.offsetWidth;
          els.wishReveal.classList.add("pop");
        }
        burstAt(e.clientX, e.clientY, scaledCount(4));
        if (state.wishesCollected >= birthdayConfig.wishes.length) {
          if (els.wishReveal) {
            els.wishReveal.textContent = "All wishes collected. They're yours now.";
          }
          later(() => showFortuneStage(), prefersReducedMotion ? 80 : 600);
        }
      });

      els.wishSky.appendChild(btn);
    });
  }

  /* ---------- Starfield ---------- */

  function initStarfield() {
    const canvas = els.starfield;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    let shooting = null;
    let w = 0;
    let h = 0;
    let brightBoost = 1;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const density = isLowPower ? 14000 : 9000;
      const count = Math.min(isLowPower ? 70 : 140, Math.floor((w * h) / density));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
        s: Math.random() * 0.015 + 0.004,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function spawnShooting() {
      if (prefersReducedMotion) return;
      shooting = {
        x: Math.random() * w * 0.7,
        y: Math.random() * h * 0.35,
        len: 80 + Math.random() * 60,
        speed: 10 + Math.random() * 6,
        life: 0,
        max: 28,
      };
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (const star of stars) {
        const twinkle =
          0.35 + 0.65 * Math.abs(Math.sin(t * star.s + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * brightBoost, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 240, 250, ${twinkle * star.a * brightBoost})`;
        ctx.fill();
      }

      if (shooting) {
        shooting.life += 1;
        shooting.x += shooting.speed;
        shooting.y += shooting.speed * 0.45;
        const alpha = 1 - shooting.life / shooting.max;
        const grad = ctx.createLinearGradient(
          shooting.x,
          shooting.y,
          shooting.x - shooting.len,
          shooting.y - shooting.len * 0.45
        );
        grad.addColorStop(0, `rgba(255, 230, 245, ${alpha})`);
        grad.addColorStop(1, "rgba(255, 230, 245, 0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shooting.x, shooting.y);
        ctx.lineTo(shooting.x - shooting.len, shooting.y - shooting.len * 0.45);
        ctx.stroke();
        if (shooting.life >= shooting.max) shooting = null;
      }

      if (!prefersReducedMotion) {
        requestAnimationFrame(draw);
      }
    }

    resize();
    draw(0);
    window.addEventListener("resize", () => {
      resize();
      if (prefersReducedMotion) draw(0);
    });

    window.__boostStars = (on) => {
      brightBoost = on ? 1.55 : 1;
      if (prefersReducedMotion) draw(0);
    };

    window.__shootStar = spawnShooting;

    if (!prefersReducedMotion && els.fxLayer) {
      const ambient = isLowPower ? 6 : 12;
      for (let i = 0; i < ambient; i++) {
        const p = document.createElement("span");
        p.className = "fx-particle";
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        p.style.animationDuration = `${4 + Math.random() * 4}s`;
        els.fxLayer.appendChild(p);
      }
    }

    if (!prefersReducedMotion) {
      state.shootTimer = setInterval(() => {
        if (Math.random() > 0.45) spawnShooting();
      }, 4200);
    }
  }

  /* ---------- FX ---------- */

  function spawnHearts(count) {
    if (!els.fxLayer || prefersReducedMotion) return;
    for (let i = 0; i < count; i++) {
      const h = document.createElement("span");
      h.className = "fx-heart";
      h.textContent = Math.random() > 0.5 ? "♥" : "♡";
      h.style.left = `${10 + Math.random() * 80}%`;
      h.style.bottom = `${-5 + Math.random() * 15}%`;
      h.style.fontSize = `${0.7 + Math.random() * 0.7}rem`;
      h.style.animationDuration = `${3.5 + Math.random() * 2}s`;
      h.style.animationDelay = `${Math.random() * 0.4}s`;
      els.fxLayer.appendChild(h);
      state.fxTimers.push(setTimeout(() => h.remove(), 5500));
    }
  }

  function spawnConfetti(count) {
    if (!els.fxLayer || prefersReducedMotion) return;
    const colors = ["#f2a7c3", "#e8c98a", "#c4a8e8", "#fff", "#e88ab0"];
    for (let i = 0; i < count; i++) {
      const c = document.createElement("span");
      c.className = "fx-confetti";
      c.style.left = `${Math.random() * 100}%`;
      c.style.top = `${-5 + Math.random() * 20}%`;
      c.style.background = colors[i % colors.length];
      c.style.animationDelay = `${Math.random() * 0.35}s`;
      c.style.animationDuration = `${2.2 + Math.random() * 1.2}s`;
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      els.fxLayer.appendChild(c);
      state.fxTimers.push(setTimeout(() => c.remove(), 4000));
    }
  }

  function spawnBalloons(count) {
    if (!els.balloonLayer || prefersReducedMotion) return;
    const hues = ["#e8a0b8", "#c4a8e8", "#e8c98a", "#f2c4d8"];
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      b.className = "fx-balloon";
      b.style.left = `${8 + Math.random() * 84}%`;
      b.style.background = hues[i % hues.length];
      b.style.animationDuration = `${5 + Math.random() * 3}s`;
      b.style.animationDelay = `${Math.random() * 0.8}s`;
      els.balloonLayer.appendChild(b);
      state.fxTimers.push(setTimeout(() => b.remove(), 9000));
    }
  }

  function burstAt(x, y, count) {
    if (prefersReducedMotion || !els.fxLayer) return;
    const n = Math.min(count || 6, isLowPower ? 8 : 12);
    const symbols = ["♥", "♡", "✦", "·"];
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "btn-burst-particle";
      p.textContent = symbols[i % symbols.length];
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.4;
      const dist = 18 + Math.random() * 28;
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      p.style.setProperty("--dy", `${Math.sin(angle) * dist - 10}px`);
      els.fxLayer.appendChild(p);
      state.fxTimers.push(setTimeout(() => p.remove(), 900));
    }
  }

  function burstAroundButton(btn) {
    if (!btn || prefersReducedMotion) return;
    const r = btn.getBoundingClientRect();
    burstAt(r.left + r.width / 2, r.top + r.height / 2, scaledCount(7));
  }

  function clearFxTimers() {
    state.fxTimers.forEach(clearTimeout);
    state.fxTimers = [];
    if (els.fxLayer) {
      els.fxLayer
        .querySelectorAll(".fx-heart, .fx-confetti, .btn-burst-particle, .touch-burst")
        .forEach((n) => n.remove());
    }
    if (els.balloonLayer) els.balloonLayer.innerHTML = "";
    if (els.cursorTrail) els.cursorTrail.innerHTML = "";
  }

  /* ---------- Cursor / touch ---------- */

  function setupPointerFx() {
    if (prefersReducedMotion) return;

    let lastTrail = 0;
    if (!isCoarse) {
      document.addEventListener(
        "pointermove",
        (e) => {
          if (e.pointerType === "touch") return;
          const now = performance.now();
          if (now - lastTrail < 40) return;
          lastTrail = now;
          if (!els.cursorTrail) return;
          if (els.cursorTrail.childElementCount > MAX_TRAIL) {
            els.cursorTrail.firstChild && els.cursorTrail.firstChild.remove();
          }
          const d = document.createElement("span");
          d.className = "trail-dot";
          d.style.left = `${e.clientX}px`;
          d.style.top = `${e.clientY}px`;
          els.cursorTrail.appendChild(d);
          state.fxTimers.push(setTimeout(() => d.remove(), 750));
        },
        { passive: true }
      );
    }

    document.addEventListener(
      "pointerdown",
      (e) => {
        if (!isCoarse && e.pointerType !== "touch") return;
        if (!state.introDone) return;
        if (e.target.closest("button, a, input, .special-card, .wish-star, .gift-box, .notice-card, .envelope, .logo-egg")) {
          return;
        }
        if (!els.fxLayer) return;
        const symbols = ["♥", "♡", "✦"];
        const n = scaledCount(5);
        for (let i = 0; i < n; i++) {
          const p = document.createElement("span");
          p.className = "touch-burst";
          p.textContent = symbols[i % symbols.length];
          const angle = (Math.PI * 2 * i) / n;
          const dist = 16 + Math.random() * 22;
          p.style.left = `${e.clientX}px`;
          p.style.top = `${e.clientY}px`;
          p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
          p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
          els.fxLayer.appendChild(p);
          state.fxTimers.push(setTimeout(() => p.remove(), 900));
        }
      },
      { passive: true }
    );
  }

  /* ---------- Music (Happy Birthday synth + optional MP3) ---------- */

  const NOTE_FREQ = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.0,
    A4: 440.0,
    Bb4: 466.16,
    C5: 523.25,
  };

  /* Classic Happy Birthday melody — public domain */
  const HB_NOTES = [
    ["C4", 0.75],
    ["C4", 0.25],
    ["D4", 1],
    ["C4", 1],
    ["F4", 1],
    ["E4", 2],
    ["C4", 0.75],
    ["C4", 0.25],
    ["D4", 1],
    ["C4", 1],
    ["G4", 1],
    ["F4", 2],
    ["C4", 0.75],
    ["C4", 0.25],
    ["C5", 1],
    ["A4", 1],
    ["F4", 1],
    ["E4", 1],
    ["D4", 2],
    ["Bb4", 0.75],
    ["Bb4", 0.25],
    ["A4", 1],
    ["F4", 1],
    ["G4", 1],
    ["F4", 2.5],
  ];

  const BEAT_MS = 520;

  function getLyricLines() {
    const name = birthdayConfig.herName || "you";
    return [
      { at: 0, text: "Happy birthday to you" },
      { at: 6, text: "Happy birthday to you" },
      { at: 12, text: `Happy birthday dear ${name}` },
      { at: 19, text: "Happy birthday to you" },
    ];
  }

  function ensureAudioCtx() {
    if (state.audioCtx) return state.audioCtx;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    state.audioCtx = new Ctx();
    state.masterGain = state.audioCtx.createGain();
    state.masterGain.gain.value = 0;
    state.masterGain.connect(state.audioCtx.destination);
    return state.audioCtx;
  }

  function scheduleNote(freq, start, dur, gain = 0.18) {
    const ctx = state.audioCtx;
    const master = state.masterGain;
    if (!ctx || !master || !freq) return;

    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const g = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc2.type = "sine";
    osc.frequency.value = freq;
    osc2.frequency.value = freq * 2;
    filter.type = "lowpass";
    filter.frequency.value = 2400;

    const attack = Math.min(0.04, dur * 0.15);
    const release = Math.min(0.22, dur * 0.35);
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(gain, start + attack);
    g.gain.exponentialRampToValueAtTime(gain * 0.55, start + dur * 0.55);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur - 0.001);

    osc.connect(filter);
    osc2.connect(g);
    filter.connect(g);
    g.connect(master);

    const soft = ctx.createGain();
    soft.gain.value = 0.12;
    osc2.connect(soft);
    soft.connect(master);

    osc.start(start);
    osc2.start(start);
    osc.stop(start + dur + 0.05);
    osc2.stop(start + dur + 0.05);
  }

  function songDurationSec() {
    const beats = HB_NOTES.reduce((s, n) => s + n[1], 0);
    return (beats * BEAT_MS) / 1000;
  }

  function playSynthSong(celebrate = false) {
    const ctx = ensureAudioCtx();
    if (!ctx || !state.masterGain) return false;

    if (ctx.state === "suspended") ctx.resume();

    stopSynthSong(false);

    const now = ctx.currentTime + 0.08;
    let t = now;
    const volume = celebrate ? 0.7 : 0.48;

    state.masterGain.gain.cancelScheduledValues(ctx.currentTime);
    state.masterGain.gain.setValueAtTime(
      Math.max(state.masterGain.gain.value, 0.001),
      ctx.currentTime
    );
    state.masterGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.6);

    HB_NOTES.forEach(([note, beats]) => {
      const dur = (beats * BEAT_MS) / 1000;
      scheduleNote(NOTE_FREQ[note], t, dur * 0.92, celebrate ? 0.22 : 0.16);
      t += dur;
    });

    state.songStartTime = performance.now();
    startLyrics();

    const totalMs = songDurationSec() * 1000 + 400;
    state.songTimer = setTimeout(() => {
      if (!state.musicPlaying || state.musicMode !== "synth") return;
      hideLyrics();
      state.songLoopTimer = setTimeout(() => {
        if (state.musicPlaying && state.musicMode === "synth") {
          playSynthSong(false);
        }
      }, celebrate ? 900 : 1600);
    }, totalMs);

    return true;
  }

  function stopSynthSong(fade = true) {
    if (state.songTimer) {
      clearTimeout(state.songTimer);
      state.songTimer = null;
    }
    if (state.songLoopTimer) {
      clearTimeout(state.songLoopTimer);
      state.songLoopTimer = null;
    }
    hideLyrics();
    if (state.audioCtx && state.masterGain) {
      const ctx = state.audioCtx;
      const g = state.masterGain.gain;
      g.cancelScheduledValues(ctx.currentTime);
      if (fade) {
        g.setValueAtTime(Math.max(g.value, 0.001), ctx.currentTime);
        g.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
      } else {
        g.setValueAtTime(0.0001, ctx.currentTime);
      }
    }
  }

  function startLyrics() {
    hideLyrics();
    if (!els.lyricsBar || !els.lyricsLine || prefersReducedMotion) return;
    const lines = getLyricLines();
    els.lyricsBar.hidden = false;
    els.lyricsBar.classList.add("is-on");

    let idx = 0;
    const show = () => {
      if (idx >= lines.length || !state.musicPlaying) {
        hideLyrics();
        return;
      }
      els.lyricsLine.textContent = lines[idx].text;
      els.lyricsLine.classList.remove("is-pop");
      void els.lyricsLine.offsetWidth;
      els.lyricsLine.classList.add("is-pop");
      const nextAt = lines[idx + 1] ? lines[idx + 1].at : null;
      const curBeats = lines[idx].at;
      let waitBeats = 6;
      if (nextAt != null) waitBeats = nextAt - curBeats;
      else waitBeats = 6.5;
      idx += 1;
      state.lyricsTimer = setTimeout(show, waitBeats * BEAT_MS);
    };
    show();
  }

  function hideLyrics() {
    if (state.lyricsTimer) {
      clearTimeout(state.lyricsTimer);
      state.lyricsTimer = null;
    }
    if (els.lyricsBar) {
      els.lyricsBar.classList.remove("is-on");
      els.lyricsBar.hidden = true;
    }
    if (els.lyricsLine) els.lyricsLine.textContent = "";
  }

  function setMusicUi(playing) {
    if (!els.musicToggle) return;
    els.musicToggle.hidden = false;
    els.musicToggle.classList.toggle("is-playing", playing);
    els.musicToggle.setAttribute("aria-pressed", playing ? "true" : "false");
    if (els.musicIcon) els.musicIcon.textContent = playing ? "🔊" : "🔇";
    els.musicToggle.setAttribute(
      "aria-label",
      playing ? "Mute music" : "Play Happy Birthday song"
    );
  }

  function setupMusic() {
    state.musicAvailable = true;
    state.musicMode = birthdayConfig.useBuiltInSong !== false ? "synth" : "file";

    if (els.audio) {
      els.audio.volume = 0;
      els.audio.addEventListener("error", () => {
        if (state.musicMode === "file") {
          state.musicMode = "synth";
        }
      });
    }

    if (els.musicToggle) {
      els.musicToggle.addEventListener("click", () => {
        if (!state.musicAvailable) return;
        if (state.musicPlaying) fadeMusicOut();
        else playMusic();
      });
    }
  }

  function fadeVolume(audio, to, ms, done) {
    if (state.musicFadeTimer) clearInterval(state.musicFadeTimer);
    const from = audio.volume;
    const steps = Math.max(1, Math.floor(ms / 40));
    let i = 0;
    state.musicFadeTimer = setInterval(() => {
      i += 1;
      audio.volume = Math.min(1, Math.max(0, from + ((to - from) * i) / steps));
      if (i >= steps) {
        clearInterval(state.musicFadeTimer);
        state.musicFadeTimer = null;
        audio.volume = to;
        if (done) done();
      }
    }, 40);
  }

  function playFileMusic() {
    const audio = els.audio;
    if (!audio) {
      state.musicMode = "synth";
      return playSynthAndShow(false);
    }
    if (!audio.getAttribute("src")) {
      audio.src = birthdayConfig.musicFile;
      audio.load();
    }
    return audio
      .play()
      .then(() => {
        state.musicPlaying = true;
        state.musicReady = true;
        state.musicMode = "file";
        setMusicUi(true);
        fadeVolume(audio, 0.55, prefersReducedMotion ? 50 : 1200);
        return true;
      })
      .catch(() => {
        state.musicMode = "synth";
        return playSynthAndShow(false);
      });
  }

  function playSynthAndShow(celebrate) {
    const ok = playSynthSong(celebrate);
    if (ok) {
      state.musicPlaying = true;
      state.musicReady = true;
      state.musicMode = "synth";
      setMusicUi(true);
    } else {
      setMusicUi(false);
      els.musicToggle.hidden = true;
    }
    return ok;
  }

  function playMusic(celebrate = false) {
    if (!state.musicAvailable) return;

    if (celebrate || birthdayConfig.useBuiltInSong !== false) {
      if (els.audio && !els.audio.paused) {
        els.audio.pause();
      }
      playSynthAndShow(celebrate);
      return;
    }

    playFileMusic();
  }

  function fadeMusicOut() {
    if (state.musicMode === "synth") {
      stopSynthSong(true);
      state.musicPlaying = false;
      setMusicUi(false);
      return;
    }
    const audio = els.audio;
    if (!audio) return;
    fadeVolume(audio, 0, prefersReducedMotion ? 50 : 600, () => {
      audio.pause();
      state.musicPlaying = false;
      setMusicUi(false);
    });
  }

  function pauseMusic() {
    fadeMusicOut();
  }

  function playCelebrationSound() {
    if (!birthdayConfig.celebrationSound || !els.celebSound) return;
    try {
      els.celebSound.src = birthdayConfig.celebrationSound;
      els.celebSound.volume = 0.5;
      els.celebSound.play().catch(() => {});
    } catch (_) {
      /* ignore */
    }
  }

  /* ---------- Sparkle rain ---------- */

  function spawnSparkleRain(durationMs = 2800) {
    if (!els.sparkleRain || prefersReducedMotion) return;
    els.sparkleRain.innerHTML = "";
    els.sparkleRain.classList.add("is-on");
    const n = scaledCount(36);
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "sparkle-bit";
      s.textContent = Math.random() > 0.55 ? "✦" : "·";
      s.style.left = `${Math.random() * 100}%`;
      s.style.animationDelay = `${Math.random() * 1.2}s`;
      s.style.animationDuration = `${1.6 + Math.random() * 1.8}s`;
      s.style.fontSize = `${0.45 + Math.random() * 0.75}rem`;
      els.sparkleRain.appendChild(s);
    }
    state.fxTimers.push(
      setTimeout(() => {
        els.sparkleRain.classList.remove("is-on");
        els.sparkleRain.innerHTML = "";
      }, durationMs)
    );
  }

  /* ---------- Name constellation (dot-matrix letters — always readable) ---------- */

  const STAR_GLYPHS = {
    A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
    B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
    C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
    D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
    E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
    G: ["01111", "10000", "10000", "10111", "10001", "10001", "01111"],
    H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
    I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
    J: ["00111", "00010", "00010", "00010", "00010", "10010", "01100"],
    K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
    L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    M: ["10001", "11011", "10101", "10001", "10001", "10001", "10001"],
    N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
    O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
    Q: ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
    R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
    S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
    T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
    U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
    V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
    W: ["10001", "10001", "10001", "10001", "10101", "11011", "10001"],
    X: ["10001", "10001", "01010", "00100", "01010", "10001", "10001"],
    Y: ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
    Z: ["11111", "00001", "00010", "00100", "01000", "10000", "11111"],
    " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
  };

  function drawNameConstellation() {
    const canvas = els.constellationCanvas;
    const wrap = els.constellation;
    if (!canvas || !wrap) return;

    wrap.classList.add("is-on");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.min(wrap.clientWidth || 320, 420);
    const h = 100;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const name = (birthdayConfig.herName || "YOU")
      .toUpperCase()
      .replace(/[^A-Z ]/g, "");
    const letters = name.split("");
    if (!letters.length) return;

    const cols = 5;
    const rows = 7;
    const gap = 1;
    const letterPitch = cols + gap;
    const totalCols = letters.length * letterPitch - gap;
    const cell = Math.min(
      Math.floor((w - 24) / Math.max(totalCols, 1)),
      Math.floor((h - 20) / rows),
      12
    );
    const gridW = totalCols * cell;
    const gridH = rows * cell;
    const originX = (w - gridW) / 2 + cell / 2;
    const originY = (h - gridH) / 2 + cell / 2;

    const points = [];
    const letterGroups = [];

    letters.forEach((ch, li) => {
      const glyph = STAR_GLYPHS[ch] || STAR_GLYPHS[" "];
      const group = [];
      glyph.forEach((row, ry) => {
        for (let rx = 0; rx < cols; rx++) {
          if (row[rx] !== "1") continue;
          const p = {
            x: originX + (li * letterPitch + rx) * cell,
            y: originY + ry * cell,
            r: Math.max(1.1, cell * 0.28) + Math.random() * 0.5,
            delay: li * 120 + Math.random() * 400,
          };
          points.push(p);
          group.push(p);
        }
      });
      letterGroups.push(group);
    });

    const start = performance.now();
    const draw = (now) => {
      ctx.clearRect(0, 0, w, h);
      const elapsed = now - start;

      /* Soft constellation lines within each letter */
      letterGroups.forEach((group) => {
        for (let i = 0; i < group.length - 1; i++) {
          const a = group[i];
          const b = group[i + 1];
          const la = Math.min(1, Math.max(0, (elapsed - a.delay) / 700));
          if (la < 0.35) continue;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > cell * 2.2) continue;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(232, 201, 138, ${0.18 * la})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      });

      points.forEach((p, i) => {
        const local = Math.min(1, Math.max(0, (elapsed - p.delay) / 650));
        if (local <= 0) return;
        const twinkle = 0.55 + 0.45 * Math.sin(elapsed / 260 + i);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * local, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 228, 200, ${0.4 + 0.55 * local * twinkle})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * local * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * local})`;
        ctx.fill();
      });

      if (elapsed < 6000 && state.scene === 2) {
        requestAnimationFrame(draw);
      }
    };

    if (prefersReducedMotion) {
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 228, 200, 0.85)";
        ctx.fill();
      });
    } else {
      requestAnimationFrame(draw);
    }
  }

  /* ---------- Heart constellation (tap stars to build a heart) ---------- */

  function heartPointPositions(count) {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const t = (Math.PI * 2 * i) / count - Math.PI / 2;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        -(13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t));
      pts.push({
        left: `${50 + x * 2.15}%`,
        top: `${48 + y * 2.05}%`,
      });
    }
    return pts;
  }

  function buildHeartConstellation() {
    if (!els.heartPoints || !els.heartSky) return;
    els.heartPoints.innerHTML = "";
    state.heartBuilt = false;
    let lit = 0;
    const total = 8;
    if (els.heartSky) els.heartSky.hidden = false;
    if (els.heartUnlock) {
      els.heartUnlock.hidden = true;
      els.heartUnlock.textContent = "";
    }
    if (els.heartProgress) {
      els.heartProgress.textContent = `0 / ${total} stars lit`;
    }

    const positions = heartPointPositions(total);
    positions.forEach((pos, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "heart-star";
      btn.style.left = pos.left;
      btn.style.top = pos.top;
      btn.setAttribute("aria-label", `Heart star ${index + 1}`);
      btn.innerHTML = `<span aria-hidden="true">✦</span>`;
      btn.addEventListener("click", (e) => {
        if (btn.classList.contains("is-lit") || state.heartBuilt) return;
        btn.classList.add("is-lit");
        lit += 1;
        burstAt(e.clientX, e.clientY, scaledCount(5));
        if (els.heartProgress) {
          els.heartProgress.textContent = `${lit} / ${total} stars lit`;
        }
        if (lit >= total) completeHeartConstellation();
      });
      els.heartPoints.appendChild(btn);
    });
  }

  function completeHeartConstellation() {
    if (state.heartBuilt) return;
    state.heartBuilt = true;
    if (els.heartPoints) els.heartPoints.classList.add("is-complete");
    const msg =
      birthdayConfig.heartUnlockMessage ||
      "A whole constellation, shaped like how you make people feel. ❤️";
    if (els.heartUnlock) {
      els.heartUnlock.hidden = false;
      els.heartUnlock.textContent = msg;
    }
    if (els.heartProgress) {
      els.heartProgress.textContent = "Heart complete ✦";
    }
    spawnHearts(scaledCount(16));
    spawnSparkleRain(3200);
    spawnComplimentRain(2400);
    launchNameFireworks();
  }

  /* ---------- Name fireworks (letters burst in the sky) ---------- */

  function launchNameFireworks() {
    const layer = els.nameFireworks;
    if (!layer || prefersReducedMotion) return;
    layer.innerHTML = "";
    layer.classList.add("is-on");
    const name = (birthdayConfig.herName || "YOU").toUpperCase();
    const letters = name.replace(/[^A-Z]/g, "").slice(0, 10).split("");
    letters.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "name-fw-letter";
      span.textContent = ch;
      span.style.setProperty("--i", String(i));
      span.style.setProperty("--n", String(letters.length));
      layer.appendChild(span);
    });
    later(() => {
      layer.classList.remove("is-on");
      layer.innerHTML = "";
    }, 3200);
  }

  /* ---------- Fortune ---------- */

  function showFortuneStage() {
    if (!els.fortuneStage) {
      if (els.btnAfterWishes) els.btnAfterWishes.hidden = false;
      return;
    }
    els.fortuneStage.hidden = false;
    state.fortuneOpened = false;
    if (els.btnFortune) els.btnFortune.classList.remove("is-open");
    if (els.fortuneText) {
      els.fortuneText.hidden = true;
      els.fortuneText.textContent = "";
    }
    const front = els.btnFortune && els.btnFortune.querySelector(".fortune-front");
    if (front) front.hidden = false;
  }

  function openFortune() {
    if (state.fortuneOpened || !els.btnFortune) return;
    state.fortuneOpened = true;
    const list = birthdayConfig.fortunes || [];
    const text =
      list[Math.floor(Math.random() * list.length)] ||
      "Something wonderful is already looking for you.";
    els.btnFortune.classList.add("is-open");
    const front = els.btnFortune.querySelector(".fortune-front");
    if (front) front.hidden = true;
    if (els.fortuneText) {
      els.fortuneText.hidden = false;
      els.fortuneText.textContent = text;
    }
    spawnSparkleRain(2200);
    spawnHearts(scaledCount(6));
    later(() => showSparklerStage(), prefersReducedMotion ? 100 : 900);
  }

  function showSparklerStage() {
    if (!els.sparklerStage) {
      if (els.btnAfterWishes) els.btnAfterWishes.hidden = false;
      return;
    }
    els.sparklerStage.hidden = false;
    state.sparklerLit = false;
    if (els.btnSparkler) els.btnSparkler.classList.remove("is-lit");
    if (els.sparklerEmbers) els.sparklerEmbers.innerHTML = "";
    if (els.sparklerMessage) {
      els.sparklerMessage.hidden = true;
      els.sparklerMessage.textContent = "";
    }
  }

  function spawnSparklerEmbers(durationMs = 2600) {
    if (!els.sparklerEmbers || prefersReducedMotion) return;
    const interval = setInterval(() => {
      for (let i = 0; i < scaledCount(4); i++) {
        const ember = document.createElement("span");
        ember.className = "sparkler-ember";
        ember.style.setProperty("--dx", `${(Math.random() - 0.5) * 90}px`);
        ember.style.setProperty("--dy", `${-50 - Math.random() * 110}px`);
        els.sparklerEmbers.appendChild(ember);
        ember.addEventListener("animationend", () => ember.remove());
      }
    }, 55);
    state.fxTimers.push(setTimeout(() => clearInterval(interval), durationMs));
  }

  function lightSparkler() {
    if (state.sparklerLit || !els.btnSparkler) return;
    state.sparklerLit = true;
    els.btnSparkler.classList.add("is-lit");
    spawnSparklerEmbers(2800);
    spawnSparkleRain(3000);
    spawnHearts(scaledCount(10));
    spawnComplimentRain(2800);
    spawnBalloons(scaledCount(4));
    const msg = fillTemplate(
      birthdayConfig.sparklerMessage || "Happy Birthday. Keep glowing."
    );
    later(() => {
      if (els.sparklerMessage) {
        els.sparklerMessage.hidden = false;
        els.sparklerMessage.textContent = msg;
      }
      later(() => {
        if (els.btnAfterWishes) els.btnAfterWishes.hidden = false;
      }, prefersReducedMotion ? 100 : 800);
    }, prefersReducedMotion ? 200 : 1400);
  }

  function spawnComplimentRain(durationMs = 2600) {
    if (!els.complimentRain || prefersReducedMotion) return;
    els.complimentRain.innerHTML = "";
    els.complimentRain.classList.add("is-on");
    const words = birthdayConfig.compliments || ["Beautiful"];
    const n = scaledCount(14);
    for (let i = 0; i < n; i++) {
      const w = document.createElement("span");
      w.className = "compliment-bit";
      w.textContent = words[i % words.length];
      w.style.left = `${6 + Math.random() * 88}%`;
      w.style.animationDelay = `${Math.random() * 1.1}s`;
      w.style.animationDuration = `${2.2 + Math.random() * 2}s`;
      w.style.fontSize = `${0.75 + Math.random() * 0.55}rem`;
      els.complimentRain.appendChild(w);
    }
    state.fxTimers.push(
      setTimeout(() => {
        els.complimentRain.classList.remove("is-on");
        els.complimentRain.innerHTML = "";
      }, durationMs)
    );
  }

  function scheduleCatchStar() {
    if (!els.catchStar || prefersReducedMotion) return;
    els.catchStar.hidden = true;
    els.catchStar.classList.remove("is-flying", "is-caught");
    later(() => {
      if (state.scene !== 2) return;
      const left = 12 + Math.random() * 70;
      els.catchStar.style.left = `${left}%`;
      els.catchStar.style.top = `${12 + Math.random() * 28}%`;
      els.catchStar.hidden = false;
      els.catchStar.classList.add("is-flying");
      later(() => {
        if (!els.catchStar.classList.contains("is-caught")) {
          els.catchStar.hidden = true;
          els.catchStar.classList.remove("is-flying");
        }
      }, 4200);
    }, 1600);
  }

  function catchFallingStar() {
    if (!els.catchStar || els.catchStar.classList.contains("is-caught")) return;
    els.catchStar.classList.add("is-caught");
    els.catchStar.classList.remove("is-flying");
    spawnComplimentRain(2400);
    spawnHearts(scaledCount(8));
    spawnConfetti(scaledCount(12));
    if (els.easterToast) {
      els.easterToast.hidden = false;
      els.easterToast.textContent = "You caught a birthday star ✦";
      setTimeout(() => {
        if (els.easterToast) els.easterToast.hidden = true;
      }, 2000);
    }
    later(() => {
      els.catchStar.hidden = true;
      els.catchStar.classList.remove("is-caught");
    }, 900);
  }

  function revealPhotoSecret() {
    if (state.photoSecretShown) return;
    state.photoSecretShown = true;
    if (els.photoSecret) {
      els.photoSecret.textContent = birthdayConfig.photoSecret || "";
      els.photoSecret.hidden = false;
    }
    if (els.photoSecretHint) els.photoSecretHint.hidden = true;
    spawnHearts(scaledCount(6));
    spawnSparkleRain(1800);
  }

  /* ---------- Mic blow detection ---------- */

  function stopBlowDetection() {
    if (state.blowRaf) {
      cancelAnimationFrame(state.blowRaf);
      state.blowRaf = null;
    }
    if (state.blowStream) {
      state.blowStream.getTracks().forEach((t) => t.stop());
      state.blowStream = null;
    }
    if (els.blowMeter) els.blowMeter.hidden = true;
    if (els.blowHint) els.blowHint.hidden = true;
  }

  async function startBlowDetection() {
    stopBlowDetection();
    if (prefersReducedMotion || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      state.blowStream = stream;
      const ctx = ensureAudioCtx();
      if (!ctx) return;
      if (ctx.state === "suspended") await ctx.resume();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      let peak = 0;

      if (els.blowHint) els.blowHint.hidden = false;
      if (els.blowMeter) els.blowMeter.hidden = false;

      const tick = () => {
        if (state.candlesBlown || state.scene !== 10) {
          stopBlowDetection();
          return;
        }
        analyser.getByteFrequencyData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) sum += data[i];
        const avg = sum / data.length;
        peak = Math.max(peak * 0.92, avg);
        const level = Math.min(1, avg / 48);
        if (els.blowMeterFill) {
          els.blowMeterFill.style.transform = `scaleX(${level})`;
        }
        if (avg > 42 && peak > 38) {
          blowCandles();
          return;
        }
        state.blowRaf = requestAnimationFrame(tick);
      };
      state.blowRaf = requestAnimationFrame(tick);
    } catch (_) {
      if (els.blowHint) {
        els.blowHint.hidden = false;
        els.blowHint.textContent = "Tap below to make a wish";
      }
    }
  }

  /* ---------- Shake for magic ---------- */

  function setupShakeMagic() {
    let last = 0;
    window.addEventListener(
      "devicemotion",
      (e) => {
        if (!state.surpriseOpened || prefersReducedMotion) return;
        const a = e.accelerationIncludingGravity;
        if (!a) return;
        const mag = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
        const now = Date.now();
        if (mag > 28 && now - last > 1800) {
          last = now;
          spawnHearts(scaledCount(8));
          spawnConfetti(scaledCount(14));
          if (window.__shootStar) window.__shootStar();
          if (els.easterToast) {
            els.easterToast.hidden = false;
            els.easterToast.textContent = "Magic unlocked ✦";
            setTimeout(() => {
              if (els.easterToast) els.easterToast.hidden = true;
            }, 1600);
          }
        }
      },
      { passive: true }
    );
  }

  /* ---------- Cinematic intro ---------- */

  function runCinematicIntro() {
    if (prefersReducedMotion || !els.cinematicVeil) {
      if (els.cinematicVeil) {
        els.cinematicVeil.classList.add("is-done");
        els.cinematicVeil.style.display = "none";
      }
      finishIntro();
      return;
    }

    document.body.classList.add("is-intro-locked");
    if (els.cineName) els.cineName.textContent = birthdayConfig.herName;

    if (els.cineStars) {
      els.cineStars.innerHTML = "";
      const count = isLowPower ? 28 : 48;
      for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "cine-star";
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${Math.random() * 100}%`;
        s.style.animationDelay = `${Math.random() * 0.9}s`;
        els.cineStars.appendChild(s);
      }
    }

    const total = birthdayConfig.cinematicIntroMs || 2800;
    later(() => els.cinematicVeil.classList.add("is-stars"), 120);
    later(() => els.cinematicVeil.classList.add("is-glow"), total * 0.28);
    later(() => els.cinematicVeil.classList.add("is-name"), total * 0.45);
    later(() => els.cinematicVeil.classList.add("is-zoom"), total * 0.7);
    later(() => {
      els.cinematicVeil.classList.add("is-done");
      // Fully remove from hit-testing after fade
      setTimeout(() => {
        if (els.cinematicVeil) els.cinematicVeil.style.display = "none";
      }, 950);
      finishIntro();
    }, total);
  }

  function finishIntro() {
    document.body.classList.remove("is-intro-locked");
    state.introDone = true;
    const s1 = getSceneEl(1);
    if (s1) {
      s1.classList.add("scene-1-timing");
      revealSceneElements(s1);
    }
  }

  /* ---------- Scenes ---------- */

  function getSceneEl(n) {
    return document.getElementById(`scene-${n}`);
  }

  function revealSceneElements(sceneEl) {
    if (!sceneEl) return;
    sceneEl.querySelectorAll("[data-reveal]").forEach((node) => {
      if (!node.hidden) node.classList.add("is-visible");
    });
    sceneEl.querySelectorAll(".btn-delay").forEach((btn) => {
      btn.classList.add("is-ready");
    });
  }

  function goToScene(n) {
    const prev = getSceneEl(state.scene);
    const next = getSceneEl(n);
    if (!next) return;

    /* Block skipping past the photo unwrap */
    if (n > 4 && !state.giftUnwrapped) {
      if (state.scene === 4) return;
      n = 4;
      return goToScene(4);
    }

    if (state.typingTimer) {
      clearInterval(state.typingTimer);
      state.typingTimer = null;
    }
    state.photoTimers.forEach(clearTimeout);
    state.photoTimers = [];
    state.lastTimers.forEach(clearTimeout);
    state.lastTimers = [];
    clearSceneTimers();

    if (prev) {
      prev.classList.remove("scene-active");
      prev.hidden = true;
    }

    document.body.classList.remove("is-cake-dark", "is-wish-flash");

    next.hidden = false;
    void next.offsetWidth;
    next.classList.add("scene-active");
    state.scene = n;
    updateProgress(n);
    revealSceneElements(next);

    if (n === 2) {
      if (!prefersReducedMotion) {
        spawnHearts(scaledCount(5));
        spawnSparkleRain(3200);
        spawnComplimentRain(3000);
        if (window.__shootStar) window.__shootStar();
      }
      later(() => drawNameConstellation(), prefersReducedMotion ? 50 : 500);
      later(() => buildHeartConstellation(), prefersReducedMotion ? 200 : 1400);
      scheduleCatchStar();
    }
    if (n === 3) startTyping();
    if (n === 4) startPhotoSequence();
    if (n === 5) startSecretMoment();
    if (n === 8) {
      resetChoose();
      state.orbOpened = false;
      if (els.orbStage) els.orbStage.hidden = true;
    }
    if (n === 9) {
      state.fortuneOpened = false;
      state.sparklerLit = false;
      if (els.fortuneStage) els.fortuneStage.hidden = true;
      if (els.sparklerStage) els.sparklerStage.hidden = true;
      if (els.btnAfterWishes) els.btnAfterWishes.hidden = true;
    }
    if (n === 10) startCakeSequence();
    if (n === 11) {
      stopBlowDetection();
      resetLetter();
    }
    if (n === 12) {
      stopBlowDetection();
      startLastSequence();
    }
    if (n === 13) {
      startFlowerSequence();
    }

    requestAnimationFrame(() => {
      const focusTarget =
        next.querySelector("button:not([hidden]):not([disabled])") || next;
      try {
        focusTarget.focus({ preventScroll: true });
      } catch (_) {
        /* ignore */
      }
    });
  }

  /* ---------- Typing ---------- */

  function startTyping() {
    const el = els.typedMessage;
    const cursor = els.typeCursor;
    const btn = els.btnKeepGoing;
    if (!el) return;

    el.textContent = "";
    if (btn) btn.hidden = true;
    if (cursor) cursor.classList.remove("is-done");

    const text = birthdayConfig.personalMessage;
    let i = 0;

    if (prefersReducedMotion) {
      el.textContent = text;
      if (cursor) cursor.classList.add("is-done");
      if (btn) btn.hidden = false;
      return;
    }

    state.typingTimer = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i += 1;
      if (i >= text.length) {
        clearInterval(state.typingTimer);
        state.typingTimer = null;
        if (cursor) cursor.classList.add("is-done");
        if (btn) btn.hidden = false;
      }
    }, birthdayConfig.typeSpeed);
  }

  /* ---------- Photo + gift ---------- */

  function startPhotoSequence() {
    const line2 = els.photoLine2;
    const frame = els.photoFrame;
    const caption = els.photoCaption;
    const sub = els.photoSub;
    const btn = els.btnTheresMore;
    const gift = els.giftWrap;

    state.giftUnwrapped = false;
    [line2, frame, caption, sub, btn].forEach((n) => {
      if (n) n.hidden = true;
    });
    if (btn) {
      btn.disabled = true;
      btn.setAttribute("aria-disabled", "true");
    }
    if (els.photoSecret) {
      els.photoSecret.hidden = true;
      els.photoSecret.textContent = "";
    }
    if (els.photoSecretHint) els.photoSecretHint.hidden = true;
    if (els.photoStage) els.photoStage.hidden = true;
    if (frame) {
      frame.classList.remove("is-shown", "is-unwrapped", "has-parallax", "is-floating");
    }
    const scene4 = document.getElementById("scene-4");
    if (scene4) scene4.classList.remove("is-photo-open");
    if (els.photoLine1) els.photoLine1.hidden = false;
    if (gift) {
      gift.hidden = true;
      gift.classList.remove("is-opening");
    }
    if (els.btnUnwrap) els.btnUnwrap.classList.remove("is-opened");
    if (els.photoOrbit) els.photoOrbit.innerHTML = "";

    const delay = prefersReducedMotion ? 0 : birthdayConfig.photoSequenceDelay;

    const t1 = setTimeout(() => {
      if (line2) {
        line2.hidden = false;
        line2.classList.add("is-visible");
      }
    }, delay);

    const t2 = setTimeout(() => {
      if (gift) gift.hidden = false;
    }, delay * 2);

    state.photoTimers.push(t1, t2);
  }

  function unwrapGift() {
    if (state.giftUnwrapped) return;
    state.giftUnwrapped = true;

    if (els.btnUnwrap) els.btnUnwrap.classList.add("is-opened");
    if (els.giftWrap) els.giftWrap.classList.add("is-opening");

    const reveal = () => {
      if (els.giftWrap) els.giftWrap.hidden = true;
      if (els.photoLine1) els.photoLine1.hidden = true;
      if (els.photoLine2) els.photoLine2.hidden = true;
      const scene4 = document.getElementById("scene-4");
      if (scene4) scene4.classList.add("is-photo-open");
      if (els.photoStage) els.photoStage.hidden = false;
      showPhoto();
      setupPhotoEffects();
      if (els.photoFrame) {
        els.photoFrame.hidden = false;
        requestAnimationFrame(() => {
          els.photoFrame.classList.add("is-shown", "is-unwrapped");
        });
      }
      if (!prefersReducedMotion) {
        spawnHearts(scaledCount(8));
        spawnConfetti(scaledCount(18));
        spawnSparkleRain(2600);
        if (window.__shootStar) window.__shootStar();
      }
      setTimeout(() => {
        if (els.photoCaption) els.photoCaption.hidden = false;
        if (els.photoSub) els.photoSub.hidden = false;
        if (els.btnTheresMore) {
          els.btnTheresMore.hidden = false;
          els.btnTheresMore.disabled = false;
          els.btnTheresMore.removeAttribute("aria-disabled");
        }
        if (els.photoSecretHint && !state.photoSecretShown) {
          els.photoSecretHint.hidden = false;
        }
      }, prefersReducedMotion ? 50 : 700);
    };

    state.photoTimers.push(
      setTimeout(reveal, prefersReducedMotion ? 50 : 750)
    );
  }

  function setupPhotoEffects() {
    if (!els.photoFrame || prefersReducedMotion) return;

    if (els.photoOrbit) {
      els.photoOrbit.innerHTML = "";
      const dots = isLowPower ? 6 : 10;
      for (let i = 0; i < dots; i++) {
        const d = document.createElement("span");
        d.className = "photo-orbit-dot";
        d.style.left = `${8 + Math.random() * 84}%`;
        d.style.top = `${8 + Math.random() * 84}%`;
        d.style.animationDelay = `${Math.random() * 2}s`;
        els.photoOrbit.appendChild(d);
      }
    }

    if (isCoarse) {
      els.photoFrame.classList.add("is-floating");
      return;
    }

    els.photoFrame.classList.add("has-parallax");
    if (state.parallaxBound) return;
    state.parallaxBound = true;

    document.addEventListener(
      "pointermove",
      (e) => {
        if (state.scene !== 4 || !els.photoParallax) return;
        if (!els.photoFrame || !els.photoFrame.classList.contains("is-shown")) return;
        if (isCoarse || prefersReducedMotion) return;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * 8;
        const dy = ((e.clientY - cy) / cy) * 6;
        els.photoParallax.style.setProperty("--px", `${dx}px`);
        els.photoParallax.style.setProperty("--py", `${dy}px`);
      },
      { passive: true }
    );
  }

  function showPhoto() {
    const img = els.herPhoto;
    const fallback = els.photoFallback;
    if (!img || !fallback) return;

    const showFallback = () => {
      img.dataset.failed = "1";
      img.hidden = true;
      fallback.hidden = false;
    };

    const showImage = () => {
      img.dataset.failed = "0";
      img.hidden = false;
      fallback.hidden = true;
    };

    if (img.dataset.failed === "1") {
      showFallback();
      return;
    }

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
      return;
    }

    if (img.complete && img.naturalWidth > 0) {
      showImage();
      return;
    }

    img.onload = () => showImage();
    img.onerror = () => showFallback();

    if (!img.getAttribute("src")) {
      img.src = "assets/her-photo.jpg";
    }
  }

  /* ---------- Little secret ---------- */

  function startSecretMoment() {
    state.secretMomentDone = false;
    const scene = getSceneEl(5);
    if (scene) scene.classList.remove("is-secret-dark", "is-secret-reveal");
    if (els.secretForgot) els.secretForgot.hidden = true;
    if (els.btnLittleSecret) els.btnLittleSecret.hidden = true;
    if (els.secretReveal) els.secretReveal.hidden = true;
    if (els.secretLine2) els.secretLine2.hidden = true;
    if (els.btnAfterSecret) els.btnAfterSecret.hidden = true;

    later(() => {
      if (els.secretForgot) {
        els.secretForgot.hidden = false;
        els.secretForgot.classList.add("is-visible");
      }
    }, prefersReducedMotion ? 50 : 700);

    later(() => {
      if (els.btnLittleSecret) els.btnLittleSecret.hidden = false;
    }, prefersReducedMotion ? 100 : 1400);
  }

  function revealLittleSecret() {
    if (state.secretMomentDone) return;
    state.secretMomentDone = true;
    const scene = getSceneEl(5);
    if (els.btnLittleSecret) els.btnLittleSecret.hidden = true;
    if (els.secretForgot) els.secretForgot.hidden = true;
    document.getElementById("secret-wait") &&
      (document.getElementById("secret-wait").hidden = true);

    if (scene) scene.classList.add("is-secret-dark");

    later(() => {
      if (scene) {
        scene.classList.remove("is-secret-dark");
        scene.classList.add("is-secret-reveal");
      }
      if (els.secretReveal) els.secretReveal.hidden = false;
      if (els.secretLine1) {
        els.secretLine1.textContent = birthdayConfig.secretMomentLine1;
      }
      later(() => {
        if (els.secretLine2) {
          els.secretLine2.hidden = false;
          els.secretLine2.textContent = birthdayConfig.secretMomentLine2;
        }
        if (els.btnAfterSecret) els.btnAfterSecret.hidden = false;
        if (!prefersReducedMotion) spawnHearts(scaledCount(4));
      }, prefersReducedMotion ? 50 : 900);
    }, prefersReducedMotion ? 80 : 650);
  }

  /* ---------- Choose one ---------- */

  function resetChoose() {
    state.chooseDone = false;
    state.doorOpened = false;
    if (els.chooseStage) els.chooseStage.hidden = false;
    if (els.chooseOptions) els.chooseOptions.hidden = false;
    if (els.chooseResponse) els.chooseResponse.hidden = true;
    if (els.chooseLine2) els.chooseLine2.hidden = true;
    if (els.doorStage) els.doorStage.hidden = true;
    if (els.doorReveal) {
      els.doorReveal.hidden = true;
      els.doorReveal.textContent = "";
    }
    if (els.btnAfterDoors) els.btnAfterDoors.hidden = true;
    if (els.orbStage) els.orbStage.hidden = true;
    state.orbOpened = false;
    if (els.btnOrb) els.btnOrb.classList.remove("is-open");
    if (els.orbReveal) {
      els.orbReveal.hidden = true;
      els.orbReveal.textContent = "";
    }
    document.querySelectorAll(".mystery-door").forEach((d) => {
      d.disabled = false;
      d.classList.remove("is-open", "is-dim");
    });
  }

  function handleChoose() {
    if (state.chooseDone) return;
    state.chooseDone = true;
    if (els.chooseOptions) els.chooseOptions.hidden = true;
    if (els.chooseResponse) els.chooseResponse.hidden = false;
    if (els.chooseLine1) {
      els.chooseLine1.textContent = birthdayConfig.chooseResponse1;
    }
    later(() => {
      if (els.chooseLine2) {
        els.chooseLine2.hidden = false;
        els.chooseLine2.textContent = birthdayConfig.chooseResponse2;
      }
      if (!prefersReducedMotion) spawnHearts(scaledCount(5));
    }, prefersReducedMotion ? 50 : 800);

    later(() => showDoorStage(), prefersReducedMotion ? 500 : 2000);
  }

  function showDoorStage() {
    if (els.chooseStage) els.chooseStage.hidden = true;
    if (els.doorStage) els.doorStage.hidden = false;
    spawnSparkleRain(1800);
  }

  function openMysteryDoor(btn) {
    if (state.doorOpened || !btn) return;
    state.doorOpened = true;
    const index = Number(btn.getAttribute("data-door")) || 0;
    const list = birthdayConfig.doorSurprises || [];
    const text = list[index % list.length] || "Surprise — you're wonderful.";

    document.querySelectorAll(".mystery-door").forEach((d) => {
      d.disabled = true;
      if (d === btn) d.classList.add("is-open");
      else d.classList.add("is-dim");
    });

    if (els.doorReveal) {
      els.doorReveal.hidden = false;
      els.doorReveal.textContent = text;
    }
    spawnComplimentRain(2200);
    spawnHearts(scaledCount(8));
    spawnConfetti(scaledCount(16));
    later(() => {
      if (els.btnAfterDoors) els.btnAfterDoors.hidden = true;
      showOrbStage();
    }, prefersReducedMotion ? 80 : 700);
  }

  function showOrbStage() {
    if (!els.orbStage) {
      if (els.btnAfterDoors) els.btnAfterDoors.hidden = false;
      return;
    }
    els.orbStage.hidden = false;
    state.orbOpened = false;
    if (els.btnOrb) els.btnOrb.classList.remove("is-open");
    if (els.orbReveal) {
      els.orbReveal.hidden = true;
      els.orbReveal.textContent = "";
    }
  }

  function openMagicOrb() {
    if (state.orbOpened || !els.btnOrb) return;
    state.orbOpened = true;
    els.btnOrb.classList.add("is-open");
    const list = birthdayConfig.orbTruths || [];
    const text =
      list[Math.floor(Math.random() * list.length)] ||
      "You are easier to celebrate than you know.";
    if (els.orbReveal) {
      els.orbReveal.hidden = false;
      els.orbReveal.textContent = text;
    }
    spawnSparkleRain(2800);
    spawnHearts(scaledCount(12));
    spawnComplimentRain(2600);
    launchNameFireworks();
    later(() => {
      if (els.btnAfterDoors) els.btnAfterDoors.hidden = false;
    }, prefersReducedMotion ? 100 : 900);
  }

  /* ---------- Cake ---------- */

  function resetCake() {
    state.candlesBlown = false;
    stopBlowDetection();
    if (els.cake) els.cake.classList.remove("blown");
    if (els.cakeStage) {
      els.cakeStage.classList.remove("celebrate", "is-lit");
      els.cakeStage.hidden = true;
    }
    if (els.sky) els.sky.classList.remove("celebrate-mode");
    document.body.classList.remove("is-cake-dark", "is-wish-flash");
    if (window.__boostStars) window.__boostStars(false);
    if (els.wishLocked) els.wishLocked.hidden = true;
    if (els.wishText) els.wishText.hidden = true;
    if (els.blowHint) els.blowHint.hidden = true;
    if (els.blowMeter) els.blowMeter.hidden = true;
    if (els.hbSingAlong) els.hbSingAlong.hidden = true;
    if (els.hbBurst) {
      els.hbBurst.hidden = true;
      els.hbBurst.classList.remove("is-on");
    }
    if (els.hbMoreWrap) els.hbMoreWrap.hidden = true;
    if (els.btnBlow) {
      els.btnBlow.hidden = true;
      els.btnBlow.disabled = false;
    }
    if (els.cakeCloseEyes) els.cakeCloseEyes.hidden = true;
    if (els.cakeOpenEyes) els.cakeOpenEyes.hidden = true;
    if (els.cakeLine1) els.cakeLine1.hidden = false;
    if (els.cakeLine2) els.cakeLine2.hidden = false;
  }

  function startCakeSequence() {
    resetCake();
    const delay = prefersReducedMotion ? 80 : birthdayConfig.cakePreambleMs || 2200;

    later(() => {
      if (els.cakeLine1) els.cakeLine1.hidden = true;
      if (els.cakeLine2) els.cakeLine2.hidden = true;
      document.body.classList.add("is-cake-dark");
      if (els.cakeCloseEyes) {
        els.cakeCloseEyes.hidden = false;
        els.cakeCloseEyes.classList.add("is-visible");
      }
    }, delay * 0.35);

    later(() => {
      if (els.cakeCloseEyes) els.cakeCloseEyes.hidden = true;
      if (els.cakeOpenEyes) {
        els.cakeOpenEyes.hidden = false;
        els.cakeOpenEyes.classList.add("is-visible");
      }
    }, delay * 0.7);

    later(() => {
      document.body.classList.remove("is-cake-dark");
      if (els.cakeOpenEyes) els.cakeOpenEyes.hidden = true;
      if (els.cakeStage) {
        els.cakeStage.hidden = false;
        els.cakeStage.classList.add("is-lit");
      }
      if (els.wishText) els.wishText.hidden = false;
      if (els.btnBlow) els.btnBlow.hidden = false;
      spawnCakeParticles();
      if (!prefersReducedMotion) spawnConfetti(scaledCount(8));
      startBlowDetection();
    }, delay);
  }

  function spawnCakeParticles() {
    const layer = document.getElementById("cake-particles");
    if (!layer || prefersReducedMotion) return;
    layer.innerHTML = "";
    const n = scaledCount(8);
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      p.className = "fx-particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 3}s`;
      layer.appendChild(p);
    }
  }

  function blowCandles() {
    if (state.candlesBlown) return;
    state.candlesBlown = true;
    stopBlowDetection();

    if (els.cake) els.cake.classList.add("blown");
    if (els.cakeStage) els.cakeStage.classList.add("celebrate");
    if (els.sky) els.sky.classList.add("celebrate-mode");
    if (window.__boostStars) window.__boostStars(true);
    if (els.wishLocked) els.wishLocked.hidden = false;
    if (els.blowHint) els.blowHint.hidden = true;
    if (els.blowMeter) els.blowMeter.hidden = true;

    document.body.classList.add("is-wish-flash");
    later(() => document.body.classList.remove("is-wish-flash"), 800);

    /* Restart Happy Birthday louder for the big moment */
    playMusic(true);
    playCelebrationSound();
    spawnConfetti(scaledCount(72));
    spawnHearts(scaledCount(22));
    spawnBalloons(scaledCount(12));
    spawnSparkleRain(4500);
    launchNameFireworks();
    if (window.__shootStar) {
      window.__shootStar();
      setTimeout(() => window.__shootStar && window.__shootStar(), 500);
      setTimeout(() => window.__shootStar && window.__shootStar(), 900);
    }

    if (els.hbBurst) {
      els.hbBurst.hidden = false;
      requestAnimationFrame(() => els.hbBurst.classList.add("is-on"));
    }
    if (els.hbSingAlong) {
      els.hbSingAlong.hidden = false;
    }
    if (els.hbMoreWrap) els.hbMoreWrap.hidden = true;

    if (els.btnBlow) {
      els.btnBlow.disabled = true;
      els.btnBlow.hidden = true;
    }

    /* Show "there's still more" + continue after the celebration lands */
    const showMoreAt = prefersReducedMotion ? 600 : 2200;
    state.fxTimers.push(
      setTimeout(() => {
        if (els.hbMoreWrap) {
          els.hbMoreWrap.hidden = false;
          /* retrigger entrance animation */
          void els.hbMoreWrap.offsetWidth;
        }
        if (els.btnAfterWish) {
          try {
            els.btnAfterWish.focus({ preventScroll: true });
          } catch (_) {
            /* ignore */
          }
        }
      }, showMoreAt)
    );
  }

  function continueAfterWish() {
    if (els.hbBurst) {
      els.hbBurst.classList.remove("is-on");
      setTimeout(() => {
        if (els.hbBurst) els.hbBurst.hidden = true;
        if (els.hbMoreWrap) els.hbMoreWrap.hidden = true;
      }, 450);
    }
    goToScene(11);
  }

  /* ---------- Letter ---------- */

  function resetLetter() {
    state.letterOpened = false;
    if (els.btnOpenLetter) {
      els.btnOpenLetter.hidden = false;
      els.btnOpenLetter.classList.remove("is-open");
    }
    if (els.letterCard) els.letterCard.hidden = true;
    if (els.scene11Continue) els.scene11Continue.hidden = true;
  }

  function openLetter() {
    if (state.letterOpened) return;
    state.letterOpened = true;
    if (els.btnOpenLetter) els.btnOpenLetter.classList.add("is-open");

    later(() => {
      if (els.btnOpenLetter) els.btnOpenLetter.hidden = true;
      if (els.letterBody) {
        els.letterBody.textContent = fillTemplate(birthdayConfig.letterMessage);
      }
      if (els.letterCard) els.letterCard.hidden = false;
      if (els.letterSign) {
        const name = (birthdayConfig.yourName || "").trim();
        els.letterSign.hidden = !name;
      }
      later(() => {
        if (els.scene11Continue) els.scene11Continue.hidden = false;
      }, prefersReducedMotion ? 50 : 900);
    }, prefersReducedMotion ? 50 : 600);
  }

  /* ---------- Finale ---------- */

  function stopFinaleAnim() {
    if (state.finaleAnim) {
      cancelAnimationFrame(state.finaleAnim);
      state.finaleAnim = null;
    }
    state.fireworks = [];
    if (els.finaleCanvas) {
      const ctx = els.finaleCanvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, els.finaleCanvas.width, els.finaleCanvas.height);
    }
  }

  function resizeFinaleCanvas() {
    const canvas = els.finaleCanvas;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const w = parent ? parent.clientWidth : window.innerWidth;
    const h = Math.max(parent ? parent.clientHeight : 420, 420);
    canvas.width = Math.floor(w * (window.devicePixelRatio || 1));
    canvas.height = Math.floor(h * (window.devicePixelRatio || 1));
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    }
  }

  function heartPoint(t, scale, cx, cy) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    );
    return { x: cx + x * scale, y: cy + y * scale };
  }

  function burstFirework(cx, cy) {
    const colors = ["#f2a7c3", "#e8c98a", "#c4a8e8", "#ffffff", "#ff8eb5"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const count = scaledCount(28 + Math.floor(Math.random() * 12));
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.2;
      const speed = 1.5 + Math.random() * 3.2;
      state.fireworks.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        decay: 0.012 + Math.random() * 0.01,
        color,
        size: 1.5 + Math.random() * 2,
      });
    }
  }

  function startFinaleVisuals() {
    if (!els.finaleCanvas || prefersReducedMotion) return;
    stopFinaleAnim();
    resizeFinaleCanvas();

    const canvas = els.finaleCanvas;
    const ctx = canvas.getContext("2d");
    let t = 0;
    const sparkleCount = isLowPower ? 18 : 40;
    let sparkles = Array.from({ length: sparkleCount }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random(),
      s: 0.01 + Math.random() * 0.02,
    }));

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    burstFirework(w * 0.3, h * 0.35);
    burstFirework(w * 0.7, h * 0.28);
    setTimeout(() => burstFirework(w * 0.5, h * 0.4), 400);

    function frame() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      ctx.clearRect(0, 0, width, height);
      t += 0.02;

      ctx.save();
      for (let i = 0; i < 24; i++) {
        const p = heartPoint(t + i * 0.22, 4.2, width / 2, height * 0.38);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 167, 195, ${0.15 + (i / 24) * 0.55})`;
        ctx.fill();
      }
      ctx.restore();

      for (const s of sparkles) {
        s.a += s.s;
        const alpha = 0.25 + 0.75 * Math.abs(Math.sin(s.a * 40));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 201, 138, ${alpha * 0.7})`;
        ctx.fill();
      }

      state.fireworks = state.fireworks.filter((p) => p.life > 0);
      for (const p of state.fireworks) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life -= p.decay;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * Math.max(p.life, 0.15), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      state.finaleAnim = requestAnimationFrame(frame);
    }

    state.finaleAnim = requestAnimationFrame(frame);
    window.addEventListener("resize", resizeFinaleCanvas, { passive: true });
  }

  function setupPromises() {
    const list = birthdayConfig.yearPromises || [];
    state.promiseIndex = 0;
    if (!els.promiseDeck || !list.length) return;

    if (els.promiseDots) {
      els.promiseDots.innerHTML = list
        .map((_, i) => `<span class="promise-dot${i === 0 ? " is-active" : ""}"></span>`)
        .join("");
    }
    showPromise(0);
  }

  function showPromise(index) {
    const list = birthdayConfig.yearPromises || [];
    if (!list.length || !els.promiseText) return;
    state.promiseIndex = ((index % list.length) + list.length) % list.length;
    els.promiseText.textContent = list[state.promiseIndex];
    if (els.promiseCard) {
      els.promiseCard.classList.remove("flip");
      void els.promiseCard.offsetWidth;
      els.promiseCard.classList.add("flip");
    }
    if (els.promiseDots) {
      els.promiseDots.querySelectorAll(".promise-dot").forEach((d, i) => {
        d.classList.toggle("is-active", i === state.promiseIndex);
      });
    }
  }

  function startLastSequence() {
    state.secretUnlocked = false;
    state.finaleHeartDone = false;
    stopFinaleAnim();

    if (els.secretMessage) {
      els.secretMessage.hidden = true;
      els.secretMessage.textContent = "";
    }
    if (els.secretHeart) {
      els.secretHeart.hidden = true;
      els.secretHeart.classList.remove("is-holding", "is-done");
    }
    if (els.finaleActions) els.finaleActions.hidden = true;
    if (els.promiseDeck) els.promiseDeck.hidden = true;
    if (els.memoryLane) els.memoryLane.hidden = true;
    if (els.lanternStage) els.lanternStage.hidden = true;
    if (els.finaleName) els.finaleName.hidden = true;
    if (els.closingBlessing) els.closingBlessing.hidden = true;
    if (els.finaleHeartBtn) els.finaleHeartBtn.hidden = true;
    if (els.finaleHeartBurst) els.finaleHeartBurst.hidden = true;
    if (els.finaleAurora) els.finaleAurora.classList.remove("is-on");
    if (els.lanternSky) els.lanternSky.innerHTML = "";

    if (els.lastMessage) {
      els.lastMessage.hidden = true;
      els.lastMessage.textContent = "";
      const heart = document.createElement("span");
      heart.className = "pulse-heart";
      heart.setAttribute("aria-hidden", "true");
      heart.textContent = "❤️";
      els.lastMessage.append(
        document.createTextNode(birthdayConfig.lastMessage + " "),
        heart
      );
    }

    setupPromises();
    buildMemoryLane();
    startFinaleVisuals();
    if (!prefersReducedMotion) {
      spawnHearts(scaledCount(6));
      spawnConfetti(scaledCount(24));
    }

    const delay = prefersReducedMotion ? 200 : birthdayConfig.lastThingDelay;

    state.lastTimers.push(
      setTimeout(() => {
        if (els.finaleName) {
          els.finaleName.hidden = false;
          els.finaleName.classList.add("is-visible");
        }
        if (els.finaleAurora) els.finaleAurora.classList.add("is-on");
      }, delay * 0.4)
    );

    state.lastTimers.push(
      setTimeout(() => {
        if (els.lastMessage) {
          els.lastMessage.hidden = false;
          els.lastMessage.classList.add("is-visible");
        }
        if (els.finaleHeartBtn) els.finaleHeartBtn.hidden = false;
        if (!prefersReducedMotion) spawnHearts(scaledCount(4));
      }, delay)
    );

    state.lastTimers.push(
      setTimeout(() => {
        if (els.promiseDeck) els.promiseDeck.hidden = false;
        if (els.memoryLane) els.memoryLane.hidden = false;
        if (els.lanternStage) els.lanternStage.hidden = false;
        if (els.secretHeart) els.secretHeart.hidden = false;
        if (els.closingBlessing) {
          els.closingBlessing.textContent = birthdayConfig.closingBlessing || "";
          els.closingBlessing.hidden = !birthdayConfig.closingBlessing;
        }
        if (els.finaleActions) els.finaleActions.hidden = false;
      }, delay + (prefersReducedMotion ? 100 : 1000))
    );
  }

  function expandFinaleHeart() {
    if (state.finaleHeartDone) return;
    state.finaleHeartDone = true;
    if (els.finaleHeartBtn) {
      const r = els.finaleHeartBtn.getBoundingClientRect();
      burstAt(r.left + r.width / 2, r.top + r.height / 2, scaledCount(14));
      els.finaleHeartBtn.hidden = true;
    }
    spawnHearts(scaledCount(16));
    spawnSparkleRain(2800);
    spawnBalloons(scaledCount(5));
    releaseLantern();
    if (els.finaleHeartBurst) {
      els.finaleHeartBurst.hidden = false;
      if (els.finaleSign) {
        const name = (birthdayConfig.yourName || "").trim();
        els.finaleSign.hidden = !name;
      }
    }
  }

  function unlockSecret() {
    if (state.secretUnlocked) return;
    state.secretUnlocked = true;
    if (els.secretHeart) els.secretHeart.classList.add("is-done");
    if (els.secretMessage) {
      els.secretMessage.textContent = birthdayConfig.secretMessage;
      els.secretMessage.hidden = false;
    }
    if (!prefersReducedMotion) {
      spawnHearts(scaledCount(12));
      if (els.finaleCanvas) {
        burstFirework(
          els.finaleCanvas.clientWidth * 0.5,
          els.finaleCanvas.clientHeight * 0.35
        );
      }
      if (window.__shootStar) window.__shootStar();
    }
  }

  function moreFireworks() {
    if (!els.finaleCanvas) return;
    const w = els.finaleCanvas.clientWidth;
    const h = els.finaleCanvas.clientHeight;
    burstFirework(w * (0.2 + Math.random() * 0.6), h * (0.2 + Math.random() * 0.35));
    burstFirework(w * (0.2 + Math.random() * 0.6), h * (0.25 + Math.random() * 0.3));
    spawnHearts(scaledCount(5));
    spawnConfetti(scaledCount(20));
    launchNameFireworks();
  }

  function buildMemoryLane() {
    if (!els.memoryTrack) return;
    els.memoryTrack.innerHTML = "";
    const moments = birthdayConfig.memoryMoments || [];
    moments.forEach((m, i) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "memory-card";
      card.setAttribute("role", "listitem");
      card.style.setProperty("--i", String(i));
      card.innerHTML = `<span class="memory-title">${m.title}</span><span class="memory-text">${m.text}</span>`;
      card.addEventListener("click", (e) => {
        card.classList.toggle("is-open");
        burstAt(e.clientX, e.clientY, scaledCount(5));
        if (!prefersReducedMotion) spawnHearts(scaledCount(2));
      });
      els.memoryTrack.appendChild(card);
    });
  }

  function releaseLantern() {
    if (!els.lanternSky) return;
    const wishes = birthdayConfig.lanternWishes || ["A wish for you ✦"];
    const text = wishes[Math.floor(Math.random() * wishes.length)];
    const lantern = document.createElement("div");
    lantern.className = "sky-lantern";
    lantern.style.left = `${18 + Math.random() * 64}%`;
    lantern.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
    lantern.style.setProperty("--dur", `${5.5 + Math.random() * 2.5}s`);
    lantern.innerHTML = `<span class="lantern-glow"></span><span class="lantern-body"></span><span class="lantern-wish">${text}</span>`;
    els.lanternSky.appendChild(lantern);
    spawnSparkleRain(1600);
    if (window.__shootStar) window.__shootStar();
    state.fxTimers.push(
      setTimeout(() => lantern.remove(), 9000)
    );
    if (els.easterToast) {
      els.easterToast.hidden = false;
      els.easterToast.textContent = "Your lantern is rising ✦";
      setTimeout(() => {
        if (els.easterToast) els.easterToast.hidden = true;
      }, 1800);
    }
  }

  async function shareMoment() {
    const payload = {
      title: `Happy Birthday, ${birthdayConfig.herName}`,
      text: birthdayConfig.shareText,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(payload);
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        if (els.btnShare) {
          const prev = els.btnShare.innerHTML;
          els.btnShare.textContent = "Link copied ✦";
          setTimeout(() => {
            els.btnShare.innerHTML = prev;
          }, 1800);
        }
      }
    } catch (_) {
      /* cancelled */
    }
  }

  /* ---------- Easter eggs ---------- */

  function setupEasterEggs() {
    if (els.logoEgg) {
      els.logoEgg.addEventListener("click", () => {
        const now = Date.now();
        state.logoTaps = state.logoTaps.filter((t) => now - t < 1800);
        state.logoTaps.push(now);
        if (state.logoTaps.length >= 5) {
          state.logoTaps = [];
          els.logoEgg.classList.remove("is-found");
          void els.logoEgg.offsetWidth;
          els.logoEgg.classList.add("is-found");
          if (els.easterToast) {
            els.easterToast.textContent = birthdayConfig.easterEggTap;
            els.easterToast.hidden = false;
            setTimeout(() => {
              if (els.easterToast) els.easterToast.hidden = true;
            }, 2800);
          }
          if (!prefersReducedMotion) {
            spawnHearts(scaledCount(10));
            spawnConfetti(scaledCount(16));
          }
        }
      });
    }
  }

  /* ---------- Replay ---------- */

  function replay() {
    clearFxTimers();
    clearSceneTimers();
    resetCake();
    stopFinaleAnim();
    state.cardsOpened = 0;
    state.noticeOpened = 0;
    state.wishesCollected = 0;
    state.giftUnwrapped = false;
    state.secretUnlocked = false;
    state.secretMomentDone = false;
    state.letterOpened = false;
    state.chooseDone = false;
    state.finaleHeartDone = false;
    state.fortuneOpened = false;
    state.doorOpened = false;
    state.sparklerLit = false;
    state.heartBuilt = false;
    state.orbOpened = false;
    state.photoSecretShown = false;
    state.surpriseOpened = true;
    state.promiseIndex = 0;

    if (els.photoFrame) {
      els.photoFrame.classList.remove("is-shown", "is-unwrapped", "has-parallax", "is-floating");
    }
    const scene4 = document.getElementById("scene-4");
    if (scene4) scene4.classList.remove("is-photo-open");
    const scene5 = getSceneEl(5);
    if (scene5) scene5.classList.remove("is-secret-dark", "is-secret-reveal");
    if (els.lanternSky) els.lanternSky.innerHTML = "";
    if (els.finaleAurora) els.finaleAurora.classList.remove("is-on");
    if (els.memoryLane) els.memoryLane.hidden = true;
    if (els.lanternStage) els.lanternStage.hidden = true;
    if (els.photoSecret) {
      els.photoSecret.hidden = true;
      els.photoSecret.textContent = "";
    }
    if (els.photoSecretHint) els.photoSecretHint.hidden = true;
    if (els.catchStar) {
      els.catchStar.hidden = true;
      els.catchStar.classList.remove("is-flying", "is-caught");
    }
    if (els.heartSky) els.heartSky.hidden = true;
    if (els.heartPoints) {
      els.heartPoints.innerHTML = "";
      els.heartPoints.classList.remove("is-complete");
    }
    if (els.orbStage) els.orbStage.hidden = true;
    if (els.nameFireworks) {
      els.nameFireworks.classList.remove("is-on");
      els.nameFireworks.innerHTML = "";
    }
    resetChoose();

    document.querySelectorAll("[data-reveal]").forEach((n) => {
      n.classList.remove("is-visible");
    });
    document.querySelectorAll(".btn-delay").forEach((n) => {
      n.classList.remove("is-ready");
    });

    buildSpecialCards();
    buildNoticeCards();
    buildWishStars();

    if (els.typedMessage) els.typedMessage.textContent = "";
    if (els.typeCursor) els.typeCursor.classList.remove("is-done");
    if (els.btnKeepGoing) els.btnKeepGoing.hidden = true;
    if (els.secretMessage) els.secretMessage.hidden = true;

    const bouquetStage = document.getElementById("bouquet-stage");
    if (bouquetStage) {
      bouquetStage.hidden = true;
      bouquetStage.classList.remove("is-accepted");
    }
    const charSpeech = document.getElementById("char-speech-bubble");
    if (charSpeech) charSpeech.hidden = true;
    const finalWish = document.getElementById("final-hb-wish");
    if (finalWish) finalWish.hidden = true;
    const finaleActions13 = document.getElementById("finale-actions-13");
    if (finaleActions13) finaleActions13.hidden = true;
    const btnTake = document.getElementById("btn-take-bouquet");
    if (btnTake) {
      btnTake.classList.remove("is-accepted");
      btnTake.disabled = false;
      btnTake.innerHTML = 'Take the Bouquet <span aria-hidden="true">💐</span>';
    }
    const speechMsg = document.getElementById("speech-message-text");
    if (speechMsg) {
      speechMsg.textContent = '"I brought this beautiful bouquet just for you! May your days always bloom with happiness, love, and sunshine."';
    }

    for (let i = 1; i <= TOTAL; i++) {
      const s = getSceneEl(i);
      if (s) {
        s.classList.remove("scene-active");
        s.hidden = true;
      }
    }

    const s1 = getSceneEl(1);
    if (s1) {
      s1.hidden = false;
      s1.classList.add("scene-1-timing");
      void s1.offsetWidth;
      s1.classList.add("scene-active");
      state.scene = 1;
      updateProgress(1);
      revealSceneElements(s1);
    }
  }

  /* ---------- Scene 13: Animated Man Sitting & Flower Bouquet ---------- */

  let bouquetAccepted = false;

  function acceptBouquet() {
    if (bouquetAccepted) return;
    bouquetAccepted = true;

    const bouquetStage = document.getElementById("bouquet-stage");
    const btnTake = document.getElementById("btn-take-bouquet");
    const speechMsg = document.getElementById("speech-message-text");
    const finalWish = document.getElementById("final-hb-wish");
    const finaleActions13 = document.getElementById("finale-actions-13");

    if (bouquetStage) bouquetStage.classList.add("is-accepted");
    if (btnTake) {
      btnTake.classList.add("is-accepted");
      btnTake.innerHTML = 'Bouquet Received! 🥰💖';
      burstAroundButton(btnTake);
    }
    if (speechMsg) {
      speechMsg.innerHTML = `"You accepted the bouquet! 🥰 Wishing you the brightest, most magical birthday, ❤️ <span class="accent-name">${birthdayConfig.herName}</span>! Always keep that radiant smile glowing! 💖✨"`;
    }

    if (!prefersReducedMotion) {
      spawnConfetti(scaledCount(55));
      spawnHearts(scaledCount(14));
      spawnBalloons(scaledCount(8));
      spawnSparkleRain(3600);
      spawnComplimentRain(3000);
    }

    if (finalWish) {
      finalWish.hidden = false;
    }

    setTimeout(() => {
      if (finaleActions13) finaleActions13.hidden = false;
    }, 1800);
  }

  function startFlowerSequence() {
    bouquetAccepted = false;
    const bouquetStage = document.getElementById("bouquet-stage");
    const charSpeech = document.getElementById("char-speech-bubble");
    const finalWish = document.getElementById("final-hb-wish");
    const finaleActions13 = document.getElementById("finale-actions-13");
    const btnTake = document.getElementById("btn-take-bouquet");
    const speechMsg = document.getElementById("speech-message-text");

    if (bouquetStage) {
      bouquetStage.classList.remove("is-accepted");
      bouquetStage.hidden = false;
    }
    if (finalWish) finalWish.hidden = true;
    if (finaleActions13) finaleActions13.hidden = true;
    if (btnTake) {
      btnTake.classList.remove("is-accepted");
      btnTake.disabled = false;
      btnTake.innerHTML = 'Take the Bouquet <span aria-hidden="true">💐</span>';
    }
    if (speechMsg) {
      speechMsg.textContent = '"I brought this beautiful bouquet just for you! May your days always bloom with happiness, love, and sunshine."';
    }

    setTimeout(() => {
      if (charSpeech) charSpeech.hidden = false;
      if (!prefersReducedMotion) {
        spawnSparkleRain(2800);
        spawnHearts(scaledCount(4));
      }
    }, 450);

    if (btnTake && !btnTake._hasBound) {
      btnTake._hasBound = true;
      btnTake.addEventListener("click", acceptBouquet);
    }

    if (bouquetStage && !bouquetStage._hasBound) {
      bouquetStage._hasBound = true;
      bouquetStage.addEventListener("click", () => {
        if (!bouquetAccepted) acceptBouquet();
      });
    }
  }

  /* ---------- Events ---------- */

  function bindEvents() {
    document.querySelectorAll("[data-next]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.hasAttribute("data-burst")) burstAroundButton(btn);
        const next = Number(btn.getAttribute("data-next"));
        if (btn.hasAttribute("data-start-music")) {
          playMusic();
          state.surpriseOpened = true;
          spawnSparkleRain(3600);
          spawnBalloons(scaledCount(6));
          spawnComplimentRain(3200);
          if (els.tapHint && !prefersReducedMotion) {
            els.tapHint.hidden = false;
            els.tapHint.textContent = "Tap the sky for hearts · shake for magic";
            setTimeout(() => {
              if (els.tapHint) els.tapHint.hidden = true;
            }, 3800);
          }
        }
        /* Must unwrap the photo gift before leaving scene 4 */
        if (
          !Number.isNaN(next) &&
          next >= 5 &&
          !state.giftUnwrapped &&
          (state.scene === 4 || btn.id === "btn-theres-more")
        ) {
          return;
        }
        if (!Number.isNaN(next)) goToScene(next);
      });
    });

    document.querySelectorAll("[data-burst]:not([data-next])").forEach((btn) => {
      btn.addEventListener("click", () => burstAroundButton(btn));
    });

    if (els.btnUnwrap) els.btnUnwrap.addEventListener("click", unwrapGift);
    if (els.btnBlow) els.btnBlow.addEventListener("click", blowCandles);
    if (els.btnAfterWish) els.btnAfterWish.addEventListener("click", continueAfterWish);
    if (els.btnFortune) els.btnFortune.addEventListener("click", openFortune);
    if (els.btnSparkler) els.btnSparkler.addEventListener("click", lightSparkler);
    if (els.btnOrb) els.btnOrb.addEventListener("click", openMagicOrb);
    if (els.btnReplay) els.btnReplay.addEventListener("click", replay);
    if (els.btnShare) els.btnShare.addEventListener("click", shareMoment);
    if (els.btnFireworks) els.btnFireworks.addEventListener("click", moreFireworks);
    if (els.btnLantern) els.btnLantern.addEventListener("click", releaseLantern);
    if (els.catchStar) {
      els.catchStar.addEventListener("click", catchFallingStar);
    }
    if (els.btnLittleSecret) {
      els.btnLittleSecret.addEventListener("click", revealLittleSecret);
    }
    if (els.btnOpenLetter) els.btnOpenLetter.addEventListener("click", openLetter);
    if (els.finaleHeartBtn) {
      els.finaleHeartBtn.addEventListener("click", expandFinaleHeart);
    }

    document.querySelectorAll(".choose-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleChoose());
    });

    document.querySelectorAll(".mystery-door").forEach((btn) => {
      btn.addEventListener("click", () => openMysteryDoor(btn));
    });

    if (els.herPhoto) {
      let lastPhotoTap = 0;
      els.herPhoto.addEventListener("click", (e) => {
        burstAt(e.clientX, e.clientY, scaledCount(6));
        const now = Date.now();
        if (now - lastPhotoTap < 420) {
          revealPhotoSecret();
        }
        lastPhotoTap = now;
      });
    }

    if (els.promiseCard) {
      els.promiseCard.addEventListener("click", () => {
        showPromise(state.promiseIndex + 1);
        if (!prefersReducedMotion) spawnHearts(scaledCount(2));
      });
    }

    let holdTimer = null;
    const clearHold = () => {
      if (holdTimer) clearTimeout(holdTimer);
      holdTimer = null;
      if (els.secretHeart) els.secretHeart.classList.remove("is-holding");
    };
    const startHold = () => {
      if (state.secretUnlocked || !els.secretHeart) return;
      els.secretHeart.classList.add("is-holding");
      holdTimer = setTimeout(unlockSecret, prefersReducedMotion ? 200 : 1100);
    };

    if (els.secretHeart) {
      els.secretHeart.addEventListener("pointerdown", startHold);
      els.secretHeart.addEventListener("pointerup", clearHold);
      els.secretHeart.addEventListener("pointerleave", clearHold);
      els.secretHeart.addEventListener("pointercancel", clearHold);
      els.secretHeart.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          unlockSecret();
        }
      });
    }

    let lastTap = 0;
    document.addEventListener(
      "pointerdown",
      (e) => {
        if (!state.surpriseOpened || prefersReducedMotion) return;
        if (
          e.target.closest(
            "button, a, input, .special-card, .wish-star, .gift-box, .notice-card, .envelope, .logo-egg, .her-photo"
          )
        ) {
          return;
        }
        const now = Date.now();
        if (now - lastTap < 280) return;
        lastTap = now;
        spawnHearts(scaledCount(2));
        if (Math.random() > 0.7 && window.__shootStar) window.__shootStar();
      },
      { passive: true }
    );
  }

  function boot() {
    applyConfig();
    initStarfield();
    setupMusic();
    setupPointerFx();
    setupEasterEggs();
    setupShakeMagic();
    bindEvents();
    runCinematicIntro();

    if (els.herPhoto) {
      els.herPhoto.addEventListener("error", () => {
        els.herPhoto.dataset.failed = "1";
        els.herPhoto.hidden = true;
        if (els.photoFallback) els.photoFallback.hidden = false;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
