<template>
  <div style="position:relative">
  <div class="adm-news">
      <adm></adm>
		<div class="adm-content" ref="admContent">
			<div class="adm-header">
				<h1 class="page-title">新闻列表</h1>
			</div>

			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">新闻列表</li>
        <a href="javascript:;" @click="showText">发布新闻</a>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>发布日期</th>
									<th>标题</th>
									<th>状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(newsList, index) in newsLists">
									<td>{{index + 1}}</td>
									<td>{{newsList.time | time}}</td>
									<td>{{newsList.title}}</td>
									<td>{{type[newsList.state]}}</td>
									<td>
										<a href="javascript:;" role="button" data-toggle="modal" v-on:click="delUser(newsList.newsid)">删除</a>
										<button class="adm-pass" v-on:click="verify(newsList.newsid)">上线</button>
                    <button class="adm-pass" v-on:click="pass(newsList.newsid)">下线</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="pagination">
						<ul>
							<li v-for="page in pages">
								<a href="javascript:;">{{page}}</a>
							</li>
							<li>
                <a href="javascript:;" v-if="isShow">下一页</a>
							</li>
							<li>
                <a href="javascript:;" v-if="isShow">尾页</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  </div>
  <div class="queren" v-show="isDel">
    <div class="">
      <p>确认删除吗</p><br>
      <br>
      <a href="javascript:;" v-on:click="del">确认</a>&nbsp;&nbsp;
      <a href="javascript:;" v-on:click="hide">再想一下</a>
    </div>
  </div>
  <div class="publishNews" v-show="show">
    <div class="showText">
      <div class="text">
        <span>新闻标题: </span>
        <input type="text" name="" value="" v-model="newsMsg.title">
      </div>
      <div class="text">
        <span>新闻内容: </span>
            <vue-summernote ref="editer" @change="getContents"></vue-summernote>
      </div>
      <!-- <div class="text">
        <span>新闻作者: </span>
        <input type="text" name="" value="" v-model="newsMsg.autor">
      </div> -->
      <div class="text">
        <a href="javascript:;" v-on:click="cancel" class="cancel">取消</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="javascript:;" name="save-content"
            @click="saveTheContent">发布</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/javascript">
import adm from './adm'
import axios from 'axios'
// import Vue from 'vue'
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
import global from '../global/global'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'adm-news',
  props: ['value'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsLists: '',
      show: false,
      content: '',
      editorOption: {},
      type: ['未上线', '已上线'],
      pages: '',
      src: '',
      newsId: '',
      verifyShow: false,
      isDel: false,
      isShow: false,
      htmlFromEditor: null,
      newsMsg: {
        title: '',
        autor: ''
      }
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/news/getNewsList')
    .then(function (res) {
      // console.log(res)
      self.newsLists = res.data.data
      self.pages = res.data.totalPage
      res.data.totalPage > 1 ? self.isShow = true : self.isShow = false
    })
  },
  components: {
    adm,
    quillEditor
  },
  methods: {
    getContents (contents) {
      console.log(contents)
    },
    showText: function () {
      this.show = true
    },
    saveTheContent: function () {
      var self = this
      var pubNews = new FormData()
      pubNews.append('title', this.newsMsg.title)
      pubNews.append('contents', this.content)
      console.log(this.content.img)
      axios.post(global.baseURL + 'api/news/add?token=' + global.user.token, pubNews)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('发布成功')
          self.show = false
          var that = self
          axios.post(global.baseURL + 'api/news/getNewsList')
          .then(function (res) {
            // console.log(res)
            that.newsLists = ''
            that.pages = ''
            that.newsLists = res.data.data
            that.pages = res.data.totalPage
            res.data.totalPage > 1 ? that.isShow = true : that.isShow = false
          })
        }
      })
    },
    cancel: function () {
      this.show = false
    },
    delUser: function (id) {
      // console.log(id)
      this.isDel = true
      this.userid = id
    },
    del: function () {
      var self = this
      axios.get(global.baseURL + 'api/news/delete?token=' + global.user.token + '&newsid=' + this.userid)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          self.isDel = false
          alert('删除成功')
          var that = self
          axios.post(global.baseURL + 'api/news/getNewsList')
          .then(function (res) {
            // console.log(res)
            that.newsLists = ''
            that.pages = ''
            that.newsLists = res.data.data
            that.pages = res.data.totalPage
            res.data.totalPage > 1 ? that.isShow = true : that.isShow = false
          })
        }
      })
    },
    hide: function () {
      this.isDel = false
    },
    verify: function (id) {
      var self = this
      axios.get(global.baseURL + 'api/news/verify?token=' + global.user.token + '&newsid=' + id + '&state=1')
      .then(function (res) {
        // console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('操作成功')
          var that = self
          axios.post(global.baseURL + 'api/news/getNewsList')
          .then(function (res) {
            console.log(res)
            that.newsLists = ''
            that.pages = ''
            that.newsLists = res.data.data
            that.pages = res.data.totalPage
            res.data.totalPage > 1 ? that.isShow = true : that.isShow = false
          })
        }
      })
    },
    pass: function (id) {
      var self = this
      axios.get(global.baseURL + 'api/news/verify?token=' + global.user.token + '&newsid=' + id + '&state=0')
      .then(function (res) {
        // console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('操作成功')
          var that = self
          axios.post(global.baseURL + 'api/news/getNewsList')
          .then(function (res) {
            console.log(res)
            that.newsLists = ''
            that.pages = ''
            that.newsLists = res.data.data
            that.pages = res.data.totalPage
            res.data.totalPage > 1 ? that.isShow = true : that.isShow = false
          })
        }
      })
    }
  },
  mounted () {
    var admContent = this.$refs.admContent
    var wh = document.body.clientHeight
    if (admContent.offsetHeight < wh - 71) {
      admContent.style.height = wh - 77 + 'px'
    }
    const self = this
    const editer = self.$refs.editer
    editer.$on('onImageUpload', function (files) {
      console.log(files[0])
      var tu = new FormData()
      tu.append('file', files[0])
      var that = self
      axios.post('http://123.56.220.72:8080/Student/api/file/upload?token=' + global.user.token, tu)
      .then(function (res) {
        that.src = res.data.data
        editer.run('insertImage', 'http://123.56.220.72:8080/Student' + res.data.data)
      })
      console.log()
      // 这里做上传图片的操作，上传成功之后便可以用到下面这句将图片插入到编辑框中
    })
    editer.$on('onChange', function (contents) {
      // console.log('onChange:', contents)
      self.content = contents
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adm-news{
  width:100%;
  height:100%;
  background: #222;
  background-image: url('../img/black-Linen.png');
  background-position: initial initial;
  background-repeat: initial initial;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
.text{
  margin: 10px;
}
.cancel{
  margin-left: 50px;
}
.text input{
  width: 200px;
  height: 25px;
}
.text span{
  font-size: 20px;
}
.text button{
  padding: 10px;
}
.ql-toolbar+div{
  height: 500px;
}
.publishNews,.verify{
  position: absolute;
  height: 100%;
  width: 100%;
  clear: both;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.verify{
  text-align: center;
  padding-top: 20px;
  opacity: .8;
}
.showText,.verify div{
  position: absolute;
  top: 100px;
  width: 60%;
  margin: 0 auto;
  left: 0;
  right: 0;
}
.verify div{
  height: 150px;
  width: 300px;
  top: 200px;
  border-radius: 10px;
  background: #e2e2e2
}
.verify div a{
  padding: 10px;
  font-size: 15px;
  border-radius:5px;
  color:#fff;
  position: absolute;
  bottom: 10px;
}
.verify div a:nth-child(1){
  background: green;
  left: 50px;
}
.verify div a:nth-child(2){
  background-color: red;
}
/*.show{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: #000;
  opacity: .8
}*/
.breadcrumb{
  height: 35px;
}
.breadcrumb>a,.text>a{
  padding: 10px;
  float: right;
  background: red;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}
.text>a{
  background-color: green;
}
.queren{
position: absolute;
height: 100%;
width: 100%;
top: 0;
background: #e2e2e2;
opacity: .7
}
.queren div{
  width: 300px;
height: 150px;
margin: 300px auto;
text-align: center;
color: red;
font-size: 20px;
background-color: #fff;
border-radius: 10px;
padding-top: 30px;
}
.queren div a{
  padding: 10px;
  color: #fff;
  border-radius: 5px;
}
.queren div a{
  background: red;
}
.queren div a:last-child{
  background: green;
}
.note-editor .modal{
  left: 50%!important;
}
</style>
