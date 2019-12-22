<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="category in feedstocksCategories"
          :key="category.id"
          @click="
            $router.push({
              name: 'Material',
              params: { categoryId: category.id, categoryName: category.name }
            })
          "
        >
          <v-list-item-icon>
            <v-icon v-text="category.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="category.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('feedstocks', ['feedstocksCategories'])
  }
}
</script>

<style scoped></style>
