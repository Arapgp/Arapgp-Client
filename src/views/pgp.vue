<template>
  <div id="mainpage">
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
        <el-menu-item index="2-1"><router-link to="publickey" style="text-decoration: none; outline: none; color: #fff;">公钥管理</router-link></el-menu-item>
        <el-menu-item index="2-2" @click="logOut">登出</el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 文件上传&文件列表 -->
    <el-form class="uploadFile">
      <el-form-item>
        <el-button type="primary" style="background: #409EFF; margin-top: 1em; margin-left: 18em" @click="dialogUploadVisible = true">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-dialog title="上传文件" :visible.sync="dialogUploadVisible">
          <el-upload
            class="upload_file_frame"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            style="text-align: center;"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
          <div slot="footer">
            <el-button type="primary" style="background: #409EFF" @click="dialogUploadVisible = false">确 定</el-button>
            <el-button @click="dialogUploadVisible = false">取 消</el-button>
          </div>
        </el-dialog>
      </el-form-item>
      <!-- 文件列表模块，使用Table表格中自定义列模板 -->
      <!-- 通过Scoped slot可以获取到row，column，$index和store的数据 -->
      <template>
        <el-table
          :data="fileData"
          style="width: 100%">
          <el-table-column
            label="文件名"
            width="300"
            align="center">
            <template slot-scope="scope">
              <span style="display: block; text-align: center">{{ scope.row.filename }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="300"
            align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="background: #20B2AA"
                size="mini"
                @click="handleDownload(scope.$index, scope.row)">下载</el-button>
              <el-button
                type="success"
                size="mini"
                @click="dialogSeacherPublicKeyVisible = true">共享</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-form>
    <!-- 搜索用户公钥对话框 -->
    <el-dialog title="搜索用户公钥" :visible.sync="dialogSeacherPublicKeyVisible">
      <el-input v-model="inputPublicKey" placeholder="请输入用户名"></el-input>
      <el-button type="primary" style="margin-top: 1em; margin-left: 35em;" @click="searchPublickeyByUsername">提交</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="shareFile">确 认</el-button>
        <el-button @click="dialogSeacherPublicKeyVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 图片部分 -->
    <img src="https://static.bynss.com/uploads/1558883224.jpg" alt="" class="pgpPicture">
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileData: [{
        filename: 'a.txt'
      }, {
        filename: 'b.txt'
      }
      ],
      activeIndex: '1',
      inputPublicKey: '',
      dialogUploadVisible: false,
      dialogSeacherPublicKeyVisible: false
    }
  },
  methods: {
    logOut: function () {

    },
    searchPublickeyByUsername: function () {

    },
    shareFile: function () {
      this.dialogSeacherPublicKeyVisible = false
      // shareFile to be done
    }
  }
}
</script>

<style lang="less" scoped>
  .uploadFile {
    height: 500px;
    width: 600px;
    border-style: solid;
    border-width: 3px;
    border-color: #BEE7E9;
    position: absolute;
    left: 5%;
    top: 20%;
  }
  .pgpPicture {
    border-style: solid;
    height: 270px;
    width: 500px;
    position: absolute;
    top: 35%;
    right: 10%;
  }
</style>
