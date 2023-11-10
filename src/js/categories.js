import axios from 'axios';
import GetBooksFromApi from './requests';

const createCategoryElement = (category, index) => {
  const categoryLi = document.createElement('li');
  categoryLi.classList.add('categories-item');

  const categoryId = `categoryRadio${index + 1}`;

  const categoryRadio = document.createElement('input');
  categoryRadio.setAttribute('type', 'radio');
  categoryRadio.setAttribute('name', 'category');
  categoryRadio.setAttribute('id', categoryId);
  categoryRadio.classList.add('categories-button');

  const categoryLabel = document.createElement('label');
  categoryLabel.textContent = category.list_name;
  categoryLabel.setAttribute('for', categoryId);
  categoryLabel.classList.add('categories-label');

  categoryLi.appendChild(categoryRadio);
  categoryLi.appendChild(categoryLabel);

  return categoryLi;
};

async function fetchAndDisplayCategories() {
  const categoryRequest = await new GetBooksFromApi().getAllCategories();
  const categoryListElement = document.querySelector('.categories-list');
  categoryRequest.forEach((category, index) => {
    const categoryElement = createCategoryElement(category, index);
    categoryListElement.appendChild(categoryElement);
  });
}

fetchAndDisplayCategories();