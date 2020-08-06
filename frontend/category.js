const BASE_URL = 'http://127.0.0.1:3000/';

class Category {
    constructor(name){
        this.name = name;
    }

    static fetchCategories(){
        fetch(`${BASE_URL}/categories`)
        .then(resp => resp.json())
        .then(categories =>{
            this.loadCategories(categories);
        })
    }

    static loadCategories(categories){
        for (const category of categories){
            let c = new Category(category.name);
            c.renderCategory();
        }
    }
    
    renderCategory(){
        let navBar = document.getElementById('navbar')
        let link = `<a href="#">${this.name}</a>`
        navBar.innerHTML += link
    }

}