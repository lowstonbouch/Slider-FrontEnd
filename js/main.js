let lis = document.getElementsByTagName('li');
const carousel = document.getElementById('carousel');
const photoWrapper = document.getElementById('photo-wrapper');
const infoWrapper = document.getElementById('info-wrapper');
const likeWrapper = document.getElementById('like');
const dislikeWrapper = document.getElementById('dislike');
const superLikeWrapper = document.getElementById('super-like');
const profileWrapper = document.getElementById('profile');
const bigPhotoWrapper = document.getElementById('big-photo-wrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const prevBigButton = document.getElementById('prev-big');
const nextBigButton = document.getElementById('next-big');
const bigGifts = document.getElementById('big-gifts');
const countPhoto = document.getElementById('count-photo');
const whatchMap = document.getElementById('whatch-map');

carousel.addEventListener('click', carouselIvent);
likeWrapper.addEventListener('click',handleLike);
dislikeWrapper.addEventListener('click',handleDislike);
superLikeWrapper.addEventListener('click',handleSuperLike);
profileWrapper.addEventListener('click',handleProfile);
prevButton.addEventListener('click',handlePrevButton);
nextButton.addEventListener('click',handleNextButton);
prevBigButton.addEventListener('click',handlePrevBigButton);
nextBigButton.addEventListener('click',handleNextBigButton);
whatchMap.addEventListener('click',handleWhatchMap);


let numberPhoto = 0;
let position = 0;
let like = false;
let dislike = false;
let superLike = false;

function handleWhatchMap(event){
  const target = event.target;
  if(target.id = "whatch-map-button"){
    whatchMap.className = 'none';
  }
}

function handlePrevButton(){
  let listElems = carousel.querySelectorAll('li');
  let list = carousel.querySelector('ul');
  let width = listElems.length* 134 - 804;

  if(position < 0){
    position = position + 134;
    list.style.marginLeft = position + 'px';
  }
}

function handleNextBigButton(){
  carouselBigIvent('next');
}

function handlePrevBigButton(){
  carouselBigIvent('prev');
}

function handleNextButton(){
  let listElems = carousel.querySelectorAll('li');
  let list = carousel.querySelector('ul');
  let width = listElems.length* 134 - 804;

  if(position > -width){
    position = position - 134;
    list.style.marginLeft = position + 'px';
  }
}

function handleProfile(){
  renderContent();
}

function handleSuperLike(){
  superLike = !superLike;
  if(superLike){
    superLikeWrapper.className = 'super-like super-like-true';
    superLikeWrapper.classList.add('click');
  }
  else{
    superLikeWrapper.classList.remove('click');
    superLikeWrapper.className = 'super-like';
  }
}

function handleDislike(){
  dislike = !dislike;
  if(dislike){
    dislikeWrapper.className = 'dislike dislike-true';
    dislikeWrapper.classList.add('click');
  }
  else{
    dislikeWrapper.classList.remove('click');
    dislikeWrapper.className = 'dislike';
  }
}

function handleLike(){
  like = !like;
  if(like){
    likeWrapper.className = 'like heart-true';
    likeWrapper.classList.add('click');
  }
  else{
    likeWrapper.classList.remove('click');
    likeWrapper.className = 'like';
  }
}

function carouselIvent(event) {
  const target = event.target;

  if(target.id.slice(0,5) === "photo"){
    numberPhoto = target.id.slice(6,7);
    renderBigPhoto();
  }
}

function renderBigPhoto(){
  photoWrapper.className = 'none';
  infoWrapper.className = 'none';
  bigPhotoWrapper.className = "big-photo";
  addBigPhoto();
}

function renderContent(){
  photoWrapper.className = 'photo-wrapper';
  infoWrapper.className = 'info-wrapper';
  deleteBigPhoto();
  bigPhotoWrapper.className = "none";
}

function addBigPhoto(){
  const div = document.getElementById('gallery-big');
  let img = document.createElement('img');
  img.id = 'big-photo';
  img.src = `./img/s${numberPhoto}.jpg`
  img.className = "big-photo";
  div.appendChild(img);
  countPhoto.innerHTML=`${numberPhoto}/7`;
}

function deleteBigPhoto(){
  const div = document.getElementById('gallery-big');
  const img = document.getElementById('big-photo');
  if(img){
    div.removeChild(img);
    bigGifts.className = 'none';
  }

}

function carouselBigIvent(event) {
  const image = document.getElementById('big-photo');
  console.log(numberPhoto);
  console.log(event);
  if(event === "prev" && numberPhoto > 1){
    image.src = `./img/s${--numberPhoto}.jpg`;
    countPhoto.innerHTML=`${numberPhoto}/7`;
  }
  if(event === "next" && +numberPhoto === 7){
    console.log('her');
    numberPhoto = +numberPhoto + 1;
  }
  if(event === "next" && numberPhoto < 7){
    image.src = `./img/s${++numberPhoto}.jpg`;
    countPhoto.innerHTML=`${numberPhoto}/7`;
  }

  if(numberPhoto > 7){
    bigGifts.className = 'big-gifts';
  }else{
    bigGifts.className = 'none';
  }
}

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 53.902177,
      lng: 27.560991
    },
    zoom: 8
  });
}

function moveRect(e){
   
  switch(e.keyCode){

      case 32: carouselBigIvent('next'); break;   
      case 37:  // если нажата клавиша влево
        carouselBigIvent('prev');
          break;
      case 39:   // если нажата клавиша вправо
        carouselBigIvent('next');
          break;
      case 49: handleLike(); break;
      case 50: handleDislike(); break;
      case 51: handleSuperLike(); break;
  }
}

addEventListener("keydown", moveRect);