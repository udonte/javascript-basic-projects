const colors = ["red", "black", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white", "rgb(255,0,0)", "rgb(255,165,0)", "rgb(255,255,0)", "rgb(0,128,0)", "rgb(0,0,255)", "rgb(138,43,226)", "rgb(255,192,203)", "rgb(165,42,42)", "rgb(0,0,0)", "rgb(255,255,255)", "magenta", "cyan", "lime", "silver", "gray", "maroon", "olive", "navy", "teal", "aqua", "fuchsia", "crimson", "indigo", "beige", "khaki", "tan", "plum", "violet", "orchid", "lavender", "darkslategray", "darkcyan", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darksalmon", "darkseagreen", "darkslateblue", "darkturquoise", "darkviolet"]

//grab hold of the document objects
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//generate a random number with the range of the length of the array
const getRandomNumber = () => {  
  return Math.floor(Math.random() * 3);
}

//Add an event to the button
btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});



