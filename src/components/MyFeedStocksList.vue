<template>
  <div style="width:100%">
    <div v-if="myFeedstocks && myFeedstocks.length === 0">
      You do not have feedstocks yet
    </div>
    <v-card v-else>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="feedstock in myFeedstocks" :key="feedstock.id">
            <v-list-item-content
              @click="
                $router.push({
                  name: 'My feedstock',
                  params: {
                    id: feedstock.id
                  }
                })
              "
            >
              <v-list-item-title
                v-text="feedstock.material"
              ></v-list-item-title>
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
                  ¿Do you want to delete the feedstock {{ feedstock.material }}?
                </template>
                <template slot="actions">
                  <v-btn text @click="dialog = false">Cancel</v-btn>
                  <v-btn color="red" dark @click="dialog = false">Delete</v-btn>
                </template>
              </Dialog>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-btn
      class="mx-2"
      fab
      dark
      color="accent"
      fixed
      right
      bottom
      @click="
        $router.push({
          name: 'Create Feedstock'
        })
      "
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Dialog from '@/components/Dialog'

export default {
  components: {
    Dialog
  },
  computed: {
    ...mapState('feedstocks', ['myFeedstocks'])
  }
}
</script>

<style scoped></style>
