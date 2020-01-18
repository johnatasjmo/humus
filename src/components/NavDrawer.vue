<template>
  <v-navigation-drawer
    v-model="showDrawerComputed"
    app
    @input="checkHideDrawer"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Compost calculator
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="item.action"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import router from '../router'

export default {
  props: {
    showDrawer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selectedItem: 0,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          action() {
            router.push({ name: 'Home' }).catch(err => {
              console.log('TCL: action -> err', err)
            })
          }
        },
        {
          icon: 'mdi-calculator',
          title: 'Calculator',
          action() {
            router.push({ name: 'Recipe calculator' }).catch(err => {
              console.log('TCL: action -> err', err)
            })
          }
        },
        {
          icon: 'mdi-format-list-bulleted',
          title: 'Feedstocks',
          action() {
            router.push({ name: 'Feedstocks' }).catch(err => {
              console.log('TCL: action -> err', err)
            })
          }
        },
        {
          icon: 'mdi-star',
          title: 'myFeedstocks',
          action() {
            router.push({ name: 'My Feedstocks' }).catch(err => {
              console.log('TCL: action -> err', err)
            })
          }
        },
        {
          icon: 'mdi-chart-bar',
          title: 'myResults',
          action() {}
        },
        {
          icon: 'mdi-settings',
          title: 'Settings',
          action() {}
        }
      ]
    }
  },
  computed: {
    showDrawerComputed: {
      get() {
        return this.showDrawer
      },
      set() {
        return null
      }
    }
  },
  methods: {
    checkHideDrawer(show) {
      if (!show) {
        this.$emit('closeDrawer')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
