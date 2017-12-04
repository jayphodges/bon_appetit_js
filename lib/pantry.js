export default class Pantry {
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
        return this.stock[ingredientName] += quantity
    }

}
