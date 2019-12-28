<template>
  <div style="width:100%">
    <div v-if="myFeedstocks && myFeedstocks.length === 0">
      You do not have feedstocks yet
    </div>
    <v-card v-else>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="feedstock in myFeedstocks"
            :key="feedstock.id"
            @click="
              $router.push({
                name: 'My feedstock',
                params: {
                  id: feedstock.id
                }
              })
            "
          >
            <v-list-item-content>
              <v-list-item-title
                v-text="feedstock.material"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-btn
      class="mx-2"
      fab
      dark
      color="accent"
      fixed
      right
      bottom
      @click="
        $router.push({
          name: 'Create Feedstock'
        })
      "
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
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
