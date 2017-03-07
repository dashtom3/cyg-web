<template>
		<!--中间新闻内容部分-->
		<div>
			<v-header></v-header>
		<div class="news-content xin" ref="newsContent">
			<span class="news-title">{{news.title}}</span>
			<span class="news-date">{{news.time | time}}</span>
			<span class="news-article" v-html=news.contents>
				<!-- {{}} -->
			</span>
			</div>
			<v-footer></v-footer>
		</div>
</template>

<script>
import axios from 'axios'
import header from './header'
import footer from './footer'
// import Vue from 'vue'
import global from '../global/global'
export default {
  created () {
    var self = this
    self.$nextTick(function () {
      var newsContent = self.$refs.newsContent
      global.setHeight(newsContent)
    })
    axios.get(global.baseURL + 'api/news/getbyid?newsid=' + this.newsId + '&token=')
    .then(function (res) {
      // console.log(res.data.data)
      self.news = res.data.data
      // var newsContent = document.querySelector('.xin')
      // global.setHeight(newsContent)
      self.$nextTick(function () {
        var newsContent = self.$refs.newsContent
        global.setHeight(newsContent)
      })
    })
  },
  data () {
    return {
      news: '{}',
      newsId: this.$route.params.id,
      h: ''
    }
  },
  // updated: function () {
  //   var sh = document.querySelector('.xin')
  //   console.log(sh.offsetHeight)
  //   global.setHeight(sh)
  // },
  // beforeCreate () {
  //   // console.log(document.querySelector('.xin'))
  //   var newsContent = this.$refs.newsContent
  //   global.setHeight(newsContent)
  // },
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-content{
width:960px;
margin:0 auto;
}
.news-title{
width:100%;
color:rgb(1,82,144);
display: inline-block;
text-align: center;
font-size: 25px;
margin-top: 40px;
}
.news-date{
width:954px;
padding-right: 6px;
text-align: right;
display: inline-block;
color:rgb(185,185,185);
}
.news-article{
text-indent: 2rem;
line-height: 25px;
text-align: left;
display: block;
color:rgb(185,185,185);
}

</style>
