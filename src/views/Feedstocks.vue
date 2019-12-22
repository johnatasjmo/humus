<template>
  <FeedstokcsCategoriesList />
</template>

<script>
import { mapActions } from 'vuex'
import FeedstokcsCategoriesList from '@/components/FeedstocksCategoriesList'

export default {
  components: {
    FeedstokcsCategoriesList
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
