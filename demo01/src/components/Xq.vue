<template>
  <div class="xq">
    <!--导航栏-->
		<div class="header">
			<div class="nav">
				<!--
	            	logo图
	            -->
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
		<!--底部-->
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
			</div>
			<!--右半部分-->
			<div class="xq-content-right">
				<div class="xq-project-name">
					<span class="xq-project-title">项目名字项目名字项目名字</span>
					<div class="xq-leader">
						<span>负责人 :&nbsp;</span>
						<span class="xq-project-user">小明</span>
					</div>
					<p>
						项目简介这个项目非常好，项目简介这个项目非常好，
						项目简介这个项目非常好，项目简介这个项目非常好，
						项目简介这个项目非常好，项目简介这个项目非常好，
					</p>
				</div>
				<div class="xq-modify-right">
					<ul class="xq-modify1">
						<li>
							<span>学科方向:&nbsp;</span>
							<span>新能源</span>
						</li>
						<li>
							<span>关键词:&nbsp;</span>
							<span>试验</span>&nbsp;&nbsp;
							<span>大数据</span>&nbsp;&nbsp;
						</li>
						<li>
							<span>预期成果:</span>&nbsp;
							<span>报告</span>
						</li>
					</ul>
					<ul class="xq-modify2">
						<li>
							<span>成员需求: </span>
							<span>5</span>
							<span>人</span>
							<span>严谨求实</span>
						</li>
						<li><span>申请成员列表:</span>
							<span>小东</span>
							<span>小北</span>
							<span>小西</span>
						</li>
						<li><span>已录用成员:</span>&nbsp;&nbsp;
							<span>小南</span>
							<span>小南</span>
						</li>
					</ul>
					<ul class="xq-modify3">
						<li>
							<span>联系方式:</span>&nbsp;
							<span>34234225</span>
						</li>
						<li>
							<span>发布有效期 (截止时间) :</span>&nbsp;&nbsp;
							<span>1</span>
							<span>月</span>
							<span>31</span>
							<span>日</span>
						</li>
					</ul>
					<div class="xq-employ">
						<input type="button" name="" id="" value="录用" />
						<input type="button" name="" id="" value="删除" />
					</div>
					<button class="modify-data">修改资料</button>
				</div>
				<div class="xq-content-bottom">
					<ul class="">
						<li>项目负责人: <span>小明</span></li>
						<li>指导老师: <span>李老师</span></li>
						<li>项目状态: <span>已审核</span></li>
						<li>项目类型: <span>sitp</span></li>
					</ul>
					<div class="xq-bottom-but">
						<button class="but-left">申请结题</button>
						<button class="but-content">退出项目</button>
						<button class="but-right">关闭</button>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<span class="footer-span1">版权信息</span><br/>
			<span class="footer-span2">版权信息版权信息版权信息</span><br/>
			<span class="footer-span2">版权信息版权信息版权信息</span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'xq',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
