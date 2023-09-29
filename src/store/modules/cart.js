import { GetCartList, GetCartListDataUp, DelIDList } from '@/api/cart'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
    // 計算是否選中 (isChecked = ture)
    setNum (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 計算商品總數
    totelAll (state) {
      return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 計算選中商品的數量
    AllNum (state, getters) {
      return getters.setNum.reduce((sum, item) => sum + item.goods_num, 0)
    },
    // 計算選中商品的總價格
    AllMon (state, getters) {
      return getters.setNum.reduce((sum, item) => sum + item.goods_num * item.goods.goods_price_min, 0)
    },
    // 全選功能 是否全選
    Allcheck (state) {
      return state.cartList.every(item => item.isChecked)
    }

  },
  mutations: {
    DataUpCarList (state, NewState) {
      state.cartList = NewState
    },
    ChangeChecked (state, NowisChecked) {
      state.cartList.forEach(item => { item.isChecked = NowisChecked })
    },
    // 每個item項的反選功能
    ChangeCheckedSM (state, id) {
      const good = state.cartList.find(item => item.goods_id === id)
      good.isChecked = !good.isChecked
    },
    ChangeListData (state, { goodsNum, goodsId }) {
      const changeGood = state.cartList.find(item => item.goods_id === goodsId)
      changeGood.goods_num = goodsNum
    }
  },
  actions: {
    async GetCartListData (context) {
      const { data } = await GetCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('DataUpCarList', data.list)
      console.log(data.list)
    },
    async GetCartListDaUpctions (context, { goodsNum, goodsId, goodsSkuId }) {
      context.commit('ChangeListData', { goodsNum, goodsId })
      await GetCartListDataUp(goodsId, goodsNum, goodsSkuId)
    },
    async Del (context) {
      const DelID = context.getters.setNum.map(item => item.id)
      console.log(DelID)
      await DelIDList(DelID)
      context.dispatch('GetCartListData')
    }
  },
  modules: {
  }
}
