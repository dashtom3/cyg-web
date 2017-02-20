<template>
		<!--中间部分-->
		<div class="square-content">
			<!--左边上半部分-->
			<div class="square-left">
				<div class="square-t">
					<div class="personal-left-top">
						<div class="personal-username">
							<img src=""/>
							<div class="user-personal">
								<span class="username-personal-name">你的名字</span><br/>
								<span class="personal-number-fiex">账号:</span><span class="personal-number">123456789</span>
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
					<button class="square-post">发起项目</button>
					<div class="square-left-project">
						<div class="square-source">
							<span class="square-source-words">项目来源:</span>
							<ul>
								<li>大学生创新项目</li>
								<li>导师项目</li>
								<li>校友项目</li>
								<li>企业项目</li>
							</ul>
						</div>
						<div class="square-direct">
							<span class="square-direct-words">学科方向:</span>
							<ul>
								<li>整车</li>
								<li>动力</li>
								<li>电子</li>
								<li>车身</li>
								<li>新能源</li>
								<li>营销</li>
								<li>实验</li>
								<li>其他</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--右半部分-->
			<div class="square-right">
				<ul>
					<li>
						<div class="square-project">
							<span class="square-rank">No.100</span>
							<span class="square-project-name">这里是项目名这里是项目名这里是项目名</span>
						</div>
						<div class="square-project-information">
							<span>起止时间:</span>&nbsp;
							<span class="square-date">2014.12.25-2016.12.25</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>负责人:</span>&nbsp;
							<span class="square-responsible-name">某某某</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>招募人数: </span>
							<span class="square-state">3</span>&nbsp;
							<span class="square-date-right-border">|</span><br/>
							项目来源:&nbsp;&nbsp;<span class="square-source-id">大学生创业项目</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							学科方向:&nbsp;&nbsp;<span>整车</span>
						</div>
					</li>
					<li>
						<div class="square-project">
							<span class="square-rank">No.2</span>
							<span class="square-project-name">这里是项目名这里是项目名这里是项目</span>
						</div>
						<div class="square-project-information">
							<span>起止时间:</span>&nbsp;
							<span class="square-date">2014.12.25-2016.12.25</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>负责人:</span>&nbsp;
							<span class="square-responsible-name">某某某</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							<span>招募人数: </span>
							<span class="square-state">3</span>&nbsp;
							<span class="square-date-right-border">|</span><br/>
							项目来源:&nbsp;&nbsp;<span class="square-source-id">大学生创业项目</span>&nbsp;
							<span class="square-date-right-border">|</span>&nbsp;
							学科方向:&nbsp;&nbsp;<span>整车</span>
						</div>
					</li>
				</ul>
				<div class="square-right-b">
					&nbsp;当前是&nbsp;:&nbsp;<span>1/5</span>&nbsp;&nbsp;
					共<span class="square-number">150</span>条信息&nbsp;&nbsp;首页&nbsp;
					上一页&nbsp;下一页&nbsp;尾页&nbsp;跳转到:&nbsp;第
					<select name="">
						<option value="">1</option>
						<option value="">1</option>
						<option value="">2</option>
					</select>页
				</div>
			</div>
		</div>
</template>

<script>
import header from './header'
import footer from './footer'
export default {
  name: 'square',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
