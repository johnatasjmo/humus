<template>
  <FeedstocksCategoriesList :feedstocks-categories="feedstocksCategories" />
</template>

<script>
import FeedstocksCategoriesList from '@/components/FeedstocksCategoriesList'

export default {
  components: {
    FeedstocksCategoriesList
  },
  data: () => ({
    feedstocksCategories: {
      crop_residues: {
        id: 'crop_residues',
        icon: 'mdi-sprout',
        name: 'Crop residues & processing wastes'
      },
      fish_meat_animal: {
        id: 'fish_meat_animal',
        icon: 'mdi-fish',
        name: 'Fish, meat and animal by products'
      },
      manures: {
        id: 'manures',
        icon: 'mdi-recycle',
        name: 'Manures'
      },
      municipal_food_waste: {
        id: 'municipal_food_waste',
        icon: 'mdi-silverware-fork-knife',
        name: 'Municipal and food waste'
      },
      other: {
        id: 'other',
        icon: 'mdi-cookie',
        name: 'Other'
      },
      paper: {
        id: 'paper',
        icon: 'mdi-paper-roll',
        name: 'Paper'
      },
      straw_hay_silage: {
        id: 'straw_hay_silage',
        icon: 'mdi-barley',
        name: 'Straw, hay silage'
      },
      wood_and_paper: {
        id: 'wood_and_paper',
        icon: 'mdi-tree',
        name: 'Wood and paper'
      },
      yard_trimmings: {
        id: 'yard_trimmings',
        icon: 'mdi-leaf',
        name: 'yard trimmings and other vegetation'
      }
    }
  })
}
</script>

<style lang="scss" scoped></style>
