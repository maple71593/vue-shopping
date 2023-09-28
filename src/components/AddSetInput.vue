<template>
  <div class="inputbox">
    <button @click="countset" class="btn">-</button>
    <input :value="value" @change="chvalue" class="inp" type="text">
    <button @click="countadd" class="btn">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    countset () {
      if (this.value <= 1) return
      this.$emit('input', this.value - 1)
      console.log(this.value)
    },
    countadd () {
      this.$emit('input', this.value + 1)
    },
    chvalue (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less" scoped>
.inputbox{
    width: 110px;
    height: 30px;
    .btn {
        width: 30px;
        height: 30px;
    }
    .inp{
        width: 40px;
        height: 30px;
        text-align: center;
    }
}

</style>
