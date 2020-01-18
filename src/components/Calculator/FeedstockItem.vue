<template>
  <v-container class="pa-0">
    <v-row justify="start">
      <v-col cols="8" class="caption pr-0">
        {{ feedstock.material }}
      </v-col>
      <v-col cols="2" class="caption pr-0">
        <v-text-field />
      </v-col>
      <v-col cols="2" class="caption pr-0">
        yd3
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    feedstock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
