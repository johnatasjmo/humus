import FeedstocksCategoriesDB from '@/firebase/feedstocks-categories-db'

export default {
  getFeedstocksCategories: async ({ commit }) => {
    const feedStocksCategoriesDB = new FeedstocksCategoriesDB()

    const feedstocksCategories = await feedStocksCategoriesDB.readAll()
    commit('setFeedstocksCategories', feedstocksCategories)
  }
}
