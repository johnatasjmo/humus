export default {
  // Overrides all the ingredients
  setIngredients: (state, ingredients) => (state.ingredients = ingredients),
  addIngredient: (state, ingredient) => {
    ingredient.quantity = 0
    state.ingredients = [...state.ingredients, ingredient]
  },
  removeIngredient: (state, id) =>
    (state.ingredients = state.ingredients.filter(
      ingredient => ingredient.id !== id
    )),
  // resetIngredients: state => (state.ingredients = []),
  clearIngredients: state => (state.ingredients = []),
  /**
   * Function to set new value for an ingredient
   */
  setIngredentQuantity: (state, data) => {
    const ingredient = state.ingredients.find(i => i.id === data.id)
    console.log('TCL: ingredient', ingredient)
    ingredient.quantity = parseFloat(data.quantity, 10)
  }
}
