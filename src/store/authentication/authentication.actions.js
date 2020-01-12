import { isNil } from 'lodash'
import router from '@/router'
import { createNewUserFromFirebaseAuthUser } from '@/misc/helpers'
import UsersDB from '@/firebase/users-db'

const updateFeedstocksLocal = async (serverFeedstocks, commit) => {
  localStorage.setItem('feedstocks', JSON.stringify(serverFeedstocks))
  commit('feedstocks/setFeedstocks', serverFeedstocks, { root: true })
}

const updateFeedstocksVersionsLocal = async (serverVersions, commit) => {
  localStorage.setItem('feedstocks_versions', JSON.stringify(serverVersions))
  commit('feedstocks/setFeedstocksVersions', serverVersions, { root: true })
}

const getFeedstockByIDAndUpdateLocal = async (
  id,
  localFeedstocks,
  serverVersions,
  commit,
  dispatch
) => {
  const feedStock = await dispatch('feedstocks/getFeedstockByID', id, {
    root: true
  })

  if (feedStock) {
    const indexToUpdate = localFeedstocks.findIndex(f => f.id === id)

    console.log('BEFORE', localFeedstocks[indexToUpdate])
    localFeedstocks[indexToUpdate] = feedStock
    console.log('AFTER', localFeedstocks[indexToUpdate])

    // updating feedstocks local Storage & VUEX
    updateFeedstocksLocal(localFeedstocks, commit)

    // updating versions feedstocks local Storage & VUEX
    updateFeedstocksVersionsLocal(serverVersions, commit)
  }
}

const removeFeedstockByIdsFromLocal = (
  ids,
  localFeedstocks,
  serverVersions,
  commit
) => {
  const feedstocksFiltered = localFeedstocks.filter(lf =>
    ids.every(id => lf.id !== id)
  )
  console.log(
    'TCL: removeFeedstockByIdsFromLocal -> feedstocksFiltered',
    feedstocksFiltered
  )
  localFeedstocks = feedstocksFiltered

  // updating feedstocks local Storage & VUEX
  updateFeedstocksLocal(localFeedstocks, commit)

  // updating versions feedstocks local Storage & VUEX
  updateFeedstocksVersionsLocal(serverVersions, commit)
}

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
  const serverKeys = Object.keys(serverVersions[0].versions)
  const serverValues = Object.values(serverVersions[0].versions)

  // Comparing lengths
  if (localValues.length !== serverValues.length) {
    const keysToAdd = serverKeys.filter(id =>
      localKeys.every(id2 => id !== id2)
    )
    console.log('TCL: keysToAdd', keysToAdd)

    const keysToRemove = localKeys.filter(id =>
      serverKeys.every(id2 => id !== id2)
    )
    console.log('TCL: keysToRemove', keysToRemove)

    if (keysToAdd.length > 0) {
      keysToAdd.map(id => {
        getFeedstockByIDAndUpdateLocal(
          id,
          localFeedstocks,
          serverVersions,
          commit,
          dispatch
        )
        return null
      })
    }

    if (keysToRemove.length > 0) {
      removeFeedstockByIdsFromLocal(
        keysToRemove,
        localFeedstocks,
        serverVersions,
        commit
      )
    }

    return
  }

  const changes = localKeys.filter(
    (lk, index) => localValues[index] !== serverValues[index]
  )
  console.log('TCL: changes', changes)

  if (changes.length > 0) {
    changes.map(async id => {
      getFeedstockByIDAndUpdateLocal(
        id,
        localFeedstocks,
        serverVersions,
        commit,
        dispatch
      )
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
    commit('feedstocks/setFeedstocks', feedstocks, { root: true })

    // Getting feedstocks versions or consulting from firestore
    const feedstocksVersions = await fethLocalOrOnlineData(
      'feedstocks_versions',
      'feedstocks/getFeedstocksVersion',
      'feedstocks/setFeedstocks',
      dispatch
    )
    commit('feedstocks/setFeedstocksVersions', feedstocksVersions, {
      root: true
    })
    compareLocalVersionsWithServer(
      feedstocksVersions,
      feedstocks,
      dispatch,
      commit
    )

    // Getting My feedstocks from firestore
    await dispatch('feedstocks/getMyFeedstocks', null, { root: true })
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
