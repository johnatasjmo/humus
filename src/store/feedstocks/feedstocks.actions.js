import FeedstocksCategoriesDB from '@/firebase/feedstocks-categories-db'
import FeedstocksDB from '@/firebase/feedstocks-db'
import FeedstocksVersionsDB from '@/firebase/feedstocks-versions-db'

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
   * Fetch feedstocks versions
   */
  getFeedstocksVersion: async ({ commit }) => {
    const feedstocksVersionsDB = new FeedstocksVersionsDB()

    const versions = await feedstocksVersionsDB.readAll()
    commit('setFeedstocksVersions', versions)
    return versions
  },
  /**
   * Fetch admin general feedstocks
   */
  getAdminGeneralFeedstocks: async ({ commit }) => {
    const feedstocksDB = new FeedstocksDB()

    const feedstocks = await feedstocksDB.readAll([['creator', '==', 'admin']])
    commit('setFeedstocks', feedstocks)
    return feedstocks
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
   * Fetch my feedstocks
   */
  getMyFeedstocks: async ({ commit, rootState }) => {
    const feedstocksDB = new FeedstocksDB()

    commit('setMyfeedstocks', null)

    const myfeedstocks = await feedstocksDB.readAll([
      ['creator', '==', rootState.authentication.user.id]
    ])
    commit('setMyfeedstocks', myfeedstocks)
  },

  /**
   * Fetch feedstock by ID
   */
  getFeedstockByID: async ({ commit }, feedstockID) => {
    const feedstocksDB = new FeedstocksDB()

    commit('setFeedstockDetails', null)
    const feedstockDetails = await feedstocksDB.read(feedstockID)
    commit('setFeedstockDetails', feedstockDetails)
    return feedstockDetails
  },
  /**
   * Insert new feedstock
   */
  insertFeedstock: async (context, data) => {
    const feedstocksDB = new FeedstocksDB()

    const { id } = await feedstocksDB.create(data)
    return id
  },
  /**
   * Delete a feedstock
   */
  deleteFeedstock: async ({ commit }, id) => {
    const feedstocksDB = new FeedstocksDB()

    await feedstocksDB.delete(id)
    commit('deleteFeedstock', id)
  }
}
