import axios from "axios";

// CREATION DEFAULT CLASS FOR REQUESTS TO BOOKS API
export default class GetBooksFromApi {
    // API adresses for send requests
    #BASE_URL = 'https://books-backend.p.goit.global/books';
    #BEST_BOOKS = '/top-books';
    #ALL_CATEGORIES = '/category-list';
    #CATEGORY = '/category?category=';

    constructor() {}

    // FUNCTION FOR REQUEST BESTSELLERS BOOKS LIST
    async getBooks() {
            const booksBest = await axios.get(`${this.#BASE_URL}${this.#BEST_BOOKS}`);
            return booksBest.data;
    }

    // FUNCTION FOR REQUEST LIST OF ALL CATEGORIES
    async getAllCategories() {
        const allCategories = await axios.get(`${this.#BASE_URL}${this.#ALL_CATEGORIES}`);
        console.log(allCategories)
        return allCategories.data;
    }

    // FUNCTION FOR REQUEST BOOK BY ID
    async getBookById(id) {
        const bookById = await axios.get(`${this.#BASE_URL}/${id}`);
        return bookById.data;
    }

    // FUNCTION FOR REQUEST ALL BOOKS FROM ONE CATEGORY
    async getBooksFromCategory(categoryName) {
        const category = await axios.get(`${this.#BASE_URL}${this.#CATEGORY}${categoryName}`);
        return category.data;
    }
}