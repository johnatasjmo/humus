<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item-group>
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
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('feedstocks', ['feedstocksByCategory'])
  },
  mounted() {
    this.setCustomAppBarTitle(this.$route.params.categoryName)
  },
  beforeDestroy() {
    this.clearCustomAppBarTitle(null)
  },
  methods: {
    ...mapMutations('app', ['setCustomAppBarTitle', 'clearCustomAppBarTitle'])
  }
}
</script>

<style scoped></style>
