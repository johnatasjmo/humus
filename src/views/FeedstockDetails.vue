<template>
  <FeedstockDetailCard :feedstock-details="feedstockDetails" />
</template>

<script>
import { mapGetters } from 'vuex'
import FeedstockDetailCard from '@/components/FeedstockDetailCard'

export default {
  components: {
    FeedstockDetailCard
  },
  computed: {
    ...mapGetters('feedstocks', ['getFeedstockDetails']),
    feedstockDetails() {
      return this.getFeedstockDetails(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
