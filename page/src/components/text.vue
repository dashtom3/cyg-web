<template>
<div>
  <el-row :gutter="100">
    <vue-summernote ref="editer"></vue-summernote>
  </el-row>
  <button @click="setVal">初始化</button>
  <button @click="getVal">获取</button>
</div>
</template>

<script>
import VueSummernote from 'vue-summernote'
import Vue from 'vue'

// 载入bootstrap.js
require('bootstrap')
// 载入bootstrap以及summernote的样式
// 这里需要你的脚手架工具具有加载css的能力
require('bootstrap/dist/css/bootstrap.min.css')
require('summernote/dist/summernote.css')

// 这里设置summernote的初始化选项
// 可参考 http://summernote.org/deep-dive/#initialization-options
Vue.use(VueSummernote, {
  dialogsFade: true
})
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'app',
  data () {
    return {
      src: ''
    }
  },
  mounted () {
    const self = this
    const editer = self.$refs.editer
    const editer1 = self.$refs.editer1
    editer.$on('onImageUpload', function (files) {
      console.log(files[0])
      var tu = new FormData()
      tu.append('file', files[0])
      var self = this
      axios.post('http://123.56.220.72:8080/Student/api/file/upload?token=' + global.user.token, tu)
      .then(function (res) {
        console.log(res)
        self.src = res.data.data
        editer.run('insertImage', 'http://123.56.220.72:8080/Student' + res.data.data)
      })
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
    })
    editer.$on('onChange', function (contents) {
      console.log('onChange:', contents)
    })
    editer1.$on('onImageUpload', function (files) {
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
      editer1.run('insertImage', 'http://vuefe.cn/images/logo.png')
    })
  },
  methods: {
    setVal () {
      // 设置初始值
      this.$refs.editer.run('code', '这里是富文本的初始值')
    },
    getVal () {
      // 获取初始值
      this.$refs.editer.run('code')
    }
  }
}
</script>
