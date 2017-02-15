<template>
  <div class="regester-content">
    <div class="regester-content2">
			<span class="regester-title">新用户注册</span>
			<div class="person-type">
				<button>学生</button>
				<button>教工</button>
				<button>校友</button>
				<button>企业</button>
			</div>
			<!--个人信息-->

			<div class="regester-top">
				<span class="person-information">1.个人信息</span>
				<div class="person-name">
					<span >姓名</span>
					<input type="text" name=""  placeholder="不可更改"/>
				</div>
				<div class="person-number">
					<span >学号</span>
					<input type="text" name="" class="person-number" value="" placeholder="不可更改"/>
				</div>
				<div class="regester-ma">
					<div class="person-ma">
						<span>密码</span>
						<input type="text" name=""  value="" placeholder="密码"/>
					</div>
					<div class="person-rema">
						<span>重复密码</span>
						<input type="text" name=""  value="" />
					</div>
				</div>
			</div>
			<div class="college">
				<span>学院/部门/单位</span>
				<select name="">
					<option value="">学院/部门/单位</option>
					<option value="">学院/部门/单位</option>
					<option value="">学院/部门/单位</option>
				</select>
			</div>
			<div class="major">
				<span>专业方向</span>
				<select name="" >
					<option value="">专业方向</option>
					<option value="">专业方向</option>
					<option value="">专业方向</option>
				</select>
			</div>
			<div class="regester-person-bottom">
				<div class="emal">
					<span >电子邮件</span>
					<input type="text" name=""  value="" />
				</div>
				<div class="call-number">
					<span >联系电话</span>
					<input type="text" name=""  value="" />
				</div>
			</div>
			<div class="summary">
				<span>个人简介</span>
				<textarea name="" placeholder="个人简介，专业特长"></textarea>
			</div>
			<div class="selfdom">
				<span class="self-title">2.个性标签</span>
				<div class="self-flex">
					<button>文</button>
					<button>理</button>
					<button>工</button>
					<button>农</button>
					<button>医</button>
				</div>
				<div class="self-flex">
					<button>财务管理</button>
					<button>团队管理</button>
					<button>宣传联络</button>
					<button>问卷星</button>
					<button>公众号管理</button>
				</div>
				<div class="self-flex">
					<button>计算机编程</button>
					<button>摄影</button>
					<button>体育运动 </button>
					<button>信息检索</button>
					<button>报告撰写</button>
				</div>
				<div class="self-flex">
					<button>结构建模</button>
					<button>有限元分析</button>
					<button>matlab</button>
					<button>仿真计算</button>
					<button>autoCAD</button>
				</div>
				<button class="complete">完成</button>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'regester-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.regester-content{
	background:rgb(70,77,87);
	font-family: "微软雅黑";
  width:100%;
  height:100%;
  overflow: hidden;
}
.regester-content2{
	width:960px;
	height:auto;
	margin:80px auto;
}
.regester-title{
	width:100%;
	text-align: center;
	display:block;
	font-size: 42px;
	color:white;
	font-weight: bold;
}
/*职位类型*/
.person-type{
	float:left;
	width:100%;
	display:flex;
	flex-direction: row;
	height:73px;
	justify-content: space-between;
	margin-top: 75px;
}
.person-type button{
	width:212px;
	height:72px;
	background:rgb(70,77,87);
	border:1px solid white;
	text-align: center;
	font-size: 33px;
	color:white;
	font-family: "微软雅黑";
}
.person-type button:focus{
	background:rgb(4,177,243);
}

.person-information{
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
.regester-top{
	width:960px;
	float:left;
	height:auto;
}
/*姓名*/
.person-name{
	margin-top: 50px;
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
}
.person-name input{
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
.person-name span{
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
.person-number{
	margin-top: 50px;
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
}
.person-number input{
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
.person-number span{
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
.regester-ma{
	float:left;
	width:450px;
	height:auto;
}
.person-ma{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 40px;
}
.person-ma input{
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
.person-ma span{
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
.person-rema{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 40px;
}
.person-rema input{
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
.person-rema span{
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
.college{
	width:450px;
	height:33px;
	float:left;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.college select{
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
.college span{
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
.major{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.major select{
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
.major span{
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
.regester-person-bottom{
	width:450px;
	float:left;
	height: auto;
}
.emal{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.emal input{
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
.emal span{
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
.call-number{
	width:450px;
	height:33px;
	float:right;
	border-bottom: 2px solid rgb(215,215,217);
	margin-top: 80px;
	background:rgb(70,77,87);
}
.call-number input{
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
.call-number span{
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
.summary{
	width:960px;
	float:left;
	height:auto;
	margin-top: 65px;
}
.summary span{
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
.summary textarea{
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
.selfdom{
	height:800px;
	width:960px;
	float:left;
}
.self-title{
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
.selfdom ul{
	float:left;
	width:960px;
	height:auto;
	background:green;
}
.self-flex{
	margin-top: 34px;

	height:54px;
	width:100%;
	float:left;
	display:flex;
	flex-direction: row;
	justify-content: space-between;
}
.self-flex button{
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
.self-flex button:focus{
	border:4px solid white;
	color:white;
}
.selfdom .complete{
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
