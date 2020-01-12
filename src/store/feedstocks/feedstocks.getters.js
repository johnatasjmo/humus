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
    const res = allFeedstocks.find(f => f.id === id)

    // eslint-disable-next-line no-extra-boolean-cast
    return !!res ? res : {}
  }
}
