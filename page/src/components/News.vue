<template>
		<!--中间新闻内容部分-->
		<div class="news-content">
			<span class="news-title"></span>
			<span class="news-date"></span>
			<span class="news-article">
			</span>
			</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('http://123.56.220.72:8080/Student/api/news/getbyid?newsid=' + this.newsId + '&token=')
    .then(function (res) {
      console.log(res.data.data)
      this.news = res.data.data
    })
  },
  data () {
    return {
      news: '{}',
      newsId: this.$route.params.id
    }
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
