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
    <el-button
      type="primary"
      style="margin-top: 3em; margin-left: 50em; background: #409EFF;"
      @click="dalogSubmitKeyVisible = true">{{ isSetKey == false? '上传密钥文件':'修改密钥文件' }}
    </el-button>
    <el-dialog title="上传密钥" :visible.sync="dalogSubmitKeyVisible">
    <el-upload
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      style="text-align: center;"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将密钥文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div slot="footer">
      <el-button type="primary" style="background: #409EFF" @click="dalogSubmitKeyVisible = false">确 定</el-button>
      <el-button @click="dalogSubmitKeyVisible = false">取 消</el-button>
    </div>
    </el-dialog>
    <!-- TODO: publickey textarea & private textarea -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSetKey: false,
      dalogSubmitKeyVisible: false
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
