// @ts-nocheck
import closeIcon from '../img/InlineSprite.svg';
import imgUrlAppleBook1x from '../img/appleBook@1x-min.png';
import imgUrlAppleBook2x from '../img/appleBook@2x-min.png';
import imgUrlAmazon1x from '../img/amazon@1x-min.png';
import imgUrlAmazon2x from '../img/amazon@2x-min.png';
import Swal from 'sweetalert2';
import { writeUserShoppingListToDatabase } from './sign-in';

let bookArray = JSON.parse(localStorage.getItem('shoppingList')) || [];

export function displayBookModal(book) {
    const modal = document.getElementById('bookModal');
    const modalDescription = book.description || 'Description will be added later';
    modal.innerHTML = '';

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <button id="closeModal">
            <svg width="24" height="24" class="close-modal-icon">
                <use href="${closeIcon}#x-close"></use>
            </svg>
        </button>

        <div class="book-modal-info">
            <img class="book-modal-img" src="${book.book_image}" alt="Book cover for ${book.title}" loading="lazy" />
            
            <div>
                <h3 class="book-modal-title">${book.title}</h3>
                <p class="book-modal-author">${book.author}</p>
                <p class="book-modal-description">${modalDescription}</p>
                
                <div class="book-link-wrap">
                    <a href="${book.buy_links[0].url}" target="_blank" class="book-link amazon-link">
                        <img src="${imgUrlAmazon1x}" srcset="${imgUrlAmazon2x} 2x"  alt="Amazon link">
                    </a>
                    
                    <a href="${book.buy_links[1].url}" target="_blank" class="book-link">
                        <img src="${imgUrlAppleBook1x}" srcset="${imgUrlAppleBook2x} 2x" alt="Apple Book link">
                    </a>
                </div>
            </div>
        </div>

        <button id="addToShoppingList" class="add-shopping-button">Add to Shopping List</button>

        <p id="congratulationsMessage" style="display: none;">
            Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.
        </p>
    `;

    modal.appendChild(modalContent);

    modal.style.display = 'block';

    document.body.style.overflow = 'hidden';

    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });

    const addToShoppingListButton = document.getElementById('addToShoppingList');
    addToShoppingListButton.addEventListener('click', toggleShoppingList);

    updateButtonState();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';

        document.body.style.overflow = 'auto';
    }

    function toggleShoppingList() {

        const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

        const isBookInShoppingList = shoppingList.some((item) => item.title === book.title);

        if (!isBookInShoppingList) {

            shoppingList.push(book);

            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
            writeUserShoppingListToDatabase(shoppingList);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Book was ADDED to Shopping list!",
              });
        } else {

            const updatedShoppingList = shoppingList.filter((item) => item.title !== book.title);

            localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
            writeUserShoppingListToDatabase(updatedShoppingList);
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Book was REMOVED from Shopping list!",
              });
        }

        updateButtonState();
    }

    function updateButtonState() {

        const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

        const isBookInShoppingList = shoppingList.some((item) => item.title === book.title);

        if (isBookInShoppingList) {
            addToShoppingListButton.innerText = 'Remove from Shopping List';

            document.getElementById('congratulationsMessage').style.display = 'block';
        } else {
            addToShoppingListButton.innerText = 'Add to Shopping List';

            document.getElementById('congratulationsMessage').style.display = 'none';
        }
    }
}


export function removeFromShoppingList(book) {

    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    const updatedShoppingList = shoppingList.filter((item) => item.title !== book.title);

    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));

    updateButtonState();
}

