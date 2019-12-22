<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item-group v-model="item">
        <v-list-item
          v-for="feedstock in feedstocksByCategory"
          :key="feedstock.id"
          @click="
            $router.push({
              name: 'Material',
              params: { feedstockId: feedstock.id }
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
  data() {
    return {
      item: 1
    }
  },
  computed: {
    ...mapState('feedstocks', ['feedstocksByCategory'])
  }
}
</script>

<style scoped></style>
