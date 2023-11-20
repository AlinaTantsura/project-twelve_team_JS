// @ts-nocheck
import imgUrlAppleBook from '../img/appleBook@1x-min.png';
import imgUrlAmazon from '../img/amazon@1x-min.png';
import imgUrlAppleBook2x from '../img/appleBook@2x-min.png';
import imgUrlAmazon2x from '../img/amazon@2x-min.png';
import icons from '../img/InlineSprite.svg';
import { writeUserShoppingListToDatabase } from './sign-in';
import Swal from 'sweetalert2';

const bookList = document.querySelector('.books-list');
const noBooks = document.querySelector('.no-books');
const loader = document.querySelector('.loader-backdrop');
let localStorageKey = 'shoppingList';

const dataFromStorage = JSON.parse(localStorage.getItem(localStorageKey)) || [];
shoppingMarkup(dataFromStorage);

/*Function for card markup*/

export function shoppingMarkup(arr) {
  const newDescription = 'Description will be added sooner';

  const markup = arr
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
      }) => {
        return `
      <li class="shopping-element" data-book-id="${_id}" id="${_id}">
        <img
          src="${book_image}"
          alt="${title}"
          class="book-image"
        />
        <div class="text-content">
          <h2 class="book-title">${title}</h2>
          <p class="book-category">${list_name}</p>
          <p class="book-description">
            ${description || newDescription}
          </p>
          <div class="author-buy">
            <p class="author-name">${author}</p>
            <ul class="buy-links">
              <li class="buy-link">
                <a href="${
                  buy_links[0].url
                }" target="_blank" class="amazon-link book-link ">
                  <img
                    src="${imgUrlAmazon}"
                    srcset="${imgUrlAmazon2x} 2x"
                    alt="Amazon"
                    width="32"
                    height="11"
                    class="buy-amazon"
                  />
                </a>
              </li>
              <li class="buy-link">
                <a href="${
                  buy_links[1].url
                }" target="_blank" class="apple-book-link book-link ">
                  <img
                    src="${imgUrlAppleBook}"
                    srcset="${imgUrlAppleBook2x} 2x"
                    alt="Apple Books"
                    width="16"
                    class="buy-apple"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="submit" class="delete-item" data-book-id="${_id}">
          <svg class="remove-bin" width="16" height="16">
            <use href="${icons}#trash"></use>
          </svg>
        </button>
      </li>
    `;}).join('');
  bookList.innerHTML = markup;
  removeBooks();
}

/*function for deliting elements*/
function removeBooks() {
  const removeButtons = document.querySelectorAll('.delete-item');
  removeButtons.forEach(button => button.addEventListener('click', removeFromShopping));
}

function removeFromShopping(event) {
   switchLoader();
  const bookId = event.target.closest('li').id;
  let dataFromStorage = JSON.parse(localStorage.getItem('shoppingList')) || [];

  dataFromStorage = dataFromStorage.filter(book => book._id !== bookId);
  localStorage.setItem(localStorageKey, JSON.stringify(dataFromStorage));
  writeUserShoppingListToDatabase(dataFromStorage);

  const cardBookEl = document.getElementById(bookId);

  if(cardBookEl) {
    cardBookEl.remove();
  }
 shoppingMarkup(dataFromStorage);
 switchLoader();
   const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'success',
    title: 'Book was deleted successfully',
  });
}

/*Loader Function*/

function switchLoader() {
  loader?.classList.toggle('is-hidden');
}

if (bookList.children.length === 0 || dataFromStorage.length === 0 || dataFromStorage === []) {
  noBooks.classList.remove('hidden');
} else {
  noBooks.classList.add('hidden');
}
