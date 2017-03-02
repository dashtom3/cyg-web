<template>
	<!--banner图展部分-->
  <div>
    <v-header></v-header>
	<div class="banner">
		<ul class="banner-img">
      <li class="goJoin"><a href="javascript:;" v-on:click="goJoin">我要加入</a></li>
      <li class="goPub"><a href="javascript:;" v-on:click="goPub">我要发布</a></li>
		</ul>
	</div>
	<!--新闻中心，项目广场，过往项目-->
	<div class="content">
		<div class="content-left">
			<span class="bt1">新闻中心</span>
      <ul id="example1">
        <li v-for="item in newsList" v-on:click="goNewsDetial(item.newsid)">
         <div class="date-d">
           <span class="date-yearmonth">{{item.time | year}}</span>
           <span class="date-day">{{item.time | day}}</span>
         </div>
         <a href="javascript:;"><span class="news-words">
           {{item.title}}
         </span></a>
       </li>
      </ul>
			<a href="javascript:;" class="show-more" v-on:click="goNews">查看更多</a>
		</div>
		<div class="content-right">
			<span class="bt2">项目广场</span>
			<ul>
        <li v-for="(project, index) in projectsList" v-on:click="goProjectsDetial(project.itemid)">
					<a href="javascript:;"><span class="project-name">{{project.itemname}}</span></a>
					<div class="main-words">
						<a href="javascript:;"><span class="main-words1">{{project.keywords}}</span></a>
					</div>
				</li>
			</ul>
			<a href="javascript:;" class="show-whole" v-on:click="goNews">查看全部</a>
		</div>
		<div class="content-bottom">
			<span class="bt3">过往项目</span>
			<ul>
				<li v-for='knotList in knotLists'>
					<img :src=knotList.imgfilesrc>
					<div class="project-bottom">
						<a href="javascript:;"><span class="project">{{knotList.itemname}}</span></a>
						<a href="javascript:;"><span class="project-mean">{{knotList.itembrief}}</span></a>
					</div>
				</li>
			</ul>
			<a href="javascript:;" class="show-wholetwo" v-on:click="goGwfc">查看全部</a>
		</div>
	</div>
  <v-footer></v-footer>
</div>
</template>

<script>
import axios from 'axios'
import header from './header'
import footer from './footer'
import global from '../global/global'
export default {
  created () {
    axios.post(global.baseURL + 'api/news/getNewsList?state=1').then((res) => {
      if (res.data.data.length > 5) {
        this.newsList = res.data.data.slice(0, 5)
      } else {
        this.newsList = res.data.data
      }
    })
    axios.post(global.baseURL + 'api/items/getItemsList').then((res) => {
      if (res.data.data.length > 5) {
        this.projectsList = res.data.data.slice(0, 5)
      } else {
        this.projectsList = res.data.data
      }
    })
    var self = this
    axios.post(global.baseURL + 'api/items/getItemsList?type=0&state=1')
    .then(function (res) {
      console.log(res)
      for (let i in res.data.data) {
        res.data.data[i].src = 'http://123.56.220.72:8080/Student' + res.data.data[i].src
      }
      if (res.data.data.length > 4) {
        self.knotLists = res.data.data.slice(0, 4)
      } else {
        self.knotLists = res.data.data
      }
    })
  },
  data () {
    return {
      newsList: [],
      projectsList: [],
      keywords: [],
      knotLists: []
    }
  },
  methods: {
    // 进入新闻详情页
    goNewsDetial: function (newsId) {
      this.$router.push({name: 'newsDetial', params: { id: newsId }})
    },
    // 进入项目详情页
    goProjectsDetial: function (itemid) {
      this.$router.push({name: 'projectDetial', params: { id: itemid }})
    },
    // 点击更多新闻
    goNews: function () {
      this.$router.push({ path: '/notice' })
    },
    // 点击更多项目
    goProgect: function () {
      this.$router.push({ path: '/square' })
    },
    goGwfc: function () {
      this.$router.push({ path: '/gwfc' })
    },
    goJoin: function () {
      if (global.user.token) {
        this.$router.push({ path: '/square' })
      } else {
        this.$router.push({ path: '/login' })
      }
    },
    goPub: function () {
      if (global.user.token) {
        this.$router.push({ path: '/personal' })
      } else {
        this.$router.push({ path: '/login' })
      }
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*banner部分*/
.banner{
	height:604px;
	width:100%;
	position:relative;
	background:url(../img/i2.jpg) no-repeat;
	background-size:100% 100%;
}
.banner-img{
  height: 100%;
  background: url(../img/logindex.png) no-repeat;
  width: 830px;
  float: right;
  position: relative;
  top: -11px;
}
.banner-img li{
  position: absolute;
  bottom: 100px;
  right: 300px;
}
.banner-img li:last-child{
  bottom: 50px;
}
.banner-img li a{
  font-size: 15px;
  background: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}
/*中间部分*/
.content{
	height:760px;
	width:960px;
	margin:0 auto;
	margin-top: 59px;
}
/*中间内容左边部分*/
.content-left{
	float:left;
	width:570px;
	height:330px;
	position:relative;
}
/*标题：新闻中心*/
.content-left .bt1{
	font-size: 30px;
	display:block;
	position: absolute;
	background: white;
	padding-left:10px;
	padding-right:10px;
	text-align: center;
	height:30px;
	line-height: 30px;
	top:-13px;
	font-weight: bold;
	left:225px;
}
.content-left ul{
	padding-top:42px;
	width:570px;
	border-top: 2px solid rgb(0,60,91);
	float:left;
}
.content-left .show-more{
	display: block;
	font-size: 16px;
	font-weight: bold;
	color:rgb(174,174,174);
	float:right;
}
.content-left ul li{
	width:570px;
	height:38px;
	margin-bottom: 12px;
}
/*日期*/
.content-left .date-d{
	width:65px;
	height:40px;
	float:left;
	background:rgb(126,206,243);
	color:white;
	margin-right:23px;
	text-align: center;
}
.date-d .date-day{
	font-size: 16px;
}
/*新闻标题*/
.content-left .news-words{
	display:inline-block;
	width:480px;
	font-size: 16px;
	font-weight: bold;
	height:40px;
	line-height: 40px;
	color:black;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
/*中间内容右边部分*/
.content-right{
	float:right;
	width:350px;
	height:423px;
	position:relative;
}
.content-right ul{
	padding-top:24px;
	width:350px;
	border-top: 2px solid rgb(0,60,91);
	float:left;
}
.content-right ul li{
	height:44px;
	width:350px;
	margin-top: 26px;
}
.content-right .show-whole{
	display: block;
	font-size: 16px;
	font-weight: bold;
	color:rgb(174,174,174);
	float:right;
	margin-right: 57px;
}
/*标题：项目广场*/
.content-right .bt2{
	font-size: 30px;
	display:block;
	position: absolute;
	background: white;
	padding-left:10px;
	padding-right:10px;
	text-align: center;
	height:30px;
	line-height: 30px;
	top:-13px;
	font-weight: bold;
	left:100px;
}
.content-right .project-name{
	display:inline-block;
	width:350px;
	font-size: 16px;
	font-weight: bold;
	color:black;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.content-right .main-words{
	float:left;
}
/*中间内容下边部分*/
.content-bottom{
	width:960px;
	height:290px;
	float:left;
	position: relative;
}
.content-bottom ul{
	width:960px;
	float:left;
	padding-top: 43px;
	border-top: 2px solid rgb(0,60,91);
}
.content-bottom ul li{
	float:left;
	width:233px;
	height:206px;
	margin-right: 7px;
}
.content-bottom .project-pic{
	width:233px;
	height:131px;
	float:left;
}
.project-bottom{
	margin-top: 14px;
	float:left;
	width:233px;
	height:61px;
}
.project-bottom .project{
	display:block;
	font-size: 18px;
	font-weight: bold;
	color:rgb(0,53,82);
}
.project-bottom .project-mean{
	overflow : hidden;
	display:block;
	width:233px;
	height:33px;
	line-height: 11px;
	position:relative;
	font-weight: bold;
	margin-top: 5px;
}
.project-bottom .project-mean::after {
    content:"...";
    font-weight:bold;
    position:absolute;
}
.content-bottom .bt3{
	font-size: 30px;
	display:block;
	position: absolute;
	background: white;
	padding-left:20px;
	padding-right:20px;
	text-align: center;
	height:30px;
	line-height: 30px;
	top:-13px;
	font-weight: bold;
	left:420px;
}
.content-bottom .show-wholetwo{
	display: block;
	font-size: 16px;
	font-weight: bold;
	color:rgb(174,174,174);
	float:right;
	margin-top: 35px;
}
</style>
