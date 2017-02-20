<template>
<div>
  <div class="login">
    <div class="login2">
			<div class="user-number" prop="name">
				<img src="../img/r1.png"/>
				<input type="text"  class="user-number-t" placeholder="学号" v-model="people.name" />
			</div>
			<div class="chose"></div>
			<div class="user-password" prop="pwd">
				<img src="../img/r2.png"/>
				<input type="password"  class="user-password-b" placeholder="密码" v-model="people.pwd" />
			</div>
			<a href="javascript:;"><span class="forget" @click="forgetPwd">忘记密码?</span></a>
			<a href="javascript:;"><span class="click-regester" @click="goRegester">点击注册</span></a>
			<button type="button" class="user-login" @click="btn">登录</button>
      <!-- <forgetPwd v-if=""></forgetPwd> -->
      <goRegester :food="go" v-if="go" ref="goto"></goRegester>
	</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import goRegester from './Regester'
// import router from '../main'
export default {
  name: 'login',
  data () {
    return {
      people: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    btn: function () {
      var self = this
      var zipFormData = new FormData()
      zipFormData.append('studentid', this.people.name)
      zipFormData.append('password', this.people.pwd)
      axios.post('http://123.56.220.72:8080/Student/api/user/login', zipFormData)
      .then(function (result) {
        console.log(self.people.name)
        self.$router.push({ path: '/personal' })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    forgetPwd: function () {
      this.$router.push({ path: '/forgetPwd' })
    },
    goRegester: function () {
      var self = this
      this.$nextTick(() => {
        self.$refs.isShow.isShow()
      })
      this.$router.push({ path: 'regester' })
    }
  },
  components: {
    goRegester
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	background:url(../img/logback.png) no-repeat;
	width: 100%;
	height: 765px;
  overflow: hidden;
}
.login2{
	width:255px;
	height:303px;
	background:url(../img/logwite.png) no-repeat;
	background-size: 255px 303px;
	float:left;
	margin-left: 580px;
  margin-top: 200px;
}
.user-number{
	width:211px;
	height:32px;
	float:left;
	margin-top: 97px;
	margin-left: 26px;
	border-bottom: 1px solid rgb(213,213,213);
	color:rgb(164,164,164);
}
.user-number img{
	width:18px;
	height:20px;
	float:left;
	margin-right: 8px;
	margin-top: 5px;
}
.user-number-t{
	outline: none;
	width:178px;
	height:32px;
	border:0;
	font-size: 12px;
	font-family: "微软雅黑";
	-webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.8);
}
.user-password{
	width:211px;
	height:32px;
	float:left;
	margin-top: 30px;
	margin-left: 26px;
	border-bottom: 1px solid rgb(213,213,213);
	color:rgb(164,164,164);
}
.user-password img{
	width:14px;
	height:20px;
	float:left;
	margin-right: 12px;
	margin-top: 5px;
}
.user-password-b{
	font-family: "微软雅黑";
	outline: none;
	width:178px;
	height:32px;
	border:0;
	font-size: 12px;
	-webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.8);
}
.forget{
	display:block;
	font-size: 12px;
	float:right;
	white-space: nowrap;
	margin-top: 2px;
	margin-right: 8px;
	color: rgb(164,164,164);
	-webkit-transform-origin-x: 0;
    -webkit-transform: scale(0.8);
}
.click-regester{
	display:block;
	font-size: 12px;
	float:left;
	white-space: nowrap;
	text-align: center;
	width:255px;
	color: rgb(164,164,164);
}
.user-login{
	width:211px;
	float:left;
	height:40px;
	background:url(../img/login.png) no-repeat;
	background-size: 211px 40px;
	color:rgb(210,219,217);
	font-family: "微软雅黑";
	border:0;
	margin-left: 26px;
	margin-top:7px;
}
.user-login:focus{
	background:url(../img/logfocus.png) no-repeat;
	border:0;
	background-size:211px 40px ;
}
</style>
