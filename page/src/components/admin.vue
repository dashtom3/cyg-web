<template>
  <div style="background-color: #222;">
  <div class="content">
        <div class="admin">
            <div class="w200"></div>
            <div class="msg">
                <div class="title">管理员登录</div>
                <div class="label">用户名</div>
                <input type="text"/>
                <div class="label">密码</div>
                <input type="password"/>
                <button class="login">登录</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style media="screen">
*{
margin: 0;
padding: 0;
}
.admin{
width: 960px;
margin: 0 auto;
min-height: 600px;
}
.w200{
height: 200px;
}
.msg .title{
color: #c74b36;
font-size: 16px;
font-weight: bold;
margin: 10px auto;
}
.msg .label{
color: #65676b;
margin: 10px 0;
font-weight: 600;
font-size: 16px
}
.msg input{
width: 100%;
height: 30px;
line-height: 30px;
padding: 0 10px;
border-radius: 5px;
box-shadow: 0 0 3px rgba(0,0,0,0.3);
border: 1px;
margin: 0;
box-sizing: border-box;
}
.msg{
display: block;
width: 400px;
height: 300px;
margin: 0px auto;
padding: 20px 40px;
background-color: white;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
box-sizing: content-box;
}
.login{
margin: 20px auto;
background-color: #c74b36;
border-radius: 5px;
border: none;
width: 100%;
line-height: 28px;
padding: 3px 0;
text-align: center;
font-family: "Microsoft YaHei UI";
font-size: 16px;
font-weight: 700;
color: white
}
.login:hover{
box-shadow: 0 3px 5px rgba(0,0,0,0.2);
transition: box-shadow 0.2s;
cursor: pointer;
}
</style>
