<template>
  <v-card v-if="feedstockDetails" class="mx-auto" max-width="500">
    <v-card-text>
      <p class="display-1 text--primary">
        {{ feedstockDetails.material }}
      </p>
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
            {{ feedstockDetails.bulk_density }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('feedstocks', ['feedstockDetails'])
  }
}
</script>

<style lang="scss" scoped></style>
