<template>
  <div id="home">
    <nav-bar>
        <img src="../../assets/img/navbar/搜索.svg" alt="" slot="left">
        <div slot="right">2</div>
        <div slot="center">3</div>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from '../../components/navbar/NavBar.vue'
  export default {
    name:"home",
    components:{
      NavBar
    }
  }
</script>
<style scoped>
  
</style>
