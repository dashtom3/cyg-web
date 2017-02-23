<template>
  <div class="adm-projects">
    <!-- <div class="navbar">
			<div class="navbar-inner">
				<ul class="nav pull-right">
					<li id="fat-menu" class="dropdown">
						<a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">
							<i class="icon-user"></i> Jack Smith
							<i class="icon-caret-down"></i>
						</a>

						<ul class="dropdown-menu">
							<li>
								<a tabindex="-1" href="#">My Account</a>
							</li>
							<li class="divider"></li>
							<li>
								<a tabindex="-1" class="visible-phone" href="#">Settings</a>
							</li>
							<li class="divider visible-phone"></li>
							<li>
								<a tabindex="-1" href="sign-in.html">Logout</a>
							</li>
						</ul>
					</li>

				</ul>
				<a class="brand" href="users.html"><span class="second">管理中心</span></a>
			</div>
		</div>

		<div class="sidebar-nav">
			<ul id="dashboard-menu" class="nav nav-list collapse in">
				<li class="active">
					<a href="users.html">用户列表</a>
				</li>
				<li>
					<a href="projects.html">项目列表</a>
				</li>
				<li>
					<a href="adm-news.html">新闻列表</a>
				</li>
				<li>
					<a href="adm-post.html">项目发表</a>
				</li>

			</ul>
		</div> -->
    <adm></adm>
		<div class="adm-content">
			<div class="adm-header">
				<h1 class="page-title">项目列表</h1>
			</div>

			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">项目列表</li>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>项目名称</th>
									<th>项目负责人</th>
									<th>指导老师</th>
									<th>项目类型</th>
									<th>关键词</th>
									<th>项目周期</th>
									<th>联系方式</th>
                  <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(projectsList, index) in projectsLists">
									<td>{{index + 1}}</td>
									<td>{{projectsList.itemname}}</td>
									<td>{{projectsList.itemleader}}</td>
									<td>{{projectsList.teacher}}</td>
									<td>{{types[projectsList.type]}}</td>
									<td><span v-for="keyword in JSON.parse(projectsList.keywords)">{{keyword}}&nbsp;</span></td>
									<td>{{projectsList.itemcyle}}</td>
									<td>{{projectsList.telephone}}</td>
									<td>
										<a href="#myModal" role="button" data-toggle="modal" v-on:click="del(projectsList.itemsid)">删除</a>
										<button class="adm-pass">通过</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="pagination">
						<ul>
							<li>
								<a href="#">Prev</a>
							</li>
							<li>
								<a href="#">1</a>
							</li>
							<li>
								<a href="#">2</a>
							</li>
							<li>
								<a href="#">3</a>
							</li>
							<li>
								<a href="#">4</a>
							</li>
							<li>
								<a href="#">Next</a>
							</li>
						</ul>
					</div>

					<div class="modal small hide fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-adm-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h3 id="myModalLabel">确认 删除</h3>
						</div>
						<div class="modal-body">
							<p class="error-text"><i class="icon-warning-sign modal-icon adm-warn"></i>你想要删除这个项目吗?</p>
						</div>
						<div class="modal-footer">
							<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
							<button class="btn btn-danger" data-dismiss="modal">确认</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios'
import global from '../global/global'
import adm from './adm'
export default {
  name: 'adm-projects',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      projectsLists: '',
      types: ['结题项目', '申请项目']
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/items/getItemsList')
    .then(function (res) {
      self.projectsLists = res.data.data
    })
  },
  components: {
    adm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adm-projects{
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
