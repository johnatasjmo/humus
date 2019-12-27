<template>
  <v-progress-circular
    v-if="loading"
    indeterminate
    color="green"
  ></v-progress-circular>
  <v-stepper v-else v-model="stepper">
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
import { mapState, mapActions } from 'vuex'
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
      values: {},
      loading: false
    }
  },
  computed: {
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapActions('feedstocks', ['insertFeedstock']),
    async createFeedstock(values) {
      this.setValues(values)
      this.addExtraValues()
      try {
        this.loading = true
        const id = await this.insertFeedstock(this.values)
        this.loading = false
        this.$router.replace({
          name: 'Feedstock',
          params: {
            categoryId: this.values.material_type,
            id
          }
        })
      } catch (error) {
        this.loading = false
        console.log('TCL: createFeedstock -> error', error)
      }
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
