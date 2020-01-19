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
    if (this.ingredients.length === 0) {
      const water = this.getFeedstockDetails('water')
      water.quantity = 0

      this.setIngredients([water, ...this.ingredients])
    }
  },
  methods: {
    ...mapMutations('recipe', ['setIngredients'])
  }
}
</script>

<style scoped></style>
