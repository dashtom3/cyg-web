<template>
  <div>
    <v-header></v-header>
    <div class="comment">
       <div class="pages">
           <ul>
               <li>
                   <a href="javascript:;">11</a>
                   <a href="javascript:;">11</a>
                   <a href="javascript:;">11</a>
                   <a href="javascript:;">11</a>
                   <a href="javascript:;">11</a>
               </li>
               <li class="replyNum">
                   <span class="allReply">100</span>回复&nbsp;
                   共<span class="allPages">10</span>页
               </li>
               <li>
                   <span>跳到</span>
                   <input type="text" class="num"/>
                   <span>页</span>
                   <button type="button" class="btn">确定</button>
               </li>
           </ul>
       </div>
       <div class="content">
           <div class="content-header">
               <h1>交流区标题</h1>
               <ul>
                   <li><a href="javascript:;"><span>只看楼主</span></a></li>
                   <li><a href="javascript:;"><span>回复</span></a></li>
               </ul>
           </div>
           <div class="commentList">
               <div class="comment">
                   <div class="author">
                       <ul>
                           <li class="icon"><img src="" alt=""/></li>
                           <li class="username">nihao</li>
                       </ul>
                   </div>
                   <div class="comment-content">
                       <div class="autorComment">
                           <p class="artical">123123123123123123213213213</p>
                       </div>
                       <div class="otherReply">
                           <div class="time">
                               <ul>
                                   <li><a href="javascript:;">回复</a></li>
                                   <li>2017-02-13 11:27</li>
                                   <li><span>5</span>楼</li>
                               </ul>
                           </div>
                           <div class="otherCommentsList">
                               <ul>
                                   <li>
                                       <a href="javascript;:"></a>
                                       <div>
                                           <a href="javascript:;"></a>
                                           <span></span>
                                           <div></div>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="pages">
               <ul>
                   <li>
                       <a href="javascript:;">11</a>
                       <a href="javascript:;">11</a>
                       <a href="javascript:;">11</a>
                       <a href="javascript:;">11</a>
                       <a href="javascript:;">11</a>
                   </li>
                   <li class="replyNum">
                       <span class="allReply">100</span>回复&nbsp;
                       共<span class="allPages">10</span>页
                   </li>
                   <li>
                       <span>跳到</span>
                       <input type="text" class="num"/>
                       <span>页</span>
                       <button type="button" class="btn">确定</button>
                   </li>
               </ul>
           </div>
       </div>
       <div class="publishComment">
           <p>发表回复</p>
           <textarea></textarea>
           <button>发布</button>
       </div>
   </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import header from './header'
import footer from './footer'
// import global from '../global/global'
export default {
  name: 'comment',
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>

<style>
body,*{
font-family: "\5FAE\8F6F\96C5\9ED1";
margin:0;
padding: 0;
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
}
.pages ul li{
float: left;
}
.pages ul,.content-header,.commentList,.time{
overflow: hidden;
}
.pages ul li a{
padding: 0 4px;
white-space:normal;
}
.replyNum{
margin-left: 20px;
margin-right: 20px;
}
.num{
width: 20px;
}
.btn{
/*background: url('../img/login') no-repeat -295px -22px;*/
border: 0;
outline: 0;
display: inline-block;
zoom: 1;
line-height: 24px;
padding: 0 5px;
width: 45px;
color: #000;
text-decoration: none
}
.content-header{
height: 85px;
line-height: 85px;
}
.content-header h1,.content-header ul li{
float: left;
}
.content-header ul li{
margin-right: 10px;
}
.content-header ul{
float: right;
}
.author,.comment-content{
float: left;
}
.author{
width: 130px;
}
.comment-content{
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
textarea{
resize: none;
width: 960px;
}
</style>
