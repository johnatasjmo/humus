<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.nitrogen"
            v-mask="formMasks.twoDigitsTwoDecimals"
            :rules="validations.nitrogenRules"
            type="number"
            inputmode="numeric"
            label="Nitrogen % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.carbon"
            v-mask="formMasks.twoDigitsTwoDecimals"
            :rules="validations.carbonRules"
            type="number"
            inputmode="numeric"
            label="Carbon % (dry weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.cn_ratio"
            :rules="validations.cnRatioRules"
            inputmode="numeric"
            label="C:N ratio (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.moisture_content"
            v-mask="formMasks.twoDigitsOneDecimal"
            :rules="validations.moistureContentRules"
            type="number"
            inputmode="numeric"
            label="Moisture content (weight to weight)"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.bulk_density_yd"
            :rules="validations.bulkDensityRules"
            inputmode="numeric"
            label="Bulk density (lb/cy)"
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
        nitrogen: '0000',
        carbon: '0000',
        cn_ratio: null,
        moisture_content: '000',
        bulk_density_yd: null
      },
      validations: {
        nitrogenRules: [
          v => !!v || 'Nitrogen is required',
          v =>
            (!!v && !!v.match(/^-?\d*(\.\d+)?$/)) ||
            'Value should be a valid number',
          v => (v && v >= 0) || 'Nitrogen cannot be negative',
          v => (v && v <= 100) || 'Nitrogen must be less than 100'
        ],
        carbonRules: [
          v => !!v || 'Carbon is required',
          v =>
            (!!v && !!v.match(/^-?\d*(\.\d+)?$/)) ||
            'Value should be a valid number',
          v => (v && v >= 0) || 'Carbon cannot be negative',
          v => (v && v <= 100) || 'Carbon must be less than 100'
        ],
        cnRatioRules: [
          v => !!v || 'C:N ratio is required',
          v => /^-?\d*(\.\d+)?$/.test(v) || 'C:N ratio must be a valid number',
          v => (v && v <= 1500) || 'C:N ratio must be less than 1500'
        ],
        moistureContentRules: [
          v => !!v || 'Moisture content is required',
          v =>
            (!!v && !!v.match(/^-?\d*(\.\d+)?$/)) ||
            'Value should be a valid number',
          v => (v && v <= 100) || 'Name must be less than 10 characters'
        ],
        bulkDensityRules: [
          v => !!v || 'Bulk density is required',
          v => /^-?\d*(\.\d+)?$/.test(v) || 'Value must be a valid number',
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
