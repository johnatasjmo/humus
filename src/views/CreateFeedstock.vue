<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="green"
  ></v-progress-circular>
  <CreateFeedstock v-else />
</template>

<script>
import { mapActions } from 'vuex'
import CreateFeedstock from '@/components/CreateFeedstock'

export default {
  components: {
    CreateFeedstock
  },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.loading = true
    this.getFeedstocksCategories()
    this.loading = false
  },
  methods: {
    ...mapActions('feedstocks', ['getFeedstocksCategories'])
  }
}
</script>

<style scoped></style>
