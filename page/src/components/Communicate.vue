<template>
  <div class="communicate">
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
					<li><a href="javascript:;">材料下载</a></li>
				</ul>
				<div class="nav-right">
					<input type="text" placeholder="点击搜索" id="inp" />
					<span><a href="javascript:;">个人中心</a></span>
				</div>
			</div>
		</div>
		<!--上半部分-->
		<div class="layout">
			<div class="communicate-top">
				<div class="communicate-top-left">
					<span class="communicate-words">交流区</span>
					<div class="communicate-words-today">
						<span>今日:</span>
						<span class="today-number">12</span>
					</div>
					<div class="communicate-words-whole">
						<span>(</span>
						<span class="communicate-theme">111</span>
						<span>主题</span>&nbsp;
						<span>/</span>&nbsp;
						<span class="communicate-answer">333</span>
						<span>回复</span>
						<span>)</span>
					</div>
				</div>
			</div>
			<!--中间分页部分-->
			<div class="communicate-paging">
				<div class="communicate-paging-title">
					<div class="communicate-select1">
						<span>筛选:</span>
						<select name="">
							<option value="">全部主题</option>
							<option value="">全部主题</option>
							<option value="">全部主题</option>
							<option value="">全部主题</option>
						</select>
					</div>
					<div class="communicate-select2">
						<span>排序:</span>
						<select name="">
							<option value="">最后发表</option>
							<option value="">一天前</option>
							<option value="">两天前</option>
							<option value="">一万年前</option>
						</select>
					</div>
					<div class="page-number">

					</div>
				</div>
				<table border="0" cellspacing="0" cellpadding="0" class="page-table">
					<tr>
						<th class="table-th-first">主题</th>
						<th class="table-th-title">题目</th>
						<th class="table-th-poster">发表者</th>
						<th class="table-th-answer">回复/查看</th>
						<th>最后回复</th>
					</tr>
					<tr>
						<td class="table-tr-first">
							[<span class="table-show">公告</span>]
						</td>
						<td class="table-tr-second">
							<span>我要发一个重要的公告</span>
						</td>
						<td>
							<span class="table-pereson">管理员</span><br/>
							<span class="person-date">2016-04-26 14:30</span>
						</td>
						<td>
							<span class="answer-number">10</span><br/>
							<span class="read-number">110</span>
						</td>
						<td>
							<span class="answer-words">啦啦啦啦</span><br/>
							<span class="answer-words-date">2016-04-26 14:30</span>
						</td>
					</tr>
					<tr>
						<td class="table-tr-first">
							[<span class="table-project">项目</span>]
						</td>
						<td>
							<span class="table-tr-second">完全不知道这是什么项目</span>
						</td>
						<td>
							<span class="table-pereson">管理员</span><br/>
							<span class="person-date">2016-04-26 14:30</span>
						</td>
						<td>
							<span class="answer-number">10</span><br/>
							<span class="read-number">110</span>
						</td>
						<td>
							<span class="answer-words">啦啦啦啦</span><br/>
							<span class="answer-words-date">2016-04-26 14:30</span>
						</td>
					</tr>
					<tr>
						<td class="table-tr-first">
							[<span>展示</span>]
						</td>
						<td class="table-tr-second">
							<span>完全不知道这是什么项目</span>
						</td>
						<td>
							<span class="table-pereson">管理员</span><br/>
							<span class="person-date">2016-04-26 14:30</span>
						</td>
						<td>
							<span class="answer-number">10</span><br/>
							<span class="read-number">110</span>
						</td>
						<td>
							<span class="answer-words">啦啦啦啦</span><br/>
							<span class="answer-words-date">2016-04-26 14:30</span>
						</td>
					</tr>
				</table>
				<div class="page-number-bottom">

				</div>
			</div>
			<!--发表部分-->
			<div class="publish">
				<span class="publish-news">发表新帖</span>
				<input type="text" name="" class="publish-title" value="" />
				<div class="publish-post">
					<a href="javascript:;"><span class="post-pic">图片</span></a>
					<a href="javascript:;"><span class="post-adiou">音频</span></a>
					<a href="javascript:;"><span class="post-fu">上传附件</span></a>
				</div>
				<textarea name="" rows="" cols=""></textarea>
				<button  class="publish-but">发表</button>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'communicate',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*上半部分*/
  .layout{
  width:960px;
  margin:0 auto;
  }
  .communicate-top{
  font-family:"微软雅黑";
  width:960px;
  height:148px;
  border-bottom: 13px solid rgb(191,191,191);
  }
  .communicate-top-left{
  width:622px;
  height:138px;
  float:left;
  background:rgb(126,206,243);
  }
  .communicate-top-left .communicate-words{
  display:block;
  float:left;
  text-align: center;
  font-size: 35px;
  color:white;
  font-weight: bold;
  margin-top: 90px;
  margin-left: 20px;
  margin-right: 40px;
  }
  .communicate-words-today{
  float:left;
  font-size: 18px;
  color:white;
  font-family: "微软雅黑";
  margin-top: 102px;
  margin-right: 10px;
  text-align: center;
  }
  .communicate-words-whole{
  float:left;
  font-size: 18px;
  color:white;
  font-family: "微软雅黑";
  margin-top: 102px;
  text-align: center;
  }
  /*中间分页*/
  .communicate-paging{
  width:100%;
  height:944px;
  }
  .communicate-paging-title{
  padding-left: 80px;
  width:880px;
  height:40px;
  border-bottom: 4px solid rgb(191,191,191);
  }
  .page-number{
  width:468px;
  height:23px;
  float:left;
  border: 1px dotted gainsboro;
  margin-left: 96px;
  margin-top: 13px;
  }
  .communicate-select1,.communicate-select2{
  float:left;
  width:115px;
  height:22px;
  font-size: 14px;
  color:black;
  margin-top:13px ;
  }
  .communicate-select1 select{
  font-family: "微软雅黑";
  color:black;
  font-size: 12px;
  border:0;
  }
  .communicate-select2 select{
  font-family: "微软雅黑";
  color:black;
  font-size: 12px;
  border:0;
  }
  .page-table{
  float:left;
  width:960px;
  height:auto;
  font-family: "微软雅黑";
  margin-top: 30px;
  }
  .page-table th{
  text-align: left;
  font-size: 14px;
  color:black;
  padding-bottom:8px;
  border-bottom: 1px solid rgb(172,171,170);
  }
  .page-table tr{
  padding-left: 20px;
  }
  .page-table td{
  border-bottom: 2px solid rgb(72,76,78);
  }
  /*回复人数*/
  .page-table .answer-number{
  color:#04b1f3;
  }
  /*主题部分*/
  .page-table .table-tr-first{
  padding-left: 50px;
  font-size: 14px;
  width:68px;
  }
  .table-th-poster{
  width:137px;
  }
  .table-th-title{
  width:417px;
  }
  .table-th-answer{
  width:154px;
  }
  .page-table .table-th-first{
  padding-left: 50px;
  }
  /*题目部分*/
  .page-table .table-tr-second{
  font-size: 14px;
  }
  /*项目颜色*/
  .table-project{
  color:#04b1f3;
  }
  /*公告颜色*/
  .table-show{
  color:red;
  }
  /*查看人数*/
  .page-number-bottom{
  width:468px;
  height:23px;
  float:right;
  border: 1px dotted gainsboro;
  margin-top: 20px;
  margin-right: 55px;
  }
  /*发布*/
  .publish{
  width:855px;
  height:405px;
  margin: 45px auto;
  font-weight: bold;
  }
  .publish-news{
  display:block;
  float:left;
  font-size: 22px;
  color:#04b1f3;
  font-family: "微软雅黑";
  }
  .publish-title{
  width:100%;
  height:26px;
  border:1px solid black;
  float:left;
  margin-top: 20px;
  }
  .publish textarea{
  margin-top: 5px;
  width:851px;
  height:245px;
  float:left;
  border:1px solid black;
  }
  /*图片、音频、上传附件*/
  .publish-post{
  float:right;
  margin-right: 26px;
  margin-top: 5px;
  }
  .publish-post span{
  font-size: 12px;
  color:black;
  display:inline-block;
  margin-left: 20px;
  text-align: center;
  }
  .publish .publish-but{
  width:115px;
  height:32px;
  background:#04b1f3;
  color:white;
  font-size: 16px;
  border:0;
  font-weight: bold;
  float:right;
  margin-top: 20px;
  }
</style>
