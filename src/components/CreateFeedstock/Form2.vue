<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="nitrogen"
            :rules="nitrogenRules"
            label="Nitrogen % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="carbon"
            :rules="carbonRules"
            label="Carbon % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cnRatio"
            :rules="cnRatioRules"
            label="C:N ratio (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="moistureContent"
            :rules="moistureContentRules"
            label="Moisture content (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="bulkDensity"
            :rules="bulkDensityRules"
            label="Bulk density (pound per cubic)"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="accent" block @click="validate">
      Create feedstock
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      nitrogen: null,
      nitrogenRules: [v => !!v || 'Nitrogen is required'],
      carbon: null,
      carbonRules: [v => !!v || 'Carbon is required'],
      cnRatio: null,
      cnRatioRules: [v => !!v || 'C:N ratio is required'],
      moistureContent: null,
      moistureContentRules: [v => !!v || 'Moisture content is required'],
      bulkDensity: null,
      bulkDensityRules: [v => !!v || 'Bulk density is required']
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit('formValid')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
