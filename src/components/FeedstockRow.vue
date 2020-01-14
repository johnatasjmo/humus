<template>
  <v-list-item-content>
    <v-list-item-title
      class="font-weight-medium"
      v-text="feedstock.material"
    ></v-list-item-title>
    <v-container class="pa-0">
      <v-row justify="start">
        <v-col cols="4" class="caption pt-1 pb-0 pr-0">
          N = {{ feedstock.nitrogen }}%
        </v-col>
        <v-col cols="4" class="caption pt-1 pb-0 pr-0">
          C = {{ feedstock.carbon }}%
        </v-col>
        <v-col cols="4" class="caption pt-1 pb-0 pr-0">
          CN = {{ feedstock.cn_ratio }}
        </v-col>
        <v-col cols="4" class="caption pt-1 pb-0 pr-0">
          BD = {{ feedstock.bulk_density_yd }} lb/cy
        </v-col>
        <v-col cols="4" class="caption pt-1 pb-0 pr-0">
          Moisture = {{ feedstock.moisture_content }}%
        </v-col>
      </v-row>
    </v-container>
  </v-list-item-content>
</template>

<script>
export default {
  props: {
    feedstock: {
      type: Object,
      required: true
    }
  }
}
</script>
