const BASE_URL = 'http://127.0.0.1:3000/categories';
let navBar = document.getElementById('navbar')

class Category {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static fetchCategories(){
        fetch(`${BASE_URL}`)
        .then(resp => resp.json())
        .then(categories =>{
            this.loadCategories(categories);
            Category.addEventHandler();
        })
    }

    static loadCategories(categories){
        for (const category of categories){
            let c = new Category(category.id, category.name);
            c.renderCategory();
        }
    }
    
    renderCategory(){
        let link = `<a class="category-link" data-id=${this.id} href="#">${this.name}</a>`;
        navBar.innerHTML += link;
        
    }

    static addEventHandler(){
        navBar.addEventListener('click', Category.categoryEventHandler)
    }

    static categoryEventHandler(){
        if (event.target.matches('a.category-link')){
            Category.fetchCategoryItems();
        }
    }

    static fetchCategoryItems(){
        let categoryId = event.target.dataset.id;
        fetch(`${BASE_URL}/${categoryId}`)
        .then(resp => resp.json())
        .then(category => {
            Item.newItem(category.items);
        })
    }

}