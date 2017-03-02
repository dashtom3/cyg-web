<template>
  <div class="test">
    <v-header></v-header>
    <div class="communicate-top">
      <div class="communicate-top-left">
        <span class="communicate-words">交流区</span>
        <div class="communicate-words-today">
          <span>今日:</span>
          <span class="today-number">{{getCounts.todayPostCount}}</span>
        </div>
        <div class="communicate-words-whole">
          <span>(</span>
          <span class="communicate-theme">{{getCounts.allPostCount}}</span>
          <span>主题</span>&nbsp;
          <span>/</span>
          <span class="communicate-answer">{{getCounts.allCommentCount}}</span>
          <span>回复</span>
          <span>)</span>
        </div>
      </div>
    </div>
    <div class="comment">
       <div class="pages">
           <ul>
             <li>
                 <a href="javascript:;" v-on:click="top">首页</a>
                 <a href="javascript:;">当前页:{{currentPage}}</a>
                 <a href="javascript:;" v-on:click="prev">上一页</a>
                 <a href="javascript:;" v-on:click="next">下一页</a>
                 <a href="javascript:;" v-on:click="bottom">尾页</a>
             </li>
               <li class="replyNum">
                   <span class="allReply">{{pages.totalNumber}}</span>回复&nbsp;
                   共<span class="allPages">{{pages.totalPage}}</span>页
               </li>
               <li>
                   <span>跳到</span>
                   <input type="text" class="num" v-model="num" />
                   <span>页</span>
                   <button type="button" class="btn" v-on:click="goPage">确定</button>
               </li>
           </ul>
       </div>
       <div class="contentComment">
           <div class="contentComment-header">
               <h2>{{itemcontent.title}}</h2>
               <!-- <ul>
                   <li><a href="javascript:;"><button>只看楼主</button></a></li>
                   <li><a href="javascript:;"><button>回复</button></a></li>
               </ul> -->
           </div>
           <div class="commentList" v-for="(content, index) in contentsList">
               <div class="comment">
                   <div class="author">
                       <ul>
                           <!-- <li class="icon"><img src="" alt=""/></li> -->
                           <li class="username">{{content.username}}</li>
                       </ul>
                   </div>
                   <div class="comment-contentComment">
                       <div class="autorComment">
                           <p class="artical">{{content.contents}}</p>
                       </div>
                       <div class="time">
                           <ul>
                               <!-- <li><a href="javascript:;" v-on:click="postother(content.commentid)">回复</a></li> -->
                               <li>{{content.time | time}}</li>
                               <li><span>{{index + 1}}</span>楼</li>
                           </ul>
                           <!-- <div v-show="hf"> -->
                             <!-- <input type="text" name="" style="width:500px" v-model="othercontents">&nbsp;&nbsp; -->
                           <!-- </div> -->
                       </div>
                       <!-- <div class="otherReply">
                           <div class="otherCommentsList">
                               <ul>
                                   <li v-for="other in content.commentReplyEntity">
                                       <a href="javascript;:"><img src="" alt=""></a>
                                       <div>
                                           <a href="javascript:;">{{other.username}}:&nbsp;</a>
                                           <span>{{other.contents}}</span>
                                           <div><span>{{other.time | date}}</span></div>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div> -->
                   </div>
               </div>
           </div>
           <div class="pages">
               <ul>
                 <li>
                     <a href="javascript:;" v-on:click="top">首页</a>
                     <a href="javascript:;">当前页:{{currentPage}}</a>
                     <a href="javascript:;" v-on:click="prev">上一页</a>
                     <a href="javascript:;" v-on:click="next">下一页</a>
                     <a href="javascript:;" v-on:click="bottom">尾页</a>
                 </li>
                   <li class="replyNum">
                       <span class="allReply">{{pages.totalNumber}}</span>回复&nbsp;
                       共<span class="allPages">{{pages.totalPage}}</span>页
                   </li>
                   <li>
                       <span>跳到</span>
                       <input type="text" class="num" v-model="num" />
                       <span>页</span>
                       <button type="button" class="btn" v-on:click="goPage">确定</button>
                   </li>
               </ul>
           </div>
       </div>
       <div class="publishComment">
           <p>发表回复</p>
           <textarea class="pub" v-model="postcon"></textarea>
           <a href="javascript:;" v-on:click="pubPost">发布</a>
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
  data () {
    return {
      getCounts: '',
      postid: this.$route.params.id,
      contentsList: '',
      pages: '',
      currentPage: '',
      prevShow: false,
      nextShow: false,
      isShow: false,
      num: '',
      hf: false,
      othercontents: '',
      postcon: '',
      commentid: '',
      itemcontent: ''
    }
  },
  components: {
    'v-header': header,
    'v-footer': footer
  },
  created () {
    var self = this
    axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid)
    .then(function (res) {
      // console.log(res)
      self.contentsList = res.data.data
      if (res.data.data.length > 10) {
        self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
      }
      self.pages = res.data
      self.currentPage = res.data.currentPage
      if (res.data.totalPage > 1) {
        self.nextShow = true
      }
    })
    axios.get(global.baseURL + 'api/communication/getCounts')
    .then(function (res) {
      // console.log(res)
      self.getCounts = res.data.data
    })
    axios.get(global.baseURL + 'api/posts/getbyid?postsid=' + this.postid)
    .then(function (res) {
      console.log(res)
      self.itemcontent = res.data.data
    })
  },
  methods: {
    top: function () {
      var self = this
      axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid + '&pagenum=1')
      .then(function (res) {
        self.contentsList = res.data.data
        if (res.data.data.length > 10) {
          self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
        }
      })
    },
    prev: function () {
      if (this.currentPage === 1) {
        alert('已经是第一页了')
      } else {
        Vue.set(this, 'currentPage', this.currentPage - 1)
        var self = this
        axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid + '&pagenum=' + this.currentPage)
        .then(function (res) {
          console.log(res)
          self.contentsList = res.data.data
          if (res.data.data.length > 10) {
            self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
          }
        })
      }
    },
    next: function () {
      if (this.currentPage === this.pages.totalPage) {
        alert('已经是最后一页了')
      } else {
        Vue.set(this, 'currentPage', this.currentPage + 1)
        this.prevShow = true
        var self = this
        axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid + '&pagenum=' + this.currentPage)
        .then(function (res) {
          console.log(res)
          self.contentsList = res.data.data
          if (res.data.data.length > 10) {
            self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
          }
        })
      }
    },
    bottom: function () {
      axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid + '&pagenum=' + this.pages.totalPage)
      .then(function (res) {
        self.contentsList = res.data.data
        if (res.data.data.length > 10) {
          self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
        }
      })
    },
    goPage: function () {
      Vue.set(this, 'currentPage', this.num)
      console.log(this.currentPage)
      axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + this.postid + '&pagenum=' + this.currentPage)
      .then(function (res) {
        self.contentsList = res.data.data
        if (res.data.data.length > 10) {
          self.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
        }
      })
    },
    pubPost: function () {
      var self = this
      var post = new FormData()
      post.append('contents', this.postcon)
      post.append('postsid', this.postid)
      axios.post(global.baseURL + 'api/comment/add?token=' + global.user.token, post)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('评论成功')
          Vue.nextTick(function () {
            var that = self
            axios.get(global.baseURL + 'api/comment/getbypostsid?postsid=' + that.postid)
            .then(function (res) {
              console.log(res)
              that.contentsList = ''
              that.contentsList = res.data.data
              if (res.data.data.length > 10) {
                that.contentsList = res.data.data.slice(10 * (res.data.currentPage - 1), 10)
              }
              that.pages = ''
              that.currentPage = ''
              that.pages = res.data
              that.currentPage = res.data.currentPage
              if (res.data.totalPage > 1) {
                that.nextShow = true
              }
            })
            axios.get(global.baseURL + 'api/communication/getCounts')
            .then(function (res) {
              // console.log(res)
              self.getCounts = res.data.data
            })
          })
        } else {
          alert('请先登录')
          self.$router.push({ path: '/login' })
        }
      })
    },
    postother: function (id) {
      // var self = this
      var postother = new FormData()
      postother.append('commentid', id)
      postother.append('contents', this.othercontents)
      axios.post(global.baseURL + 'api/comment/replyComment?token=' + global.user.token, postother)
      .then(function (res) {
        console.log(res)
        if (res.data.callStatus === 'SUCCEED') {
          alert('评论成功')
        } else {
          alert('请先登录')
          self.$router.push({ path: '/login' })
        }
      })
    }
  }
}
</script>

<style>
body,*{
font-family: "\5FAE\8F6F\96C5\9ED1";
margin:0;
padding: 0;
box-sizing: content-box;
}
.otherCommentsList{
  background: #f7f8fa
}
.otherCommentsList a img{
  width: 32px;
  height: 32px;
}
.otherCommentsList ul li a{
  float: left;
}
.otherCommentsList ul li>div>div{
  text-align: right;
}
.otherCommentsList ul li{
  overflow: hidden;
  padding: 5px 30px;
}
.otherCommentsList ul li div{
  margin-left: 45px;
}
.communicate-top{
font-family:"微软雅黑";
width:960px;
height:148px;
margin: 0 auto;
margin-bottom: 30px;
border-bottom: 13px solid rgb(191,191,191);
}
.publishComment a{
  display: inline-block;
  padding: 0 15px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: #dfdfdf;
  border-color: #dfdfdf;
  margin-top: 20px;
}
.communicate-top-left{
width:622px;
height:138px;
float:left;
background:rgb(126,206,243);
}
.communicate-top-left .communicate-words{
display:block;
float:left;
text-align: center;
font-size: 35px;
color:white;
font-weight: bold;
margin-top: 90px;
margin-left: 20px;
margin-right: 40px;
}
.publishComment{
  width: 500px;
  height: 150px;
  margin: 50px auto;
}
.communicate-words-today{
float:left;
font-size: 18px;
color:white;
font-family: "微软雅黑";
margin-top: 102px;
margin-right: 10px;
text-align: center;
}
.communicate-words-whole{
float:left;
font-size: 18px;
color:white;
font-family: "微软雅黑";
margin-top: 102px;
text-align: center;
}
ul li{
list-style: none;
}
a,a:hover{
text-decoration: none;
}
.comment{
width: 960px;
margin:0 auto;
border: 1px solid #E5E5E5;
}
.pages{
  line-height: 30px;
  height: 30px;
}
.pages ul{
  background: #f5f7fa;
  padding: 20px 0;
  height: 100%;
  border: 1px solid #E5E5E5;
}
.pages ul li{
float: left;
height: 100%;
}
.pages ul,.contentComment-header,.commentList,.time,.comment{
overflow: hidden;
}
.commentList .comment{
  border-top: none;
}
.pages ul li a{
padding: 0 4px;
white-space:normal;
height: 100%;
display: inline-block;
line-height: 30px;
}
.username{
  width: 80px;
  text-align: center;
}
.replyNum{
margin-left: 20px;
margin-right: 20px;
}
.pages ul li span{
  display: inline-block;
  height: 100%;
  line-height: 30px;
}
.num{
width: 20px;
}
.btn{
outline: 0;
display: inline-block;
zoom: 1;
line-height: 24px;
padding: 0 5px;
width: 45px;
color: #000;
text-decoration: none
}
.contentComment{
  padding: 40px 0;
}
.contentComment-header{
height: 70px;
line-height: 50px;
border-bottom: 1px solid #BBBDBF;
border-left: 1px solid #E5E5E5;
border-right: 1px solid #E5E5E5;
}
.publishComment p{
  font-weight: 700;
}
.contentComment-header h2,.contentComment-header ul li{
float: left;
height: 100%;
line-height: 50px;
}
.contentComment-header h2{
  margin-left: 50px
}
.commentList{
  padding-top: 25px;
}
.contentComment-header ul li{
margin-right: 10px;
}
.contentComment-header ul{
float: right;
}
.author,.comment-contentComment{
float: left;
}
.author{
width: 130px;
}
.author ul{
  margin-left: 30px;
}
.comment-contentComment{
width: 830px;
}
.icon img{
width: 80px;
height: 80px;
}
.time{
margin-top: 30px;
margin-right: 7px;
}
.time ul li {
float: right;
margin-right: 10px;
}
.autorComment{
min-height: 170px;
}
textarea.pub{
resize: none;
width: 100%;
height: 100px;
outline: none
}
</style>
