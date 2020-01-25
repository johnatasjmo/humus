import RecipesDB from '@/firebase/recipes-db'

export default {
  insertRecipe: async ({ rootState, commit }, data) => {
    const recipesDB = new RecipesDB()
    const finalData = {
      ...data,
      creator: rootState.authentication.user.id
    }

    const newRecipe = recipesDB.create(finalData)
    commit('addRecipeToMyRecipes', newRecipe)
    return newRecipe
  }
}
