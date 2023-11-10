import GetBooksFromApi from "./requests";
import { createBestBooksMarkup } from "./book-block";
import { createBook } from "./book-block";
import Notiflix from "notiflix";

const getBooksFromApi = new GetBooksFromApi();

const bestsellerList = document.querySelector('.book-block-list');
const categoryTitle = document.querySelector('.book-block-title');

bestsellerList?.addEventListener('click', onSeeMore);

function onSeeMore(event) {
    event.preventDefault();
    if(event.target.nodeName === 'BUTTON') {
        // @ts-ignore
        categoryTitle.style.display = 'none';
        renderBooksCategory(event.target.name);
    }
};

// FUNCTION FOR RENDERING BOOKS ONE CATEGORY
async function renderBooksCategory(category) {
    try {
      const allBooksCategory = await getBooksFromApi.getBooksFromCategory(category);
      markupCat(allBooksCategory, category);
    } catch (error) {
        Notiflix.Notify.failure('Sorry, no books in this category');
    }
}

// FUNCTION FOR MARKUP CATEGORY
function markupCat(arr, category) {
    const bookItem = arr.map(book => {
        const markup = createBook(book);
        return markup;
    }).join('');

    const categories = category.split(' ');

    let lastItemIndex = categories.length - 1;
    let lastItem = categories[lastItemIndex];
    let firstTitle = categories.splice(0, lastItemIndex).join(' ');

    const catItems = `<h2 class="book-block-title">${firstTitle}&nbsp;<span class="book-block-title-accent">${lastItem}</span>
    </h2>
    <ul class="category-books-wrapper">${bookItem}</ul>`;

    // @ts-ignore
    bestsellerList.innerHTML = catItems;
    const bookCard = document.querySelectorAll('.book-card');
    // @ts-ignore
    bookCard.forEach(item => item.style.display = 'block');
};