<template>
  <div>
    <div style="width: 100%" class="pa-4">
      <p>
        This compost recipe calculator app builds on the recipe calculators from
        the US Composting Council and Washington State Univeresity-Puyallup to
        allow the users to develop their own recipes quickly.
      </p>
      <p>
        We strongly suggest you use your own feedstocks. The feedstocks in the
        database come from Cornell University, On-Farm Composting Handbook, and
        the US Composting Council.
      </p>
      <p>If you have any questions, please contact Jorge Montezuma, PE at</p>
      <p>jlmontezuma@gmail.com</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.setCustomAppBarTitle('About')
  },
  beforeDestroy() {
    this.clearCustomAppBarTitle(null)
  },
  methods: {
    ...mapMutations('app', ['setCustomAppBarTitle', 'clearCustomAppBarTitle'])
  }
}
</script>

<style lang="scss" scoped></style>
