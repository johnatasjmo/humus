<template>
  <div class="text-center">
    <v-snackbar v-model="show" :color="color">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('snackbar', ['show', 'color', 'text'])
  },
  watch: {
    show(val) {
      if (val) {
        this.resetSnackbar()
      }
    }
  },
  methods: {
    ...mapMutations('snackbar', ['resetSnackbar'])
  }
}
</script>

<style lang="scss" scoped></style>
