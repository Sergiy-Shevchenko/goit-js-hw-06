function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const  color = document.querySelector('.color');
const button = document.querySelector('.change-color');



button.addEventListener("click", () => {
  // console.log('click');
  // console.log(getRandomHexColor());
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor()
  });