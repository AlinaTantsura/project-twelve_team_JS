// @ts-nocheck
import imgUrlAppleBook from '../img/appleBook@1x-min.png';
import imgUrlAmazon from '../img/amazon@1x-min.png';
import imgUrlAppleBook2x from '../img/appleBook@2x-min.png';
import imgUrlAmazon2x from '../img/amazon@2x-min.png';
import icons from '../img/InlineSprite.svg';
import Swal from 'sweetalert2';

const bookList = document.querySelector('.books-list');
const noBooks = document.querySelector('.no-books');
const loader = document.querySelector('.loader-backdrop');

/*Creation of markup*/

loader?.classList.toggle('is-hidden');

// bookList.insertAdjacentHTML('beforeend', shoppingMarkup(shoppingList) || '');

/*function for deliting elements*/

export function handlerDelete(evt) {
  const bookId = evt.currentTarget.dataset.bookId;
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

  const newBooks = [];

  shoppingList.forEach(elem => {
    if (elem._id !== bookId) {
      newBooks.push(elem);
    }
  });
  localStorage.setItem('shoppingList', JSON.stringify(newBooks));

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
  localStorage.setItem('shoppingList', JSON.stringify(newBooks));
  setTimeout(() => {
    location.reload();
  }, 1500);
}

/*Loader Function*/

function switchLoader() {
  loader?.classList.toggle('is-hidden');
}

/*Eventlisteners on each button*/

const books = [...bookList.children];
books.forEach(book => {
  book.children[2].addEventListener('click', handlerDelete);
});

/*Checking if I have elements in section*/

if (bookList.children.length === 0) {
  noBooks.classList.remove('hidden');
  setTimeout(() => {
    switchLoader();
  }, 1000);
} else {
  noBooks.classList.add('hidden');
  setTimeout(() => {
    switchLoader();
  }, 1000);
}

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
      <li class="shopping-element">
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
  bookList.insertAdjacentHTML('beforeend', markup);
}
