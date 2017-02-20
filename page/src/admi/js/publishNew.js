/**
 * Created by guanw on 2016/12/29.
 */
//选择分类
var dataChilds = [
    {kinds:['咖啡','东北菜','川菜','面包','烧烤','西餐']},
    {kinds:['KTV','自助游','水上世界']},
    {kinds:['婚纱摄影','个性写真']}
];
//    select选择属性
$('#kinds+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
    var dd = $(this);
    var valu = $(this).attr('lay-value');
    $('.kindsChilrens div.layui-input-block').text("");
    for (var i = 0; i < dataChilds[valu].kinds.length; i++) {
        htmlKindChilds='<input type="checkbox" title="'+dataChilds[valu].kinds[i]+'">';
        $('.kindsChilrens div.layui-input-block').append(htmlKindChilds);
        layui.use(['form', 'layedit', 'laydate'], function () {
            var form = layui.form()
                , layer = layui.layer
                , layedit = layui.layedit
                , laydate = layui.laydate;
            form.render("checkbox"); //刷新checkbox渲染
        });
    }
    $('.kindsChilrens').show();
})

function addKinds(){
    $(".otherContent").show();
}
$(".addAtr").click(function(){
    $(this).before('<div style="margin-bottom: 5px;margin-left: 40px"><input class="shuxing layui-input sxVal" type="text" style="width: 200px;display: inline-block">&nbsp;<button class="layui-btn layui-btn-small layui-btn-danger" style="display: inline-block" onclick="delAtr(this)">删除</button></div>');
})
//删除属性
function delAtr(obj){
    $(obj).parent().remove();
}
//关闭
var close;
$(".closeAdd").click(close=function(){
    $(".otherContent").hide();
})
//   添加属性
var val= 0;
var arr1 = [{name:'餐饮',shuXing:['时段','人数']}];//用来存放新添加的属性
$(".keep").click(function () {//点击确认保存,收集填写的信息
    val++;
    var yiGeFenLei = {};
    yiGeFenLei.name = $(".kindsName").val();//得到分类的名称
    yiGeFenLei.shuXing = [];//属性
    var arr = $(".sxVal");//用来存放新添加的属性
    if(yiGeFenLei.name==""){
        alert("请输入分类名称")
    }else if(arr.val()==""){
        alert("请至少输入一种属性");
    }else {
        for (var a = 0; a < arr.length; a++) {
            yiGeFenLei.shuXing.push($(arr[a]).val());
        }
        $('#kind').append("<option value=" + val + ">" + $('.kindsName').val() + "</option>");
        layui.use(['form', 'layedit', 'laydate'], function () {
            var form = layui.form()
            form.render("select"); //刷新select选择框渲染
        });
        arr1.push(yiGeFenLei);
//
        $('#kind+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
            var dd = $(this);
            var valu = $(this).attr('lay-value');
            $('.other div.layui-input-block').html("<div class='layui-input-block set'></div>");
            for (var i = 0; i < arr1[valu].shuXing.length; i++) {
                a = '<div class="firstRow"><span id="first-title'+i+'">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="" onchange="setkc(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> &nbsp;&nbsp;<a href="javascript:;" onclick="addRow(this)">[ + ]</a> &nbsp;&nbsp;<input type="checkbox" class="deal" onchange="setkc(this)" style="display:inline-block" value="0" onchange="loadTable(this)" data_a=' + i + '>设置库存<div class="blank5"></div></div>';
                $('.other div.layui-input-block .set').before(a);
            }
            $('.other').show();
            changeHeight();
        });
    close();
    }
});
//刚开始选择餐饮的时候
var arr1 = [{name:'餐饮',shuXing:['时段','人数']}];
$('#kind+div.layui-unselect dl').on('click','dd',function(){
    var dd = $(this);
    var valu = $(this).attr('lay-value');
    newLength = arr1[valu].shuXing.length;
    $('.other div.layui-input-block').html("<div class='layui-input-block set'></div>");
    for (var i = 0; i < arr1[valu].shuXing.length; i++) {
        a = '<div class="firstRow"><span id="first-title'+i+'">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="" onchange="setkc(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="">&nbsp;&nbsp;<a href="javascript:;" onclick="addRow(this)">[ + ]</a>&nbsp;&nbsp;<input type="checkbox" class="deal" onchange="setkc(this)" style="display:inline-block" value="0" onchange="loadTable(this)" data_a=' + i + '>设置库存<div class="blank5"></div></div>';
        $('.other div.layui-input-block .set').before(a);
    }
    $('.other').show();
})

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
    html = html.replace("+", "-");
    $("<div>"+html+"</div>").insertAfter($(obj.parentNode));
}

//  删除行
function del(obj){
    changeHeight();
    $(obj).parent().remove();
}

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