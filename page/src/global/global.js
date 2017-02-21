export default{
  user: {phone: '15216719714', state: '登录', token: ''},
  baseURL: 'http://123.56.220.72:8080/Student/',
  getToday: function () {
    var today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    return today
  }
}
