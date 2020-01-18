<template>
  <div style="width:100%">
    <v-card style="width:100%">
      <v-container>
        <v-row justify="space-between" class="pa-4">
          <div class="title">
            Feedstocks
          </div>
          <v-btn fab dark small color="accent">
            <v-icon
              dark
              @click="
                $router.push({
                  name: 'Feedstocks',
                  params: {
                    toSelectFeedstock: true
                  }
                })
              "
              >mdi-plus</v-icon
            >
          </v-btn>
        </v-row>
      </v-container>
      <v-list>
        <v-list-item-group>
          <FeedstockItem :feedstock="getWater" />
          <FeedstockItem
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            :feedstock="ingredient"
          />
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import FeedstockItem from './FeedstockItem'

export default {
  components: {
    FeedstockItem
  },
  computed: {
    ...mapGetters('feedstocks', ['getFeedstockDetails']),
    ...mapState('recipe', ['ingredients']),
    getWater() {
      return this.getFeedstockDetails('water')
    }
  }
}
</script>

<style scoped></style>
