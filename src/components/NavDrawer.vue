<template>
  <v-navigation-drawer
    v-model="showDrawerComputed"
    app
    @input="checkHideDrawer"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    showDrawer: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-calculator',
          title: 'Calculator'
        },
        {
          icon: 'mdi-sprout',
          title: 'Feedstocks'
        },
        {
          icon: 'mdi-leaf',
          title: 'myFeedstocks'
        },
        {
          icon: 'mdi-chart-bar',
          title: 'myResults'
        },
        {
          icon: 'mdi-settings',
          title: 'Settings'
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
