class Item {
    constructor(id, name, description, price, quantity, img){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.img = img;
    }

    static newItem(items){
        debugger;
        for (item of items){
            let i = new Item(
                item.id, 
                item.name, 
                item.description, 
                item.price, 
                item.quantity, 
                item.img
            )
        }
    }
}