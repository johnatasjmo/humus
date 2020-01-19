<template>
  <div style="width:100%">
    <FeedstocksList :ingredients="ingredients" />
    <Results :feedstocks="ingredients" class="mt-5" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import FeedstocksList from './FeedstocksList'
import Results from './Results'

export default {
  components: {
    FeedstocksList,
    Results
  },
  computed: {
    ...mapGetters('feedstocks', ['getFeedstockDetails']),
    ...mapState('recipe', ['ingredients'])
  },
  beforeMount() {
    this.addIngredient(this.getFeedstockDetails('water'))
  },
  methods: {
    ...mapMutations('recipe', ['addIngredient'])
  }
}
</script>

<style scoped></style>
