<template>
  <div v-if="myFeedstocks && myFeedstocks.length === 0">
    You do not have feedstocks yet
  </div>
  <v-card v-else class="mx-auto">
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="feedstock in myFeedstocks"
          :key="feedstock.id"
          @click="
            $router.push({
              name: 'Feedstock',
              params: {
                id: feedstock.id,
                categoryId: feedstock.material_type
              }
            })
          "
        >
          <v-list-item-content>
            <v-list-item-title v-text="feedstock.material"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('feedstocks', ['myFeedstocks'])
  }
}
</script>

<style scoped></style>