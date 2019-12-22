<template>
  <FeedStocksByCategory />
</template>

<script>
import { mapActions } from 'vuex'
import FeedStocksByCategory from '@/components/FeedstocksByCategoryList'

export default {
  components: {
    FeedStocksByCategory
  },
  mounted() {
    this.getFeedstocksByCategoryID(this.$route.params.categoryId)
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksByCategoryID'])
  }
}
</script>

<style scoped></style>
