// Generate secret 3-digit code
let secretCode = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10)
];

const clueBox = document.getElementById("clueBox");
const result = document.getElementById("result");
const clueBtn = document.getElementById("clueBtn");
const submitBtn = document.getElementById("submitBtn");

// Clue templates
const clues = [
  () => `Sum of digits is ${secretCode.reduce((a, b) => a + b)}`,
  () => `First digit is ${secretCode[0] % 2 === 0 ? "even" : "odd"}`,
  () => `Second digit is ${secretCode[1] > 5 ? "greater" : "less"} than 5`,
  () => `Third digit is ${secretCode[2]}`,
  () => `Digits include: ${[...new Set(secretCode)].join(", ")}`
];

// Show random clue
clueBtn.addEventListener("click", () => {
  const randomClue = clues[Math.floor(Math.random() * clues.length)];
  clueBox.innerText = randomClue();
});

// Handle submission
submitBtn.addEventListener("click", () => {
  const d1 = parseInt(document.getElementById("digit1").value);
  const d2 = parseInt(document.getElementById("digit2").value);
  const d3 = parseInt(document.getElementById("digit3").value);

  if ([d1, d2, d3].includes(NaN)) {
    result.innerText = "Please enter all digits!";
    return;
  }

  if (d1 === secretCode[0] && d2 === secretCode[1] && d3 === secretCode[2]) {
    result.innerText = " ACCESS GRANTED";
    result.style.color = "#00ff88";
  } else {
    result.innerText = "INTRUDER DETECTED";
    result.style.color = "red";
  }
});