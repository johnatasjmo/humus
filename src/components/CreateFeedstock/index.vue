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
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('authentication', ['user'])
  },
  methods: {
    createFeedstock(values) {
      this.setValues(values)
      this.addExtraValues()
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
    },
    addExtraValues() {
      // eslint-disable-next-line camelcase
      const bulk_density_m =
        parseInt(this.values.bulk_density_yd, 10) * (0.593276).toFixed(2)

      this.values = {
        ...this.values,
        bulk_density_m,
        creator: this.user.id,
        public: true
      }
    }
  }
}
</script>

<style scoped></style>
