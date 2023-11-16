// @ts-nocheck
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { shoppingMarkup } from './shopping-list';
import { handlerDelete } from './shopping-list';

const paginationContainer = document.getElementById('tui-pagination-container');
const noBooks = document.querySelector('.no-books');
const localStorageKey = 'shoppingList';
const shoppingBooksList = document.querySelector('.books-list');

const booksPerPage = 3;
const storageDataBooks = JSON.parse(localStorage.getItem(localStorageKey));

if (storageDataBooks.length === 0) {
  noBooks.classList.remove('hidden');
} else {
  noBooks.classList.add('hidden');
}

const options = {
  totalItems: storageDataBooks.length,
  itemsPerPage: booksPerPage,
  visiblePages: 3,
  centerAlign: true,
};

let pagination;

if (storageDataBooks && storageDataBooks.length > 3) {
  pagination = new Pagination(paginationContainer, options);
  pagination.on('beforeMove', event => {
    if (storageDataBooks && storageDataBooks.length > 0) {
      shoppingBooksList.innerHTML = '';
      const start = (event.page - 1) * booksPerPage;
      const pageItems = storageDataBooks.slice(start, start + booksPerPage);
      shoppingMarkup(pageItems);
      const deleteBtns = document.querySelectorAll('.delete-item');
      deleteBtns.forEach(button => {
        button.addEventListener('click', updatePagination);
      });
    }
  });
}

function showFirstPage() {
  if (storageDataBooks && storageDataBooks.length > 0) {
    shoppingMarkup(storageDataBooks.slice(0, 3));
  }
}
showFirstPage();
// =====================================================================================
// WHEN DELETE BOOK FROM SHOPPING LIST

function updatePagination(book) {
  handlerDelete(book);
  if (!storageDataBooks || storageDataBooks.length < 3) {
    paginationContainer.innerHTML = '';
  } else if (storageDataBooks.length % 3 === 0) {
    pagination.reset(storageDataBooks.length);
    pagination.movePageTo(Math.ceil(storageDataBooks.length - 1) / 3);
  }
}
