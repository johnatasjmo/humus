<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.nitrogen"
            v-mask="formMasks.twoDigitsTwoDecimals"
            :rules="validations.nitrogenRules"
            inputmode="numeric"
            label="Nitrogen (% dry weight)"
            placeholder="00.00"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.carbon"
            v-mask="formMasks.twoDigitsTwoDecimals"
            :rules="validations.carbonRules"
            inputmode="numeric"
            label="Carbon (Total, % dry weight)"
            placeholder="00.00"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.cn_ratio"
            :rules="validations.cnRatioRules"
            inputmode="numeric"
            label="C:N ratio"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.moisture_content"
            v-mask="formMasks.twoDigitsOneDecimal"
            :rules="validations.moistureContentRules"
            inputmode="numeric"
            label="Moisture (%)"
            placeholder="00.0"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.bulk_density_yd"
            :rules="validations.bulkDensityRules"
            inputmode="numeric"
            label="Bulk Density (lb/cy)"
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
import { mask } from 'vue-the-mask'

export default {
  directives: {
    mask
  },
  data() {
    return {
      valid: false,
      formMasks: {
        twoDigitsTwoDecimals: '##.##',
        twoDigitsOneDecimal: '##.#'
      },
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
        cnRatioRules: [
          v => !!v || 'C:N ratio is required',
          v => /^-?\d*(\.\d+)?$/.test(v) || 'C:N ratio must be a valid number',
          v => (v && v <= 1500) || 'C:N ratio must be less than 1500'
        ],
        moistureContentRules: [v => !!v || 'Moisture content is required'],
        bulkDensityRules: [
          v => !!v || 'Bulk density is required',
          v =>
            /^-?\d*(\.\d+)?$/.test(v) || 'Bulk density must be a valid number',
          v => (v && v.length <= 100) || 'Name must be less than 10 characters'
        ]
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
