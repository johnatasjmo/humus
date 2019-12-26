<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="type"
            :rules="typeRules"
            :items="['1', '2']"
            label="Feedstock type"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="material"
            :rules="materialRules"
            label="Material"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="source"
            :rules="sourceRules"
            label="Source"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="reference" label="Reference"></v-text-field>
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
      type: null,
      typeRules: [v => !!v || 'Material type is required'],
      lastname: '',
      material: '',
      materialRules: [v => !!v || 'material is required'],
      source: '',
      sourceRules: [v => !!v || 'Source is required'],
      reference: ''
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
