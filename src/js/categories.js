import axios from "axios";

const createCategoryElement = category => {
    const categoryLi = document.createElement('li');
    categoryLi.classList.add('categories-item');
  
    const categoryButton = document.createElement('button');
    categoryButton.textContent = category.list_name;
    categoryButton.classList.add('categories-button');
    categoryButton.type = 'button';
  
    categoryLi.appendChild(categoryButton);
    return categoryLi;
  };

  const fetchAndDisplayCategories = () => {
    axios.get('https://books-backend.p.goit.global/books/category-list')
      .then(response => {
        const categories = response.data;
        const categoryListElement = document.querySelector('.categories-list');
        categoryListElement.innerHTML = '';
  
        categories.forEach(category => {
          const categoryElement = createCategoryElement(category);
          categoryListElement.appendChild(categoryElement);
        });
      })
      .catch(error => {
        console.error('Error fetching the book categories:', error);
      });
  };

  fetchAndDisplayCategories();