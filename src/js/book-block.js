import GetBooksFromApi from "./requests";
import Notiflix from "notiflix";

const booksList = document.querySelector('.book-block-list');

// FUNCTION FOR CREATE BOOK MARKUP
function createBook(book) {
    console.log(book);
    return `<li class="book-card" id="${book._id}">
    <div class="book-card-box">
    <img class="book-card-img" src="${book.book_image}" alt="Book cover ${book.title}" loading="lazy" />
    </div>
    <h3 class="book-card-title">${book.title}</h3>
    <p class="book-card-text">${book.author}</p>
    </li>`;
}

// FUNCTION FOR CREATE MARKUP LIST OF BESTSELLERS
function createBestBooksMarkup(books) {
const bestBooks = [];
  for (let i = 0; i < books.length; i += 1) {
   const cardMarkup = books[i].books.map((book, idx) => {
        if (idx < 5) {
            return createBook(book);
        }
    }).join('');
    const markupBests = `<h2 class="best-category-title">${books[i].list_name}</h2>
    <ul class="best-category-list">${cardMarkup}</ul>
    <button class="see-more-btn" name="${books[i].list_name}" type="button">See more</button>`;

    bestBooks.push(markupBests);
}
// @ts-ignore
booksList.innerHTML = bestBooks.join('');
}
// =========================================================================================================
// CREATION MARKUP WHEN OPEN HOME PAGE

const getBooksFromApi = new GetBooksFromApi();
async function onLoadPage() {
    try {
       const response = await getBooksFromApi.getBooks();
       if (response.length === 0) {
        Notiflix.Notify.warning('Sorry, there are no bestsellers books yet');
       }
       createBestBooksMarkup(response);
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong!');
    }
}
onLoadPage();
// ====================================================================================================