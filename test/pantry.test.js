import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry("Home")

    it("has a name", () => {
      expect(pantry.name).to.equal("Home")
    })

    it("has stock", () => {
      expect(pantry.stock).to.eql({})
    })
  })

  describe("functions", () => {
    describe("stock", () => {
      it("returns stock for pantry", () => {
        const pantry = new Pantry("Home")
        expect(pantry.stock).to.eql({})

        pantry.restock("cheese", 10)

        expect(pantry.stock).to.eql({ cheese: 10 })
      })
    })

    // describe("addIngredient", () => {
    //   it("adds an ingredient and amount to ingredients", () => {
    //     const recipe = new Recipe("Pizza")
    //     expect(recipe.ingredients).to.eql({})
    //
    //     recipe.addIngredient("cheese", 10)
    //
    //     expect(recipe.ingredients).to.eql({ cheese: 10 })
    //   })
    // })

    // describe("ingredientTypes", () => {
    //   it("returns an empty array by default", () => {
    //     const recipe = new Recipe("Pizza")
    //     expect(recipe.ingredientTypes()).to.eql([])
    //   })
    //
    //   it("returns an array of the ingredient types", () => {
    //     const recipe = new Recipe("Pizza")
    //     const ingredients = ["cheese", "flour"]
    //     ingredients.forEach((ingredient, index) => recipe.addIngredient(ingredient, 10 + index))
    //
    //     expect(recipe.ingredientTypes()).to.eql(ingredients)
    //   })
    // })

    // describe("amountRequired", () => {
    //   it("returns 0 if ingredient DNE", () => {
    //     const recipe = new Recipe("Pizza")
    //     expect(recipe.amountRequired("cheese")).to.equal(0)
    //   })
    //
    //   it("returns amount required for an ingredient", () => {
    //     const recipe = new Recipe("Pizza")
    //     recipe.addIngredient("cheese", 10)
    //     expect(recipe.amountRequired("cheese")).to.equal(10)
    //   })
    // })
  })
})
