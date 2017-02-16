<template>
  <div class="notice">
		<!--中间部分-->
		<div class="notice-content">
			<div class="notice-left">
				<div class="notice-content-left">
					<div class="notice-left-top">
						<div class="notice-username">
							<img src=""/>
							<div class="user-notice">
								<span class="username-notice-name">你的名字</span><br/>
								<span class="notice-number-fiex">账号:</span><span class="notice-number">123456789</span>
							</div>
						</div>
						<div class="cont-left-noticeright">
							<span class="noticeright-left-words">NEWS</span>
							<span class="noticeright-right-words">新<br/>闻<br/>通<br/>知</span>
						</div>
					</div>
					<ul class="cont-notice-bottom">
						<li><a href="javascript:;">新闻通告</a></li>
						<li><a href="javascript:;">个人信息</a></li>
						<li><a href="javascript:;">项目管理</a></li>
						<li><a href="javascript:;">私信</a></li>
					</ul>
				</div>
			</div>
			<!--右边项目-->
			<div class="notice-right-part">
				<ul>
          <li v-for="noticeitem in noticeitems" >
						<div class="notice-date">
							<span>{{ noticeitem.year }}<br/><span class="notice-date-day">{{ noticeitem.day }}<span></span>
						</div>
						<span class="notice-title">{{ noticeitem.title }}</span>
					</li>
				</ul>
			</div>
		</div>
		<!--底部-->

  </div>
</template>

<script>

export default {
  name: 'notice',
  data () {
    return {
      noticeitems: [
        { year: '2016.12.', day: '25', title: '这是一条新闻标题这是一条新闻标题这是一条新闻标题' },
        { year: '2016.12.', day: '25', title: '这是一条新闻标题这是一条新闻标题这是一条新闻标题' },
        { year: '2016.12.', day: '25', title: '这是一条新闻标题这是一条新闻标题这是一条新闻标题' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notice-content{
width:960px;
margin:0 auto;
min-height:444px;
height:auto!important;
height:444px;
}
.notice-left{
float:left;
width:264px;
height:444px;
}
.notice-content-left{
width:214px;
height:444px;
float:left;
background-color:rgb(126,206,243);
padding-left:23px;
padding-right: 23px;
}
.notice-left-top{
border-bottom: 2px solid rgb(114,166,188);
width:100%;
height:196px;
}
/*竖着字体设置*/
.cont-left-noticeright{
margin-top: 50px;
float:right;
width:64px;
height:146px;
color:white;
position:relative;
}
.noticeright-left-words{
transform: rotateZ(-90deg);
-webkit-transform: rotateZ(-90deg);
text-transform:capitalize;
text-align: center;
display:block;
font-size: 17px;
position: absolute;
bottom:24px;
right:20px;
color:rgb(224,240,253);
font-weight: bold;
}
.noticeright-right-words{
float:right;
color:rgb(224,240,253);
display:block;
font-size: 32px;
font-weight: bold;
line-height: 34px;
}
/*左边用户部分*/
.notice-username{
float:left;
width:146px;
}
/*用户照片*/
.notice-username img{
width:70px;
height:75px;
float:left;
background-color:rgb(193,193,193);
margin-top: 60px;
}
/*个人信息*/
.user-notice{
font-family: "微软雅黑";
margin-top: 14px;
float:left;
}
.user-notice .username-notice-name{
display:block;
font-weight: bold;
float:left;
color:black;
font-size: 15px;
}
/*登录后账号*/
.notice-username .notice-number{
display:block;
float:left;
color:black;
font-size: 14px;

}
/*账号：*/
.notice-username .notice-number-fiex{
display:block;
float:left;
color:black;
font-size: 15px;
font-weight: bold;
margin-right: 8px;
}
/*左边下半部分*/
.cont-notice-bottom{
float:left;
margin-top: 25px;
}
.cont-notice-bottom li a{
display:block;
font-size: 19px;
color:white;
font-weight: bold;
text-align: left;
margin-bottom: 10px;
}
.cont-notice-bottom a:focus{
color:#464d57;
}
.notice-right-part{
float:left;
margin-left: 100px;
margin-top: 50px;
width:540px;
height:auto;
}
.notice-right-part ul li{
margin-bottom: 10px;
}
.notice-date{
margin-right: 20px;
width:58px;
height:35px;
float:left;
background:rgb(126,205,244);
color:white;
text-align: center;
line-height: 17px;
}
.notice-date-day{
font-size: 14px;
}
.notice-title{
height:35px;
line-height: 35px;
color:black;
font-weight: bold;
font-size: 16px;
}
</style>
