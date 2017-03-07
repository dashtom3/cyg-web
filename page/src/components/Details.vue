<template>
  <div>
  <v-header></v-header>
  <div class="details">
			<!--头部分-->
			<div class="details-content">
				<div class="details-content-top">
					<span class="join" v-on:click="joinProject">立即加入</span>
					<div class="details-top-right">
						<span class="project-topname">{{project.itemname}}</span>
						<div class="detail-key">
							<button v-for="keyword in keywords">{{keyword}}</button>
						</div>
					</div>
				</div>
				<!--中间部分-->
				<div class="detail-middle">
					<!--左边项目详情部分-->
					<div class="detail-middle-left">
						<div class="detail-middle-project">
							<div class="middle-project-top">
								<span class="middle-project-title">{{project.itemname}}</span>
							</div>
							<div class="middle-project-content">
								<ul>
									<li><span>负责人:&nbsp;&nbsp;</span><span class="detail-leader">{{project.itemleader}}</span></li>
									<li><span>指导老师:&nbsp;&nbsp;</span><span class="detail-teacher">{{project.teacher}}</span></li>
									<li><span>姓名:&nbsp;&nbsp;</span><span class="detail-name">{{personalMsg.username}}</span></li>
									<li><span>学号:&nbsp;&nbsp;</span><span class="detail-number">{{project.userid}}</span></li>
									<li><span>联系方式:&nbsp;&nbsp;</span><span class="detail-call">{{personalMsg.telephone}}</span></li>
									<li><span>邮箱:&nbsp;&nbsp;</span><span class="detail-email">{{personalMsg.email}}</span></li>
								</ul>
								<div class="detail-introduction">
									<span class="detail-introduction-title">这里是项目简介</span>
									<p>
										{{project.itembrief}}
									</p>
								</div>
							</div>
						</div>
						<!--左边附件下载部分-->
						<div class="detail-file">
							<span class="file-title">这里是该项目提供的附件下载</span>
							<span>如果没有附件则不显示此方块</span><br/>
							<div class="file-filter">
								<span><a :href=exitbasicfilesrc download="xianyou">现有基础</a></span><br/>
								<span><a :href=memberdemandfilesrc download="suoxu">所需成员</a></span>
							</div>
						</div>
					</div>
					<!--右边招募、项目开发部分-->
					<div class="detail-middle-right">
						<!--招募-->
						<div class="detail-recruit">
							<div class="recruit-top">
								<div class="recruit-number">
									<span class="recruit-number-left">{{project.nowpeople}}</span>
									<span>/</span>
									<span class="recruit-number-right">{{project.allpeople}}</span>
								</div>
								<span class="recruit-title">招募情况</span>
							</div>
							<div class="recruit-bottom">
								<ul>
									<li><span class="recruit-major">见左下角附件</span></li>
								</ul>
							</div>
						</div>
						<!--项目开发中-->
						<div class="project-way">
							<span>{{state[project.state]}}</span>
						</div>
						<!--项目开类型-->
						<div class="details-type">
							<div class="details-type-top">
								<span class="details-type-date1">{{project.starttime | time}}</span>
								<span class="details-type-date2">{{project.endtime | time}}</span>
							</div>
							<div class="details-type-bottom">
								<ul>
									<li>{{type[project.labels]}}</li>
								</ul>
							</div>
						</div>
					</div>
					<!--右边文字部分-->
					<div class="details-words">
						<!-- <span class="detail-basic-title">这里是我们的已有基础</span> -->
						<p>
							{{project.exitbasic}}
						</p>
					</div>
					<a href="javascript:;" class="details-foot" v-on:click="goGwfc">返回过往风采</a>
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
import global from '../global/global'
export default {
  name: 'details',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projectId: this.$route.params.id,
      project: {},
      keywords: [],
      state: ['项目开发中', '项目已完成'],
      exitbasicfilesrc: '',
      memberdemandfilesrc: '',
      expectresult: [],
      type: ['国创', '上创', 'sitp', '创新赛事', '企业课题', '创业', '其他'],
      personalMsg: ''
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/items/getbyid/?itemsid=' + this.projectId)
    .then(function (res) {
      console.log(res)
      self.exitbasicfilesrc = 'http://123.56.220.72:8080/Student/' + res.data.data.exitbasicfilesrc
      self.memberdemandfilesrc = 'http://123.56.220.72:8080/Student/' + res.data.data.memberdemandfilesrc
      self.project = res.data.data
      self.expectresult = JSON.parse(res.data.data.expectresult)
      var that = self
      axios.get(global.baseURL + 'api/user/getbyid?userid=' + res.data.data.userid)
      .then(function (res) {
        console.log(res)
        that.personalMsg = res.data.data
      })
    })
  },
  methods: {
    goGwfc: function () {
      this.$router.push({ path: '/gwfc' })
    },
    joinProject: function () {
      var self = this
      var personalMsg = new FormData()
      personalMsg.append('itemsid', this.projectId)
      personalMsg.append('token', global.user.token)
      axios.post(global.baseURL + 'api/items/apply?token=' + global.user.token, personalMsg)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('加入成功')
          self.$router.push({ path: '/square' })
        } else {
          alert('请先登录')
          self.$router.push({ path: '/login' })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details-content{
width:960px;
margin: 0 auto;
background:url(../img/xq.png) no-repeat;
background-size: 960px 609px;
height:1500px;
}
.details-content-top{
font-family: "微软雅黑";
width:100%;
height:246px;
}
.join{
font-size: 49px;
color:white;
font-weight: bold;
display: inline-block;
line-height: 246px;
margin-left: 93px;
}
.join:hover{
  cursor: pointer;
}
.details-top-right{
height:246px;
float:right;
width:402px;
margin-right: 66px;
}
.project-topname{
display: block;
padding-left: 10px;
margin-top: 35px;
width:402px;
font-size: 53px;
font-weight: bolder;
color:black;
float:right;
line-height: 67px;
}
.detail-key{
margin-top: 36px;
margin-right: 22px;
width:380px;
height:41px;
float:right;
}
.detail-key button{
font-weight: bold;
font-family: "微软雅黑";
font-size: 16px;
color:black;
float:left;
width:76px;
text-align: center;
height:41px;
background:rgb(210,228,242);
border:0;
}
.detail-middle{
position: relative;
width:785px;
margin:56px auto;
}
.detail-middle-left{
width:328px;
height:850px;
float:left;
}
.detail-middle-project{
width:100%;
height:668px;
}
.middle-project-top{
width:288px;
height:134px;
padding-left: 20px;
padding-top: 26px;
padding-right: 20px;
background:#67a0d4;
}
.middle-project-title{
font-size: 35px;
font-weight: bold;
line-height: 37px;
color:black;
}
.middle-project-content{
float:left;
width:268px;
border:5px solid rgb(144,186,224);
height:523px;
padding-left: 25px;
padding-right: 25px;
padding-top: 30px;
padding-bottom: 25px;
}
.middle-project-content ul li{
font-size: 18px;
color:black;
font-family: "微软雅黑";
margin-bottom: 15px;
}
.detail-introduction{
margin-top: 48px;
}
.detail-introduction-title{
width:100%;
font-size: 18px;
height:18px;
display:inline-block;
text-align: left;
color:black;
}
.detail-introduction p{
font-size: 12px;
text-indent: 2em;
color:black;
margin-top: 13px;
}
.detail-file{
width:268px;
border:5px solid rgb(144,186,224);
height:150px;
float:left;
margin-top: 16px;
padding-left: 25px;
padding-right: 25px;
}
.file-filter {
color:black;
float:left;
margin-left: 50px;
}
.file-title{
font-size: 18px;
text-align: center;
color:black;
display: block;
margin-top: 35px;
margin-bottom: 10px;
}
.detail-recruit{
width:154px;
height:424px;
float:left;;
}
.recruit-top{
width:100%;
height:160px;
background:#231e1b;
}
.recruit-bottom{
width:144px;
height:254px;
border:5px solid #231e1b;
}
.recruit-number{
font-size: 49px;
color:rgb(220,220,220);
width:100%;
height:49px;
line-height:49px ;
margin-top: 40px;
text-align: center;
float:left;
font-family: "微软雅黑";
}
.recruit-title{
font-weight: bold;
color:white;
font-size: 17px;
margin-top: 20px;
width:100%;
float:left;
text-align: center;
display: block;
}
.requirement{
width:80%;
display: inline-block;
font-size: 18px;
text-align: left;
margin-left:13px;
color:black;
margin-top: 15px;
}
.recruit-bottom ul{
float:left;
margin-top: 8px;
margin-left: 13px;
}
.recruit-bottom ul li{
font-size: 14px;
color:black;
margin-bottom: 5px;
text-align: left;
}
.project-way{
width:153px;
height:160px;
float:left;
background:#00a1e9;
text-align: center;
line-height: 160px;
font-size: 22px;
color:white;
}
.details-type{
height:276px;
width:150px;
float:left;
}
.details-type-top{
background:#ebece7;
width:150px;
height:160px;
}
.details-type-bottom{
border:5px solid #ebece7;
height:106px;
}
.details-type-date1{
font-size: 17px;
color:rgb(84,84,84);
display:inline-block;
width:100%;
height:17px;
line-height: 17px;
text-align: center;
margin-top: 47px;
}
.details-type-date2{
font-size: 25px;
color:rgb(84,84,84);
display:inline-block;
width:100%;
height:25px;
line-height: 25px;
text-align: center;
margin-top: 10px;
}
.details-type-bottom ul{
margin-left: 16px;
margin-top: 5px;
float:left;
color:block;
font-size: 14px;
}
.details-words{
overflow: hidden;
margin-top: 70px;
margin-left: 61px;
float:left;
width:395px;
height:663px;
}
.detail-basic-title{
font-size: 27px;
color:black;
display: inline-block;
}
.details-words p{
margin-top: 48px;
text-indent: 2em;
font-size: 14px;
color:black;
float:left;
}
.details-foot{
width:198px;
height:112px;
background:#004361;
float:left;
color:white;
display:block;
font-size: 22px;
font-weight: bold;
text-align: center;
line-height: 112px;
position: absolute;
top:1042px;
left:167px;
}
</style>
