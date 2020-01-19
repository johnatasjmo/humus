<template>
  <v-list-item>
    <v-list-item-content>
      <div style="width:100%" class="d-flex justify-space-between align-center">
        <div
          style="width:100%; height:100%"
          @click.stop="
            $router.push({
              name: 'Feedstock',
              params: {
                id: feedstock.id,
                categoryId: feedstock.material_type
              }
            })
          "
        >
          {{ feedstock.material }}
        </div>
        <div class="d-flex justify-end align-center" style="width:80px">
          <div style="width: 30px">
            <v-text-field v-model="quantity" dense class="caption" />
          </div>
          <div class="caption ml-2">
            {{ feedstock.id === 'water' ? 'Gallons' : unit }}
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
import { mapMutations, mapGetters } from 'vuex'
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
  computed: {
    quantity: {
      get() {
        return this.getIngredientValueById()(this.feedstock.id)
      },
      set(quantity) {
        this.setIngredentQuantity({
          id: this.feedstock.id,
          quantity
        })
      }
    }
  },
  methods: {
    ...mapMutations('recipe', ['removeIngredient', 'setIngredentQuantity']),
    ...mapGetters('recipe', ['getIngredientValueById'])
  }
}
</script>

<style lang="scss" scoped></style>
