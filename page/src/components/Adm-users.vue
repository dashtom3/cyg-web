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
										<a href="#myModal" role="button" data-toggle="modal">删除</a>
										<button class="adm-pass">通过</button>
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

					<div class="modal small hide fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-adm-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h3 id="myModalLabel">确认 删除</h3>
						</div>
						<div class="modal-body">
							<p class="error-text"><i class="icon-warning-sign modal-icon adm-warn"></i>你想要删除这个用户吗?</p>
						</div>
						<div class="modal-footer">
							<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
							<button class="btn btn-danger" data-dismiss="modal">删除</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import adm from './adm'
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'adm-users',
  data () {
    return {
      userLists: '',
      personaltag: [],
      pages: '',
      isShow: false,
      selfdoms: ['文', '理', '工', '农', '医', '财务管理', '团队管理', '宣传管理', '问卷星', '公众号管理', '计算机编程', '摄影', '体育运动', '信息检索', '报告撰写', '结构建模', '有限元分析', 'matlab', '仿真计算', 'autoCAD']
    }
  },
  methods: {
    tagFilter: function (value) {
      return this.selfdoms[value]
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
}
</style>
