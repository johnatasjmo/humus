export default {
  /* Feedstocks */
  setFeedstocksCategories: (state, feedstocksCategories) =>
    (state.feedstocksCategories = feedstocksCategories),

  setFeedstocksByCategory: (state, feedstocks) =>
    (state.feedstocksByCategory = feedstocks)
}
