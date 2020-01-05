<template>
  <div>
    <MyFeedstocksList :my-feedstocks="getMyFeedstocks" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyFeedstocksList from '@/components/MyFeedStocksList'

export default {
  components: {
    MyFeedstocksList
  },
  computed: {
    ...mapGetters('feedstocks', ['getMyFeedstocks'])
  }
}
</script>

<style scoped></style>
