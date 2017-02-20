/**
 * Created by Administrator on 2016/12/24.
 */
var arr1 = [{name:'餐饮',shuXing:['时段','人数']}];
function addSomeThings(){
    $(".gwtAlert").show();//点击新增，弹框显示
    $('.delSet').show();
    $(".other").hide();
}
//   添加属性
var val= 0;
$(".gwt_qrbc").click(function () {//点击确认保存,收集填写的信息
    val++;
    var yiGeFenLei = {};
    yiGeFenLei.name = $(".gwt_flmc").val();//类别
    yiGeFenLei.shuXing = [];//属性
    var arr = $(".gwt_tjsx");
    for (var a = 0; a < arr.length; a++) {
        yiGeFenLei.shuXing.push($(arr[a]).val());
    }
    $('#kind').append("<option value=" + val + ">" + $('.gwt_flmc').val() + "</option>");
    layui.use(['form', 'layedit', 'laydate'], function () {
        var form = layui.form()
            , layer = layui.layer
            , layedit = layui.layedit
            , laydate = layui.laydate;
        form.render(); //刷新select选择框渲染
    });
    arr1.push(yiGeFenLei);
    $('#kind+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
        var dd = $(this);
        var valu = $(this).attr('lay-value');
//        $.each(dd,function(n,val) {
//            n表示当前的下标   val表示当前元素
//                    <th class="nameTable">时段</th> <th class="people">人数</th>
        $('.other div.layui-input-block').html('<div class="layui-input-block set" style="display: none"> <table class="layui-table"> <tbody><tr>  <th class="kcs">库存数</th> </tr> <tr><td class="sel"> <input type="text"> </td> </tr> </tbody></table> </div>');
        for (var i = 0; i < arr1[valu].shuXing.length; i++) {
            a = '<div class="firstRow"><span class="first-title">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this,' + i + ');" data_a='+i+'> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" class="add" onclick="addRow(this)" >增加</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a='+i+'>设置库存<div class="blank5"></div></div>';
            $('.other div.layui-input-block .set').before(a);
        }
        $('.other').show();
    })
    $(".gwtAlert").hide();
    $(".delSet").hide();
    $(".gwt_flmc").val("");
    $(".gwt_tjsx").val("");
    $(".sx").remove();
});
//    select选择属性
$('#kind+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
    var dd = $(this);
    var valu = $(this).attr('lay-value');
//        $.each(dd,function(n,val) {
//            n表示当前的下标   val表示当前元素
//                    <th class="nameTable">时段</th> <th class="people">人数</th>
    $('.other div.layui-input-block').html('<div class="layui-input-block set" style="display: none"> <table class="layui-table"> <tbody><tr>  <th class="kcs">库存数</th> </tr> <tr><td class="sel"> <input type="text"> </td> </tr> </tbody></table> </div>');
    for (var i = 0; i < arr1[valu].shuXing.length; i++) {
        a = '<div class="firstRow"><span class="first-title">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this,' + i + ');" data_a='+i+'> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" onclick="addRow(this)">增加</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a=' + i + '>设置库存<div class="blank5"></div></div>';
        $('.other div.layui-input-block .set').before(a);
    }
    $('.other').show();
})
//取消按钮函数
function delSomeThings(){
    $(".gwtAlert").hide();
    $(".del").hide();
}
//改变高度
function changeHeight(){
    var h = $('.other .layui-input-block').height();
    $('.other label').height(h);
}
//   增加行
function addRow(obj){
    changeHeight();
    var title = $(obj).siblings('.first-title').text();
    var data_a = $(obj).siblings("input[type=checkbox]").attr("data_a");
    var html = '<div class="firstRow"><span class="first-title">' + title + '</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" onclick="del(this)">删除</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a='+data_a+'>设置库存<div class="blank5"></div></div>';
    $(obj).parent().after(html);
}
//  删除行
function del(obj){
    changeHeight();
    $(obj).parent().remove();
}
//   增加属性
$(".gwt_zjsx").click(function () {//点击增加属性
    $(this).parent().before("<p class='sx'><input class='gwt_tjsx' type='text'><span class='gwt_del'>删除</span></p>");
    $(".gwt_del").click(function () {//增加属性后点击删除
        $(this).parent().remove();
    });
});
//   设置库存
function setkc(obj){
    var val = $(obj).attr("value");
    var data_a = $(obj).attr("data_a");
    if(val==0){
        if($(".set table tr td select").index()==0){
            var data_A = $(".set table tr td select");//获取table下的所有select
            var now = $(".set table tr td select[data_a="+data_a+"]");//获取当前为data_a的select
            //判断当前的select是否存在，存在复制一行，不存在追加
            if(now.length==0){
                $(obj).attr("value","1");
                $(".set").show();
                var title = $(obj).siblings('.first-title').text();
                $(".sel").before('<td><select style="display: inline-block" data_a='+data_a+'></select></td>');
                $('.kcs').before("<th>"+title+"</th>");
            }else{
                $(obj).attr("value","1");
                $(".set table").append(now.parent().parent().prop("outerHTML"));
            }
        }
        else {
            $(obj).attr("value","1");
            $(".set").show();
            var title = $(obj).siblings('.first-title').text();
            $(".sel").before('<td><select style="display: inline-block" data_a='+data_a+'></select></td>');
            $('.kcs').before("<th>"+title+"</th>");
        }
    }
    else{
        $(obj).attr("value","0");
        var now = $(".set table tr td select[data_a="+data_a+"]");//获取当前为data_a的select
        if(now.length==1){
            data_a++;
            $(".set table tr :nth-child("+data_a+")").remove();
        }
        else{
            $(".set table tr:last-child").remove();
        }
    }
}
//改变数量
function changeTime(obj){
    var data_a = $(obj).siblings("input[type=checkbox]").attr("data_a");
    $(".set table tr td select[data_a="+data_a+"]").append("<option value='"+obj.value+"'>"+obj.value+"</option>");
}