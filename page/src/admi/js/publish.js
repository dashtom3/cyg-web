/**
 * Created by Administrator on 2016/12/9.
 */
//页面进行切换
$('.layui-tab-title li').click(function(){
    var num = $(this).index();
    $(this).parent().siblings('form').children('div').children('div').removeClass('layui-show');
    $(this).parent().siblings('form').children('div').children('div')[num].setAttribute('class','layui-show layui-tab-item');
})
function change(num){
    $('.layui-tab-content').children('div').removeClass('layui-show');
    $('.layui-tab-content').children('div')[num].setAttribute('class','layui-show layui-tab-item');
    $('.layui-tab-content').parent().siblings('ul').children('li').removeClass('layui-this');
    $('.layui-tab-content').parent().siblings('ul').children('li')[num].setAttribute('class','layui-this');
}
//发布切换
$('.first').click(function(){
    var title = $('#title').val(),
        name = $('#name').val(),
        introduction = $('#introduction').val(),
        city = $('#city').val(),
        kinds = $('#kinds').val(),
        stores = $('#stores').val(),
        uploadfile = $('#uploadfile').val(),
        describe = $('#LAY_layedit_1').contents().find('body').text(),
        buy = $('#LAY_layedit_2').contents().find('body').text();
    if(title!=''&&name!=''&&introduction!=''&&city!=''&&kinds!=''&&stores!=''&&uploadfile!=''&&describe!=''&&buy!=''){
        change(1);
    }
})
//下一步
$('.second').click(function(){
    var beginGroup = $('#beginGroup').val(),
        endGroup = $('#endGroup').val(),
        allNum = $('#allNum').val(),
        mimNum = $('#minNum').val(),
        maxNum = $('#maxNum').val(),
        price = $('#price').val(),
        groupPrice = $('#groupPrice').val(),
        accounts = $('#accounts').val();
    if(beginGroup!=''&&endGroup!=''&&allNum!=''&&mimNum!=''&&maxNum!=''&&price!=''&&groupPrice!=''&&accounts!=''){
        change(2)
    }
    return false;
});
KindEditor.ready(function(K) {
    //通过id找到textarea
    K.create('#buy', {
        items : [
            'undo','redo','fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
            'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
            'insertunorderedlist']
    });
    K.create('#describe', {
        items : [
            'undo','redo','fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
            'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
            'insertunorderedlist']
    });
});