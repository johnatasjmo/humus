import FeedstocksCategoriesDB from '@/firebase/feedstocks-categories-db'
import FeedstocksDB from '@/firebase/feedstocks-db'

export default {
  /**
   * Fetch feedstocks categories
   */
  getFeedstocksCategories: async ({ commit }) => {
    const feedStocksCategoriesDB = new FeedstocksCategoriesDB()

    const feedstocksCategories = await feedStocksCategoriesDB.readAll()
    commit('setFeedstocksCategories', feedstocksCategories)
  },

  /**
   * Fetch feedstocks by category ID
   */
  getFeedstocksByCategoryID: async ({ commit }, categoryID) => {
    const feedstocksDB = new FeedstocksDB()

    commit('setFeedstocksByCategory', null)

    const feedstocksByCategory = await feedstocksDB.readAll([
      ['material_type', '==', categoryID]
    ])
    commit('setFeedstocksByCategory', feedstocksByCategory)
  },

  /**
   * Fetch feedstock by ID
   */
  fetFeedstocksByID: async ({ commit }, feedstockID) => {
    const feedstocksDB = new FeedstocksDB()

    commit('setFeedstockDetails', null)
    const feedstockDetails = await feedstocksDB.read(feedstockID)
    console.log('TCL: feedstockDetails', feedstockDetails)
    commit('setFeedstockDetails', feedstockDetails)
  }
}
