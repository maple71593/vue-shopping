<template>
  <div class="home">
    <!-- 導航條 -->
    <van-nav-bar title="智慧商城" fixed />

    <!-- 搜索框 -->
    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      placeholder="請在此輸入搜索關鍵字"
      @click="$router.push('/search')"
    />

    <!-- 輪播圖 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item) in bannerList" :key="item.imgUrl">
        <img :src="item.imgUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 導航 -->
    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="item in navList" :key="item.imgUrl"
        :icon="item.imgUrl"
        text="新品首發"
        @click="$router.push('/category')"
      />
    </van-grid>

    <!-- 主會場 -->
    <div class="main">
      <img src="@/assets/main.png" alt="">
    </div>

    <!-- 猜你喜歡 -->
    <div class="guess">
      <p class="guess-title">—— 猜你喜歡 ——</p>
      <div class="goods-list">
        <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { GetHomeData } from '@/api/home'
export default {
  name: 'HomePage',
  data () {
    return {
      bannerList: [],
      navList: [],
      proList: []
    }
  },
  async created () {
    const res = await GetHomeData()
    const data = res.data.pageData.items
    this.bannerList = data[1].data
    this.navList = data[3].data
    this.proList = data[6].data
  },
  components: {
    GoodsItem
  }
}
</script>

<style lang="less" scoped>
// 主題 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 導航條樣式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框樣式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分類導航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主會場
.main img {
  display: block;
  width: 100%;
}

// 猜你喜歡
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品樣式
.goods-list {
  background-color: #f6f6f6;
}
</style>
