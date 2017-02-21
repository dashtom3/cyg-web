<template>
  <div class="Adm-users">
    <div class="navbar">
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
				<a class="brand" href="users.html">管理中心</a>
			</div>
		</div>
		<div class="sidebar-nav">
			<ul id="dashboard-menu" class="nav nav-list collapse in">
				<li class="active">
					<router-link to="/Adm-users"><a>用户列表</a></router-link>
				</li>
				<li>
					<router-link to="/Adm-projects"><a>项目列表</a></router-link>
				</li>
				<li>
					<router-link to="/Adm-news"><a>新闻列表</a></router-link>
				</li>
				<li>
					<router-link to="/Adm-post"><a>项目发表</a></router-link>
				</li>
			</ul>
		</div>

		<div class="adm-content">
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
								<tr v-for="(user, index) in users">
									<td>{{index+1}}</td>
									<td>{{user.name}}</td>
									<td>{{user.studentid}}</td>
									<td>{{user.place}}</td>
									<td>{{user.major}}</td>
									<td>{{user.email}}</td>
									<td>{{user.telephone}}</td>
									<td>{{user.styles}}</td>
									<td>
										<a href="#myModal" role="button" data-toggle="modal" @click="del(str)">删除</a>
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
						<div class="modal-header">
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
export default {
  name: 'adm-users',
  data () {
    return {

    }
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
