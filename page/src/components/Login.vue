<template>
  <div class="login">
    <div class="login2">
			<div class="user-number">
				<img src="../img/r1.png"/>
				<input type="text"  class="user-number-t" placeholder="学号" />
			</div>
			<div class="chose">

			</div>
			<div class="user-password">
				<img src="../img/r2.png"/>
				<input type="text"  class="user-password-b" placeholder="密码" />
			</div>
			<a href="javascript:;"><span class="forget">忘记密码?</span></a>
			<a href="javascript:;"><span class="click-regester">点击注册</span></a>
			<input type="button" class="user-login" value="登录" />
	</div>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
	background:url(../img/logback.png) no-repeat;
	width: 1366px;
	height: 768px;
  margin:auto;
  overflow: hidden;
}
.login2{
	width:255px;
	height:303px;
	background:url(../img/logwite.png) no-repeat;
	background-size: 255px 303px;
	float:left;
	margin-left: 40%;
	margin-top: 15%;
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
