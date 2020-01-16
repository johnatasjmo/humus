<template>
  <div style="width:100%">
    <v-card style="width:100%">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="feedstock in feedstocks"
            :key="feedstock.id"
            @click="handleItemClick(feedstock.id)"
          >
            <FeedstockRow :feedstock="feedstock" />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import FeedstockRow from './FeedstockRow'

export default {
  components: {
    FeedstockRow
  },
  props: {
    feedstocks: {
      type: Array,
      required: true
    },
    toSelectFeedstock: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.setCustomAppBarTitle(this.$route.params.categoryName)
  },
  beforeDestroy() {
    this.clearCustomAppBarTitle(null)
  },
  methods: {
    ...mapMutations('app', ['setCustomAppBarTitle', 'clearCustomAppBarTitle']),
    handleItemClick(id) {
      console.log('TCL: handleItemClick -> id', id)
      if (this.toSelectFeedstock) {
        this.$router.replace({
          name: 'Recipe calculator',
          params: {
            id
          }
        })
      } else {
        this.$router.push({
          name: 'Feedstock',
          params: {
            id
          }
        })
      }
    }
  }
}
</script>

<style scoped></style>
