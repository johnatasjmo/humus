export default {
  addIngredient: (state, ingredient) =>
    (state.ingredients = [...state.ingredients, ingredient]),
  removeIngredient: (state, id) =>
    (state.ingredients = state.ingredients.filter(
      ingredient => ingredient.id !== id
    )),
  resetIngredients: state => (state.ingredients = [])
}
