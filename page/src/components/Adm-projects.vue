<template>
  <div class="adm-projects">
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
				<a class="brand" href="users.html"><span class="second">管理中心</span></a>
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
									<th>主题</th>
									<th>项目</th>
									<th>发表者</th>
									<th>项目类型</th>
									<th>关键词</th>
									<th>项目周期</th>
									<th>联系方式</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(proList, index) in proLists">
									<td>{{index+1}}</td>
									<td>{{proList.type}}</td>
									<td>{{proList.project}}</td>
									<td>{{proList.poster}}</td>
									<td>{{proList.styles}}</td>
									<td>{{proList.major}}</td>
									<td>{{proList.time}}</td>
									<td>{{proList.telephone}}</td>
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
export default {
  name: 'adm-projects',
  data () {
    return {
      proLists: [
        {
          type: '同济大学汽车学院网站',
          project: '项目',
          poster: '王老师',
          styles: '官网',
          major: '网站',
          time: '一个月',
          telephone: '11111111111111111111'
        }
      ]
    }
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
