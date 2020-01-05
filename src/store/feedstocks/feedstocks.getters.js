export default {
  getFeedstocksByCategoryId: state => categoryId => {
    return state.feedstocks
      ? state.feedstocks.filter(f => f.material_type === categoryId)
      : []
  }
}
