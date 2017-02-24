<template>
  <div class="adm-post">
    <adm></adm>
		<div class="adm-content" ref="admContent">
			<div class="adm-header">
				<h1 class="page-title">帖子列表</h1>
			</div>
			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">帖子列表</li>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>主题</th>
									<th>标题</th>
									<th>发表者</th>
                  <th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(comment, index) in comments">
									<td>{{index + 1}}</td>
									<td>{{comment.theme}}</td>
									<td>{{comment.title}}</td>
									<td>{{comment.username}}</td>
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
							<p class="error-text"><i class="icon-warning-sign modal-icon adm-warn"></i>你想要删除这个帖子吗?</p>
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
import adm from './adm'
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'adm-post',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comments: '',
      pages: '',
      isShow: false
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/posts/getPostsList')
    .then(function (res) {
      // console.log(res)
      self.comments = res.data.data
      self.pages = res.data.totalPage
      res.data.totalPage > 1 ? self.isShow = true : self.isShow = false
    })
  },
  components: {
    adm
  },
  mounted () {
    var admContent = this.$refs.admContent
    var wh = document.body.clientHeight
    if (admContent.offsetHeight < wh - 71) {
      admContent.style.height = wh - 77 + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.adm-post{
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
