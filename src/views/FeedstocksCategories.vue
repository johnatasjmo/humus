<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="green"
  ></v-progress-circular>
  <FeedstocksCategoriesList v-else />
</template>

<script>
import { mapActions } from 'vuex'
import FeedstocksCategoriesList from '@/components/FeedstocksCategoriesList'

export default {
  components: {
    FeedstocksCategoriesList
  },
  data: () => ({
    loading: false
  }),
  async mounted() {
    this.loading = true
    await this.getFeedstocksCategories()
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksCategories'])
  }
}
</script>

<style lang="scss" scoped></style>
