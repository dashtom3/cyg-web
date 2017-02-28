<template>
  <!--中间部分-->
  <div>
    <v-header></v-header>
  <div class="download-content" ref="downloadContent">
    <!--左边上半部分-->
    <div class="download-left">
      <div class="download-t">
        <div class="downal-left-top">
          <div class="downal-username">
            <img src=""/>
            <div class="user-downal">
              <span class="username-downal-name">你的名字</span><br/>
              <span class="downal-number-fiex">账号:</span><span class="downal-number">123456789</span>
            </div>
          </div>
          <div class="cont-left-downright">
            <span class="downright-left-words">DOWNLOAD</span>
            <span class="downright-right-words">资<br/>料<br/>下<br/>载</span>
          </div>
        </div>
      </div>
    </div>
    <!--右半部分-->
    <div class="download-right">
      <ul>
        <li v-for="(down, index) in downs">
          <span class="down-num">{{index+1}}</span>
          <span class="down-type">{{down.intro}}</span>
          <span class="down-date"></span>
        </li>
      </ul>
      <div class="square-right-b">
        &nbsp;当前是&nbsp;:&nbsp;<span>{{page.currentPage}}/{{page.totalPage}}</span>&nbsp;&nbsp;
        共<span class="square-number">{{page.totalNumber}}</span>条信息&nbsp;&nbsp;&nbsp;
        <span v-on:click="prev" v-show="prevShow">上一页</span>&nbsp;<span v-on:click="next" v-show="nextShow">下一页</span>&nbsp;&nbsp;跳转到:&nbsp;第
        <select name="">
          <option value="" v-for="pages in pageList" v-on:click='goPage(pages)'>{{pages}}</option>
        </select>页
      </div>
    </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import axios from 'axios'
import header from './header'
import footer from './footer'
import Vue from 'vue'
import global from '../global/global'
export default {
  name: 'download',
  data () {
    return {
      downs: [],
      page: [],
      pageList: '',
      prevShow: false,
      nextShow: false,
      pagenum: 1,
      url: 'api/file/getMaterialList?pagenum='
    }
  },
  created () {
    var self = this
    axios.get(global.baseURL + 'api/file/getMaterialList')
    .then(function (res) {
      console.log(res)
      self.page = res.data
      if (res.data.data > 10) {
        self.downs = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
      }
      self.downs = res.data.data
    })
  },
  methods: {
    prev: function () {
      Vue.set(this, 'pagenum', this.pagenum - 1)
      global.goPage(this, this.pagenum, this.url)
    },
    next: function () {
      Vue.set(this, 'pagenum', this.pagenum + 1)
      global.goPage(this, this.pagenum, this.url)
    },
    goPage: function (page) {
      Vue.set(this, 'pagenum', page)
      global.goPage(this, this.pagenum, this.url)
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  mounted () {
    var downloadContent = this.$refs.downloadContent
    global.setHeight(downloadContent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download-content{
width:960px;
height:600px;
margin:0 auto;
}
.download-left{
width:262px;
height:auto;
float:left;
}
.download-t{
width:218px;
height:252px;
float:left;
padding-left: 22px;
padding-right: 22px;
background-color: rgb(126,206,243)
}
.downal-left-top{
border-bottom: 2px solid rgb(114,166,188);
width:100%;
height:196px;
}
/*竖着字体设置*/
.cont-left-downright{
margin-top: 50px;
float:right;
width:64px;
height:146px;
color:white;
position:relative;
}
.downright-left-words{
transform: rotateZ(-90deg);
-webkit-transform: rotateZ(-90deg);
text-transform:capitalize;
text-align: center;
display:block;
font-size: 18px;
position: absolute;
bottom:53px;
color:rgb(221,239,255);
right:-8px;
}
.downright-right-words{
float:right;
color:rgb(221,239,255);
display:block;
font-size: 32px;
line-height: 34px;
}
/*左边用户部分*/
.downal-username{
float:left;
width:146px;
}
/*用户照片*/
.downal-username img{
width:70px;
height:75px;
float:left;
background-color:rgb(193,193,193);
margin-top: 60px;
}
/*个人信息*/
.user-downal{
font-family: "微软雅黑";
margin-top: 14px;
float:left;
width: 120px;
}
.user-downal .username-downal-name{
display:block;
font-weight: bold;
float:left;
color:black;
font-size: 15px;
}
/*登录后账号*/
.downal-username .downal-number{
display:block;
float:left;
color:black;
font-size: 14px;

}
/*账号：*/
.downal-username .downal-number-fiex{
display:block;
float:left;
color:black;
font-size: 15px;
font-weight: bold;
margin-right: 8px;
}
/*右半部分*/
.download-right{
float:left;
margin-left: 20px;
margin-top: 130px;
width:610px;
height:auto;
}
.download-right ul li{
border-bottom: 1px solid rgb(197,197,197);
font-weight: normal;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 7px;
padding-top: 7px;
}
.down-num{
display: inline-block;
font-size: 14px;
color:rgb(139,139,139);
}
.down-type{
color:rgb(0,84,141);
font-size: 16px;
font-weight: bold;
margin-left: 20px;
}
.down-date{
color:rgb(139,139,139);
display: inline-block;
font-size: 14px;
float:right;
}
</style>
