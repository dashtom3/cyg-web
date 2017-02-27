<template>
		<!--中间部分-->
    <div>
      <v-header></v-header>
		<div class="personal-content" ref="personalContent">
			<div class="personal-content-left">
				<div class="personal-left-top">
					<div class="personal-username">
						<img src=""/>
						<div class="user-personal">
							<span class="username-personal-name">{{personMsg.username}}</span><br/>
							<span class="personal-number-fiex">账号:</span><span class="personal-number">{{personMsg.studentid}}</span>
						</div>
					</div>
					<div class="cont-left-personright">
						<span class="personright-left-words">INFORMATION</span>
						<span class="personright-right-words">个 <br/>人<br/>信<br/>息</span>
					</div>
				</div>
				<ul class="cont-person-bottom">
          <li class="tab-item"><router-link to="/personal">个人信息</router-link></li>
          <li class="tab-item"><router-link to="/management">项目管理</a></li>
				</ul>
			</div>
			<!--右边信息部分-->
			<div class="personal-information">
				<ul>
					<li>
						<span>学号/工号/账号:&nbsp;</span>
						<span class="infomation-number">{{personMsg.studentid}}</span>
					</li>
					<li>
						<span class="infomation-left">真实姓名:&nbsp;</span>
						<span class="infomation-name">{{personMsg.username}}</span>
					</li>
					<li>
						<span class="infomation-left">身份:&nbsp;</span>
						<span class="infomation-id">{{personMsg.usertype}}</span>
					</li>
					<li>
						<span class="infomation-left">学院/部门/单位:&nbsp;</span>
						<span class="infomation-college">{{personMsg.department}}</span>
					</li>
					<li>
						<span>专业方向:&nbsp;</span>
						<span class="infomation-major">{{personMsg.major}}</span>
					</li>
					<li>
						<span>个性标签:&nbsp;</span>
						<span class="infomation-selfdom" v-for="selfdom in personMsg.personaltag">{{selfdom}}&nbsp;&nbsp;</span>
					</li>
					<li>
						<span>邮箱:&nbsp;</span>
						<span class="infomation-right">{{personMsg.email}}</span>
					</li>
					<li>
						<span>联系电话:&nbsp;</span>
						<span class="infomation-email">{{personMsg.telephone}}</span>
					</li>
					<li>
						<span>个人简介:&nbsp;</span>
						<span class="infomation-short">{{personMsg.personalbrief}}</span>
					</li>
					<li>
						<span>项目经历:&nbsp;</span>
						<span class="infomation-project">2016主持完成上创《xxx》项目</span>
					</li>
				</ul>
				<button v-on:click="reWrite(personMsg.userid)">修改</button>
			</div>
		</div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from 'components/header'
import footer from 'components/footer'
import global from '../global/global'
export default {
  name: 'personal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      personMsg: global.user
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  methods: {
    reWrite: function (userid) {
      this.$router.push({name: 'rewrite', params: { id: userid }})
    }
  },
  mounted () {
    var personalContent = this.$refs.personalContent
    global.setHeight(personalContent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personal-content{
	height:524px;
	width:960px;
	margin:0 auto;
}
.personal-content-left{
	width:214px;
	height:424px;
	float:left;
	background-color:rgb(126,206,243);
	padding-left:23px;
	padding-right: 23px;
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
	font-size: 17px;
	position: absolute;
	bottom:64px;
	right:-10px;
	font-weight: bold;
}
.personright-right-words{
	float:right;
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
.cont-person-bottom{
	float:left;
	margin-top: 25px;
}
.cont-person-bottom li a{
	display:block;
	font-size: 20px;
	color:white;
	font-weight: bold;
	text-align: left;
	margin-bottom: 10px;
}
.cont-person-bottom a:focus{
	color:#464d57;
}
/*右边部分*/
.personal-information{
	float:left;
	margin-left:90px;
	width:410px;
	height:378px;
	margin-top: 55px;
}
.personal-information ul{
	height:324px;
	float:left;
	width:100%;
}
.personal-information ul li{
	font-size: 15px;
	text-align: left;
	color:black;
	margin-bottom: 10px;
}
.personal-information button{
	width:84px;
	height:33px;
	float:right;
	margin-top: 10px;
	background:#04b1f3;
	color:white;
	font-size: 18px;
	font-weight: bold;
	font-family: "微软雅黑";
	border:0;
	line-height: 33px;
	text-align: center;
	outline: none;
}

</style>
