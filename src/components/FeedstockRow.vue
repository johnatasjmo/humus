<template>
  <v-list-item-content>
    <v-list-item-title
      class="font-weight-medium"
      v-text="feedstock.material"
    ></v-list-item-title>
    <div class="flexContainer mt-1">
      <p class="flexItem2 customCondensed mb-2">
        N = {{ feedstock.nitrogen }}%
      </p>
      <p class="flexItem2 customCondensed mb-2">C = {{ feedstock.carbon }}%</p>
      <p class="flexItem1 customCondensed mb-2">
        CN = {{ feedstock.cn_ratio }}
      </p>
      <p class="flexItem2 customCondensed mb-2">
        BD = {{ feedstock.bulk_density_yd }} lb/cy
      </p>
      <p class="flexItem2 customCondensed mb-2">
        Moisture = {{ feedstock.moisture_content }}%
      </p>
      <p class="flexItem1 customCondensed mb-2"></p>
    </div>
    <!-- <v-container class="pa-0">
      <v-row justify="start">
        <v-col cols="4" class="customCondensed pt-1 pb-0 pr-0">
          N = {{ feedstock.nitrogen }}%
        </v-col>
        <v-col cols="4" class="customCondensed pt-1 pb-0 pr-0">
          C = {{ feedstock.carbon }}%
        </v-col>
        <v-col cols="4" class="customCondensed pt-1 pb-0 pr-0">
          CN = {{ feedstock.cn_ratio }}
        </v-col>
        <v-col cols="4" class="customCondensed pt-1 pb-0 pr-0">
          BD = {{ feedstock.bulk_density_yd }} lb/cy
        </v-col>
        <v-col cols="4" class="customCondensed pt-1 pb-0 pr-0">
          Moisture = {{ feedstock.moisture_content }}%
        </v-col>
      </v-row>
    </v-container> -->
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

<style scoped>
.customCondensed {
  font-family: Roboto !important;
  font-size: 0.74em !important;
  /* font-weight: 200 !important; */
  font-stretch: condensed !important;
}
.flexContainer {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.flexItem1 {
  flex: 1 0 20%;
}
.flexItem2 {
  flex: 2 0 35%;
  margin-right: 5px;
}
</style>
