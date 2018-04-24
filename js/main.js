let lis = document.getElementsByTagName('li');
const carousel = document.getElementById('carousel');
const carouselBig = document.getElementById('carousel-big-photo');
const photoWrapper = document.getElementById('photo-wrapper');
const infoWrapper = document.getElementById('info-wrapper');
const likeWrapper = document.getElementById('like');
const likeIcon = document.getElementById('like-icon');
const bigPhotoWrapper = document.getElementById('big-photo-wrapper');
const header = document.getElementById('header');

carousel.addEventListener('click', carouselIvent);
carouselBig.addEventListener('click', carouselBigIvent);
header.addEventListener('click', headerIvent);
likeWrapper.addEventListener('click',handleLike);

let numberPhoto = 0;
let position = 0;
let like = false;

function handleLike(){
  like = !like;
  if(like){
    likeIcon.className = 'heart heart-false';
  }
  else{
    likeIcon.className = 'heart heart-true';
  }
}

function headerIvent(event){
  const target = event.target;
  console.log(target);
 
  if(target.id === "profile"){
    renderContent();
  }
}

function carouselIvent(event) {
  const target = event.target;

  let count = 1;

  let carousel = document.getElementById('carousel');
  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');
  let width = listElems.length* 134 - 804;

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
