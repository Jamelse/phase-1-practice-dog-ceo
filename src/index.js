console.log('%c HI', 'color: firebrick')
const images = document.querySelector('#dog-image-container');
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogBreeds = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breeds = []
dogBreeds.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function dogs(){
  return fetch(imgUrl)
  .then(resp => resp.json())
  .then(pic => {
    const pics = pic.message 
    let picsArray = createImgElement(pics) 
    renderElements(picsArray)
    })
    }
function createImgElement(imgs){
  return imgs.map((img) => {
    let i = `<img src=${img}>`
      return i;
  })
}
function renderImgs(picsArray){
  picsArray.forEach(element => {
    renderElement(element)
  })
}
function renderElements(element){
  images.innerHTML += element;
}
function renderElement(element){
  dogBreeds.innerHTML += element;
}

function getBreeds(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then (breed => {
    breeds = Object.keys(breed.message)
    const breedsLi = createLiElement(breeds);
    renderLi(breedsLi)
  })
}

function createLiElement(breeds){
  return breeds.map((breed) => {
    let li = `<li>${breed}</li>`
    return li;
  })
}

function renderLi(breedsLi){
  breedsLi.forEach(element => {
    renderElement(element)
  })
}

function handleClick(e){
if (e.target.style.color === 'red'){
  e.target.style.color = 'black';
} else {
  e.target.style.color = 'red';
}
}

function handleChange(e){
  const letter = e.target.value
  const filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
  const breedList =  createLiElement(filteredBreeds);
  dogBreeds.innerHTML = ''
  renderLi(breedList);
}
dogs();
  getBreeds();