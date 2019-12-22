<template>
  <v-app>
    <nav-drawer :show-drawer="showDrawer" @closeDrawer="showDrawer = false" />
    <v-app-bar app color="primary">
      <v-btn text icon color="green" @click="leftButtonAction">
        <v-icon>{{ leftButtonIcon }}</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ currentAppTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <!-- <v-row align="center" justify="center">
          <v-col cols="12" > -->
        <!-- <v-row align="center" justify="center"> -->
        <router-view />
        <!-- </v-row> -->
        <!-- </v-col>
        </v-row> -->
      </v-container>
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
    ...mapGetters('app', ['newContentAvailable', 'getAppTitle']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp']),
    currentAppTitle() {
      return this.getAppTitle(this.$route.name)
    },
    leftButtonIcon() {
      return this.$route.name === 'Home' ? 'mdi-menu' : 'mdi-chevron-left'
    }
  },
  methods: {
    leftButtonAction() {
      if (this.$route.name === 'Home') {
        this.toggleDrawer()
      } else {
        this.$router.go(-1)
      }
    },
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
