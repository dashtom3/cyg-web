<template>
  <div class="apply-content">
    <div class="apply-content2">
			<span class="kont-title">项目申请</span>
			<div class="apply-type">
				<div class="apply-type-t">
					<span class="apply-type-title">项目类型</span>
				</div>
				<div class="apply-type-c">
					<button v-for="(item, index) in items" :class="{'active':item.active,'unactive':!item.active}" v-on:click="checked(item, index)">{{item.data}}</button>
				</div>
			</div>
			<div class="kont-top-left">
				<div class="apply-project">
					<span>项目名称 :</span>
					<input type="text" name="" id="" value="" v-model="applyProject.itemname" />
				</div>
				<div class="apply-leader">
					<span>项目负责人 :</span>
					<input type="text" name="" id="" value="" v-model="applyProject.itemleader" />
				</div>
				<div class="apply-teacher">
					<span>指导老师 :</span>
					<input type="text" name="" id="" value="" v-model="applyProject.teacher" />
				</div>
				<div class="apply-project-type">
					<span>学科方向 :</span>
					<select name="" v-model="applyProject.projectdirection">
						<option value="0">整车</option>
						<option value="1">动力</option>
						<option value="2">电子</option>
            <option value="3">车身</option>
            <option value="4">新能源</option>
            <option value="5">营销</option>
            <option value="6">实验</option>
            <option value="7">其他</option>
					</select>
				</div>
				<div class="apply-key">
					<span>关键词</span>
					<input type="text" name="" id="" value="" v-model="applyProject.keywords" />
				</div>
				<span class="apply-introduce">项目简介</span>
			</div>
			<textarea name="" placeholder="项目简介，限150字" class="apply-introduce-t" v-model="applyProject.itembrief"></textarea>
			<div class="expect">
				<span class="apply-type-title">预期成果</span>
				<span class="apply-type-select">(可多选)</span>
				<div class="expect-type">
					<button v-for="(expecttype, index) in expecttypes" v-on:click="changetype($event, index)">{{expecttype}}</button>
				</div>
			</div>
			<span class="apply-innovation">现有基础</span>
			<textarea name="" placeholder="限100字" class="apply-innovation-t" v-model="applyProject.exitbasic"></textarea>
			<div class="apply-basic-file">
				<span>附件上传</span>
				<input type="file" name="" id="" value="" @change="exitbasicfile" />
			</div>
			<div class="allxq">
        <span class="apply-innovation xq">成员需求</span>
        <select name="" v-model="applyProject.allpeople">
          <option v-for="(num, index) in nums" :value=index+1>{{num}}</option>
        </select>
			</div>
			<div class="apply-person-file">
				<span>附件上传</span>
				<input type="file" name="" id="memberdemandfile" @change="memberdemandfile" />
			</div>
			<div class="apply-bottom">
				<div class="apply-cycle">
					<span>开始日期 :</span>
					<input type="text" name="" placeholder="举例:2016-12-12" v-model="applyProject.start" />
				</div>
			</div>
      <div class="apply-bottom">
				<div class="apply-cycle">
					<span>结束日期 :</span>
					<input type="text" name="" placeholder="举例:2016-12-12" v-model="applyProject.end" />
				</div>
			</div>
			<div class="apply-submit">
				<input type="submit" name="" id="" value="发布" v-on:click="aply" />
				<button v-on:click="goBack">取消</button>
			</div>
      </div>
      <div class="div" v-show="success">
        <div class="con">
          <p>恭喜你项目发布成功</p>
        </div>
      </div>
		</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import global from '../global/global'
export default {
  name: 'apply-content',
  data () {
    return {
      success: false,
      items: [
        { data: '国创', val: 0 },
        { data: '上创', val: 1 },
        { data: 'sitp', val: 2 },
        { data: '创新赛事', val: 3 },
        { data: '企业课题', val: 4 },
        { data: '创业', val: 5 },
        { data: '其他', val: 6 }
      ],
      projecttype: [],
      expecttypes: ['论文', '报告', '成品', '模型', '专利', '其他'],
      result: [],
      nums: 50,
      active: false,
      applyProject: {
        labels: '',
        start: '',
        itemname: '',
        projectdirection: '',
        itemleader: '',
        teacher: '',
        keywords: '',
        itembrief: '',
        exitbasic: '',
        expectresult: '',
        exitbasicfile: '',
        allpeople: '',
        memberdemand: '',
        end: '',
        memberdemandfile: ''
      }
    }
  },
  methods: {
    checked: function (item, index) {
      var self = this
      this.$nextTick(function () {
        self.items.forEach(function (item) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
      Vue.set(this.applyProject, 'labels', index)
    },
    exitbasicfile: function () {
      this.applyProject.exitbasicfile = document.querySelector('.apply-basic-file input').files[0]
    },
    memberdemandfile: function () {
      this.applyProject.memberdemandfile = document.querySelector('.apply-person-file input').files[0]
    },
    changetype: function (event, index) {
      if (this.result.indexOf(index)) {
        this.result.push(index)
      } else {
        this.result.splice(index, 1)
      }
      var isActive = event.currentTarget.getAttribute('class')
      isActive === 'active' ? event.currentTarget.setAttribute('class', '') : event.currentTarget.setAttribute('class', 'active')
    },
    goBack: function () {
      this.$router.push({ path: '/square' })
    },
    aply: function () {
      var self = this
      var projectMsg = new FormData()
      projectMsg.append('labels', this.applyProject.labels)
      projectMsg.append('projectdirection', this.applyProject.projectdirection)
      projectMsg.append('allpeople', this.applyProject.allpeople)
      projectMsg.append('itemname', this.applyProject.itemname)
      projectMsg.append('itemleader', this.applyProject.itemleader)
      projectMsg.append('teacher', this.applyProject.teacher)
      projectMsg.append('keywords', this.applyProject.keywords)
      projectMsg.append('itembrief', this.applyProject.itembrief)
      projectMsg.append('exitbasic', this.applyProject.exitbasic)
      projectMsg.append('exitbasicfile', this.applyProject.exitbasicfile)
      projectMsg.append('end', this.applyProject.end)
      projectMsg.append('start', this.applyProject.start)
      projectMsg.append('memberdemandfile', this.applyProject.memberdemandfile)
      axios.post(global.baseURL + 'api/items/add?type=1&token=' + global.user.token, projectMsg)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          self.success = true
          var that = self
          setTimeout(function () {
            that.success = false
            that.$router.push({ path: '/management' })
          }, 1000)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.apply-content{
background:rgb(70,77,87);
width:100%;
height:100%;
overflow: hidden;
}
.apply-content2{
font-family: "微软雅黑";
width:960px;
height:auto;
margin:84px auto;
}
.allxq{
  float: left;
}
.div{
  position: fixed;
  width: 250px;
  height: 150px;
  margin: 0 auto;
  font-size: 20px;
  color: #fff;
  background: #000;
  border-radius: 10px;
  text-align: center;
  left: 0;
  right: 0;
}
.con{
  padding-top: 40px;
}
.allxq select{
  position: relative;
  top: 30px;
  left: 20px;
}
textarea{
  resize:none;
  outline:none;
}
.kont-title{
display:block;
float:left;
font-size: 41px;
font-weight: bold;
color:white;
width:100%;
text-align: center;
}
.kont-top-left{
width:450px;
float:left;
height:auto;
margin-top: 50px;
}
/*项目类型*/
.apply-type{
float:left;
margin-top: 10px;
width:100%;
height:110px;
padding-bottom: 50px;
border-bottom: 5px solid rgb(3,179,247);
}
.apply-type-title{
font-size: 30px;
color:white;
display: inline-block;
}
.apply-type-select{
font-size: 22px;
color:white;
display: inline-block;
margin-left: 8px;
}
.apply-type-c{
float:left;
width:100%;
height:43px;
display: flex;
flex-direction: row;
margin-top: 22px;
justify-content: space-between;
}
.apply-type-c button{
width:120px;
height:42px;
border:2px solid white;
background:rgb(70,77,87);
color:white;
font-weight: bold;
font-size: 16px;
font-family: "微软雅黑";
}
.apply-type-c button.active{
  background-color: rgb(4,177,243);
}
/*项目名称*/
.apply-project{
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.apply-project span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-project input{
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
.apply-leader,.apply-teacher,.apply-project-type,.apply-key{
margin-top: 44px;
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.apply-leader span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-leader input{
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
.apply-teacher span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-teacher input{
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
.xq{
  width: auto!important;
}
.apply-project-type select{
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
.apply-project-type span{
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
.apply-key span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-key input{
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
.expect{
float:left;
margin-top: 50px;
width:100%;
height:auto;
margin-bottom: 20px;
}
.expect-type{
margin-top: 24px;
}
.expect-type button{
width:120px;
height:42px;
border:2px solid white;
background:rgb(70,77,87);
color:white;
font-weight: bold;
font-size: 16px;
font-family: "微软雅黑";
margin-right: 20px;
}
.expect-type button.active{
  background-color: rgb(4,177,243);
}
.apply-basic-file,.apply-person-file{
width:100%;
height:auto;
color:rgb(178,179,184);
float:left;
margin-top:3px;
}
.apply-basic-file span{
font-size: 16px;
font-weight: bold;
}
.apply-person-file span{
font-size: 16px;
font-weight: bold;
}
.apply-introduce,.apply-result,.apply-innovation{
display:block;
width:450px;
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
float:left;
text-align: left;
font-size: 18px;
margin-top: 24px;
border-bottom: 3px solid rgb(215,215,217);
}
.apply-introduce-t,.apply-result-t,.apply-innovation-t{
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
.apply-bottom{
width:450px;
height:auto;
}
.apply-cycle,.apply-phone{
float:left;
margin-top: 44px;
width:450px;
height:33px;
border-bottom: 3px solid rgb(215,215,217);
}
.apply-cycle span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-cycle input{
color:rgb(215,215,217);
font-size: 14px;
background:red;
font-family: "微软雅黑";
margin-left: 8px;
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
.apply-phone span{
font-weight: bold;
height:33px;
line-height: 33px;
color:rgb(215,215,217);
display:block;
float:left;
text-align: center;
font-size: 18px;
}
.apply-phone input{
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
.apply-file{
margin-top: 32px;
float:left;
background: rgb(70,77,87);
width:auto;
height:auto;
}
.apply-file span{
font-size: 18px;
color:rgb(215,215,217);
display: inline-block;
text-align: center;
font-weight: bold;
}
.apply-file input{
color:white;
font-family: "微软雅黑";
}
.apply-submit{
margin-bottom: 108px;
width:411px;
height:38px;
float:left;
margin-left: 253px;
margin-top: 40px;
}
.apply-submit input{
background: rgb(70,77,87);
font-family: "微软雅黑";
border:0;
font-size: 22px;
color:white;
float:left;
outline: none
}
.apply-submit button{
background: rgb(70,77,87);
font-family: "微软雅黑";
border:0;
float:right;
color:white;
font-size: 22px;
outline: none;
}
</style>
