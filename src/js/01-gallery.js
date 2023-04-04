// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// gallery

const listEl=document.querySelector('.gallery');
console.log(listEl)
function creatGalery(){

const itemEl= galleryItems.map((item)=>`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${originalg}"
    alt="${description}"
  />
</a>
</li>`)
}

