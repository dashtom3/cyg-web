/**
 * Created by Administrator on 2016/12/12.
 */
layui.use(['form', 'layedit', 'laydate'], function() {
    var form = layui.form()
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate;
});
//设置日期
laydate({
    elem: '#beginGroup',
    format:   'YYYY-MM-DD hh:mm'
});
laydate({
    elem: '#endGroup',
    format:   'YYYY-MM-DD hh:mm'
});
laydate({
    elem: '#beginActive',
    format:   'YYYY-MM-DD hh:mm'
});
laydate({
    elem: '#endActive',
    format:   'YYYY-MM-DD hh:mm'
});

/**
 * Created by Administrator on 2016/12/24.
 */



var arr1 = [{name:'餐饮',shuXing:['时段','人数']}];
//增加属性
$(".addAtr").click(function(){
    $(this).before('<div style="margin-bottom: 5px"><input class="shuxing layui-input sxVal" type="text" style="width: 150px;display: inline-block">&nbsp;<button class="layui-btn layui-btn-small layui-btn-danger" style="display: inline-block" onclick="delAtr(this)">删除</button></div>');
})
//   添加属性
var val= 0;
var newLength;//判断新添加的属性的个数
$(".gwt_qrbc").click(function () {//点击确认保存,收集填写的信息
    val++;
    var yiGeFenLei = {};
    yiGeFenLei.name = $(".gwt_flmc").val();//类别
    yiGeFenLei.shuXing = [];//属性
    var arr = $(".gwt_tjsx");
    newLength = arr.length;
    for (var a = 0; a < arr.length; a++) {
        yiGeFenLei.shuXing.push($(arr[a]).val());
    }
    $('#kind').append("<option value=" + val + ">" + $('.gwt_flmc').val() + "</option>");
    layui.use(['form', 'layedit', 'laydate'], function () {
        var form = layui.form()
            , layer = layui.layer
            , layedit = layui.layedit
            , laydate = layui.laydate;
        form.render("select"); //刷新select选择框渲染
    });
    arr1.push(yiGeFenLei);
    $('#kind+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
        var dd = $(this);
        var valu = $(this).attr('lay-value');
        newLength = arr1[valu].shuXing.length;
        $('.other div.layui-input-block').html("<div class='layui-input-block set'></div>");
        for (var i = 0; i < arr1[valu].shuXing.length; i++) {
            a = '<div class="firstRow"><span id="first-title'+i+'">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="" onchange="setkc(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <a href="javascript:;" onclick="addRow(this)">增加</a><input type="checkbox" class="deal" onchange="setkc(this)" style="display:inline-block" value="0" onchange="loadTable(this)" data_a=' + i + '>设置库存<div class="blank5"></div></div>';
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
    newLength = arr1[valu].shuXing.length;

    for (var i = 0; i < arr1[valu].shuXing.length; i++) {
        a = '<div><span id="first-title'+i+'">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="" onchange="setkc(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <a href="javascript:;" onclick="addRow(this)">增加</a><input type="checkbox" class="deal" onchange="setkc(this)" style="display:inline-block" value="0" data_a=' + i + '>设置库存<div class="blank5"></div></div>';
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
function addRow(obj) {
    changeHeight();
    var html = $(obj.parentNode).html();
    html = html.replace("addRow", "del");
    html = html.replace("增加", "删除");
    $("<div>"+html+"</div>").insertAfter($(obj.parentNode));
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
    var box = $(".deal:checked");
    if(!box.length>0){
        $(".set").html("");
        return;
    }
    var x= 1;//行数
    var y = 0;//列数
    var attr_data = -1;
    var attr_item_count = 0;//每组属性的个数
    var newArr = [];
    for(var i=0;i<box.length;i++){
        if($(box[i]).attr("data_a")!=attr_data){
            y++;
            attr_data = $(box[i]).attr("data_a");
            newArr.push(attr_data);
        }
        else {
            attr_item_count++;
        }
    }
    //计算行数
    for(var i = 0;i<newArr.length;i++){
        x = x * parseInt($("input[data_a="+newArr[i]+"]:checked").length);
    }
    var html = "<table class='layui-table'>";
    html+="<tr>";
    for(var j=0;j<newArr.length;j++){
        html+="<th>"+$("#first-title"+newArr[j]).html()+"</th>";
    }
    html+="<th>库存数</th>";
    html+="</tr>";
    for(var i=0;i<x;i++){
        html+="<tr>";
        for(var j=0;j<newArr.length;j++){
            html+="<td><select style='display: inline-block' onchange='check_same(this)'; data_a="+newArr[j]+"><option value=''>未选择</option>";
            //开始获取相应的选取值
            var cbo = $("input[data_a="+newArr[j]+"]:checked");
            for(var k=0;k<cbo.length;k++)
            {
                var cnt = $(cbo[k]).parent().find("*[data_a='"+newArr[j]+"']").val();
                html =  html + "<option value='"+cnt+"'";

                html = html + ">"+cnt+"</option>";
            }
            html+="</select></td>";
        }
        html+="<td><input type='text' class='textbox' style='width: 50px;' value='";
        html=html+"' /> <input type='hidden' name='stock_cfg[]' style='display:none' value='";
        html+="' /> </td>";
        html +="</tr>";
    }
    html += "</table>";
    $(".set").html(html);
}
//检查组合是否重复
function check_same(obj){
    var selectbox = $(obj).parent().parent().find("select");//获取一行select的个数
    var row_value = '';//用来存储同行select的option值
    for(var i=0;i<selectbox.length;i++)
    {
        if($(selectbox[i]).val()!='')
            row_value += $(selectbox[i]).val();
        else
        {
            $(obj).parent().parent().find("input").val("");
            return;
        }
    }
    //开始检测是否存在该配置
    var stock_cfg = $("input[name='stock_cfg[]']");
    for(i=0;i<stock_cfg.length;i++)
    {
        if(row_value==$(stock_cfg[i]).val()&&row_value!=''&&stock_cfg[i]!=obj)
        {
            alert("规格组合重复了");
            $(obj).parent().parent().find("input[name='stock_cfg[]']").val("");
            $(obj).val("");
            return;
        }
    }
    $(obj).parent().parent().find("input[name='stock_cfg[]']").val(row_value);
}