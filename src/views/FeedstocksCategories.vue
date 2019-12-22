<template>
  <FeedstocksCategoriesList />
</template>

<script>
import { mapActions } from 'vuex'
import FeedstocksCategoriesList from '@/components/FeedstocksCategoriesList'

export default {
  components: {
    FeedstocksCategoriesList
  },
  mounted() {
    this.getFeedstocksCategories()
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksCategories'])
  }
}
</script>

<style lang="scss" scoped></style>
