import { isNil } from 'lodash'
import router from '@/router'
import { createNewUserFromFirebaseAuthUser } from '@/misc/helpers'
import UsersDB from '@/firebase/users-db'

const fethLocalOrOnlineData = async (
  localStorageKey,
  action,
  mutation,
  dispatch
) => {
  const localDataString = localStorage.getItem(localStorageKey)
  let localData

  if (localDataString) {
    localData = JSON.parse(localDataString)
    console.log('TCL: localData1', localData)
  } else {
    console.log('TCL: action', action)
    localData = await dispatch(action, null, { root: true })
    console.log('TCL: localData2', localData)
    localStorage.setItem(localStorageKey, JSON.stringify(localData))
  }

  return localData
}

const compareLocalVersionsWithServer = async (
  localVersions,
  localFeedstocks,
  dispatch,
  commit
) => {
  const serverVersions = await dispatch(
    'feedstocks/getFeedstocksVersion',
    null,
    { root: true }
  )
  const localKeys = Object.keys(localVersions[0].versions)
  const localValues = Object.values(localVersions[0].versions)
  // const serverKeys = Object.keys(serverVersions[0].versions)
  const serverValues = Object.values(serverVersions[0].versions)

  const changes = localKeys.filter(
    (lk, index) => localValues[index] !== serverValues[index]
  )
  console.log('TCL: changes', changes)

  if (changes.length > 0) {
    changes.map(async id => {
      console.log('TCL: id', id)
      const feedStock = await dispatch('feedstocks/getFeedstockByID', id, {
        root: true
      })
      console.log('TCL: feedStock', feedStock)

      const indexToUpdate = localFeedstocks.findIndex(f => f.id === id)
      console.log(
        'BEFORE--->TCL: localFeedstocks[i]',
        localFeedstocks[indexToUpdate]
      )
      localFeedstocks[indexToUpdate] = feedStock
      console.log(
        'AFTER--->TCL: localFeedstocks[i]',
        localFeedstocks[indexToUpdate]
      )
      console.log('TCL: localFeedstocks', localFeedstocks)

      // updating feedstocks local Storage & VUEX
      localStorage.setItem('feedstocks', JSON.stringify(localFeedstocks))
      commit('feedstocks/setFeedstocks', localFeedstocks, { root: true })

      // updating versions feedstocks local Storage & VUEX
      localStorage.setItem(
        'feedstocks_versions',
        JSON.stringify(serverVersions)
      )
      commit('feedstocks/setFeedstocksVersions', serverVersions, { root: true })
    })
  }
}

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

    // Getting local feedstocks or consulting from firestore
    const feedstocks = await fethLocalOrOnlineData(
      'feedstocks',
      'feedstocks/getAdminGeneralFeedstocks',
      'feedstocks/setFeedstocks',
      dispatch
    )
    console.log('TCL: feedstocks', feedstocks)

    // Getting feedstocks versions or consulting from firestore
    const feedstocksVersions = await fethLocalOrOnlineData(
      'feedstocks_versions',
      'feedstocks/getFeedstocksVersion',
      'feedstocks/setFeedstocks',
      dispatch
    )
    compareLocalVersionsWithServer(
      feedstocksVersions,
      feedstocks,
      dispatch,
      commit
    )
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
