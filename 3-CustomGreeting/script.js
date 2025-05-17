let name = prompt("What's your name?")

if (!name || name.trim() === "") {
  name = "Guest"
}

const greetingEl = document.getElementById("greeting")
const currentHour = new Date().getHours()

let greetingMessage = ""

if (currentHour < 12) {
  greetingMessage = "Good Morning"
} else if (currentHour < 18) {
  greetingMessage = "Good Afternoon"
} else if (currentHour < 21) {
  greetingMessage = "Good Evening"
} else {
  greetingMessage = "Good Night"
}

greetingEl.textContent = `${greetingMessage}, ${name}`

