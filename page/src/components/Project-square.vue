<template>
		<!--中间部分-->
		<div>
			<v-header></v-header>
		<div class="square-content">
			<!--左边上半部分-->
			<div class="square-left">
				<div class="square-t">
					<div class="personal-left-top">
						<div class="personal-username">
							<img src="/static/img/logo.67fa1eb.png"/>
							<div class="user-personal">
								<span class="personal-number-fiex">名字:</span><span class="username-personal-name">{{global.username}}</span><br/>
								<span class="personal-number-fiex">账号:</span><span class="personal-number">{{global.studentid}}</span>
							</div>
						</div>
						<div class="cont-left-personright">
							<span class="personright-left-words">PROJECTS</span>
							<span class="personright-right-words">项<br/>目<br/>广<br/>场</span>
						</div>
					</div>
				</div>
				<!--左边下半部分-->
				<div class="square-b">
					<button class="square-post" v-on:click="publish">发起项目</button>
				</div>
				<div class="square-b">
					<div class="square-left-project">
						<div class="square-source">
							<span class="square-source-words">项目来源:</span>
							<ul>
								<li><a href="javascript:;">大学生创新项目</a></li>
								<li><a href="javascript:;">导师项目</a></li>
								<li><a href="javascript:;">校友项目</a></li>
								<li><a href="javascript:;">企业项目</a></li>
							</ul>
						</div>
						<div class="square-direct">
							<span class="square-direct-words">学科方向:</span>
							<ul>
								<li><a href="javascript:;" v-on:click="go(0)">整车</a></li>
								<li><a href="javascript:;" v-on:click="go(1)">动力</a></li>
								<li><a href="javascript:;" v-on:click="go(2)">电子</a></li>
								<li><a href="javascript:;" v-on:click="go(3)">车身</a></li>
								<li><a href="javascript:;" v-on:click="go(4)">新能源</a></li>
								<li><a href="javascript:;" v-on:click="go(5)">营销</a></li>
								<li><a href="javascript:;" v-on:click="go(6)">实验</a></li>
								<li><a href="javascript:;" v-on:click="go(7)">其他</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--右半部分-->
			<div class="square-right">
				<ul>
					<li v-for="project in projects" v-on:click="goProjectsDetial(project.itemid)">
						<div class="square-project">
							<span class="square-rank">No.100</span>
							<span class="square-project-name">{{project.itemname}}</span>
						</div>
						<div class="square-project-information">
							<span>起止时间:</span>&nbsp;
							<span class="square-date">{{project.starttime | time}}--{{project.endtime | time}}</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>负责人:</span>&nbsp;
							<span class="square-responsible-name">{{project.itemleader}}</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>招募人数: {{project.memberdemand}}</span>
							<span class="square-state">{{project.nowpeople}}</span>&nbsp;
							<span class="square-date-right-border">|</span><br/>
							项目来源:&nbsp;&nbsp;<span class="square-source-id">大学生创业项目</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							学科方向:&nbsp;&nbsp;<span>{{expecttypes[project.projectdirection]}}</span>
						</div>
					</li>
				</ul>
				<div class="square-right-b">
					&nbsp;当前是&nbsp;:&nbsp;<span>{{page.currentPage}}/{{page.totalPage}}</span>&nbsp;&nbsp;
					共<span class="square-number">{{page.totalNumber}}</span>条信息&nbsp;&nbsp;首页&nbsp;
					<span v-on:click="prev" v-show="prevShow">上一页</span>&nbsp;<span v-on:click="next" v-show="nextShow">下一页</span>&nbsp;尾页&nbsp;跳转到:&nbsp;第
					<select name="">
						<option value="" v-for="pages in pageList" v-on:click='goPage(pages)'>{{pages}}</option>
					</select>页
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
  name: 'square',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: [],
      prevShow: false,
      nextShow: false,
      page: [],
      pageList: '',
      pagenum: 1,
      expecttypes: ['整车', '动力', '电子', '车身', '新能源', '营销', '实验', '其他'],
      global: global.user,
      url: 'api/items/getItemsList?pagenum='
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  methods: {
    go: function (index) {
      axios.post(global.baseURL + 'api/items/getItemsList?projectdirection=' + index)
      .then(function (res) {
        console.log(res)
      })
    },
    publish: function () {
      this.$router.push('/apply')
    },
    goProjectsDetial: function (itemid) {
      this.$router.push({name: 'projectDetial', params: { id: itemid }})
    },
    prev: function () {
      Vue.set(this, 'pagenum', this.pagenum - 1)
      global.goPage(this, this.pagenum, this.url)
    },
    next: function () {
      Vue.set(this, 'pagenum', this.pagenum + 1)
      global.goPage(this, this.pagenum, this.url)
    },
    goPage: function (page) {
      Vue.set(this, 'pagenum', page)
      global.goPage(this, this.pagenum, this.url)
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/items/getItemsList?pagenum=' + this.pagenum)
    .then(function (res) {
      console.log(res)
      self.page = res.data
      self.pageList = res.data.totalPage
      if (res.data.data > 10) {
        self.projects = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
      }
      self.projects = res.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square-content{
	width:960px;
	height:899px;
	margin:0 auto;
}
.square-left{
	width:262px;
	height:697px;
	float:left;
}
.square-t{
	width:218px;
	height:252px;
	background:rgb(126,206,243);
	float:left;
	padding-left: 22px;
	padding-right: 22px;
}
.personal-left-top{
	border-bottom: 2px solid rgb(114,166,188);
	width:100%;
	height:196px;
}
.user-notice{
	width: 120px;
}
/*竖着字体设置*/
.cont-left-personright{
	margin-top: 50px;
	float:right;
	width:64px;
	height:146px;
	color:white;
	position:relative;
}
.personright-left-words{
	transform: rotateZ(-90deg);
	-webkit-transform: rotateZ(-90deg);
	text-transform:capitalize;
	text-align: center;
	display:block;
	font-size: 18px;
	position: absolute;
	bottom:43px;
	color:rgb(221,239,255);
	right:2px;
	font-weight: bold;
}
.personright-right-words{
	float:right;
	color:rgb(221,239,255);
	display:block;
	font-size: 32px;
	font-weight: bold;
	line-height: 34px;
}
/*左边用户部分*/
.personal-username{
	float:left;
	width:146px;
}
/*用户照片*/
.personal-username img{
	width:70px;
	height:75px;
	float:left;
	background-color:rgb(193,193,193);
	margin-top: 60px;
}
/*个人信息*/
.user-personal{
	font-family: "微软雅黑";
	margin-top: 14px;
	float:left;
	width: 120px;
}
.user-personal .username-personal-name{
	display:block;
	font-weight: bold;
	float:left;
	color:black;
	font-size: 15px;
}
/*登录后账号*/
.personal-username .personal-number{
	display:block;
	float:left;
	color:black;
	font-size: 14px;

}
/*账号：*/
.personal-username .personal-number-fiex{
	display:block;
	float:left;
	color:black;
	font-size: 15px;
	font-weight: bold;
	margin-right: 8px;
}
/*左边下半部分*/
.square-b{
	margin-top: 34px;
	float:right;
	width:243px;
}
.square-post{
	width:83px;
	font-family: "微软雅黑";
	height:37px;
	background:rgb(126,206,243);
	color:white;
	font-size: 16px;
	float:left;
	border:0;
	font-weight: bold;
}
.square-left-project{
	float:right;
	margin-top: 7px;
}
.square-source-words{
	font-size: 19px;
	display:block;
	color:rgb(26,96,141);
}
.square-direct-words{
	font-size: 19px;
	display:block;
	color:rgb(26,96,141);
}
.square-source ul{
	margin-top: 10px;
	font-size: 16px;
}
.square-source ul li{
	text-align: right;
	margin-bottom: 7px;
}
.square-direct{
	margin-top: 25px;
}
.square-direct ul{
	margin-top: 10px;
	font-size: 16px;
}
.square-direct ul li{
	text-align: right;
	margin-bottom: 7px;
}
/*右半部分*/
.square-right{
	float:left;
	width:570px;
	margin-left: 100px;
	margin-top: 70px;
}
.square-right ul{
	float:left;
	height:auto;
}
.square-right ul li{
	margin-bottom: 20px;
}
.square-project{
	height:35px;
	width:auto;
	text-align: left;
	margin-bottom: 3px;
}
.square-project .square-rank{
	display: inline-block;
	float:left;
	padding-left: 12px;
	font-size: 13px;
	color:white;
	line-height: 35px;
	height:35px;
	background:rgb(126,206,243);
}
.square-project-name{
	float:left;
	padding-left: 12px;
	padding-right: 16px;
	background:rgb(126,206,243);
	font-size: 16px;
	line-height: 35px;
	height: 35px;
	color:rgb(12,0,1);
	font-weight: bold;
	display: inline-block;
}
.square-project-information{
	font-size: 12px;
	color:rgb(133,133,133);
}
.square-date-right-border{
	color:rgb(126,206,243);
	font-weight: bold;
}
.square-right-b{
	font-size: 14px;
	height:30px;
	width:465px;
	float:left;
	margin-top: 45px;
	background: rgb(237,237,237);
}
</style>
