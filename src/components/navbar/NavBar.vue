<template>
  <div class="top-nav">
    <div class="nav-bar w">
        <div class="left"><img src="../../assets/img/navbar/搜索.svg"></div>
        <div class="center"><input type="text" placeholder="复制快递单号以搜索包裹"></div>
        <div class="right">
          <div class="search">搜索</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.top-nav{
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.75rem;
  background-color: rgb(228, 49, 28);
  padding: .3125rem 0;
}
.nav-bar {
  display: flex;
  height: 2.125rem;
  line-height: 2.125rem;
/*   background-color: bisque; */
  border-radius: 20px;
  background-color: #fff;
}
.left{
  width: 2.5rem;
}
.right{
  width: 60px;

}
.center {
  flex: 1;
  background-color: antiquewhite;
  display: flex;
}
.w {
  width: 21.5625rem;
  margin: 0 auto;
}
.left img{
  width: 1.25rem;
  height: 1.25rem;
  margin-left: .625rem;
  margin-top: .4375rem;
}
.center input{
  flex: 1;
  border: 0;
  outline: none;
  font-size: .8125rem;
}
.right .search{
  font-size: .8125rem;
  width: 58px;
  height: 30px;
  line-height: 30px;
  margin-top: 2px;
  padding-left: 16px;
  border-radius: 20px;
  background-color: rgb(228, 49, 28);
  color: #fff;
}
</style>