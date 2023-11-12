console.log('I am a shopping-list');
const bookList = document.querySelector('.books-list');
const noBooks = document.querySelector('.no-books');
if (bookList.children.length === 0) {
  noBooks.classList.remove('hidden');
} else {
  noBooks.classList.add('hidden');
}
