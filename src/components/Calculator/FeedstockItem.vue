<template>
  <v-list-item>
    <v-list-item-content>
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
    </v-list-item-content>
    <v-list-item-icon>
      <Dialog>
        <template slot="activator">
          <v-btn text icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <template slot="title">
          Delete
        </template>
        <template>
          ¿Do you want to delete the feedstock?
        </template>
        <template slot="actions">
          <v-btn text>Cancel</v-btn>
          <v-btn color="red" dark @click="() => {}">Delete</v-btn>
        </template>
      </Dialog>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import Dialog from '../Dialog'

export default {
  components: {
    Dialog
  },
  props: {
    feedstock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
