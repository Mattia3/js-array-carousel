const items = [
  'consegna/img/01.jpg',
  'consegna/img/02.jpg',
  'consegna/img/03.jpg',
  'consegna/img/04.jpg',
  'consegna/img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



const imageContainerLeft = document.querySelector(".image-container-left");
const carosel = document.querySelector(".image-container-right");
const textImg = document.querySelector(".text-img");
let imgSelect = 0;

for (let i = 0; i < items.length; i++) {
  const urlImgCorrent = items[i];

  let op0 = "";
  if (op0 === items[i]){
    op0 = "opacity-0";
  }
  
  const tagImg =`<img class="${op0}" src="${urlImgCorrent}" alt="immagini #${i}">`;
  imageContainerLeft.innerHTML += tagImg;
  console.log("sono arrivato qua");

  carosel.innerHTML += tagImg;
  
  let titleText =`<div class="titoli${op0}"><h2>${title[i]}</h2>${text[i]}</div>`
  imageContainerLeft.innerHTML += titleText;
}

const selectedText = document.querySelectorAll(".titoli")
const selectedThumb = document.querySelectorAll(".image-container-right img") 
const selectedBigImg = document.querySelectorAll(".image-container-left img")

let singolSelectedThumb = selectedThumb[imgSelect];
let singolSelectedBigImg = selectedBigImg[imgSelect];
let singolSelectedText = selectedText[imgSelect];

singolSelectedText.classList.add("active")
singolSelectedThumb.classList.add("active")
singolSelectedBigImg.classList.add("img-big-active")

const arrowTop = document.querySelector(".arrow-top");
const arrowBottom = document.querySelector(".arrow-bottom");


arrowTop.addEventListener("click", function() {
  //Riazzero il ciclo e lo faccio tornare dall'inizio
  if(imgSelect === 0){
    imgSelect = items.length;
  }
  singolSelectedThumb.classList.remove("active");
  singolSelectedBigImg.classList.remove("img-big-active");
  singolSelectedText.classList.remove("active");
  imgSelect--;
  singolSelectedThumb = selectedThumb[imgSelect];
  singolSelectedBigImg = selectedBigImg[imgSelect];
  singolSelectedText = selectedText[imgSelect];
  singolSelectedThumb.classList.add("active");
  singolSelectedBigImg.classList.add("img-big-active");
  singolSelectedText.classList.add("active");
})

arrowBottom.addEventListener("click", function() {
  //Riazzero il ciclo e lo faccio tornare dall'inizio
  if(imgSelect === items.length -1){
    imgSelect = -1;
  }
  singolSelectedThumb.classList.remove("active");
  singolSelectedBigImg.classList.remove("img-big-active")
  singolSelectedText.classList.remove("active");
  imgSelect++;
  singolSelectedThumb = selectedThumb[imgSelect];
  singolSelectedBigImg = selectedBigImg[imgSelect];
  singolSelectedText = selectedText[imgSelect];
  singolSelectedThumb.classList.add("active")
  singolSelectedBigImg.classList.add("img-big-active")
  singolSelectedText.classList.add("active");
  
})



//titoli nascosti 
//
