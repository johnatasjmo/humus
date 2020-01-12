<template>
  <div>
    <MyFeedstocksList :my-feedstocks="myFeedstocks" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyFeedstocksList from '@/components/MyFeedStocksList'

export default {
  components: {
    MyFeedstocksList
  },
  computed: {
    ...mapState('feedstocks', ['myFeedstocks'])
  }
}
</script>

<style scoped></style>
