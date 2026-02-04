const practiceSets = [
  {
    title: "Kinematics Rapid PYQ",
    classLevel: "11",
    subject: "Physics",
    mode: "PYQ",
    chapter: "Kinematics",
    questions: 25,
  },
  {
    title: "Newton's Laws Chapter Drill",
    classLevel: "11",
    subject: "Physics",
    mode: "Chapter-wise",
    chapter: "Laws of Motion",
    questions: 20,
  },
  {
    title: "Thermodynamics PYQ Mix",
    classLevel: "11",
    subject: "Physics",
    mode: "PYQ",
    chapter: "Thermodynamics",
    questions: 18,
  },
  {
    title: "Mole Concept Booster",
    classLevel: "11",
    subject: "Chemistry",
    mode: "Chapter-wise",
    chapter: "Mole Concept",
    questions: 22,
  },
  {
    title: "Chemical Bonding PYQs",
    classLevel: "11",
    subject: "Chemistry",
    mode: "PYQ",
    chapter: "Chemical Bonding",
    questions: 24,
  },
  {
    title: "Quadratic Equations Drill",
    classLevel: "11",
    subject: "Maths",
    mode: "Chapter-wise",
    chapter: "Quadratic Equations",
    questions: 20,
  },
  {
    title: "Calculus Foundation Pack",
    classLevel: "12",
    subject: "Maths",
    mode: "Chapter-wise",
    chapter: "Differentiation",
    questions: 30,
  },
  {
    title: "Integration PYQ Sprint",
    classLevel: "12",
    subject: "Maths",
    mode: "PYQ",
    chapter: "Integration",
    questions: 25,
  },
  {
    title: "Electrostatics Chapter Focus",
    classLevel: "12",
    subject: "Physics",
    mode: "Chapter-wise",
    chapter: "Electrostatics",
    questions: 26,
  },
  {
    title: "Modern Physics PYQ Set",
    classLevel: "12",
    subject: "Physics",
    mode: "PYQ",
    chapter: "Modern Physics",
    questions: 21,
  },
  {
    title: "Organic Reactions Drill",
    classLevel: "12",
    subject: "Chemistry",
    mode: "Chapter-wise",
    chapter: "Organic Reactions",
    questions: 23,
  },
  {
    title: "Electrochemistry PYQ Mix",
    classLevel: "12",
    subject: "Chemistry",
    mode: "PYQ",
    chapter: "Electrochemistry",
    questions: 19,
  },
];

const classSelect = document.getElementById("class-select");
const subjectSelect = document.getElementById("subject-select");
const modeSelect = document.getElementById("mode-select");
const searchInput = document.getElementById("search");
const cardGrid = document.getElementById("card-grid");

const renderCards = (items) => {
  cardGrid.innerHTML = "";
  if (items.length === 0) {
    cardGrid.innerHTML =
      '<div class="card"><h4>No matches found</h4><p class="meta">Try adjusting your filters.</p></div>';
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="meta">Class ${item.classLevel} • ${item.subject}</span>
      <h4>${item.title}</h4>
      <p class="meta">${item.mode} • ${item.chapter}</p>
      <p>${item.questions} questions</p>
      <button class="primary" type="button">Start Practice</button>
    `;
    cardGrid.appendChild(card);
  });
};

const applyFilters = () => {
  const classValue = classSelect.value;
  const subjectValue = subjectSelect.value;
  const modeValue = modeSelect.value;
  const searchValue = searchInput.value.toLowerCase();

  const filtered = practiceSets.filter((item) => {
    const matchesClass = classValue === "all" || item.classLevel === classValue;
    const matchesSubject = subjectValue === "all" || item.subject === subjectValue;
    const matchesMode = modeValue === "all" || item.mode === modeValue;
    const matchesSearch = item.chapter.toLowerCase().includes(searchValue);
    return matchesClass && matchesSubject && matchesMode && matchesSearch;
  });

  renderCards(filtered);
};

[classSelect, subjectSelect, modeSelect, searchInput].forEach((element) => {
  element.addEventListener("input", applyFilters);
});

renderCards(practiceSets);
