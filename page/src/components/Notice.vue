<template>
  <div class="notice">
    <v-header></v-header>
		<!--中间部分-->
		<div class="notice-content" ref="noticeContent">
			<div class="notice-left">
				<div class="notice-content-left">
					<div class="notice-left-top">
						<div class="notice-username">
							<div style="height:70px"></div>
							<div class="user-notice" v-show="zxshow">
								<span class="username-notice-name">{{personalMsg.username}}</span><br/>
								<span class="notice-number-fiex">账号:</span><span class="notice-number">{{personalMsg.studentid}}</span><br>
                <span class="username-personal-name exit" v-on:click="exit">注销</span>
							</div>
						</div>
						<div class="cont-left-noticeright">
							<span class="noticeright-left-words">NEWS</span>
							<span class="noticeright-right-words">新<br/>闻<br/>通<br/>知</span>
						</div>
					</div>
  					<ul class="cont-notice-bottom" tab>
              <li class="tab-item"><router-link to="/personal">个人信息</router-link></li>
              <li class="tab-item"><router-link to="/management">项目管理</a></li>
  					</ul>
				</div>
			</div>
			<!--右边项目-->
			<div class="notice-right-part">
				<ul>
          <li v-for="news in newsList" v-on:click="goNewsDetial(news.newsid)">
						<div class="notice-date">
							<span>{{ news.time | year }}<br/><span class="notice-date-day">{{ news.time | day }}<span></span>
						</div>
						<span class="notice-title">{{ news.title }}</span>
					</li>
				</ul>
        <div class="square-right-b">
					&nbsp;当前是&nbsp;:&nbsp;<span>{{page.currentPage}}/{{page.totalPage}}</span>&nbsp;&nbsp;
					共<span class="square-number">{{page.totalNumber}}</span>条信息&nbsp;&nbsp;&nbsp;
					<span v-on:click="prev" v-show="prevShow">上一页</span>&nbsp;<span v-on:click="next" v-show="nextShow">下一页</span>&nbsp;&nbsp;跳转到:&nbsp;第
					<select name="">
						<option value="" v-for="pages in pageList" v-on:click='goPage(pages)'>{{pages}}</option>
					</select>页
				</div>
			</div>
		</div>
		<!--底部-->
    <v-footer></v-footer>
  </div>
</template>

<script>
import axios from 'axios'
import header from './header'
import footer from './footer'
import Vue from 'vue'
import global from '../global/global'
export default {
  name: 'notice',
  data () {
    return {
      newsList: [],
      page: [],
      zxshow: false,
      pageList: '',
      prevShow: false,
      nextShow: false,
      personalMsg: global.user,
      url: 'api/news/getNewsList?pagenum='
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/news/getNewsList?state=1').then((res) => {
      console.log(res.data)
      self.page = res.data
      if (res.data.totalPage > 1) {
        self.nextShow = true
      }
      self.pageList = res.data.totalPage
      if (res.data.data.length > 10) {
        this.newsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
      }
      this.newsList = res.data.data
    })
    if (global.user.token) {
      this.zxshow = true
    }
  },
  mounted () {
    var noticeContent = this.$refs.noticeContent
    global.setHeight(noticeContent)
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  methods: {
    goNewsDetial: function (newsId) {
      this.$router.push({name: 'newsDetial', params: { id: newsId }})
    },
    goPersonal: function () {
      this.$router.push({ path: '/personal' })
    },
    prev: function () {
      Vue.set(this, 'pagenum', this.page.currentPage - 1)
      global.goPage(this, this.pagenum, this.url)
    },
    next: function () {
      Vue.set(this, 'pagenum', this.page.currentPage + 1)
      global.goPage(this, this.pagenum, this.url)
    },
    goPage: function (page) {
      Vue.set(this, 'pagenum', page)
      global.goPage(this, this.pagenum, this.url)
    },
    exit: function () {
      global.user.token = ''
      global.go(this, global.user.token)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notice-content{
width:960px;
margin:0 auto;
min-height:444px;
height:444px;
}
.notice-left{
float:left;
width:264px;
height:444px;
}
.notice-right-part ul li:hover{
  cursor: pointer;
}
.exit{
  display: block;
    font-weight: bold;
    float: left;
    color: black;
    font-size: 15px;
}
.exit:hover{
  cursor: pointer;
}
.square-right-b{
	font-size: 14px;
	height:30px;
	width:465px;
	float:left;
	margin-top: 45px;
	background: rgb(237,237,237);
}
.notice-content-left{
width:214px;
height:444px;
float:left;
background-color:rgb(126,206,243);
padding-left:23px;
padding-right: 23px;
}
.notice-left-top{
border-bottom: 2px solid rgb(114,166,188);
width:100%;
height:196px;
}
/*竖着字体设置*/
.cont-left-noticeright{
margin-top: 50px;
float:right;
width:64px;
height:146px;
color:white;
position:relative;
}
.noticeright-left-words{
transform: rotateZ(-90deg);
-webkit-transform: rotateZ(-90deg);
text-transform:capitalize;
text-align: center;
display:block;
font-size: 17px;
position: absolute;
bottom:24px;
right:20px;
color:rgb(224,240,253);
font-weight: bold;
}
.noticeright-right-words{
float:right;
color:rgb(224,240,253);
display:block;
font-size: 32px;
font-weight: bold;
line-height: 34px;
}
/*左边用户部分*/
.notice-username{
float:left;
width:146px;
}
/*用户照片*/
.notice-username img{
width:70px;
height:75px;
float:left;
background-color:rgb(193,193,193);
margin-top: 60px;
}
/*个人信息*/
.user-notice{
font-family: "微软雅黑";
margin-top: 14px;
float:left;
width: 160px;
}
.user-notice .username-notice-name{
display:inline-block;;
font-weight: bold;
color:black;
font-size: 15px;
}
/*登录后账号*/
.notice-username .notice-number{
display:inline-block;;
color:black;
font-size: 14px;

}
/*账号：*/
.notice-username .notice-number-fiex{
display:inline-block;
color:black;
font-size: 15px;
font-weight: bold;
margin-right: 8px;
}
/*左边下半部分*/
.cont-notice-bottom{
float:left;
margin-top: 25px;
}
.cont-notice-bottom li a{
display:block;
font-size: 19px;
color:white;
font-weight: bold;
text-align: left;
margin-bottom: 10px;
}
.cont-notice-bottom a:focus{
color:#464d57;
}
.notice-right-part{
float:left;
margin-left: 100px;
margin-top: 50px;
width:540px;
height:auto;
}
.notice-right-part ul li{
margin-bottom: 10px;
}
.exit{
  display: block;
}
.notice-date{
margin-right: 20px;
width:58px;
height:35px;
float:left;
background:rgb(126,205,244);
color:white;
text-align: center;
line-height: 17px;
}
.notice-date-day{
font-size: 14px;
}
.notice-title{
height:35px;
line-height: 35px;
color:black;
font-weight: bold;
font-size: 16px;
}
</style>
