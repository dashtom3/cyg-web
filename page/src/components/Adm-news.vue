<template>
  <div style="position:relative">
  <div class="adm-news">
      <adm></adm>
		<div class="adm-content">
			<div class="adm-header">
				<h1 class="page-title">新闻列表</h1>
			</div>

			<ul class="breadcrumb">
				<li>
					<a href="users.html">管理中心</a> <span class="divider">/</span></li>
				<li class="active">新闻列表</li>
        <a href="javascript:;">发布新闻</a>
			</ul>

			<div class="container-fluid">
				<div class="row-fluid">
					<div class="well">
						<table class="table">
							<thead>
								<tr>
									<th>序号</th>
									<th>发布日期</th>
									<th>标题</th>
									<th>状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(newsList, index) in newsLists">
									<td>{{index + 1}}</td>
									<td>{{newsList.time | time}}</td>
									<td>{{newsList.title}}</td>
									<td>{{type[newsList.state]}}</td>
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
							<p class="error-text"><i class="icon-warning-sign modal-icon adm-warn"></i>你想要删除
                <p class="error-text"><i class="icon-warning-sign modal-icon adm-warn"></i>你想要删除这个新闻吗?</p>
              这个新闻吗?</p>
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
  <!-- <div class="show">
    <div class="pubNews">
        <vue-html5-editor :content="content" :height="500"></vue-html5-editor>
      </textarea>
    </div>
  </div> -->
  </div>
</template>

<script type="text/javascript">
// import '../vue-html5-editor.js'
// var editor = require('vue-html5-editor')
// Vue.use(editor, options)
// Vue.use(VueHtml5Editor, options)
import adm from './adm'
import axios from 'axios'
import global from '../global/global'
export default {
  name: 'adm-news',
  props: ['value'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsLists: '',
      type: ['不通过', '通过'],
      pages: '',
      isShow: false,
      text: 'nihao'
    }
  },
  created () {
    var self = this
    axios.post(global.baseURL + 'api/news/getNewsList')
    .then(function (res) {
      console.log(res)
      self.newsLists = res.data.data
      self.pages = res.data.totalPage
      res.data.totalPage > 1 ? self.isShow = true : self.isShow = false
    })
  },
  methods: {
    del: function (item) {
      console.log(item)
    }
  },
  components: {
    adm
    // 'vue-html-editor': require('vue-html-editor')
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
/*.show{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: #000;
  opacity: .8
}*/
.breadcrumb{
  height: 35px;
}
.breadcrumb>a{
  padding: 10px;
  float: right;
  background: red;
  color: white;
  font-size: 15px;
  border-radius: 5px;
}
</style>
