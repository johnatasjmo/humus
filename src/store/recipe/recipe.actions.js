import RecipesDB from '@/firebase/recipes-db'

export default {
  insertRecipe: async ({ rootState, commit }, recipe) => {
    const recipesDB = new RecipesDB()
    const data = {
      recipe,
      creator: rootState.authentication.user.id
    }

    const newRecipe = recipesDB.create(data)
    commit('addRecipeToMyRecipes', newRecipe)
    return newRecipe
  }
}
