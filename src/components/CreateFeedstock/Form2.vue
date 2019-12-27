<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.nitrogen"
            :rules="validations.nitrogenRules"
            label="Nitrogen % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.carbon"
            :rules="validations.carbonRules"
            label="Carbon % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.cn_ratio"
            :rules="validations.cnRatioRules"
            label="C:N ratio (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.moisture_content"
            :rules="validations.moistureContentRules"
            label="Moisture content (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.bulk_density_yd"
            :rules="validations.bulkDensityRules"
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
      formValues: {
        nitrogen: null,
        carbon: null,
        cn_ratio: null,
        moisture_content: null,
        bulk_density_yd: null
      },
      validations: {
        nitrogenRules: [v => !!v || 'Nitrogen is required'],
        carbonRules: [v => !!v || 'Carbon is required'],
        cnRatioRules: [v => !!v || 'C:N ratio is required'],
        moistureContentRules: [v => !!v || 'Moisture content is required'],
        bulkDensityRules: [v => !!v || 'Bulk density is required']
      }
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit('formValid', this.formValues)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
