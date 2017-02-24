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
  }
}
