// 갤러리 이벤트 EPC
document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.human-gallery');
  const images = document.querySelectorAll('.human-gallery-image');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(image => {
      image.classList.remove('active');
    });
    images[index].classList.add('active');
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  showImage(currentIndex);

  gallery.addEventListener('click', nextImage);
});

// 플로팅 이벤트 EPC
function updateViewportDimensions() {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
}

const floatingImage = document.getElementById('floatingImage');

let posX, posY, viewportWidth, viewportHeight;
let intervalId; // Interval ID를 저장하기 위한 변수

function initialize() {
  updateViewportDimensions();
  posX = Math.random() * (viewportWidth - floatingImage.width);
  posY = Math.random() * (viewportHeight - floatingImage.height);
  floatingImage.style.left = posX + 'px';
  floatingImage.style.top = posY + 'px';
}

let directionX = Math.random() < 0.5 ? 1 : -1;
let directionY = Math.random() < 0.5 ? 1 : -1;

const floatingSpeed = 0.5;

function updatePosition() {
  posX += floatingSpeed * directionX;
  posY += floatingSpeed * directionY;

  if (posX < 0 || posX + floatingImage.width > viewportWidth) {
    directionX *= -1;
  }
  if (posY < 0 || posY + floatingImage.height > viewportHeight) {
    directionY *= -1;
  }

  floatingImage.style.left = posX + 'px';
  floatingImage.style.top = posY + 'px';
}

initialize();
window.addEventListener('resize', updateViewportDimensions);
intervalId = setInterval(updatePosition, 10);

// 마우스 오버 시 움직임 멈춤
floatingImage.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

// 마우스 아웃 시 움직임 재개
floatingImage.addEventListener('mouseleave', () => {
  intervalId = setInterval(updatePosition, 10);
});


// 마우스 우클릭 방지
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


//상단 깜빡임
document.addEventListener("DOMContentLoaded", function() {
  const span = document.querySelector("#hint span");

  setInterval(function() {
      if (span.style.visibility === "hidden") {
          span.style.visibility = "visible";
      } else {
          span.style.visibility = "hidden";
      }
  }, 500); // 1000ms = 1초
});
