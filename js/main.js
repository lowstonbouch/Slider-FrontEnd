let lis = document.getElementsByTagName('li');
const carousel = document.getElementById('carousel');
const carouselBig = document.getElementById('carousel-big-photo');
const photoWrapper = document.getElementById('photo-wrapper');
const infoWrapper = document.getElementById('info-wrapper');
const bigPhotoWrapper = document.getElementById('big-photo-wrapper');
const header = document.getElementById('header');

carousel.addEventListener('click', carouselIvent);
carouselBig.addEventListener('click', carouselBigIvent);
header.addEventListener('click', headerIvent);

function headerIvent(event){
  const target = event.target;
  console.log(target);
  if(target.id === "profile"){
    renderContent();
  }
}

function carouselIvent(event) {
  const target = event.target;

  for (let i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    let span = document.createElement('span');
    // обычно лучше использовать CSS-классы,
    // но этот код - для удобства разработки, так что не будем трогать стили
    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
  }

  /* конфигурация */
  let width = 120; // ширина изображения
  let count = 1; // количество изображений

  let carousel = document.getElementById('carousel');
  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');

  let position = 0; // текущий сдвиг влево

  if(target.id === "prev"){
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
  }
  if(target.id === "next"){
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  }

  if(target.id === "photo-1"){
renderBigPhoto();
  }
}

function renderBigPhoto(){
  photoWrapper.className = 'none';
  infoWrapper.className = 'none';
  bigPhotoWrapper.className = "big-photo";
}

function renderContent(){
  photoWrapper.className = 'photo-wrapper';
  infoWrapper.className = 'info-wrapper';
  bigPhotoWrapper.className = "none";
}

function carouselBigIvent(event) {
  const target = event.target;
  const image = document.getElementById('image-big');

  if(target.id === "prev-big"){
    image.className = `big-photo s1 big-photo-1`;
  }
  if(target.id === "next-big"){
    image.className = `big-photo s2 big-photo-2`;
  }
}

function initMap() {
  // Create a map object and specify the DOM element for display.
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 53.902177,
      lng: 27.560991
    },
    zoom: 8
  });
}
