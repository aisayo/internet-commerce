class Category {
    constructor(name){
        this.name = name;
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