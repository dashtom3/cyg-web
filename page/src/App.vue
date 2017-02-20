<template>
  <div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style>
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
  @import '/static/lib/bootstrap/css/bootstrap.css';
  @import '/static/stylesheets/theme.css';
  @import '/static/lib/font-awesome/css/font-awesome.css';
  @import '/static/stylesheets/theme.css';
  html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
  fieldset, img { border:none; }
  img{display: block; vertical-align: bottom}
  address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }
  ul, ol { list-style:none; }
  body { width:100%; color: #5e5e5e; font:12px/20px "微软雅黑",HELVETICA; background:#fff;/* overflow-y:scroll;*//* overflow-x:hidden;*/
height:100vh;}
  a { color:#666; text-decoration:none; }
  /*头部、导航栏*/
  .header{
  	width:100%;
  	height:70px;
  	background-color:rgb(1,0,34) ;
  }
  .nav{
  	width:1000px;
  	height:70px;
  	background-color:rgb(1,0,34);
  	margin:0 auto;
  }
  .nav-left{
  	float:left;
  	margin-left:28px;
  }
  .nav-left .logo{
  	width:58px;
  	height:58px;
  	float:left;
  	margin-right:26px;
  	margin-top:7px;
  }
  .nav-left span{
  	color:white;
  	font-weight: bold;
  	font-size: 18px;
  	display: block;
  	text-align: center;
  	white-space: nowrap;
  	height:70px;
  	line-height: 70px;
  }
  /*导航中间部分*/
  .nav-content{
  	margin-left:170px;
  	float:left;
  }
  .nav-content li{
  	float:left;
  }
  .nav-content a{
  	display: block;
  	height:70px;
  	line-height: 70px;
  	font-size: 15px;
  	color:white;
  	text-align: center;
  	padding-left: 10px;
  	padding-right:10px;
  	font-weight: bold;
  }
  /*导航右边部分*/
  .nav-right{
  	float:left;
  	margin-left: 20px;
  }
  #inp{
  	width:165px;
  	height:29px;
  	background-color: rgb(1,0,34);
  	border:1px solid white;
  	float:left;
  	margin-top: 20px;
  	padding-left:5px;
  	font-size: 14px;
  	color:white;
  }
  .nav-right a{
  	display:block;
  	font-size: 18px;
  	float:left;
  	color:white;
  	font-weight: bold;
  	height:70px;
  	line-height: 70px;
  	margin-left: 22px;
  }
  /*footer*/
  .footer{
  	background:rgb(190,203,209);
  	height:177px;
  	text-align: center;
  	color:white;
  	width:100%;
  }
  .footer-span1{
  	display:inline-block;
  	font-size:22px;
  	margin-top: 33px;
  	margin-bottom:10px;
  }
  .footer-span2{
  	font-size: 16px;
  	display:inline-block;
  	margin-top: 12px;
  }
  /*后台管理系统*/

</style>
