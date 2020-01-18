<template>
  <div style="width:100%">
    <v-card style="width:100%">
      <div class="title pa-2">
        Feedstocks
      </div>
      <v-list>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content>
              <FeedstockItem :feedstock="getWater" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FeedstockItem from './FeedstockItem'

export default {
  components: {
    FeedstockItem
  },
  computed: {
    ...mapGetters('feedstocks', ['getFeedstockDetails']),
    getWater() {
      return this.getFeedstockDetails('water')
    }
  }
}
</script>

<style scoped></style>
