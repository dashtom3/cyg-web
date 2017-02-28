import axios from 'axios'
export default{
  user: {
    username: '',
    state: '登录',
    token: '',
    studentid: '',
    department: '',
    major: '',
    email: '',
    personalbrief: '',
    num: '',
    usertype: '',
    telephone: '',
    personaltag: '',
    userid: ''
  },
  baseURL: 'http://123.56.220.72:8080/Student/',
  setHeight: function (value) {
    var wh = document.body.clientHeight
    var dh = value
    // console.log(value)
    if (dh.offsetHeight < wh - 247) {
      dh.style.height = wh - 247 + 'px'
    }
  },
  go: function (obj, token) {
    var self = obj
    if (token !== '') {
      self.$router.push({ path: '/personal' })
    } else {
      self.$router.push({ path: '/login' })
      this.user.state = '登录'
    }
  },
  goPage: function (obj, pagenum, url) {
    var self = obj
    if (pagenum > 1) {
      self.prevShow = true
    }
    axios.post(this.baseURL + url + pagenum)
    .then(function (res) {
      self.page = res.data
      self.pageList = res.data.totalPage
      if (res.data.data > 10) {
        self.projects = res.data.data.slice(10 * (self.pagenum - 1), 10)
      }
      self.projects = res.data.data
    })
  },
  verify: function (url, kind, id) {
    axios.get(this.baseURL + url + this.user.token + '&' + kind + '=' + id + '&state=1')
    .then(function (res) {
      console.log(res)
      if (res.data.callStatus === 'SUCCEED') {
        alert('操作成功')
      }
    })
  },
  pass: function (url, kind, id) {
    axios.get(this.baseURL + url + this.user.token + '&' + kind + '=' + id + '&state=0')
    .then(function (res) {
      console.log(res)
      if (res.data.callStatus === 'SUCCEED') {
        alert('操作成功')
      }
    })
  }
}
