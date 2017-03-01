<template>
  <div>
    <v-header></v-header>
  <div class="communicate">
		<!--上半部分-->
		<div class="layout">
			<div class="communicate-top">
				<div class="communicate-top-left">
					<span class="communicate-words">交流区</span>
					<div class="communicate-words-today">
						<span>今日:</span>
						<span class="today-number">{{getCounts.todayPostCount}}</span>
					</div>
					<div class="communicate-words-whole">
						<span>(</span>
						<span class="communicate-theme">{{getCounts.allPostCount}}</span>
						<span>主题</span>&nbsp;
            <span>/</span>
            <span class="communicate-answer">{{getCounts.allCommentCount}}</span>
            <span>回复</span>
						<span>)</span>
					</div>
				</div>
			</div>
			<!--中间分页部分-->
			<div class="communicate-paging">
				<div class="communicate-paging-title">
					<div class="communicate-select1">
						<span>筛选:</span>
						<select name="">
							<option value="">全部主题</option>
							<option value="">全部主题</option>
							<option value="">全部主题</option>
							<option value="">全部主题</option>
						</select>
					</div>
					<div class="communicate-select2">
						<span>排序:</span>
						<select name="">
							<option value="">最后发表</option>
							<option value="">一天前</option>
							<option value="">两天前</option>
							<option value="">一万年前</option>
						</select>
					</div>
					<div class="page-number">
            <ul>
              <li>当前<a href="javascript:;">{{pages.currentPage}}</a>/<a href="javascript:;">{{pages.totalPage}}</a></li>
              <li v-on:click="top"><a href="javascript:;">首页</a></li>
              <li v-on:click="prev"><a href="javascript:;">上一页</a></li>
              <li v-on:click="next"><a href="javascript:;">下一页</a></li>
              <li v-on:click="bottom"><a href="javascript:;">尾页</a></li>
            </ul>
					</div>
				</div>
				<table border="0" cellspacing="0" cellpadding="0" class="page-table">
					<tr>
						<th class="table-th-first">主题</th>
						<th class="table-th-title">题目</th>
						<th class="table-th-poster">发表者</th>
						<th class="table-th-answer">回复/查看</th>
						<th>最后回复</th>
					</tr>
					<tr v-for="communicate in communicates" v-on:click="goComment(communicate.postsId)">
						<td class="table-tr-first">
							[<span class="table-show">{{communicate.theme}}</span>]
						</td>
						<td class="table-tr-second">
							<span>{{communicate.title}}</span>
						</td>
						<td>
							<span class="table-pereson">{{communicate.userName}}</span><br/>
							<span class="person-date">{{communicate.publishedTime | date}}</span>
						</td>
						<td>
							<span class="answer-number">{{communicate.replyCount}}</span><br/>
							<span class="read-number">{{communicate.readCount}}</span>
						</td>
						<td>
							<span class="answer-words">{{communicate.replyContents}}</span><br/>
							<span class="answer-words-date">{{communicate.replyTime | date}}</span>
						</td>
					</tr>
				</table>
			</div>
			<!--发表部分-->
			<div class="publish">
				<span class="publish-news">发表新帖</span>
				<input type="text" name="" class="publish-title" v-model="publishCommunite.title" />
				<textarea name="" rows="" cols="" v-model="publishCommunite.contents"></textarea>
				<button  class="publish-but" v-on:click="publish">发表</button>
			</div>
		</div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import header from './header'
import footer from './footer'
import axios from 'axios'
import Vue from 'vue'
import global from '../global/global'
export default {
  name: 'communicate',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      communicates: '',
      getCounts: '',
      pages: '',
      currentPage: '',
      publishCommunite: {
        title: '',
        contents: ''
      }
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/communication/getCommunicationList')
    .then(function (res) {
      // console.log(res)
      self.communicates = res.data.data
    })
    axios.get(global.baseURL + 'api/communication/getCounts')
    .then(function (res) {
      self.getCounts = res.data.data
    })
    axios.get(global.baseURL + 'api/posts/getPostsList')
    .then(function (res) {
      self.pages = res.data
      self.currentPage = res.data.currentPage
      if (res.data.totalPage > 1) {
        self.next = true
      }
    })
  },
  methods: {
    publish: function () {
      var self = this
      var zipFormData = new FormData()
      zipFormData.append('title', this.publishCommunite.title)
      zipFormData.append('contents', this.publishCommunite.contents)
      axios.post(global.baseURL + 'api/posts/add?token=' + global.user.token, zipFormData)
      .then(function (res) {
        if (res.data.callStatus === 'SUCCEED') {
          alert('发布成功')
        } else {
          alert('请先登录')
          self.$router.push({ path: '/login' })
        }
      })
    },
    goComment: function (postid) {
      console.log(postid)
      this.$router.push({name: 'comment', params: { id: postid }})
    },
    top: function () {
      var self = this
      axios.post(global.baseURL + 'api/communication/getCommunicationList')
      .then(function (res) {
        // console.log(res)
        self.communicates = res.data.data
      })
    },
    prev: function () {
      if (this.currentPage === 1) {
        alert('已经是第一页了')
      } else {
        Vue.set(this, 'currentPage', this.currentPage - 1)
        var self = this
        axios.get(global.baseURL + 'api/communication/getCommunicationList?pagenum=' + this.currentPage)
        .then(function (res) {
          console.log(res)
          self.contentsList = res.data.data
          if (res.data.data.length > 10) {
            self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
          }
        })
      }
    },
    next: function () {
      if (this.currentPage === this.pages.totalPage) {
        alert('已经是最后一页了')
      } else {
        Vue.set(this, 'currentPage', this.currentPage + 1)
        this.prevShow = true
        var self = this
        axios.get(global.baseURL + 'api/communication/getCommunicationList?pagenum=' + this.currentPage)
        .then(function (res) {
          console.log(res)
          self.contentsList = res.data.data
          if (res.data.data.length > 10) {
            self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
          }
        })
      }
    },
    bottom: function () {
      axios.get(global.baseURL + 'api/communication/getCommunicationList?pagenum=' + this.pages.totalPage)
      .then(function (res) {
        console.log(res)
        self.contentsList = res.data.data
        if (res.data.data.length > 10) {
          self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
        }
      })
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*上半部分*/
  .layout{
  width:960px;
  margin:0 auto;
  }
  .page-number ul li{
    float: left;
  }
  .page-number ul li a{
    padding: 10px;
  }
  .communicate-top{
  font-family:"微软雅黑";
  width:960px;
  height:148px;
  border-bottom: 13px solid rgb(191,191,191);
  }
  .page-number-bottom ul li{
    float: left;
  }
  .page-number-bottom ul li a{
    padding: 10px;
  }
  .communicate-top-left{
  width:622px;
  height:138px;
  float:left;
  background:rgb(126,206,243);
  }
  .communicate-top-left .communicate-words{
  display:block;
  float:left;
  text-align: center;
  font-size: 35px;
  color:white;
  font-weight: bold;
  margin-top: 90px;
  margin-left: 20px;
  margin-right: 40px;
  }
  .communicate-words-today{
  float:left;
  font-size: 18px;
  color:white;
  font-family: "微软雅黑";
  margin-top: 102px;
  margin-right: 10px;
  text-align: center;
  }
  .communicate-words-whole{
  float:left;
  font-size: 18px;
  color:white;
  font-family: "微软雅黑";
  margin-top: 102px;
  text-align: center;
  }
  /*中间分页*/
  .communicate-paging{
  width:100%;
  height:944px;
  }
  .communicate-paging-title{
  padding-left: 80px;
  width:880px;
  height:40px;
  border-bottom: 4px solid rgb(191,191,191);
  }
  .page-number{
  width:468px;
  height:23px;
  float:left;
  border: 1px dotted gainsboro;
  margin-left: 96px;
  margin-top: 13px;
  }
  .communicate-select1,.communicate-select2{
  float:left;
  width:115px;
  height:22px;
  font-size: 14px;
  color:black;
  margin-top:13px ;
  }
  .communicate-select1 select{
  font-family: "微软雅黑";
  color:black;
  font-size: 12px;
  border:0;
  }
  .communicate-select2 select{
  font-family: "微软雅黑";
  color:black;
  font-size: 12px;
  border:0;
  }
  .page-table{
  float:left;
  width:960px;
  height:auto;
  font-family: "微软雅黑";
  margin-top: 30px;
  }
  .page-table th{
  text-align: left;
  font-size: 14px;
  color:black;
  padding-bottom:8px;
  border-bottom: 1px solid rgb(172,171,170);
  }
  .page-table tr{
  padding-left: 20px;
  }
  .page-table td{
  border-bottom: 2px solid rgb(72,76,78);
  }
  /*回复人数*/
  .page-table .answer-number{
  color:#04b1f3;
  }
  /*主题部分*/
  .page-table .table-tr-first{
  padding-left: 50px;
  font-size: 14px;
  width:68px;
  }
  .table-th-poster{
  width:137px;
  }
  .table-th-title{
  width:417px;
  }
  .table-th-answer{
  width:154px;
  }
  .page-table .table-th-first{
  padding-left: 50px;
  }
  /*题目部分*/
  .page-table .table-tr-second{
  font-size: 14px;
  }
  /*项目颜色*/
  .table-project{
  color:#04b1f3;
  }
  /*公告颜色*/
  .table-show{
  color:red;
  }
  /*查看人数*/
  .page-number-bottom{
  width:468px;
  height:23px;
  float:right;
  border: 1px dotted gainsboro;
  margin-top: 20px;
  margin-right: 55px;
  }
  /*发布*/
  .publish{
  width:855px;
  height:405px;
  margin: 45px auto;
  font-weight: bold;
  }
  .publish-news{
  display:block;
  float:left;
  font-size: 22px;
  color:#04b1f3;
  font-family: "微软雅黑";
  }
  .publish-title{
  width:100%;
  height:26px;
  border:1px solid black;
  float:left;
  margin-top: 20px;
  }
  .publish textarea{
  margin-top: 5px;
  width:851px;
  height:245px;
  float:left;
  border:1px solid black;
  resize:none;
  outline:none;
  }
  /*图片、音频、上传附件*/
  .publish-post{
  float:right;
  margin-right: 26px;
  margin-top: 5px;
  }
  .publish-post span{
  font-size: 12px;
  color:black;
  display:inline-block;
  margin-left: 20px;
  text-align: center;
  }
  .publish .publish-but{
  width:115px;
  height:32px;
  background:#04b1f3;
  color:white;
  font-size: 16px;
  border:0;
  font-weight: bold;
  float:right;
  margin-top: 20px;
  }
</style>
