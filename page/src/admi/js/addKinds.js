/**
 * Created by guanw on 2016/12/29.
 */
    //增加属性
$(".addAtr").click(function(){
    $(this).before('<div style="margin-bottom: 5px"><input class="shuxing layui-input sxVal" type="text" style="width: 150px;display: inline-block">&nbsp;<button class="layui-btn layui-btn-small layui-btn-danger" style="display: inline-block" onclick="delAtr(this)">删除</button></div>');
})
//删除属性
function delAtr(obj){
    $(obj).parent().remove();
}
var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
//   添加属性
var arr1 = [{name:'餐饮',shuXing:['时段','人数']}];//用来存放新添加的属性
var val = arr1.length;//判断新添加的属性是第几个
$(".keep").click(function () {//点击确认保存,收集填写的信息
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
        parent.$('#kind').append("<option value=" + val + ">" + $('.kindsName').val() + "</option>");
        layui.use(['form', 'layedit', 'laydate'], function () {
            var form = parent.layui.form()
            form.render("select"); //刷新select选择框渲染
        });
        arr1.push(yiGeFenLei);
//        parent.layer.close(index);
        parent.$(".layer-anim").hide();
        parent.$(".layui-layer-shade").hide();
        parent.$('#kind+div.layui-unselect dl').on('click','dd',function(){
//        获取十大模块;
            var dd = $(this);
            var valu = $(this).attr('lay-value');
            parent.$('.other div.layui-input-block').html("<div class='layui-input-block set'></div>");
            for (var i = 0; i < arr1[valu].shuXing.length; i++) {
                a = '<div class="firstRow"><span id="first-title'+i+'">' + arr1[valu].shuXing[i] + '</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value="" onchange="setkc(this);"> <span>递加价格</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> <span>递加结算价</span>：<input type="text" class="textbox" style="width:50px;" data_a="'+i+'" value=""> &nbsp;&nbsp;<a href="javascript:;" onclick="addRow(this)">[ + ]</a> &nbsp;&nbsp;<input type="checkbox" class="deal" onchange="setkc(this)" style="display:inline-block" value="0" onchange="loadTable(this)" data_a=' + i + '>设置库存<div class="blank5"></div></div>';
                parent.$('.other div.layui-input-block .set').before(a);
            }
            parent.$('.other').show();
        })
    }
});