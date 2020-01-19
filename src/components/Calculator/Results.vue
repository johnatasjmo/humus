<template>
  <div style="width:100%">
    <v-card style="width:100%">
      <div
        class="d-flex justify-space-between "
        style="background-color: #4caf50; color: white"
      >
        <div>
          <v-card-title class="title">
            Recipe Results
          </v-card-title>
          <v-card-subtitle style="color:white">
            {{ feedstocks.length }} feedstocks
          </v-card-subtitle>
        </div>
        <div class="d-flex justify-center align-start ma-3">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text icon v-on="on">
                <v-icon color="white">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="resetIngredients">
                <v-list-item-title>Reset</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-card-text>
        <v-row justify="space-between" class="pl-2 pr-2">
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold"> </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              Results
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold text-truncate">
              Recommended
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              Moisture C:N
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              27:1
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold">
              20:1 - 40:1
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              Moisture
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              63.5%
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold">
              40 - 65%
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              Bulk density
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold" style="color:black">
              1.003 lb/cy
            </span>
          </v-col>
          <v-col cols="4" class="pr-0 pb-0 pl-1">
            <span class="font-weight-bold">
              800 - 1,000 lb/cy
            </span>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn color="accent">Save</v-btn>
        </v-row>
      </v-card-text>
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
  methods: {
    ...mapMutations('recipe', ['resetIngredients'])
  }
}
</script>

<style lang="scss" scoped></style>
