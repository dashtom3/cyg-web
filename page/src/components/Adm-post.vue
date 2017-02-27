<template>
  <div class="adm-post">
    <adm></adm>
		<div class="adm-content" ref="admContent">
			<div class="adm-header">
				<h1 class="page-title">帖子列表</h1>
			</div>
			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">帖子列表</li>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>主题</th>
									<th>标题</th>
									<th>发表者</th>
                  <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(comment, index) in comments">
									<td>{{index + 1}}</td>
									<td>{{comment.theme}}</td>
									<td>{{comment.title}}</td>
									<td>{{comment.username}}</td>
									<td>
										<a href="javascript:;" role="button" data-toggle="modal" v-on:click="delUser(comment.postsid)">删除</a>
										<button class="adm-pass" v-on:click="verify(comment.postsid)">通过</button>
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
    <div class="verify" v-show="verifyShow">
      <div class="">
        <a href="javascript:;" v-on:click="throught">通过</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="javascript:;" v-on:click="pass">不通过</a>
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
  </div>
</template>

<script>
import adm from './adm'
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'adm-post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comments: '',
      pages: '',
      postId: '',
      isShow: false,
      isDel: false,
      verifyShow: false
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/posts/getPostsList')
    .then(function (res) {
      console.log(res)
      self.comments = res.data.data
      self.pages = res.data.totalPage
      res.data.totalPage > 1 ? self.isShow = true : self.isShow = false
    })
  },
  methods: {
    delUser: function (id) {
      console.log(id)
      this.isDel = true
      this.userid = id
    },
    del: function () {
      var self = this
      var userMsg = new FormData()
      userMsg.append('userid', this.userid)
      axios.post(global.baseURL + 'api/posts/delete?token=' + global.user.token, userMsg)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('删除成功')
          self.isDel = false
        }
      })
    },
    hide: function () {
      this.isDel = false
    },
    verify: function (id) {
      this.verifyShow = true
      this.postId = id
    },
    throught: function () {
      var verifyNews = new FormData()
      verifyNews.append('newsid', this.newsId)
      verifyNews.append('state', this.through)
      axios.get(global.baseURL + 'api/news/verify?token=' + global.user.token, verifyNews)
      .then(function (res) {
        console.log(res)
        // if
      })
    },
    pass: function () {
      this.verifyShow = false
      var verifyNews = new FormData()
      verifyNews.append('newsid', this.newsId)
      verifyNews.append('state', this.pass)
      axios.get(global.baseURL + 'api/news/verify?token=' + global.user.token, verifyNews)
      .then(function (res) {
        console.log(res)
        // if
      })
    }
  },
  components: {
    adm
  },
  mounted () {
    var admContent = this.$refs.admContent
    var wh = document.body.clientHeight
    if (admContent.offsetHeight < wh - 71) {
      admContent.style.height = wh - 77 + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adm-post{
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
.verify{
  position: absolute;
  height: 100%;
  width: 100%;
  clear: both;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  opacity: .8;
}
.verify div{
  position: absolute;
  top: 100px;
  width: 60%;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin: 0 auto;
text-align: center;
padding-top: 20px;
background: #e2e2e2
}
.verify div{
  height: 150px;
  width: 300px;
  top: 200px;
  border-radius: 10px;
}
.verify div a{
  padding: 10px;
  font-size: 15px;
  border-radius:5px;
  color:#fff;
  position: absolute;
  bottom: 10px;
}
.verify div>a:nth-child(1){
  background: green;
  left: 50px;
}
.verify div>a:nth-child(2){
  background-color: red;
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
</style>
