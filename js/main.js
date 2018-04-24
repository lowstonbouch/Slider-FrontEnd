let lis = document.getElementsByTagName('li');
const carousel = document.getElementById('carousel');
const carouselBig = document.getElementById('carousel-big-photo');
const photoWrapper = document.getElementById('photo-wrapper');
const infoWrapper = document.getElementById('info-wrapper');
const likeWrapper = document.getElementById('like');
const dislikeWrapper = document.getElementById('dislike');
const superLikeWrapper = document.getElementById('super-like');
const profileWrapper = document.getElementById('profile');
const bigPhotoWrapper = document.getElementById('big-photo-wrapper');

carousel.addEventListener('click', carouselIvent);
carouselBig.addEventListener('click', carouselBigIvent);
likeWrapper.addEventListener('click',handleLike);
dislikeWrapper.addEventListener('click',handleDislike);
superLikeWrapper.addEventListener('click',handleSuperLike);
profileWrapper.addEventListener('click',handleProfile);

let numberPhoto = 0;
let position = 0;
let like = false;
let dislike = false;
let superLike = false;

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

  let count = 1;

  let carousel = document.getElementById('carousel');
  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');
  let width = listElems.length* 134 - 804;

  console.log(target.id);

  if(target.id === "prev" && position < 0){
    position = position + 134;
    list.style.marginLeft = position + 'px';

  }
  if(target.id === "next" && position > -width){
    position = position - 134;
    list.style.marginLeft = position + 'px';
  }

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
}

function deleteBigPhoto(){
  const div = document.getElementById('gallery-big');
  const img = document.getElementById('big-photo');
  div.removeChild(img);
}

function carouselBigIvent(event) {
  const target = event.target;
  const image = document.getElementById('big-photo');

  if(target.id === "prev-big" && numberPhoto > 1){
    image.src = `./img/s${--numberPhoto}.jpg`;
  }
  if(target.id === "next-big" && numberPhoto < 6){
    image.src = `./img/s${++numberPhoto}.jpg`;
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
