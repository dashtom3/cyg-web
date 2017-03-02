<template>
  <div class="Adm-users">
    <adm></adm>
		<div class="adm-content" ref="admContent">
			<div class="adm-header">
				<h1 class="page-title">用户</h1>
			</div>

			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">用户</li>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>姓名</th>
									<th>学号</th>
									<th>学院/部门/单位</th>
									<th>专业方向</th>
									<th>电子邮件</th>
									<th>联系电话</th>
									<th>个性标签</th>
                  <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(userlist, index) in userLists">
									<td>{{index + 1}}</td>
									<td>{{userlist.username}}</td>
									<td>{{userlist.studentid}}</td>
									<td>{{userlist.department}}</td>
									<td>{{userlist.major}}</td>
									<td>{{userlist.email}}</td>
									<td>{{userlist.telephone}}</td>
									<td><span v-for="personaltaginfo in JSON.parse(userlist.personaltag)">{{tagFilter(personaltaginfo)}}&nbsp;</span></td>
									<td>
										<a href="javascript:;" role="button" data-toggle="modal" v-on:click="delUser(userlist.userid)">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="pagination">
            <ul>
							<li v-for="page in pages">
								<a href="javascript:;">{{page}}</a>
							</li>
							<li>
                <a href="javascript:;" v-if="isShow">下一页</a>
							</li>
							<li>
                <a href="javascript:;" v-if="isShow">尾页</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    <div class="queren" v-show="isDel">
      <div class="">
        <p>确认删除吗</p><br>
        <br>
        <a href="javascript:;" v-on:click="del">确认</a>&nbsp;&nbsp;
        <a href="javascript:;" v-on:click="hide">再想一下</a>
      </div>
    </div>
  </div>
</template>

<script>
import adm from './adm'
import axios from 'axios'
import global from '../global/global'
// import Vue from 'vue'
export default {
  name: 'adm-users',
  data () {
    return {
      isDel: false,
      userLists: '',
      userid: '',
      personaltag: [],
      pages: '',
      isShow: false,
      selfdoms: ['文', '理', '工', '农', '医', '财务管理', '团队管理', '宣传管理', '问卷星', '公众号管理', '计算机编程', '摄影', '体育运动', '信息检索', '报告撰写', '结构建模', '有限元分析', 'matlab', '仿真计算', 'autoCAD']
    }
  },
  methods: {
    tagFilter: function (value) {
      return this.selfdoms[value]
    },
    delUser: function (id) {
      console.log(id)
      this.isDel = true
      this.userid = id
    },
    del: function () {
      var self = this
      var userMsg = new FormData()
      userMsg.append('userid', this.userid)
      axios.post(global.baseURL + 'api/user/delete?token=' + global.user.token, userMsg)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          self.isDel = false
          var that = self
          axios.post(global.baseURL + 'api/user/getUserList')
          .then(function (result) {
            console.log(result)
            that.userLists = ''
            that.pages = ''
            that.userLists = result.data.data
            that.pages = result.data.totalPage
            result.data.totalPage > 1 ? that.isShow = true : that.isShow = false
          })
        }
      })
    },
    hide: function () {
      this.isDel = false
    }
  },
  mounted () {
    var admContent = this.$refs.admContent
    var wh = document.body.clientHeight
    if (admContent.offsetHeight < wh - 71) {
      admContent.style.height = wh - 77 + 'px'
    }
  },
  components: {
    adm
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/user/getUserList')
    .then(function (result) {
      console.log(result)
      self.userLists = result.data.data
      self.pages = result.data.totalPage
      result.data.totalPage > 1 ? self.isShow = true : self.isShow = false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Adm-users{
  width:100%;
  height:100%;
  background: #222;
  background-image: url('../img/black-Linen.png');
  background-position: initial initial;
  background-repeat: initial initial;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  position: relative;
}
.queren{
position: absolute;
height: 100%;
width: 100%;
top: 0;
background: #e2e2e2;
opacity: .7
}
.queren div{
  width: 300px;
height: 150px;
margin: 300px auto;
text-align: center;
color: red;
font-size: 20px;
background-color: #fff;
border-radius: 10px;
padding-top: 30px;
}
.queren div a{
  padding: 10px;
  color: #fff;
  border-radius: 5px;
}
.queren div a{
  background: red;
}
.queren div a:last-child{
  background: green;
}
</style>
