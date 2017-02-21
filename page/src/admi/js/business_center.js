/**
 * Created by Administrator on 2016/12/6.
 */
$(".menu-item").hover(function(){
    $(this).children('.menu-item-child').show();
    changeUrl();
},function(){
    $(this).children('.menu-item-child').hide();
});
function changeUrl(){
    $('.submenu-list dd').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        var url = $(this).children('a').attr('data-src');
        $('iframe').attr('src',url);
    })
}
//左侧分类
$('.menu-item').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
    $(this).children('.menu-item-child').hide();
    //获取当前的html赋值给submenu
    $('.submenu .submenu-list').html($(this).children('.menu-item-child').html());
    //获取当前的路径
    var url = $('.submenu .submenu-list .current').children('a').attr('data-src');
    $('iframe').attr('src',url);
    changeUrl();
});
//左侧分类子菜单
$(function(){
    changeUrl();
});
//选择门店
$('.ui-select ').click(function(){
    $(this).addClass('dropdown');
    $('.ui-select-drop').show();
});
$('.ui-select-drop a').click(function(){
    $('.ui-select-drop').hide();
});
layui.use(['form', 'layedit', 'laydate'], function(){
    var form = layui.form()
        ,layer = layui.layer
        ,layedit = layui.layedit
        ,laydate = layui.laydate;
    //监听提交
    form.on('submit(demo1)', function(data){
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        })
        return false;
    });
    form.on('submit(demo2)', function(data){
        layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
        })
        return false;
    });
})
//自适应高度
 function autoHeight(){
     var doc = document,
         p = window;
     while(p = p.parent){
         var frames = p.frames,
             frame,
             i = 0;
         while(frame = frames[i++]){
             if(frame.document == doc){
                 frame.frameElement.style.height = doc.body.scrollHeight + 'px'; // 这里一定要注意 火狐必须要加'px‘ 否则火狐无效
                 doc = p.document;
                 break;
             }
         }
         if(p == top){
             break;
         }
     }
 }