<template>
  <div>
    Feedstocks
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    this.getFeedstocksCategories()
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksCategories'])
  }
}
</script>

<style lang="scss" scoped></style>
