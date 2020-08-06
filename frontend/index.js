document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
})

const BASE_URL = 'http://127.0.0.1:3000/';


const fetchCategories = () => {
    fetch(`${BASE_URL}/categories`)
    .then(resp => resp.json())
    .then(categories =>{
        Category.loadCategories(categories);
    })
}

