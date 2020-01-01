<template>
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
      data-test="loader"
      color="green"
    ></v-progress-circular>
    <MyFeedstocksList v-else />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MyFeedstocksList from '@/components/MyFeedStocksList'

export default {
  components: {
    MyFeedstocksList
  },
  data: () => ({
    loading: false
  }),
  async mounted() {
    this.loading = true
    await this.getMyFeedstocks()
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getMyFeedstocks'])
  }
}
</script>

<style scoped></style>
