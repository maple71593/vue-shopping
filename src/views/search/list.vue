<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序選項按鈕 -->
    <div class="sort-btns">
      <div class="sort-item">綜合</div>
      <div class="sort-item">銷量</div>
      <div class="sort-item">價格 </div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="(item) in searchlist" :key="item.good_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import { GetSearchData } from '@/api/search'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'SearchIndex',
  data () {
    return {
      page: 1,
      searchlist: []
    }
  },
  components: {
    GoodsItem
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  },
  async created () {
    const { data: { list } } = await GetSearchData({
      categoryId: this.$route.query.categoryId,
      goodsName: this.querySearch,
      page: this.page
    })
    this.searchlist = list.data
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品樣式
.goods-list {
  background-color: #f6f6f6;
}
</style>
