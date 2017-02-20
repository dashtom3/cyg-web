<template>
	<!--banner图展部分-->
  <div>
	<div class="banner">
		<ul class="banner-img">
			<li></li>
			<li></li>
			<li></li>
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
           {{item.contents}}
         </span></a>
       </li>
      </ul>
			<a href="javascript:;" class="show-more" v-on:click="goNews">查看更多</a>
		</div>
		<div class="content-right">
			<span class="bt2">项目广场</span>
			<ul>
        <li v-for="project in projectsList" v-on:click="goProjectsDetial(project.itemid)">
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
				<li>
					<img src="../img/main_9_9.jpg" class="project-pic"/>
					<div class="project-bottom">
						<a href="javascript:;"><span class="project">这里是项目名称</span></a>
						<a href="javascript:;"><span class="project-mean">这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介</span></a>
					</div>
				</li>
				<li>
					<img src="../img/main_9_9.jpg" class="project-pic"/>
					<div class="project-bottom">
						<a href="javascript:;"><span class="project">这里是项目名称</span></a>
						<a href="javascript:;"><span class="project-mean">这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介</span></a>
					</div>
				</li>
				<li>
					<img src="../img/main_9_9.jpg" class="project-pic"/>
					<div class="project-bottom">
						<a href="javascript:;"><span class="project">这里是项目名称</span></a>
						<a href="javascript:;"><span class="project-mean">这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介</span></a>
					</div>
				</li>
				<li>
					<img src="../img/main_9_9.jpg" class="project-pic"/>
					<div class="project-bottom">
						<a href="javascript:;"><span class="project">这里是项目名称</span></a>
						<a href="javascript:;"><span class="project-mean">这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介</span></a>
					</div>
				</li>
			</ul>
			<a href="javascript:;" class="show-wholetwo">查看全部</a>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.post('http://123.56.220.72:8080/Student/api/news/getNewsList').then((res) => {
      // console.log(res.data)
      this.newsList = res.data.data
    })
    axios.post('http://123.56.220.72:8080/Student/api/items/getItemsList').then((res) => {
      // console.log(res)
      this.projectsList = res.data.data
      // this.keywords = JSON.parse(res.data.data.keywords)
      // console.log(res.data.data[0].keywords)
    })
  },
  data () {
    return {
      newsList: [],
      projectsList: [],
      keywords: []
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
    }
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
