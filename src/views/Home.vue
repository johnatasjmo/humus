<template>
  <div>
    <div style="width: 100%" class="pa-4">
      <v-row justify="center">
        <v-btn
          color="primary"
          @click="$router.push({ name: 'Recipe calculator' })"
        >
          go to calculator</v-btn
        >
      </v-row>
      <v-row justify="center" class="mt-5">
        <v-btn color="primary" large disabled>
          Sponsor: Your Logo/Link Here
        </v-btn>
      </v-row>
      <v-row justify="center" class="mt-5">
        <v-btn color="primary" href="mailto:compostcalc@gmail.com">
          Contact us
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
/* @import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
} */
</style>
