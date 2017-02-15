<template>
  <div class="knot-content">
    <div class="knot-content2">
			<span class="kont-title">项目结题申请</span>
			<div class="kont-top-left">
				<div class="knot-project">
					<span>项目名称 :</span>
					<input type="text" name="" id="" value="" />
				</div>
				<div class="knot-leader">
					<span>项目负责人 :</span>
					<input type="text" name="" id="" value="" />
				</div>
				<div class="knot-teacher">
					<span>指导老师 :</span>
					<input type="text" name="" id="" value="" />
				</div>
				<div class="knot-project-type">
					<span>项目类型 :</span>
					<select name="">
						<option value=""></option>
						<option value="">企业</option>
						<option value="">电商</option>
					</select>
				</div>
				<div class="knot-key">
					<span>关键词 :</span>
					<input type="text" name="" id="" value="" />
				</div>
				<span class="knot-introduce">项目介绍</span>
			</div>
			<textarea name="" placeholder="项目简介，限150字" class="knot-introduce-t"></textarea>
			<span class="knot-result">研究成果</span>
			<textarea name="" placeholder="限100字" class="knot-result-t"></textarea>
			<span class="knot-innovation">创新特色</span>
			<textarea name="" placeholder="限100字" class="knot-innovation-t"></textarea>
			<div class="knot-bottom">
				<div class="knot-cycle">
					<span>项目周期 :</span>
					<input type="text" name="" />
				</div>
				<div class="knot-phone">
					<span>联系方式&nbsp;:</span>
					<input type="text" name="" />
				</div>
				<div class="knot-file">
					<span>附件上传</span>
					<input type="file" name="" />
				</div>

			</div>
			<div class="knot-submit">
				<input type="submit" name="" id="" value="提交申请" />
				<button>取消</button>
			</div>
    </div>
		</div>
</template>

<script>
export default {
  name: 'knot-content',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.knot-content{
background:rgb(70,77,87);
width:100%;
height:100%;
overflow: hidden;
}
.knot-content2{
font-family: "微软雅黑";
width:960px;
height:auto;
margin:84px auto;
}
.kont-title{
display:block;
float:left;
font-size: 41px;
font-weight: bold;
color:white;
width:100%;
text-align: center;
border-bottom: 4px solid rgb(4,177,243);
padding-bottom: 41px;
}
.kont-top-left{
width:450px;
float:left;
height:auto;
margin-top: 50px;
}
/*项目名称*/
.knot-project{
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.knot-project span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-project input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:350px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
/*项目负责人*/
.knot-leader,.knot-teacher,.knot-project-type,.knot-key{
margin-top: 44px;
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.knot-leader span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-leader input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:320px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
/*指导老师*/
.knot-teacher span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-teacher input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:320px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
/*项目类型*/
.knot-project-type select{
color:rgb(215,215,217);
font-size: 14px;
font-family: "微软雅黑";
margin-left: 15px;
width:340px;
height:18px;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:9px;
float:right;
font-weight: bold;
outline: none;
}
.knot-project-type span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 20px;
}
/*关键词*/
.knot-key span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-key input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:320px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
/*项目介绍,研究成果，创新特色*/
.knot-introduce,.knot-result,.knot-innovation{
display:block;
width:450px;
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
float:left;
text-align: left;
font-size: 18px;
margin-top: 44px;
border-bottom: 3px solid rgb(215,215,217);
}
.knot-introduce-t,.knot-result-t,.knot-innovation-t{
font-weight: bold;
width:953px;
height:128px;
float:left;
color:rgb(215,215,217);
background: rgb(70,77,87);
margin-top: 20px;
font-size: 15px;
font-family: "微软雅黑";
padding-left: 5px;
padding-top: 5px;
}
/*底部分*/
.knot-bottom{
width:450px;
float:left;
height:148px;
}
.knot-cycle,.knot-phone{
float:left;
margin-top: 44px;
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.knot-cycle span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-cycle input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:320px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
.knot-phone span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.knot-phone input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 15px;
width:320px;
height:14px;
font-weight: bold;
background:rgb(70,77,87);
padding:0;
border:0;
margin-top:11px;
float:left;
outline: none;
}
/*上传附件*/
.knot-file{
margin-top: 32px;
float:left;
background: rgb(70,77,87);
width:auto;
height:auto;
}
.knot-file span{
font-size: 18px;
color:rgb(215,215,217);
display: inline-block;
text-align: center;
font-weight: bold;
}
.knot-file input{
color:white;
font-family: "微软雅黑";
}
.knot-submit{
margin-bottom: 108px;
width:411px;
height:38px;
float:left;
margin-left: 253px;
margin-top: 130px;
}
.knot-submit input{
background: rgb(70,77,87);
font-family: "微软雅黑";
border:0;
font-size: 22px;
color:white;
float:left;
}
.knot-submit button{
background: rgb(70,77,87);
font-family: "微软雅黑";
border:0;
float:right;
color:white;
font-size: 22px;
}
</style>
