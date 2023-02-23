const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//console.log(images);

//----------------ul-----------------
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

//--------------1-variant------------
const makePictureCard = image => {
  //const liItemEl = document.createElement('li');
  liItemEl.classList.add('gallery_item');
  

  const imagesEl = document.createElement('img');
  //imagesEl.classList.add('gallery_img');
  imagesEl.src = image.url;
  imagesEl.alt = image.alt;
  

}

const elements = images.map((image) => `<li class="gallery_item"><img class="gallery_img" src="${image.url}" alt="${image.alt}"></li>`)
.join("");

galleryEl.insertAdjacentHTML('afterbegin', elements);



//----------------2-variant--------------
// const makePictureCard = image => {
// return `
// <li class="gallery_item">
// <img class="gallery_img" src="${image.url}" alt="${image.alt}">
// </li>
// ;
//  ` 
// };
// console.log(makePictureCard(images[1]));
  
// const makePictureCardRow = images.map(makePictureCard).join('');
// console.log(makePictureCardRow);

// galleryEl.insertAdjacentHTML('afterbegin', makePictureCardRow);










