export default {
  getFeedstocksByCategoryId: state => categoryId => {
    return state.feedstocks
      ? state.feedstocks.filter(f => f.material_type === categoryId)
      : []
  },
  getMyFeedstocks: state => {
    return state.myFeedstocks ? state.myFeedstocks : []
  },
  getFeedstockDetails: state => id => {
    const allFeedstocks = [...state.feedstocks, ...state.myFeedstocks]
    return allFeedstocks.find(f => f.id === id)
  }
}
