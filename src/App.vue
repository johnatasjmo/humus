<template>
  <v-app>
    <nav-drawer :show-drawer="showDrawer" @closeDrawer="showDrawer = false" />
    <v-app-bar app color="primary" dark>
      <v-btn text icon color="green" @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view />
      <new-content-available-toastr
        v-if="newContentAvailable"
        class="new-content-available-toastr"
        :refreshing-app="refreshingApp"
        @refresh="serviceWorkerSkipWaiting"
      ></new-content-available-toastr>
      <apple-add-to-home-screen-modal
        v-if="showAddToHomeScreenModalForApple"
        class="apple-add-to-home-screen-modal"
        @close="closeAddToHomeScreenModalForApple(false)"
      >
      </apple-add-to-home-screen-modal>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import NavDrawer from '@/components/NavDrawer'

export default {
  name: 'App',
  components: {
    NewContentAvailableToastr,
    AppleAddToHomeScreenModal,
    NavDrawer
  },
  data() {
    return {
      showDrawer: true
    }
  },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ])
  }
}
</script>

<style lang="scss" scoped>
body {
  #app {
    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
</style>
