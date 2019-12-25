<template>
  <v-stepper v-model="stepper">
    <v-stepper-header>
      <v-stepper-step
        :complete="stepper > 1"
        step="1"
        editable
      ></v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="stepper > 2"
        step="2"
        :editable="stepper > 2"
      ></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-form ref="form1" v-model="valid">
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
                <v-text-field
                  v-model="reference"
                  label="Reference"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-btn color="accent" block @click="validateForm1">
          Continue
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="accent" block @click="() => {}">
          Create feedstock
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      stepper: 0,
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
    validateForm1() {
      if (this.$refs.form1.validate()) {
        this.stepper = 2
      }
    }
  }
}
</script>

<style scoped></style>
