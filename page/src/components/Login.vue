<template>
<div>
  <v-header></v-header>
  <div class="login" ref="login">
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
  name: 'login',
  data () {
    return {
      people: {
        name: '',
        pwd: ''
      },
      isShow: false,
      personaltag: [],
      selfdoms: ['文', '理', '工', '农', '医', '财务管理', '团队管理', '宣传管理', '问卷星', '公众号管理', '计算机编程', '摄影', '体育运动', '信息检索', '报告撰写', '结构建模', '有限元分析', 'matlab', '仿真计算', 'autoCAD']
    }
  },
  methods: {
    btn: function () {
      var self = this
      var zipFormData = new FormData()
      zipFormData.append('studentid', this.people.name)
      zipFormData.append('password', this.people.pwd)
      axios.post(global.baseURL + 'api/user/login', zipFormData)
      .then(function (result) {
        // console.log(result)
        if (result.data.callStatus === 'SUCCEED') {
          alert('登录成功')
          var token = result.data.token
          axios.get(global.baseURL + 'api/user/getbytoken?token=' + token)
          .then(function (result) {
            console.log(result)
            global.user.token = token
            global.user.userid = result.data.data.userid
            global.user.username = result.data.data.username
            global.user.state = '个人中心'
            global.user.studentid = result.data.data.studentid
            switch (result.data.data.department) {
              case 0:
                global.user.department = '小学'
                break
              case 1:
                global.user.department = '初中'
                break
              default:
                global.user.department = '大学'
            }
            switch (result.data.data.major) {
              case 0:
                global.user.major = '小学'
                break
              case 1:
                global.user.major = '初中'
                break
              default:
                global.user.major = '大学'
            }
            global.user.email = result.data.data.email
            global.user.personalbrief = result.data.data.personalbrief
            global.user.usertype = result.data.data.usertype
            global.user.telephone = result.data.data.telephone
            // 个性标签
            for (let i in JSON.parse(result.data.data.personaltag)) {
              self.personaltag.push(self.selfdoms[JSON.parse(result.data.data.personaltag)[i]])
            }
            global.user.personaltag = self.personaltag
            switch (result.data.data.usertype) {
              case 0:
                global.user.usertype = '学生'
                break
              case 1:
                global.user.usertype = '教工'
                break
              case 2:
                global.user.usertype = '校友'
                break
              default:
                global.user.usertype = '企业'
            }
          })
          global.user.path = '/personal'
          self.$router.push({ path: global.user.path })
        } else {
          alert('账号或密码错误')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    forgetPwd: function () {
      this.$router.push({ path: '/forgetPwd' })
    },
    goRegester: function () {
      this.$router.push({ path: 'regester' })
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  mounted () {
    var login = this.$refs.login
    global.setHeight(login)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  display: none
}
.footer{
  display: none
}
.login{
	background:url(../img/logback.png) no-repeat;
	min-width: 960px;
	min-height: 620px;
  overflow: hidden;
  background-size: cover;
  margin: 0 auto!important;
}
.login2{
	width:255px;
	height:303px;
	background:url(../img/logwite.png) no-repeat;
	background-size: 255px 303px;
	float:left;
	left:50%;
	top:50%;
	position:fixed;
	margin-left: -123px;
	margin-top: -101px;
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
