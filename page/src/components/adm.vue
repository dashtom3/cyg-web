<template>
  <div class="adm-news">
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
				<a class="brand" href="javascript:;"><span class="second">管理中心</span></a>
			</div>
		</div>

		<div class="sidebar-nav">
			<ul id="dashboard-menu" class="nav nav-list collapse in tab">
        <li class="tab-item"><router-link to="/admUsers">用户列表</router-link></li>
        <li class="tab-item"><router-link to="/admProjects">项目列表</router-link></li>
        <li class="tab-item"><router-link to="/admNews">新闻列表</router-link></li>
        <li class="tab-item"><router-link to="/admPost">帖子列表</router-link></li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'adm-news',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    del: function (item) {
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adm-news{
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
#fat-menu:hover .dropdown-menu{
  display: block;
}
</style>
