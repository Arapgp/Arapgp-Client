<template>
  <div id="publicKeyManagement">
    <!-- TopBar -->
    <el-menu
    :default-active="activeIndex"
    class="topBar"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1">AraPGP</el-menu-item>
      <el-submenu index="2" style="position: absolute; right: 3%">
        <template slot="title">工作台</template>
        <el-menu-item index="2-1"><router-link to="/" style="text-decoration: none; outline: none; color: #fff;">文件操作</router-link></el-menu-item>
        <el-menu-item index="2-2" @click="logOut">登出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

</style>
