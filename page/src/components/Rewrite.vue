<template>
  <div class="rewrite-content">
    <div class="rewrite-content2">
			<span class="rewrite-title">个人信息修改</span>
			<!--个人信息-->
			<div class="rewrite-top">
				<span class="rewrite-information">1.个人信息</span>
				<div class="rewrite-name">
					<span >姓名</span>
					<input type="text" name=""  placeholder="不可更改" v-model="user.name" />
				</div>
				<div class="rewrite-number">
					<span >学号</span>
					<input type="text" name="" class="rewrite-number" value="" />
				</div>
				<div class="rewrite-ma">
					<div class="rewrite-person-ma">
						<span>密码</span>
						<input type="text" name=""  value="" />
					</div>
					<div class="rewrite-rema">
						<span>重复密码</span>
						<input type="text" name=""  value="" />
					</div>
				</div>
			</div>
			<div class="rewrite-college">
				<span>学院/部门/单位</span>
				<select name="">
					<option value="">学院/部门/单位</option>
					<option value="">学院/部门/单位</option>
					<option value="">学院/部门/单位</option>
				</select>
			</div>
			<div class="rewrite-major">
				<span>专业方向</span>
				<select name="" >
					<option value="">专业方向</option>
					<option value="">专业方向</option>
					<option value="">专业方向</option>
				</select>
			</div>
			<div class="rewrite-person-bottom">
				<div class="rewrite-emal">
					<span >电子邮件</span>
					<input type="text" name=""  value="" />
				</div>
				<div class="rewrite-call-number">
					<span >联系电话</span>
					<input type="text" name=""  value="" />
				</div>
			</div>
			<div class="rewrite-summary">
				<span>个人简介</span>
				<textarea name="" placeholder="个人简介，专业特长" class="summary-textarea"></textarea>
			</div>
			<div class="rewrite-selfdom">
				<span class="rewrite-self-title">2.个性标签</span>
				<div class="rewrite-self-flex">
					<button>文</button>
					<button>理</button>
					<button>工</button>
					<button>农</button>
					<button>医</button>
				</div>
				<div class="rewrite-self-flex">
					<button>财务管理</button>
					<button>团队管理</button>
					<button>宣传联络</button>
					<button>问卷星</button>
					<button>公众号管理</button>
				</div>
				<div class="rewrite-self-flex">
					<button>计算机编程</button>
					<button>摄影</button>
					<button>体育运动 </button>
					<button>信息检索</button>
					<button>报告撰写</button>
				</div>
				<div class="rewrite-self-flex">
					<button>结构建模</button>
					<button>有限元分析</button>
					<button>matlab</button>
					<button>仿真计算</button>
					<button>autoCAD</button>
				</div>
				<button class="rewrite-complete">确认</button>
			</div>
      </div>
		</div>
</template>

<script>
export default {
  name: 'rewrite-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  height:100%;
  overflow: hidden;
}
.rewrite-content2{
	width:960px;
	height:auto;
	margin:80px auto;
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
.rewrite-number input{
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
.rewrite-self-flex button:focus{
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
