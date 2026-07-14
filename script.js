/*
This file builds the website automatically from website-data.js.

Usually you do not need to edit this file.
Edit website-data.js instead.
*/

function makeButton(item) {
  const className = item.style === "primary" ? "button primary" : "button secondary";
  return `<a class="${className}" href="${item.link}">${item.text}</a>`;
}

function renderMenu() {
  const desktopMenu = document.getElementById("desktop-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  const menuHTML = websiteData.menu
    .map(item => `<a class="${item.special ? "submit" : ""}" href="${item.link}">${item.text}</a>`)
    .join("");

  desktopMenu.innerHTML = menuHTML;
  mobileMenu.innerHTML = menuHTML;
}

function renderCountdowns() {
  const panel = document.getElementById("countdown-panel");
  if (!panel || !websiteData.countdowns) return;

  panel.innerHTML = websiteData.countdowns.map((timer, timerIndex) => `
    <div class="countdown-group ${timer.color === "blue" ? "blue" : "black"}" data-countdown-index="${timerIndex}">
      <h3>${timer.title}</h3>
      <div class="countdown-row">
        ${["Days", "Hours", "Minutes", "Seconds"].map(unit => `
          <div class="time-block">
            <div class="time-circle" data-unit="${unit.toLowerCase()}">00</div>
            <span>${unit}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
}

function updateCountdowns() {
  const groups = document.querySelectorAll("[data-countdown-index]");
  const now = Date.now();

  groups.forEach(group => {
    const timer = websiteData.countdowns[Number(group.dataset.countdownIndex)];
    const values = getTimeRemaining(timer.targetDate, now);

    group.querySelector('[data-unit="days"]').textContent = values.days;
    group.querySelector('[data-unit="hours"]').textContent = values.hours;
    group.querySelector('[data-unit="minutes"]').textContent = values.minutes;
    group.querySelector('[data-unit="seconds"]').textContent = values.seconds;
  });
}

function getTimeRemaining(targetDate, now = Date.now()) {
  if (!targetDate) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const target = new Date(targetDate).getTime();
  const distance = Math.max(0, target - now);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0")
  };
}

function renderPage() {
  document.title = websiteData.browserTitle;

  document.getElementById("nav-title").textContent = websiteData.workshopNavTitle;
  const workshopLabel = document.getElementById("workshop-label");
  if (workshopLabel) {
    workshopLabel.textContent = websiteData.workshopLabel;
  }
  document.getElementById("workshop-short-title").textContent = websiteData.workshopShortTitle;
  document.getElementById("workshop-subtitle").innerHTML = websiteData.workshopSubtitle;
  document.getElementById("workshop-date").textContent = websiteData.date;
  document.getElementById("workshop-location").textContent = websiteData.location;

  const heroButtons = document.getElementById("hero-buttons");
  if (heroButtons) {
    heroButtons.innerHTML = websiteData.heroButtons.map(makeButton).join("");
  }

  renderCountdowns();

  const quickFacts = document.getElementById("quick-facts");
  if (quickFacts) {
    quickFacts.innerHTML = websiteData.quickFacts
      .map(item => `
        <div class="quick-fact">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `)
      .join("");
  }

  document.getElementById("about-text").innerHTML = websiteData.aboutParagraphs
    .map(text => `<p>${text}</p>`)
    .join("");

  document.getElementById("cfp-text").innerHTML = websiteData.cfpParagraphs
    .map(text => `<p>${text}</p>`)
    .join("");

  document.getElementById("topics-list").innerHTML = `
    <div class="topic-card" style="grid-column: 1 / -1;">
      <ul class="submission-list topics-bullets">
        ${websiteData.topics.map(topic => `<li>${topic}</li>`).join("")}
      </ul>
    </div>
  `;

  document.getElementById("dates-list").innerHTML = websiteData.dates
    .map(item => `
      <div class="date-row">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");

  document.getElementById("submission-guidelines-text").innerHTML = websiteData.submissionNote;

  const submissionButton = document.getElementById("submission-button");
  submissionButton.href = websiteData.submissionLink;

  document.getElementById("program-list").innerHTML =
    websiteData.program.length
      ? websiteData.program.map(item => `
        <div class="program-card">
          <div class="program-time">${item.time}</div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      `).join("")
      : createTbdCard();

  document.getElementById("speakers-list").innerHTML =
    websiteData.speakers.length
      ? websiteData.speakers.map(person => createPersonCard(person)).join("")
      : createTbdCard();

  document.getElementById("program-committee-list").innerHTML =
    websiteData.programCommittee.length
      ? websiteData.programCommittee.map(createCommitteeCard).join("")
      : createTbdCard();

  document.getElementById("organizers-list").innerHTML = websiteData.organizers
    .map((person, index) => createOrganizerCard(person, index))
    .join("");

  const emailButton = document.getElementById("contact-email");
  emailButton.textContent = websiteData.email;
  emailButton.href = `mailto:${websiteData.email}`;

  const contactEmailText = document.getElementById("contact-email-text");
  if (contactEmailText) {
    contactEmailText.textContent = websiteData.email;
  }

  document.getElementById("footer-text").textContent = websiteData.footerText;
}

function arrangeDatesAndSubmission() {
  const datesSection = document.getElementById("dates");
  const guidelinesSection = document.getElementById("submission");
  if (!datesSection || !guidelinesSection) return;

  const datesWrap = datesSection.querySelector(".wrap");
  const datesTitle = datesSection.querySelector("h2");
  const datesCard = datesSection.querySelector(".dates-card");
  const submissionCard = guidelinesSection.querySelector(".side-card");
  const guidelinesWrap = guidelinesSection.querySelector(".wrap");

  if (datesTitle) {
    datesTitle.textContent = "Important Dates and Submission";
  }

  if (datesWrap) {
    datesWrap.classList.remove("section-grid");
  }

  let cardsGrid = datesSection.querySelector(".dates-submission-grid");
  if (!cardsGrid && datesWrap) {
    cardsGrid = document.createElement("div");
    cardsGrid.className = "dates-submission-grid";
    datesWrap.appendChild(cardsGrid);
  }

  if (datesCard && cardsGrid && !cardsGrid.contains(datesCard)) {
    cardsGrid.appendChild(datesCard);
  }

  if (submissionCard && cardsGrid && !cardsGrid.contains(submissionCard)) {
    submissionCard.id = "submission";
    cardsGrid.appendChild(submissionCard);
  }

  guidelinesSection.id = "submission-guidelines";
  guidelinesSection.classList.remove("soft-section");

  if (guidelinesWrap) {
    guidelinesWrap.classList.remove("section-grid");
  }
}

function createCommitteeCard(person) {
  return `
    <div class="committee-card">
      <h3>${person.name}</h3>
      <p>${person.affiliation}</p>
    </div>
  `;
}

function createPersonCard(person) {
  return `
    <div class="person-card">
      <div class="avatar">${person.initials}</div>
      <h3>${person.name}</h3>
      <p>${person.affiliation}</p>
    </div>
  `;
}

function createOrganizerCard(person, index) {
  const name = isPlaceholderName(person.name) ? `Organizer ${index + 1}` : person.name;
  const affiliation = person.affiliation || "TBD";
  const email = person.email || "TBD";
  const details = person.details || person.bio || "More information will be added soon.";
  const image = person.image
    ? `<img src="${person.image}" alt="${name}">`
    : `<span aria-hidden="true">${index + 1}</span>`;

  return `
    <article class="organizer-profile" tabindex="0">
      <div class="organizer-photo">${image}</div>
      <div class="organizer-info">
        <h3>${name}</h3>
        <p class="organizer-affiliation">${affiliation}</p>
        <p class="organizer-email">${email}</p>
        <p class="organizer-details">${details}</p>
      </div>
    </article>
  `;
}

function isPlaceholderName(name) {
  return /^\d+$/.test(String(name || ""));
}

function createTbdCard() {
  return `<div class="tbd-card">TBD</div>`;
}

function setupMenu() {
  const button = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

renderMenu();
renderPage();
arrangeDatesAndSubmission();
setupMenu();