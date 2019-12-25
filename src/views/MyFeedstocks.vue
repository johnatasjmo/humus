<template>
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
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
  mounted() {
    this.loading = true
    this.getMyFeedstocks()
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getMyFeedstocks'])
  }
}
</script>

<style scoped></style>
