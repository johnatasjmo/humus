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
  clearIngredients: state => (state.ingredients = []),
  /**
   * Function to set new value for an ingredient
   */
  setIngredentQuantity: (state, data) => {
    const ingredient = state.ingredients.find(i => i.id === data.id)
    ingredient.quantity = parseFloat(data.quantity, 10)
  },
  /**
   * Just to watch
   */
  setToWatchValue: (state, data) => (state.toWatch = data)
}
