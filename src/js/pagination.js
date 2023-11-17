// @ts-nocheck
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { shoppingMarkup } from './shopping-list';

let shoppingList = localStorage.getItem('shoppingList');
let shoppingListArray = JSON.parse(shoppingList);
const noBooks = document.querySelector('.no-books');

let visiblePages = 2;
let itemsPerPage = 4;
if (window.innerWidth >= 768) {
  visiblePages = 3;
  itemsPerPage = 3;
}
const options = {
  totalItems: shoppingListArray.length,
  itemsPerPage,
  visiblePages,
};

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

if (shoppingListArray.length <= 3) {
  container.classList.add('hidden');
} else {
  container.classList.remove('hidden');
}

pagination.on('beforeMove', event => {
  const currentPage = event.page;
  shoppingMarkup(
    shoppingListArray.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  );
  deleteBooksFrom();
});

pagination.movePageTo(1);

function deleteBooksFrom() {
  const removeButtons = document.querySelectorAll('.delete-item');
  removeButtons.forEach(button => button.addEventListener('click', reloadPage));
};

function reloadPage() {
  shoppingList = localStorage.getItem('shoppingList');
  shoppingListArray = JSON.parse(shoppingList);

  if (shoppingListArray.length === 0 || shoppingListArray === []) {
    noBooks.classList.remove('hidden');
  } else {
    noBooks.classList.add('hidden');
  }


  let currentPage = pagination.getCurrentPage();
  pagination.reset(shoppingListArray.length);
  pagination.movePageTo(currentPage);
  if (shoppingListArray.length / itemsPerPage <= 1 || shoppingListArray.length <= 3) {
    container.classList.add('hidden');
  }
};

