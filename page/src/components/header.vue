<template>
  <div>
  <div class="header">
    <div class="nav">
            <div class="nav-left" v-on:click="goIndex">
        <img src="../img/logo.png" class="logo"/>
        <a href="javascript:;"><span>同济大学汽车学院</span></a>
            </div>
      <ul class="nav-content tab">
        <li class="tab-item"><router-link to="/notice">新闻通知</router-link></li>
        <li class="tab-item"><router-link to="/square">项目广场</router-link></li>
        <li class="tab-item"><router-link to="/gwfc">过往风采</router-link></li>
        <li class="tab-item"><router-link to="/download">资料下载</router-link></li>
      </ul>
      <div class="nav-right">
        <input type="text" placeholder="点击搜索" id="inp" />
        <span><a href="javascript:;" v-on:click="go">{{state.state}}</router-link></span>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import global from '../global/global'
export default {
  data () {
    return {
      state: global.user,
      url: global.user.path
    }
  },
  methods: {
    // var self = this
    go: function () {
      global.go(this, global.user.token)
    },
    goIndex: function () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>
