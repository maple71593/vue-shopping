import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      setUserID: getInfo()
    }
  },
  getters: {
  },
  mutations: {
    setID (state, obj) {
      state.setUserID = obj
      setInfo(obj)
    }
  },
  actions: {
  },
  modules: {
  }
}
