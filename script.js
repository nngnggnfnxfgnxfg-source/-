const highlightData = [
  {
    title: "Погоня по крыше",
    time: "00:12:34 — 00:12:58",
    note: "Сильный экшн + музыкальный пик"
  },
  {
    title: "Неожиданный твист",
    time: "00:41:05 — 00:41:32",
    note: "Резкая смена эмоций, идеально для хука"
  },
  {
    title: "Диалог с шуткой",
    time: "01:05:11 — 01:05:33",
    note: "Комедийный момент, высокая досматриваемость"
  }
];

const highlightsContainer = document.getElementById("highlights");
const highlightCount = document.getElementById("highlight-count");
const generateButton = document.getElementById("generate");
const demoButton = document.getElementById("demo-button");
const durationRange = document.getElementById("duration");
const durationOutput = document.getElementById("duration-output");

function renderHighlights(items) {
  highlightsContainer.innerHTML = "";
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "highlight-card";
    card.innerHTML = `
      <strong>${index + 1}. ${item.title}</strong>
      <span>${item.time}</span>
      <p>${item.note}</p>
    `;
    highlightsContainer.appendChild(card);
  });
  highlightCount.textContent = `${items.length} клипа`;
}

function handleGenerate() {
  renderHighlights(highlightData);
}

function updateDuration() {
  durationOutput.textContent = `${durationRange.value} сек`;
}

generateButton.addEventListener("click", handleGenerate);
demoButton.addEventListener("click", handleGenerate);
durationRange.addEventListener("input", updateDuration);

renderHighlights(highlightData);
updateDuration();
