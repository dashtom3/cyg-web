<template>
  <div>
  <v-header></v-header>
  <div class="xq">
    <!--导航栏-->
    <div class="management-content">
			<div class="management-left">
				<div class="management-content-left">
					<div class="management-left-top">
						<div class="management-username">
							<div style="height:70px"></div>
							<div class="user-management">
								<span class="username-management-name">{{personalMsg.username}}</span><br/>
								<span class="management-number-fiex">账号:</span><span class="management-number">{{personalMsg.studentid}}</span>
							</div>
						</div>
						<div class="cont-left-manageright">
							<span class="manageright-left-words">MANAGEMENT</span>
							<span class="manageright-right-words">项<br/>目<br/>管<br/>理</span>
						</div>
					</div>
					<ul class="cont-manage-bottom">
						<li v-on:click="goPersonal"><a href="javascript:;">个人信息</a></li>
						<li v-on:click="goPro"><a href="javascript:;">项目管理</a></li>
					</ul>
				</div>
			</div>
		<!--底部-->
		<div class="management-content">
			<!--右半部分-->
			<div class="xq-content-right">
				<div class="xq-project-name">
					<span class="xq-project-title">{{projectMsg.itemname}}</span>
					<div class="xq-leader">
						<span>负责人 :&nbsp;</span>
						<span class="xq-project-user">{{projectMsg.itemleader}}</span>
					</div>
					<p>
						{{projectMsg.itembrief}}
					</p>
				</div>
				<div class="xq-modify-right">
					<ul class="xq-modify1">
						<li>
							<span>学科方向:&nbsp;</span>
							<span>{{direction[projectMsg.projectdirection]}}</span>
						</li>
						<li>
							<span>关键词:&nbsp;</span>
							<span>{{projectMsg.keywords}}</span>
						</li>
					</ul>
					<ul class="xq-modify2">
						<li>
							<span>成员需求: </span>
							<span>{{projectMsg.memberdemand}}</span>
							<span>人</span>
							<span>严谨求实</span>
						</li>
						<li><span>申请成员列表:</span>
							<span v-for="personal in applypersonals">{{personal.username}}&nbsp;&nbsp;<a href="javascript:;" style="color:red" v-on:click="agree(personal.applicationid)">录用</a></span>
						</li>
						<li><span>已录用成员:</span>&nbsp;&nbsp;
							<span v-for="agree in agreepersonal">{{agree.username}}&nbsp;&nbsp;<a href="javascript:;" style="color:red" v-on:click="del(agree.applicationid)">删除</span>
						</li>
					</ul>
					<ul class="xq-modify3">
						<li>
							<span>联系方式:</span>&nbsp;
							<span>{{personalMsg.telephone}}</span>
						</li>
						<li>
							<span>发布有效期 (截止时间) :</span>&nbsp;&nbsp;
							<span>{{projectMsg.endtime | year}}</span>
						</li>
					</ul>
					<!-- <button class="modify-data">修改资料</button> -->
				</div>
				<div class="xq-content-bottom">
					<ul class="">
						<li>项目负责人: <span>{{projectMsg.itemleader}}</span></li>
						<li>指导老师: <span>{{projectMsg.teacher}}</span></li>
						<li>项目状态: <span>{{type[projectMsg.type]}}</span></li>
						<li>项目类型: <span>{{st[projectMsg.labels]}}</span></li>
					</ul>
					<div class="xq-bottom-but">
						<button class="but-left" v-on:click="goKnot(itemsid)">申请结题</button>
						<!-- <button class="but-content">退出项目</button> -->
						<!-- <button class="but-right">关闭</button> -->
					</div>
				</div>
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
  name: 'xq',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      itemsid: this.$route.params.id,
      personalMsg: global.user,
      projectMsg: '',
      applypersonals: [],
      agreepersonal: [],
      st: ['国创', '上创', 'sitp', '创新赛事', '企业课题', '创业', '其他'],
      type: ['结题项目', '申请项目'],
      direction: ['整车', '动力', '电子', '车身', '新能源', '营销', '实验', '其他']
    }
  },
  created () {
    console.log(this.personalMsg)
    var self = this
    axios.get(global.baseURL + 'api/items/getbyid?itemsid=' + this.itemsid)
    .then(function (res) {
      // console.log(res)
      self.projectMsg = res.data.data
    })
    axios.get(global.baseURL + 'api/items/getApplicationList?itemsid=' + this.itemsid)
    .then(function (res) {
      // console.log(res)
      for (let i in res.data.data) {
        // console.log(res.data.data[i].state)
        if (res.data.data[i].state === 1) {
          self.agreepersonal.push(res.data.data[i])
        } else {
          self.applypersonals.push(res.data.data[i])
        }
      }
    })
  },
  methods: {
    agree: function (id) {
      var self = this
      var agree = new FormData()
      agree.append('applicationid', id)
      agree.append('state', '1')
      axios.post(global.baseURL + 'api/items/handleApplication?token=' + global.user.token, agree)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('录用成功')
          var that = self
          Vue.nextTick(function () {
            axios.get(global.baseURL + 'api/items/getApplicationList?itemsid=' + that.itemsid)
            .then(function (res) {
              console.log(res)
              that.agreepersonal = []
              that.applypersonals = []
              for (let i in res.data.data) {
                console.log(res.data.data[i].state)
                if (res.data.data[i].state === 1) {
                  that.agreepersonal.push(res.data.data[i])
                } else {
                  that.applypersonals.push(res.data.data[i])
                }
              }
            })
          })
        }
      })
    },
    del: function (id) {
      var self = this
      var agree = new FormData()
      agree.append('applicationid', id)
      agree.append('state', '0')
      axios.post(global.baseURL + 'api/items/handleApplication?token=' + global.user.token, agree)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('删除成功')
          var that = self
          Vue.nextTick(function () {
            axios.get(global.baseURL + 'api/items/getApplicationList?itemsid=' + that.itemsid)
            .then(function (res) {
              console.log(res)
              that.agreepersonal = []
              that.applypersonals = []
              for (let i in res.data.data) {
                console.log(res.data.data[i].state)
                if (res.data.data[i].state === 1) {
                  that.agreepersonal.push(res.data.data[i])
                } else {
                  that.applypersonals.push(res.data.data[i])
                }
              }
            })
          })
        }
      })
    },
    goKnot: function (id) {
      this.$router.push({name: 'knot', params: { id: id }})
    },
    goPersonal: function () {
      this.$router.push({ path: '/personal' })
    },
    goPro: function () {
      this.$router.push({ path: '/management' })
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
.management-content{
	width:960px;
	margin:0 auto;
	min-height:984px;
	height:auto!important;
	height:984px;
}
.xq-modify2 li:nth-child(2) span,.xq-modify2 li:nth-child(3) span{
  display: block;
}
.management-left{
	float:left;
	width:264px;
	height:503px;
}
.management-content-left{
	width:214px;
	height:424px;
	float:left;
	background-color:rgb(126,206,243);
	padding-left:23px;
	padding-right: 23px;
}
.management-left-top{
	border-bottom: 2px solid rgb(114,166,188);
	width:100%;
	height:196px;
}
/*竖着字体设置*/
.cont-left-manageright{
	margin-top: 50px;
	float:right;
	width:64px;
	height:146px;
	color:white;
	position:relative;
}
.manageright-left-words{
	transform: rotateZ(-90deg);
	-webkit-transform: rotateZ(-90deg);
	text-transform:capitalize;
	text-align: center;
	display:block;
	font-size: 17px;
	position: absolute;
	bottom:64px;
	right:-20px;
	font-weight: bold;
}
.manageright-right-words{
	float:right;
	display:block;
	font-size: 32px;
	font-weight: bold;
	line-height: 34px;
}
/*左边用户部分*/
.management-username{
	float:left;
	width:146px;
}
/*用户照片*/
.management-username img{
	width:70px;
	height:75px;
	float:left;
	background-color:rgb(193,193,193);
	margin-top: 60px;
}
/*个人信息*/
.user-management{
	font-family: "微软雅黑";
	margin-top: 14px;
  width: 146px;
}
.user-management .username-management-name{
	display:block;
	font-weight: bold;
	color:black;
	font-size: 15px;
}
/*登录后账号*/
.management-username .management-number{
	display:inline-block;
	color:black;
	font-size: 14px;

}
/*账号：*/
.management-username .management-number-fiex{
	display:inline-block;
	color:black;
	font-size: 15px;
	font-weight: bold;
	margin-right: 8px;
}
/*左边下半部分*/
.cont-manage-bottom{
	float:left;
	margin-top: 25px;
}
.cont-manage-bottom li a{
	display:block;
	font-size: 19px;
	color:white;
	font-weight: bold;
	text-align: left;
	margin-bottom: 10px;
}
.cont-manage-bottom a:focus{
	color:#464d57;
}
.xq-content-right{
	width:560px;
	margin-top: 104px;
	height:auto;
	float:left;
	margin-left: 102px;
}
.xq-project-name{
	width:100%;
	height:320px;
	border-top: 2px solid rgb(64,109,128);
}
.xq-project-title{
	width:100%;
	font-size: 35px;
	color:rgb(1,140,195);
	font-weight: bold;
	display: inline-block;
	margin-top: 28px;
}
.xq-leader{
	font-size: 17px;
	color:rgb(14,55,75);
	display: inline-block;
	font-weight: bold;
	margin-top: 16px;
}
.xq-project-name p{
	font-size: 12px;
	color:black;
	font-weight: bold;
	text-indent: 2rem;
	margin-top: 109px;
	float:left;
}
.xq-modify-right{
	width:100%;
	height:239px;
	border-top: 2px solid rgb(64,109,128);
	position: relative;
}
.xq-modify1{
	float:left;
	width:100%;
	margin-top: 39px;
	font-size: 12px;
	color:black;
	text-align: left;
}
.xq-modify2,.xq-modify3{
	float:left;
	width:100%;
	margin-top: 18px;
	font-size: 12px;
	color:black;
	text-align: left;
}
.xq-employ{
	position: absolute;
	width:34px;
	height:34px;
	left:240px;
	top:117px;
}
.xq-employ input{
	width:34px;
	float:left;
	margin-bottom: 1px;
	height:16px;
	background:rgb(126,206,243);
	border:0;
	color:white;
	font-size: 12px;
	font-family: "微软雅黑";
}
.modify-data{
	width:103px;
	height:33px;
	background:rgb(126,206,243);
	color:white;
	border:0;
	font-size: 15px;
	font-family: "微软雅黑";
	float:right;
	position:absolute;
	right:0;
	bottom:10px;
}
.xq-content-bottom{
	width:100%;
	height:auto;
	border-top: 2px solid rgb(64,109,128);
	float:left;
}
.xq-content-bottom ul{
	color:black;
	float:left;
	margin-top: 22px;
}
.xq-bottom-but{
	width:100%;
	height:35px;
	float:left;
	margin-top: 24px;
}
.xq-bottom-but button{
	width:100px;
	background:rgb(126,206,243);
	height:35px;
	border:0;
	font-family: "微软雅黑";
	color:white;
	font-size: 15px;
}
.but-left{
	float:left;
}
.but-content{
	float:left;
	margin-left:54px;
}
.but-right{
	float:right;
}
</style>
