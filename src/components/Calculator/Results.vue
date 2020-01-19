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
          <v-btn text icon>
            <v-icon color="white">mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </div>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="9">
            <span class="font-weight-bold">
              More data
            </span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    feedstocks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
