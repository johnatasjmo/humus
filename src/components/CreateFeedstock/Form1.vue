<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="formValues.material_type"
            :rules="validations.typeRules"
            :items="['1', '2']"
            label="Feedstock type"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.material"
            :rules="validations.materialRules"
            label="Material"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.source"
            :rules="validations.sourceRules"
            label="Source"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formValues.reference"
            label="Reference"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="accent" block @click="validate">
      Continue
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      formValues: {
        material_type: null,
        material: '',
        source: '',
        reference: ''
      },
      validations: {
        typeRules: [v => !!v || 'Material type is required'],
        materialRules: [v => !!v || 'material is required'],
        sourceRules: [v => !!v || 'Source is required']
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
