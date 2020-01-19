<template>
  <v-list-item>
    <v-list-item-content>
      <div style="width:100%" class="d-flex justify-space-between align-center">
        <div>
          {{ feedstock.material }}
        </div>
        <div class="d-flex justify-end align-center" style="width:80px">
          <div style="width: 30px">
            <v-text-field dense class="caption" />
          </div>
          <div class="caption ml-2">
            {{ unit }}
          </div>
        </div>
      </div>
    </v-list-item-content>
    <v-list-item-icon v-if="feedstock.id !== 'water'">
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
          ¿Do you want to delete the feedstock {{ feedstock.material }}?
        </template>
        <template slot="actions">
          <v-btn text>Cancel</v-btn>
          <v-btn color="red" dark @click="removeIngredient(feedstock.id)"
            >Delete</v-btn
          >
        </template>
      </Dialog>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import { mapMutations } from 'vuex'
import Dialog from '../Dialog'

export default {
  components: {
    Dialog
  },
  props: {
    feedstock: {
      type: Object,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations('recipe', ['removeIngredient'])
  }
}
</script>

<style lang="scss" scoped></style>
