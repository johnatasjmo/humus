<template>
  <div>
    <v-card style="width: 100%" class="pa-4">
      <Units />
      <v-divider></v-divider>
      <Language class="mt-2" />
      <Logout />
    </v-card>
  </div>
</template>

<script>
import Units from '@/components/Settings/Units'
import Language from '@/components/Settings/Language'
import Logout from '@/components/Settings/Logout'

export default {
  components: {
    Units,
    Language,
    Logout
  }
}
</script>

<style lang="scss" scoped></style>
