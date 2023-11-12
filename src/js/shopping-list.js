console.log('I am a shopping-list');
const bookList = document.querySelector('.books-list');
const noBooks = document.querySelector('.no-books');
if (bookList.children.length === 0) {
  noBooks.classList.remove('hidden');
} else {
  noBooks.classList.add('hidden');
}
/*Function for card markup*/
function shoppingMarkup(arr) {
  return arr
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
      <li class="shopping-element" data-id="${_id}">
        <img src="${book_image}" alt="${title}" class="book-image">
        <h2 class="book-title">${title}</h2>
        <p class="book-category">${list_name}</p>
        <p class="book-description">${description}</p>
        <p class="author-name">${author}</p>
        <ul class="buy-links">
            <li>
                <a href="${buy_links[0].url}" class="amazon-link">
                    <svg class="amazon-icon" width="32" height="11">
                      <use href="../img/InlineSprite.svg"></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="${buy_links[1].url}" class="apple-book-link">
                    <svg class="apple-book-icon" width="16" height="16">
                      <use href="../img/InlineSprite.svg"></use>
                    </svg>
                </a>
            </li>
        </ul>        
    </li>
    `;
      }
    )
    .join(' ');
}
