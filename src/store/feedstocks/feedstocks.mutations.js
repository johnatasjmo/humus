export default {
  /* Feedstocks */
  setFeedstocksCategories: (state, feedstocksCategories) =>
    (state.feedstocksCategories = feedstocksCategories),

  setFeedstocksByCategory: (state, feedstocks) =>
    (state.feedstocksByCategory = feedstocks),

  setFeedstockDetails: (state, feedstock) =>
    (state.feedstockDetails = feedstock),

  setMyfeedstocks: (state, myFeedstocks) => (state.myFeedstocks = myFeedstocks),
  deleteFeedstock: (state, id) =>
    (state.myFeedstocks = state.myFeedstocks.filter(f => f.id !== id))
}
