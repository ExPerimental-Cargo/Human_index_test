const isMobile = window.matchMedia('(max-width: 720px)').matches;

const listNumbers = document.querySelectorAll('.list-number');
const listItems = document.querySelectorAll('.list-item');
const galleries = document.querySelectorAll('.image-gallery');

if (isMobile) {
  listNumbers.forEach((number, index) => {
    const item = document.getElementById(`item-${index}`);
    const gallery = document.getElementById(`gallery-${index}`);

    number.addEventListener('click', () => {
      const listWrapperTop = document.querySelector('.list-wrapper').getBoundingClientRect().top;
      window.scrollBy({ top: listWrapperTop, behavior: 'smooth' });

      if (number.classList.contains('active')) {
        number.classList.remove('active');
        number.style.display = 'flex';
        item.style.display = 'none';
        gallery.style.display = 'none';
      } else {
        listNumbers.forEach((otherNumber, i) => {
          otherNumber.classList.remove('active');
          otherNumber.style.display = 'flex';
          document.getElementById(`gallery-${i}`).style.display = 'none';
          document.getElementById(`item-${i}`).style.display = 'none';
        });
        number.classList.add('active');
        number.style.display = 'none';
        item.style.display = 'flex';
        gallery.style.display = 'flex';
      }
    });

    item.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        item.style.display = 'none';
        gallery.style.display = 'none';
        number.style.display = 'flex';
      } else {
        item.classList.add('active');
        item.style.display = 'none';
        gallery.style.display = 'none';
        number.style.display = 'flex';
      }
    });
  });
} else {
  listNumbers.forEach((number, index) => {
    const correspondingItem = document.getElementById(`item-${index}`);
    const gallery = document.getElementById(`gallery-${index}`);
    
    number.addEventListener('mouseenter', () => {
      number.style.display = 'none';
      correspondingItem.style.display = 'flex';
    });

    correspondingItem.addEventListener('mouseleave', () => {
      if (!correspondingItem.classList.contains('active')) {
        number.style.display = 'flex';
        correspondingItem.style.display = 'none';
      }
    });

    correspondingItem.addEventListener('click', () => {
      if (correspondingItem.classList.contains('active')) {
        correspondingItem.classList.remove('active');
        correspondingItem.style.display = 'none';
        gallery.style.display = 'none';
        number.style.display = 'flex';
      } else {
        listItems.forEach((item, i) => {
          item.classList.remove('active');
          item.style.display = 'none';
          document.getElementById(`gallery-${i}`).style.display = 'none';
          document.getElementById(`number-${i}`).style.display = 'flex';
        });
        correspondingItem.classList.add('active');
        correspondingItem.style.display = 'flex';
        gallery.style.display = 'flex';
        number.style.display = 'none';
      }
    });

    number.addEventListener('click', () => {
      if (number.classList.contains('active')) {
        number.classList.remove('active');
        number.style.display = 'flex';
        correspondingItem.style.display = 'none';
        gallery.style.display = 'none';
      } else {
        listNumbers.forEach((otherNumber, i) => {
          otherNumber.classList.remove('active');
          otherNumber.style.display = 'flex';
          document.getElementById(`item-${i}`).style.display = 'none';
          document.getElementById(`gallery-${i}`).style.display = 'none';
        });
        number.classList.add('active');
        number.style.display = 'none';
        correspondingItem.style.display = 'flex';
        gallery.style.display = 'flex';
      }
    });
  });
}
