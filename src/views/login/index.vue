<template>
  <div>
  <div class="login">
    <van-nav-bar title="會員登錄" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手機號登錄</h3>
        <p>未註冊的手機號登錄後將自動註冊</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="phone" class="inp" maxlength="10" placeholder="請輸入手機號碼" type="text">
        </div>
        <div class="form-item">
          <input v-model="PicCode" class="inp" maxlength="4" placeholder="請輸入圖形驗證碼" type="text">
          <img :src="PicUrl" @click="PicServer" alt="">
        </div>
        <div class="form-item">
          <input class="inp" v-model="smsCode" placeholder="請輸入短信驗證碼" type="text">
          <button @click="GetPhoneCode">{{setFirstTime === FirstTime? '獲取驗證碼':'倒數'+ setFirstTime +'秒' }}</button>
        </div>
      </div>

      <div @click="Login" class="login-btn">登錄</div>
    </div>
  </div>
</div>
</template>

<script>
import { getPicServer, getphoneServe, codeLogin } from '@/api/login'
export default {
  data () {
    return {
      PicCode: '',
      Pickey: '',
      PicUrl: '',
      FirstTime: 10,
      setFirstTime: 10,
      timer: null,
      phone: '',
      smsCode: ''

    }
  },
  name: 'loginIndex',
  async created () {
    this.PicServer()
  },
  methods: {
    async PicServer () {
      const { data: { base64, key } } = await getPicServer()
      this.PicUrl = base64
      this.Pickey = key
    },
    TestAns () {
      if (!/^09\d{8}$/.test(this.phone)) {
        alert('請輸入正確的手機號碼(台灣 09開頭)')
        return false
      }
      if (!/\w{4}$/.test(this.PicCode)) {
        alert('驗證碼不得為空')
        return false
      }
      return true
    },
    async GetPhoneCode () {
      if (!this.TestAns()) return
      if (!this.timer && this.FirstTime === this.setFirstTime) {
        const res = await getphoneServe(this.PicCode, this.Pickey, this.phone)
        console.log(res)
        alert('驗證碼已發送')
        this.timer = setInterval(() => {
          this.setFirstTime--
          if (this.setFirstTime <= 1) {
            clearInterval(this.timer)
            this.setFirstTime = this.FirstTime
            this.timer = null
          }
        }, 1000)
      }
    },
    destroyed () {
      clearInterval((this.timer))
    },
    async Login () {
      if (!this.TestAns()) { return }
      if (!/^\d{6}$/.test(this.smsCode)) { return }
      const res = await codeLogin(this.phone, this.smsCode)
      this.$store.commit('User/setID', res.data)
      alert('登入成功')
      this.$router.push('/')
      console.log(res)
    }
  }
}
</script>

<!-- https://www.bilibili.com/video/BV1HV4y1a7n4/?p=113&spm_id_from=pageDriver&vd_source=13942c6c16741804cebefc67e42e4fe5 -->

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
