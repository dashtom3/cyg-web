/**
 * Created by Administrator on 2016/12/24.
 */
var arr1 = [{name:'����',shuXing:['ʱ��','����']}];
function addSomeThings(){
    $(".gwtAlert").show();//���������������ʾ
    $('.delSet').show();
    $(".other").hide();
}
//   �������
var val= 0;
$(".gwt_qrbc").click(function () {//���ȷ�ϱ���,�ռ���д����Ϣ
    val++;
    var yiGeFenLei = {};
    yiGeFenLei.name = $(".gwt_flmc").val();//���
    yiGeFenLei.shuXing = [];//����
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
        form.render(); //ˢ��selectѡ�����Ⱦ
    });
    arr1.push(yiGeFenLei);
    $('#kind+div.layui-unselect dl').on('click','dd',function(){
//        ��ȡʮ��ģ��;
        var dd = $(this);
        var valu = $(this).attr('lay-value');
//        $.each(dd,function(n,val) {
//            n��ʾ��ǰ���±�   val��ʾ��ǰԪ��
//                    <th class="nameTable">ʱ��</th> <th class="people">����</th>
        $('.other div.layui-input-block').html('<div class="layui-input-block set" style="display: none"> <table class="layui-table"> <tbody><tr>  <th class="kcs">�����</th> </tr> <tr><td class="sel"> <input type="text"> </td> </tr> </tbody></table> </div>');
        for (var i = 0; i < arr1[valu].shuXing.length; i++) {
            a = '<div class="firstRow"><span class="first-title">' + arr1[valu].shuXing[i] + '</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this,' + i + ');" data_a='+i+'> <span>�ݼӼ۸�</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>�ݼӽ����</span>��<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" class="add" onclick="addRow(this)" >����</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a='+i+'>���ÿ��<div class="blank5"></div></div>';
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
//    selectѡ������
$('#kind+div.layui-unselect dl').on('click','dd',function(){
//        ��ȡʮ��ģ��;
    var dd = $(this);
    var valu = $(this).attr('lay-value');
//        $.each(dd,function(n,val) {
//            n��ʾ��ǰ���±�   val��ʾ��ǰԪ��
//                    <th class="nameTable">ʱ��</th> <th class="people">����</th>
    $('.other div.layui-input-block').html('<div class="layui-input-block set" style="display: none"> <table class="layui-table"> <tbody><tr>  <th class="kcs">�����</th> </tr> <tr><td class="sel"> <input type="text"> </td> </tr> </tbody></table> </div>');
    for (var i = 0; i < arr1[valu].shuXing.length; i++) {
        a = '<div class="firstRow"><span class="first-title">' + arr1[valu].shuXing[i] + '</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this,' + i + ');" data_a='+i+'> <span>�ݼӼ۸�</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>�ݼӽ����</span>��<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" onclick="addRow(this)">����</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a=' + i + '>���ÿ��<div class="blank5"></div></div>';
        $('.other div.layui-input-block .set').before(a);
    }
    $('.other').show();
})
//ȡ����ť����
function delSomeThings(){
    $(".gwtAlert").hide();
    $(".del").hide();
}
//�ı�߶�
function changeHeight(){
    var h = $('.other .layui-input-block').height();
    $('.other label').height(h);
}
//   ������
function addRow(obj){
    changeHeight();
    var title = $(obj).siblings('.first-title').text();
    var data_a = $(obj).siblings("input[type=checkbox]").attr("data_a");
    var html = '<div class="firstRow"><span class="first-title">' + title + '</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr[17][]" value="" onchange="changeTime(this);"> <span>�ݼӼ۸�</span>��<input type="text" class="textbox" style="width:50px;" name="deal_attr_price[17][]" value=""> <span>�ݼӽ����</span>��<input type="text" class="textbox" style="width:50px;" name="deal_add_balance_price[17][]" value=""> <a href="javascript:;" onclick="del(this)">ɾ��</a><input type="checkbox" onchange="setkc(this)" style="display:inline-block" value="0"  data_a='+data_a+'>���ÿ��<div class="blank5"></div></div>';
    $(obj).parent().after(html);
}
//  ɾ����
function del(obj){
    changeHeight();
    $(obj).parent().remove();
}
//   ��������
$(".gwt_zjsx").click(function () {//�����������
    $(this).parent().before("<p class='sx'><input class='gwt_tjsx' type='text'><span class='gwt_del'>ɾ��</span></p>");
    $(".gwt_del").click(function () {//�������Ժ���ɾ��
        $(this).parent().remove();
    });
});
//   ���ÿ��
function setkc(obj){
    var val = $(obj).attr("value");
    var data_a = $(obj).attr("data_a");
    if(val==0){
        if($(".set table tr td select").index()==0){
            var data_A = $(".set table tr td select");//��ȡtable�µ�����select
            var now = $(".set table tr td select[data_a="+data_a+"]");//��ȡ��ǰΪdata_a��select
            //�жϵ�ǰ��select�Ƿ���ڣ����ڸ���һ�У�������׷��
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
        var now = $(".set table tr td select[data_a="+data_a+"]");//��ȡ��ǰΪdata_a��select
        if(now.length==1){
            data_a++;
            $(".set table tr :nth-child("+data_a+")").remove();
        }
        else{
            $(".set table tr:last-child").remove();
        }
    }
}
//�ı�����
function changeTime(obj){
    var data_a = $(obj).siblings("input[type=checkbox]").attr("data_a");
    $(".set table tr td select[data_a="+data_a+"]").append("<option value='"+obj.value+"'>"+obj.value+"</option>");
}