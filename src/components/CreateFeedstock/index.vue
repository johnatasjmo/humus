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
        <Form1 @formValid="values => nextStep(values)" />
      </v-stepper-content>

      <v-stepper-content step="2">
        <Form2 @formValid="values => createFeedstock(values)" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Form1 from './Form1'
import Form2 from './Form2'

export default {
  components: {
    Form1,
    Form2
  },
  data() {
    return {
      stepper: 1,
      values: {}
    }
  },
  methods: {
    createFeedstock(values) {
      this.setValues(values)
    },
    nextStep(values) {
      this.setValues(values)
      this.stepper += 1
    },
    setValues(values) {
      this.values = {
        ...values,
        ...this.values
      }
    }
  }
}
</script>

<style scoped></style>
