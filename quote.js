const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
    "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
    "Dream big. Start small. Act now. — Robin Sharma"];

const quoteText = document.getElementById("quoteText");

// Pick and display a random quote
function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[index];
}

// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Save theme preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};