class Pantry {
    constructor (name) {
        this.name = name
        this.stock = {}
    }

    stock () {
        return this.stock
    }

    stockCheck (ingredientName) {
        return this.stock[ingredientName] || 0
    }

    restock (ingredientName, quantity) {
        if (this.stock[ingredientName]) {
            return this.stock[ingredientName] += quantity
        } else {
            return this.stock[ingredientName] = quantity
        }
    }

}
