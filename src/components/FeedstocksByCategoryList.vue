<template>
  <div style="width:100%">
    <v-card style="width:100%">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="feedstock in feedstocks"
            :key="feedstock.id"
            @click="
              $router.push({
                name: 'Feedstock',
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
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    feedstocks: {
      type: Array,
      required: true
    }
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
