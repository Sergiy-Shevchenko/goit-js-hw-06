function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


// const refs = {
// input:document.querySelector('#control input'), 
// createBtn:document.querySelector('[data-create]'),
// destroyBtn:document.querySelector('[data-destro]'),
// container:document.querySelector('#boxes'),
// }

// const createBoxes = amount => {

//   let width = 30;
//   let height = 30;
//   for (let i = 0; i <= amount; i+=1){
//     refs.container.insertAdjacentHTML("afterbegin", "<div data-box></div>");
//     const containerBox = document.querySelector(['data-box']);
//     containerBox.style.cssText = "width: ${width += 10}px ; height: ${height += 10}px ; backgroundColor: ${getRandomHexColor()}";
//   };
// };

// function handler(event) {
//   event.createBoxes(rest.input.value)
// };

// refs.createBtn.addEventListener('click', handler);



// const destroyBoxes = () => refs.container.innerHTML = '';
// refs.createBtn.addEventListener("click", handler);
// refs.destroyBtn.addEventListener("click", destroyBoxes);


const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy"),
  boxContainer: document.getElementById("boxes"),
}
const createBoxes = amount => {
  let width = 20;
  let height = 20;
  for (let i = 1; i <= amount; i += 1){
    refs.boxContainer.insertAdjacentHTML("afterbegin", `<div data-box></div>`);
    const containers = document.querySelector("[data-box]");
    containers.style.cssText = `width: ${width += 10}px ; height: ${height += 10}px; background-color: ${getRandomHexColor()}`;
  };
    refs.boxContainer.style.cssText = 'display:flex; justify-content:flex-start;';
  };

 const handler = (event)=> {
    createBoxes(refs.input.value)
      };
    refs.createBtn.addEventListener("click", handler);
const destroyBoxes = () => refs.boxContainer.innerHTML = '';
refs.createBtn.addEventListener("click", handler);
refs.destroyBtn.addEventListener("click", destroyBoxes);

