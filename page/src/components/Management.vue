<template>
  <div class="management">
		<div class="header">
			<div class="nav">
	            <div class="nav-left">
					<img src="../img/logo.png" class="logo"/>
					<a href="javascript:;"><span>同济大学汽车学院</span></a>
	            </div>
				<ul class="nav-content">
					<li><a href="javascript:;">新闻通知</a></li>
					<li><a href="javascript:;">项目广场</a></li>
					<li><a href="javascript:;">过往风采</a></li>
					<li><a href="javascript:;">资料下载</a></li>
				</ul>
				<div class="nav-right">
					<input type="text" placeholder="点击搜索" id="inp" />
					<span><a href="javascript:;">个人中心</a></span>
				</div>
			</div>
		</div>
		<!--中间部分-->
		<div class="management-content">
			<div class="management-left">
				<div class="management-content-left">
					<div class="management-left-top">
						<div class="management-username">
							<img src=""/>
							<div class="user-management">
								<span class="username-management-name">你的名字</span><br/>
								<span class="management-number-fiex">账号:</span><span class="management-number">123456789</span>
							</div>
						</div>
						<div class="cont-left-manageright">
							<span class="manageright-left-words">MANAGEMENT</span>
							<span class="manageright-right-words">项<br/>目<br/>管<br/>理</span>
						</div>
					</div>
					<ul class="cont-manage-bottom">
						<li><a href="javascript:;">新闻通告</a></li>
						<li><a href="javascript:;">个人信息</a></li>
						<li><a href="javascript:;">项目管理</a></li>
						<li><a href="javascript:;">私信</a></li>
					</ul>
				</div>
				<!--发起项目-->
				<button class="post-project">发起项目</button>
			</div>
			<!--右边项目-->
			<div class="management-right">
				<ul>
          <li v-for="(item, index) in items">
						<div class="manage-project">
							<span class="manage-rank">No.{{index+1}}</span>
							<span class="manage-project-name">{{item.title}}</span>
						</div>
						<div class="manage-project-information">
							<span>起止时间:</span>&nbsp;
							<span class="manage-date">{{item.start}}</span>
              <span class="date-right-border">-</span>&nbsp;
              <span class="manage-date2">{{item.end}}</span>&nbsp;
							<span class="date-right-border">|</span>&nbsp;
							<span>负责人:</span>&nbsp;
							<span class="responsible-name">{{item.responsible}}</span>&nbsp;
							<span class="date-right-border">|</span>&nbsp;
							<span>状态: </span>&nbsp;
							<span class="state">{{item.state}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!--底部-->
		<div class="footer">
			<span class="footer-span1">版权信息</span><br/>
			<span class="footer-span2">版权信息版权信息版权信息</span><br/>
			<span class="footer-span2">版权信息版权信息版权信息</span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'management',
  data () {
    return {
      items: [
        {
          title: '这是项目名这是项目名这是项目名这是项',
          start: '2014.12.25',
          end: '2016.12.25',
          responsible: '某某某',
          state: '已结题'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.management-content{
	width:960px;
	margin:0 auto;
	min-height:575px;
	height:auto!important;
	height:575px;
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
	float:left;
}
.user-management .username-management-name{
	display:block;
	font-weight: bold;
	float:left;
	color:black;
	font-size: 15px;
}
/*登录后账号*/
.management-username .management-number{
	display:block;
	float:left;
	color:black;
	font-size: 14px;

}
/*账号：*/
.management-username .management-number-fiex{
	display:block;
	float:left;
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
/*发起项目*/
.post-project{
	width:137px;
	height:60px;
	float:right;
	margin-top:16px;
	background:rgb(126,206,243);
	color:white;
	font-size: 30px;
	font-family: "微软雅黑";
	border: 0;
}
/*右半部分*/
.management-right{
	float:left;
	margin-left: 100px;
	margin-top: 90px;
}
.management-right ul{
	float:left;
}
.management-right ul li{
	margin-bottom: 32px;
}
.manage-project{
	height:35px;
	width:auto;
	text-align: left;
	margin-bottom: 3px;
}
.manage-project .manage-rank{
	display: inline-block;
	float:left;
	padding-left: 20px;
	font-size: 13px;
	color:white;
	line-height: 35px;
	height:35px;
	background:rgb(126,206,243);
}
.manage-project-name{
	float:left;
	padding-left: 20px;
	padding-right: 16px;
	background:rgb(126,206,243);
	font-size: 16px;
	line-height: 35px;
	height: 35px;
	color:rgb(12,0,1);
	font-weight: bold;
	display: inline-block;
}
.manage-project-information{
	font-size: 12px;
	color:rgb(133,133,133);
}
.date-right-border{
	color:rgb(126,206,243);
	font-weight: bold;
}
</style>
