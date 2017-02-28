<template>
	<!--左边过往风采-->
	<div>
		<v-header></v-header>
	<div class="content-fc">
		<div class="content-fc-left">
			<div class="content-left-fctop">
				<div class="username">
					<img src=""/>
					<div class="user-person">
						<span class="username-name">你的名字</span><br/>
						<span class="username-number-fiex">账号:</span><span class="username-number">123456789</span>
					</div>
				</div>
				<div class="cont-left-fcright">
					<span class="fcright-left-words">EXAMPLES</span>
					<span class="fcright-right-words">过<br/>往<br/>风<br/>采</span>
				</div>
			</div>
			<div class="content-left-fcbottom">
				<ul tab>
					<li class="tab-item"><router-link to="/personal">个人信息</router-link></li>
					<li class="tab-item"><router-link to="/management">项目管理</a></li>
				</ul>
			</div>
		</div>
		<!--右边详情部分-->
		<div class="content-fc-right">
			<div class="excllent">
				<span class="exc-t">优秀项目</span>
				<div class="exc-img1">
					<img src=""/>
					<a href="javascript:;"><span class="exc-words1">处理烟雾中多种污染物的自由基强化催化过滤式脱除装置</span></a>
				</div>
				<div class="exc-img2">
					<img src=""/>
					<a href="javascript:;"><span class="exc-words2">处理烟雾中多种污染物的自由基强化催化过滤式脱除装置</span></a>
				</div>
			</div>
			<div class="whole-project">
				<span class="whole-t">所有项目</span>
				<table border="0" cellspacing="0" cellpadding="0">
          <tr>
						<th>序号</th>
						<th>项目名称</th>
						<th>项目类型</th>
						<th>关键词</th>
					</tr>
					<tr v-for="(item,index) in items">
						<td>{{index+1}}</td>
						<td class="td-title">{{item.itemname}}</td>
						<td>{{type}}</td>
						<td><span>{{item.keywords}}</span></td>
					</tr>
				</table>
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
	</div>
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
  name: 'gwfc',
  data () {
    return {
      items: [],
      type: '',
      page: [],
      pagenum: 1,
      prevShow: false,
      nextShow: false,
      pageList: '',
      keywords: [],
      knotLists: [],
      url: 'api/items/getItemsList?pagenum='
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/items/getItemsList')
    .then(function (res) {
      self.page = res.data
      self.pageList = res.data.totalPage
      if (res.data.data > 10) {
        self.items = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
      }
      self.items = res.data.data
      for (let index in res.data.data) {
        self.keywords.push(JSON.parse(res.data.data[index].keywords))
        if (!res.data.data[index].type) {
          self.items = res.data.data
          self.type = '结题项目'
          self.knotLists.push(res.data.data[index])
        }
      }
    })
  },
  methods: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-fc{
height:902px;
width:960px;
margin:0 auto;
}
.content-fc-left{
width:214px;
height:424px;
float:left;
background-color:rgb(126,206,243);
padding-left:23px;
padding-right: 23px;
}
.content-left-fctop{
border-bottom: 2px solid rgb(114,166,188);
width:100%;
height:196px;
}
/*竖着字体设置*/
.cont-left-fcright{
margin-top: 50px;
float:right;
width:64px;
height:146px;
color:white;
position:relative;
}
.fcright-left-words{
transform: rotateZ(-90deg);
-webkit-transform: rotateZ(-90deg);
text-transform:capitalize;
text-align: center;
display:block;
font-size: 16px;

position: absolute;
bottom:44px;
right:5px;
}
.fcright-right-words{
float:right;
display:block;
font-size: 34px;
font-weight: bold;
line-height: 34px;
}
/*左边用户部分*/
.content-left-fctop  .username{
float:left;
width:146px;
}
/*用户照片*/
.content-left-fctop .username img{
width:70px;
height:75px;
float:left;
background-color:rgb(193,193,193);
margin-top: 60px;
}
/*个人信息*/
.user-person{
font-family: "微软雅黑";
margin-top: 14px;
float:left;
}
.username .username-name{
display:block;
font-weight: bold;
float:left;
color:black;
font-size: 14px;
}
/*登录后账号*/
.username .username-number{
display:block;
float:left;
color:black;
font-size: 12px;
}
/*账号：*/
.username .username-number-fiex{
display:block;
float:left;
color:black;
font-size: 14px;
font-weight: bold;
margin-right: 8px;
}
/*下半部分*/
.content-left-fcbottom{
width:100%;
margin-top: 20px;
float:left;
height:208px;
font-size: 16px;
color:white;
font-weight: bold;
}
.content-left-fcbottom ul{
margin-top: 15px;
}
.content-left-fcbottom ul li{
margin-top: 5px;
}
.content-left-fcbottom ul li a{
color:white;
}
.content-left-fcbottom ul li a:focus{
color: #464d57;
}
/*右边部分*/
.content-fc-right{
float:left;
width:622px;
height:auto;
margin-left: 26px;
margin-top: 56px;
}
.excllent{
float:left;
width:622px;
float:left;
height:278px;
}
/*标题*/
.exc-t{
display:block;
text-align: left;
height:38px;
line-height: 38px;
width:612px;
background:rgb(126,206,243);
color:white;
font-size: 16px;
padding-left: 10px;
}
/*项目种类*/
.exc-img1,.exc-img2{
float:left;
margin-top: 22px;
height:213px;
width:278px;
}
.exc-img1{
margin-right: 66px;
}
.exc-words1,.exc-words2{
color:rgb(131,131,131);
font-size: 14px;
display:block;
margin-top: 10px;
}
.exc-img1 img{
width:278px;
height:158px;
float:left;
background:rgb(179,179,179);
}
.exc-img2 img{
width:278px;
height:158px;
float:left;
background:rgb(179,179,179);
}
/*所有项目*/
.whole-project{
float:left;
width:622px;
height:auto;
}
/*标题所有项目*/
.whole-t{
display:block;
text-align: left;
height:38px;
line-height: 38px;
width:612px;
background:rgb(126,206,243);
color:white;
font-size: 16px;
padding-left: 10px;
}
/*table列表部分*/
table{
width:622px;
float:left;
border:0;
margin-top: 20px;
}
table tr{
height:37px;
}
table td{
border-top: 1px solid rgb(203,203,203);
text-align: center;
font-size: 14px;
color:rgb(131,131,131)
}
table th{
font-size: 16px;
color:rgb(35,69,106);
font-weight: bold;
border:0;
}
.td-title{
font-size: 16px;
color:rgb(35,69,106);
font-weight: bold;
}
</style>
