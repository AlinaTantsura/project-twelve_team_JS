import GetBooksFromApi from "./requests";
import { createBook } from "./book-block";
import { onLoadPage } from "./book-block";
import { switchLoader } from "./book-block";
import Swal from 'sweetalert2';

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

// If click on 'See More' and show all books of one category automatically scroll up
   if (window.innerWidth >= 1440) {
    window.scrollTo(window.innerHeight, 0);
   } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    window.scrollTo(window.innerHeight, 500);
   } else {
    window.scrollTo(window.innerHeight, 820);
   }
    // ===========================================
  
    
    if(event.target.nodeName === 'BUTTON') {
        // @ts-ignore
        categoryTitle.style.display = 'none';
        renderBooksCategory(event.target.name);
        
    // For make active category in categories list
        const listOfLabels = document.querySelectorAll('label');
        listOfLabels.forEach(label => {
        if(label.textContent === event.target.name) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    })
    }
};
// ==========================================================================================
// Add event listener to list of categories
categoryListItems?.addEventListener('click', onClick);

// Callback function when we click on some category in list of categories
function onClick(event) {
    event.preventDefault();
    // For make active the choosen category in categories list
    const listOfLabels = document.querySelectorAll('label');
    listOfLabels.forEach(label => {
        if (label === event.target) {
           label.classList.add('active')
        }
        label.classList.remove('active');
    })
    // =============================

    const labelElem = event.target;
    if(labelElem.nodeName === 'LABEL' && labelElem.textContent !== 'All Categories') {
        labelElem.classList.add('active');
        // @ts-ignore
        categoryTitle.style.display = 'none';
        renderBooksCategory(labelElem.textContent);
    } else if(labelElem.textContent === 'All Categories') {
        // @ts-ignore
        categoryTitle.style.display = 'block';
        labelElem.classList.add('active');
        onLoadPage();
    } else {
        return;
    }
};


// ===================================================================================================
// ======= ADDIOTIONAL FUNCTIONS ====================================================================
// FUNCTION FOR RENDERING BOOKS ONE CATEGORY
async function renderBooksCategory(category) {
    try {
        switchLoader();
      const allBooksCategory = await getBooksFromApi.getBooksFromCategory(category);
      markupCat(allBooksCategory, category);
    } catch (error) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Sorry, server not answer"
          });
    } finally {
        switchLoader();
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