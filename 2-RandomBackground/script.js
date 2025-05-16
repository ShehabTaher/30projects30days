const btn = document.getElementById("changeBackgroundColor")

btn.addEventListener('click', () => {
  const randomColor = getRandomColor()
  document.body.style.backgroundColor = randomColor
  btn.style.color = randomColor
})

// generate random color
// function getRandomColor() {
//   const letters = '0123456789ABCDEF'
//   let color = '#'
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)]
//   }
//   return color
// }

// generate random color another version
function getRandomColor() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}
