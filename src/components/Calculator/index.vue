<template>
  <div style="width:100%">
    <FeedstocksList :ingredients="allFeedstocks" />
    <Results :feedstocks="allFeedstocks" class="mt-5" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import FeedstocksList from './FeedstocksList'
import Results from './Results'

export default {
  components: {
    FeedstocksList,
    Results
  },
  computed: {
    ...mapGetters('feedstocks', ['getFeedstockDetails']),
    ...mapState('recipe', ['ingredients']),
    allFeedstocks() {
      return [this.getFeedstockDetails('water'), ...this.ingredients]
    }
  }
}
</script>

<style scoped></style>
