<template>
  <div style="width:100%">
    <v-card class="mx-auto" max-width="500">
      <v-card-title class="headline">
        {{ feedstockDetails.material }}
      </v-card-title>
      <v-card-subtitle v-if="feedstockDetails.source">
        source: {{ feedstockDetails.source }}
      </v-card-subtitle>
      <v-card-text>
        <v-row justify="space-between">
          <v-col cols="9">
            <span class="font-weight-bold">
              Nitrogen % (dry/weight)
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
              Carbon % (dry/weight)
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
              Moisture content % (wet weight)
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
              Bulk density (pound per cubic yard)
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
