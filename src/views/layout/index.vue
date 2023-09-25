<template>
    <div>
    <router-view></router-view>
        <van-tabbar route>
        <van-tabbar-item to="/home" icon="home-o">首頁</van-tabbar-item>
        <van-tabbar-item to="/category" icon="search">搜尋</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o">我的</van-tabbar-item>
        <van-tabbar-item to="/user" icon="setting-o">設定</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
  name: 'layoutIndex'
}
</script>

<style>

</style>
