<template>
  <div style="width:100%">
    <v-card class="mx-auto" max-width="500">
      <!-- <v-card-title class="headline">
        {{ feedstockDetails.material }}
      </v-card-title>
      <v-card-subtitle v-if="feedstockDetails.source">
        source: {{ feedstockDetails.source }}
      </v-card-subtitle> -->
      <div
        class="d-flex justify-space-between "
        style="background-color: #4b2c20; color: white"
      >
        <div>
          <v-card-title class="title">
            feedstockDetails.material
          </v-card-title>
          <v-card-subtitle style="color:white">
            source: {{ feedstockDetails.source }}
          </v-card-subtitle>
        </div>
      </div>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="9">
            <span class="font-weight-bold">
              Nitrogen (% dry/weight)
            </span>
          </v-col>
          <v-col cols="3">
            <div class="font-weight-bold text-end">
              {{ feedstockDetails.nitrogen }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <span class="font-weight-bold">
              Carbon (Total, % dry/weight)
            </span>
          </v-col>
          <v-col cols="3">
            <div class="font-weight-bold text-end">
              {{ feedstockDetails.carbon }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <span class="font-weight-bold">
              C:N ratio
            </span>
          </v-col>
          <v-col cols="3">
            <div class="font-weight-bold text-end">
              {{ feedstockDetails.cn_ratio }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <span class="font-weight-bold">
              Moisture (%)
            </span>
          </v-col>
          <v-col cols="3">
            <div class="font-weight-bold text-end">
              {{ feedstockDetails.moisture_content }}
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="9">
            <span class="font-weight-bold">
              Bulk density (lb/cy)
            </span>
          </v-col>
          <v-col cols="3">
            <div class="font-weight-bold text-end">
              {{ feedstockDetails.bulk_density_yd }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    feedstockDetails: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
