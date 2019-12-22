<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="green"
  ></v-progress-circular>
  <FeedStocksByCategory v-else />
</template>

<script>
import { mapActions } from 'vuex'
import FeedStocksByCategory from '@/components/FeedstocksByCategoryList'

export default {
  components: {
    FeedStocksByCategory
  },
  data: () => ({
    loading: false
  }),
  async mounted() {
    this.loading = true
    await this.getFeedstocksByCategoryID(this.$route.params.categoryId)
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksByCategoryID'])
  }
}
</script>

<style scoped></style>
