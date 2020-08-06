document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
})

const BASE_URL = 'http://127.0.0.1:3000/';


const fetchCategories = () => {
    fetch(`${BASE_URL}/categories`)
    .then(resp => resp.json())
    .then(categories =>{
        loadCategories(categories);
    })
}

const loadCategories = (categories) => {
    for (const category of categories){
        renderCategory(category);
    }
}

const renderCategory = (category) => {
    let navBar = document.getElementById('navbar')
    let link = `<a href="#">${category.name}</a>`
    navBar.innerHTML += link
    
}