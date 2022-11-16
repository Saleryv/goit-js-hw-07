import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
        (item) => `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                        <img
                            class="gallery__image"
                            src="${item.preview}"
                            data-source="${item.original}"
                            alt="${item.description}"
                        />
                    </a>
                    </div>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.innerHTML = addGalleryMarkup; 
galleryEl.addEventListener("click", onItemClick); 



function onItemClick(event) {
    event.preventDefault();

    if (event.target.classList.contains("gallery")) return;
    const source = event.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();

    galleryEl.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
        instance.close();
        }
    })
};

