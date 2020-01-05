import { isNil } from 'lodash'
import router from '@/router'
import { createNewUserFromFirebaseAuthUser } from '@/misc/helpers'
import UsersDB from '@/firebase/users-db'

export default {
  /**
   * Callback fired when user login
   */
  login: async ({ commit, dispatch }, firebaseAuthUser) => {
    const userFromFirebase = await new UsersDB().read(firebaseAuthUser.uid)

    const user = isNil(userFromFirebase)
      ? await createNewUserFromFirebaseAuthUser(firebaseAuthUser)
      : userFromFirebase

    commit('setUser', user)
    // dispatch('products/getUserProducts', null, { root: true })
    const localFeedstocksString = localStorage.getItem('feedstocks')
    let localFeedstocks

    if (localFeedstocksString) {
      localFeedstocks = JSON.parse(localFeedstocksString)
      console.log('TCL: localFeedstocks1', localFeedstocks)
    } else {
      localFeedstocks = await dispatch(
        'feedstocks/getAdminGeneralFeedstocks',
        null,
        { root: true }
      )
      console.log('TCL: localFeedstocks2', localFeedstocks)
      localStorage.setItem('feedstocks', JSON.stringify(localFeedstocks))
    }

    commit('feedstocks/setFeedstocks', localFeedstocks, { root: true })
  },

  /**
   * Callback fired when user logout
   */
  logout: ({ commit }) => {
    commit('setUser', null)
    commit('products/setProducts', null, { root: true })

    const currentRouter = router.app.$route
    if (!(currentRouter.meta && currentRouter.meta.authNotRequired)) {
      router.push('/login')
    }
  }
}
