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
                class="font-weight-medium"
                v-text="feedstock.material"
              ></v-list-item-title>
              <v-container class="pa-0">
                <v-row justify="start">
                  <v-col cols="4" class="caption pt-1 pb-0">
                    N = {{ feedstock.nitrogen }}%
                  </v-col>
                  <v-col cols="4" class="caption pt-1 pb-0">
                    C = {{ feedstock.carbon }}%
                  </v-col>
                  <v-col cols="4" class="caption pt-1 pb-0">
                    CN = {{ feedstock.cn_ratio }}
                  </v-col>
                  <v-col cols="4" class="caption pt-1 pb-0">
                    Moisture = {{ feedstock.moisture_content }}%
                  </v-col>
                  <v-col cols="4" class="caption pt-1 pb-0">
                    Density = {{ feedstock.bulk_density_yd }} lb/cy
                  </v-col>
                </v-row>
              </v-container>
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
