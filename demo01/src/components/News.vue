<template>
  <div class="news">
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
		<!--中间新闻内容部分-->
		<div class="news-content">
			<span class="news-title">这是一个长长的新闻标题</span>
			<span class="news-date">2016-11-20</span>
			<span class="news-article">
				这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
				这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
				这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
				这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容。
			</span>
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
  name: 'news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-content{
width:960px;
margin:0 auto;
}
.news-title{
width:100%;
color:rgb(1,82,144);
display: inline-block;
text-align: center;
font-size: 25px;
margin-top: 40px;
}
.news-date{
width:954px;
padding-right: 6px;
text-align: right;
display: inline-block;
color:rgb(185,185,185);
}
.news-article{
text-indent: 2rem;
line-height: 25px;
text-align: left;
display: block;
color:rgb(185,185,185);
}

</style>
