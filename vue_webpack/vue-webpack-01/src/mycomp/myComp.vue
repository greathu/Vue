<template>
  <div class="a">
    <h1>{{ msg }}</h1>
    <input type="button" value="click me" @click="show" />
  </div>
</template>

<script>
//
export default {
  data() {
    return {
      msg: "单文件组件的使用",
    };
  },
  methods: {
    show() {
      console.log("show is called");
    },
  },
};
</script>
<style>
.a h1 {
  color: red;
}
</style>
