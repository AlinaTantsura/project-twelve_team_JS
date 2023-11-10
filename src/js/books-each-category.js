import GetBooksFromApi from "./requests";
import { createBook } from "./book-block";
import { onLoadPage } from "./book-block";
import Notiflix from "notiflix";

// Create new Class for take all functions from default class
const getBooksFromApi = new GetBooksFromApi();

// constants from html 
const bestsellerList = document.querySelector('.book-block-list');
const categoryTitle = document.querySelector('.book-block-title');
const categoryListItems = document.querySelector('.categories-list');

// Add event listener to buttons "See More" in Bestsellers Books
bestsellerList?.addEventListener('click', onSeeMore);

// Callback function when we click on button "See more"
function onSeeMore(event) {
    event.preventDefault();
    if(event.target.nodeName === 'BUTTON') {
        // @ts-ignore
        categoryTitle.style.display = 'none';
        renderBooksCategory(event.target.name);
    }
};
// ==========================================================================================
// Add event listener to list of categories
categoryListItems?.addEventListener('click', onClick);

// Callback function when we click on some category in list of categories
function onClick(event) {
    event.preventDefault();
    if(event.target.nodeName === 'LABEL' && event.target.textContent !== 'All Categories') {
        // @ts-ignore
        categoryTitle.style.display = 'none';
        renderBooksCategory(event.target.textContent);
    } else if(event.target.textContent === 'All Categories') {
        // @ts-ignore
        categoryTitle.style.display = 'block';
        onLoadPage();
    }
};


// ===================================================================================================
// ======= ADDIOTIONAL FUNCTIONS ====================================================================
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