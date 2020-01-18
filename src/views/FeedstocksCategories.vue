<template>
  <FeedstocksCategoriesList :feedstocks-categories="feedstocksCategories" />
</template>

<script>
import { mapState } from 'vuex'
import FeedstocksCategoriesList from '@/components/FeedstocksCategoriesList'

export default {
  components: {
    FeedstocksCategoriesList
  },
  computed: {
    ...mapState('feedstocks', ['feedstocksCategories'])
  }
}
</script>

<style lang="scss" scoped></style>
