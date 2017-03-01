<template>
  <div class="rewrite-content">
    <div class="rewrite-content2">
			<span class="rewrite-title">个人信息修改</span>
			<!--个人信息-->
			<div class="rewrite-top">
				<span class="rewrite-information">1.个人信息</span>
        <div class="person-type">
  				<button v-for="(item, index) in items" :class="{'active':item.active,'unactive':!item.active}"  v-on:click="personKind(item, index)">{{item.data}}</button>
  			</div>
				<div class="rewrite-name">
					<span >姓名</span>
					<input type="text" name=""  placeholder="不可更改" v-model='userMsg.username' v-bind:value=userMsg.username />
				</div>
				<div class="rewrite-number">
					<span >学号</span>
					<input type="text" name="" class="rewrite-number" v-model='userMsg.studentid' :value=userMsg.studentid />
				</div>
			</div>
			<div class="rewrite-college">
				<span>学院/部门/单位</span>
				<input type="text" name="" v-model='userMsg.department'  :value=userMsg.department />
			</div>
			<div class="rewrite-major">
				<span>专业方向</span>
				<input type="text" name="" v-model='userMsg.major'  :value=userMsg.major />
			</div>
			<div class="rewrite-person-bottom">
				<div class="rewrite-emal">
					<span >电子邮件</span>
					<input type="text" name="" v-model='userMsg.email'  :value=userMsg.email />
				</div>
				<div class="rewrite-call-number">
					<span >联系电话</span>
					<input type="text" name="" v-model='userMsg.telephone'  :value=userMsg.telephone />
				</div>
			</div>
			<div class="rewrite-summary">
				<span>个人简介</span>
				<textarea name="" placeholder="个人简介，专业特长" class="summary-textarea" v-model='userMsg.personalbrief' :value=userMsg.personalbrief></textarea>
			</div>
			<div class="rewrite-selfdom">
				<button class="rewrite-complete" v-on:click="change">确认</button>
			</div>
      </div>
		</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import global from '../global/global'
export default {
  name: 'rewrite-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userid: this.$route.params.id,
      userMsg: '',
      items: [
        { data: '学生', val: 0 },
        { data: '教工', val: 1 },
        { data: '校友', val: 2 },
        { data: '企业', val: 3 }
      ],
      active: false
    }
  },
  created () {
    var self = this
    axios.get(global.baseURL + 'api/user/getbyid?userid=' + this.userid + '&token=' + global.user.token)
    .then(function (res) {
      Vue.set(self.items[res.data.data.usertype], 'active', true)
      self.userMsg = res.data.data
    })
  },
  methods: {
    personKind: function (item, index) {
      var self = this
      this.$nextTick(function () {
        self.items.forEach(function (item) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
      Vue.set(this.userMsg, 'usertype', item.val)
    },
    change: function () {
      var self = this
      var personalMsg = new FormData()
      personalMsg.append('username', this.userMsg.username)
      personalMsg.append('studentid', this.userMsg.studentid)
      personalMsg.append('usertype', this.userMsg.usertype)
      personalMsg.append('department', this.userMsg.department)
      personalMsg.append('major', this.userMsg.major)
      personalMsg.append('email', this.userMsg.email)
      personalMsg.append('telephone', this.userMsg.telephone)
      personalMsg.append('personalbrief', this.userMsg.personalbrief)
      personalMsg.append('personaltag', this.userMsg.personaltag)
      personalMsg.append('userid', this.userMsg.userid)
      console.log(this.userMsg)
      axios.post(global.baseURL + 'api/user/update?token=' + global.user.token, personalMsg)
      .then(function (result) {
        // console.log(res)
        if (result.data.callStatus === 'SUCCEED') {
          alert('信息修改成功')
          global.user.username = self.userMsg.username
          global.user.studentid = self.userMsg.studentid
          global.user.department = self.userMsg.department
          global.user.major = self.userMsg.major
          global.user.email = self.userMsg.email
          global.user.personalbrief = self.userMsg.personalbrief
          global.user.usertype = self.userMsg.usertype
          global.user.telephone = self.userMsg.telephone
          self.$router.push({name: 'personal'})
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rewrite-content{
	background:rgb(70,77,87);
	font-family: "微软雅黑";
  width:100%;
  height:auto;
  overflow: hidden;
}
.person-type{
	float:left;
	width:100%;
	display:flex;
	flex-direction: row;
	height:73px;
	justify-content: space-between;
	margin-top: 75px;
}
.person-type button{
	width:212px;
	height:72px;
	background:rgb(70,77,87);
	border:1px solid white;
	text-align: center;
	font-size: 33px;
	color:white;
	font-family: "微软雅黑";
}
.person-type button.active{
	background:rgb(4,177,243);
}
.rewrite-content2{
	width:960px;
	height:auto;
	margin:80px auto;
}
.self-flex button.active{
	border:4px solid white;
	color:white;
}
.rewrite-title{
	width:100%;
	text-align: center;
	display:block;
	font-size: 42px;
	color:white;
	font-weight: bold;
}
.rewrite-information{
	display:block;
	float:left;
	text-align: left;
	width:960px;
	float:left;
	height:90px;
	margin-top: 20px;
	line-height: 90px;
	border-bottom: 4px solid rgb(4,177,243);
	font-size: 25px;
	color:white;
	background:rgb(70,77,87)
}
.rewrite-top{
	width:960px;
	float:left;
	height:auto;
}
/*姓名*/
.rewrite-name{
	margin-top: 50px;
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
}
.rewrite-name input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:390px;
	height:14px;
	font-weight: bold;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-name span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*学号*/
.rewrite-number{
	margin-top: 50px;
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
}
.rewrite-number input,.rewrite-college input,.rewrite-major input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:390px;
	height:14px;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	font-weight: bold;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-college input,.rewrite-major input{
  width: 250px;
}
.rewrite-number span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*密码*/
.rewrite-ma{
	float:left;
	width:450px;
	height:auto;
}
.rewrite-person-ma{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 40px;
}
.rewrite-person-ma input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:390px;
	height:14px;
	font-weight: bold;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-ma span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*重复密码*/
.rewrite-rema{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 40px;
}
.rewrite-rema input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-weight: bold;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:300px;
	height:14px;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-rema span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*学院部门*/
.rewrite-college{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.rewrite-college select{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:280px;
	height:18px;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:9px;
	float:right;
	font-weight: bold;
	outline: none;
}
.rewrite-college span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*专业方向*/
.rewrite-major{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.rewrite-major select{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:280px;
	height:18px;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	font-weight: bold;
	margin-top:9px;
	float:right;
	outline: none;
}
.rewrite-major span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*电子邮件、联系电话*/
.rewrite-person-bottom{
	width:450px;
	float:left;
	height: auto;
}
.rewrite-emal{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.rewrite-emal input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:300px;
	height:14px;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-emal span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*联系电话*/
.rewrite-call-number{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.rewrite-call-number input{
	color:rgb(215,215,217);
	font-size: 14px;
	font-family: "微软雅黑";
	margin-left: 15px;
	width:300px;
	height:14px;
	font-weight: bold;
	background:rgb(70,77,87);
	padding:0;
	border:0;
	margin-top:11px;
	float:left;
	outline: none;
}
.rewrite-call-number span{
	font-weight: bold;
	height:33px;
	line-height: 33px;
	color:rgb(215,215,217);
	display:block;
	float:left;
	text-align: center;
	font-size: 20px;
}
/*个人简介*/
.rewrite-summary{
	width:960px;
	float:left;
	height:auto;
	margin-top: 65px;
}
.rewrite-summary span{
	display:block;
	float:left;
	width:450px;
	text-align: left;
	height:33px;
	font-weight: bold;
	color:rgb(215,215,217);
	font-size: 20px;
	line-height: 33px;
	border-bottom: 2px solid rgb(215,215,217);
}
.rewrite-summary textarea{
	width:960px;
	float:left;
	height:136px;
	font-size: 14px;
	font-weight: bold;
	color:rgb(215,215,217);
	background:rgb(70,77,87);
	margin-top: 22px;
}
/*个性标签*/
.rewrite-selfdom{
	height:800px;
	width:960px;
	float:left;
}
.rewrite-self-title{
	display:block;
	float:left;
	text-align: left;
	width:960px;
	float:left;
	height:90px;
	margin-top: 20px;
	line-height: 90px;
	border-bottom: 4px solid rgb(4,177,243);
	font-size: 25px;
	color:white;
	background:rgb(70,77,87)
}
.rewrite-selfdom ul{
	float:left;
	width:960px;
	height:auto;
	background:green;
}
.rewrite-self-flex{
	margin-top: 34px;

	height:54px;
	width:100%;
	float:left;
	display:flex;
	flex-direction: row;
	justify-content: space-between;
}
.rewrite-self-flex button{
	font-family: "微软雅黑";
	background:rgb(70,77,87);
	width:120px;
	font-size: 20px;
	font-weight: bold;
	color:rgb(126,128,132);
	height:54px;
	border: 2px solid rgb(126,128,132);
	outline: none;
}
.rewrite-self-flex button.active{
	border:4px solid white;
	color:white;
}
.rewrite-selfdom .rewrite-complete{
	outline: none;
	font-size: 24px;
	color:white;
	font-family: "微软雅黑";
	float:right;
	background: rgb(70,77,87);
	border:0;
	margin-top: 30px;
}
</style>
