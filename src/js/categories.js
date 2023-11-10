import GetBooksFromApi from './requests';


/* Функція створення элемента категорії */

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

/* Функція виведення елементів на сторінку */

async function fetchAndDisplayCategories() {
  const categoryRequest = await new GetBooksFromApi().getAllCategories();
  categoryRequest.sort((a, b) => a.list_name.localeCompare(b.list_name));
  const categoryListElement = document.querySelector('.categories-list');
  categoryRequest.forEach((category, index) => {
    const categoryElement = createCategoryElement(category, index);
    categoryListElement.appendChild(categoryElement);
  });
}

fetchAndDisplayCategories();