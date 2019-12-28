<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="green"
  ></v-progress-circular>
  <FeedstockDetailCard v-else />
</template>

<script>
import { mapActions } from 'vuex'
import FeedstockDetailCard from '@/components/FeedstockDetailCard'

export default {
  components: {
    FeedstockDetailCard
  },
  data: () => ({
    loading: false
  }),
  async mounted() {
    this.loading = true
    await this.getFeedstockByID(this.$route.params.id)
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstockByID'])
  }
}
</script>

<style lang="scss" scoped></style>
