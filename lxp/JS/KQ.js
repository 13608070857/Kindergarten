/**
 * Created by 奈何丶 on 2018/5/8.
 */
var A=document.getElementById("A");
var B=document.getElementById("B");
var myOnk1=document.getElementById("myOnclick1");
var myOnk2=document.getElementById("myOnclick2");
function myOnclick1() {
    A.style.display="block";
    B.style.display="none";
    myOnk1.style.background="#4EC88E";
    myOnk2.style.background="rgba(168, 168, 168, 0.91)"
    linksList();
}
function myOnclick2() {
    B.style.display="block";
    A.style.display="none";
    myOnk2.style.background="#4EC88E";
    myOnk1.style.background="rgba(168, 168, 168, 0.91)"
    linksListL();
}
//--------------------------老师---------------------
$.get("js/myClass.js",function (data,status) {
    //执行加载数据的方法
    linksListL();
});
function linksListL(){
    //渲染数据
    function renderDate(){
        var dataHtml = '';
        for(var i=0;i<myclass.length;i++){
            dataHtml += '<tr>'
                +'<td>'+myclass[i].id+'</td>'
                +'<td>'+myclass[i].c_teacher+'</a></td>'
                +'<td>'+myclass[i].c_March+'</td>'
                +'<td>'+myclass[i].c_timeR+'</td>'
                +'<td>'+myclass[i].c_timeX+'</td>'
                +'<td class="operation">'+
                "<a class='query1 iconfont' id='"+myclass[i].id+"'  title='查看' data-toggle='modal' data-target='#myModal3'>&#xe62c;</a>"+
                "<a class='alter1 iconfont'  id='"+myclass[i].id+"'  title='修改' data-toggle='modal' data-target='#myModal2'>&#xe608;</a>"+
                "<a class='delete iconfont'  title='删除' data-toggle='modal' data-target='#myModa1'>&#xe61c;</a>"
                + '</td>'
                +'<td>'+myclass[i].c_Option+'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    $(".links_content").html(renderDate());
}
/*老师查看*/
$('body').on('click','.query1', function () {
    queryId1=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == queryId1){
            $("#exampleInputName11").val(myclass[i].id);
            $("#exampleInputName12").val(myclass[i].c_teacher);
            $("#exampleInputName13").val(myclass[i].c_sex);
            $("#exampleInputName14").val(myclass[i].c_school);
            $("#exampleInputName15").val(myclass[i].c_timeR);
            $("#exampleInputName16").val(myclass[i].c_timeX);
            $("#exampleInputName17").val(myclass[i].c_OptionTimeL);
            $("#exampleInputName18").val(myclass[i].c_OptionYL);
        }
    }
});
/*老师编辑*/
$('body').on('click','.alter1', function () {
    alterId1=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == alterId1){
            $("#exampleInputName51").val(myclass[i].id);
            $("#exampleInputName52").val(myclass[i].c_teacher);
            $("#exampleInputName53").val(myclass[i].c_sex);
            $("#exampleInputName54").val(myclass[i].c_school);
            $("#exampleInputName55").val(myclass[i].c_timeR);
            $("#exampleInputName56").val(myclass[i].c_timeX);
            $("#exampleInputName57").val(myclass[i].c_OptionTimeL);
            $("#exampleInputName58").val(myclass[i].c_OptionYL);
        }
    }
});
//--------------------------学生---------------------
$.get("js/myClass.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(){
    //渲染数据
    function renderDate(){
        var dataHtml = '';
        for(var i=0;i<myclass.length;i++){
            dataHtml += '<tr>'
                +'<td>'+myclass[i].c_name+'</a></td>'
                +'<td>'+myclass[i].c_nameL+'</a></td>'
                +'<td>'+myclass[i].c_teacher+'</td>'
                +'<td>'+myclass[i].c_address+'</td>'
                +'<td>'+myclass[i].c_timeR+'</td>'
                +'<td>'+myclass[i].c_timeL+'</td>'
                +'<td class="operation">'+
                "<a class='query iconfont' title='查看' id='"+myclass[i].id+"' data-toggle='modal' data-target='#myModal'>&#xe62c;</a>"+
                "<a class='alter iconfont'  title='修改' id='"+myclass[i].id+"' data-toggle='modal' data-target='#myModa2'>&#xe608;</a>"+
                "<a class='delete iconfont'  title='删除' data-toggle='modal' data-target='#myModa3'>&#xe61c;</a>"
                + '</td>'
                +'<td>'+myclass[i].c_OptionX+'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    $(".links_content").html(renderDate());
}
/*学生查看*/
$('body').on('click','.query', function () {
    queryId=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == queryId){
            $("#exampleInputName1").val(myclass[i].c_name);
            $("#exampleInputName2").val(myclass[i].c_nameL);
            $("#exampleInputName3").val(myclass[i].c_num);
            $("#exampleInputName4").val(myclass[i].c_address);
            $("#exampleInputName5").val(myclass[i].c_student);
            $("#exampleInputName6").val(myclass[i].c_sex);
            $("#exampleInputName7").val(myclass[i].c_teacher);
            $("#exampleInputName8").val(myclass[i].c_teacher1);
            $("#exampleInputName9").val(myclass[i].c_OptionTime);
            $("#exampleInputName10").val(myclass[i].c_OptionY);
        }
    }
});
/*学生编辑*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == alterId){
            $("#exampleInputName31").val(myclass[i].c_name);
            $("#exampleInputName32").val(myclass[i].c_nameL);
            $("#exampleInputName33").val(myclass[i].c_num);
            $("#exampleInputName34").val(myclass[i].c_address);
            $("#exampleInputName35").val(myclass[i].c_student);
            $("#exampleInputName36").val(myclass[i].c_sex);
            $("#exampleInputName37").val(myclass[i].c_teacher);
            $("#exampleInputName38").val(myclass[i].c_teacher1);
            $("#exampleInputName39").val(myclass[i].c_OptionTime);
            $("#exampleInputName40").val(myclass[i].c_OptionY);
        }
    }
});

//--------------------------时间---------------------
window.onload=function(){
    getTime();
};
function getTime(){
    var date = new Date();
    var hours =formatTime(date.getHours());
    var minutes = formatTime(date.getMinutes());
    var seconds = formatTime(date.getSeconds());
    var $time = document.getElementById('time');
    $time.innerHTML=hours +"<img src='images/hm.png' style='margin:0 10px;' width='10' height='20'/>"+ minutes+"<img style='margin:0 10px;'  src='images/ms.png' width='10' height='20'/>"+ seconds;

    setTimeout("getTime()",500);

}
function formatTime(i){
    if(i<10&&i==1){
        i=  "<img src='images/0.png' width='10' height='20'/>"+"<img src='images/1.png' width='10' height='20'/>";
    }else if(i<10&&i!=1){
        i= "<img src='images/0.png' width='10' height='20'/>" + "<img src='images/"+i+".png' width='10' height='20'/>";
    }else{

        var j= i.toString().charAt(0);
        var z =i.toString().charAt(1);
        if(j<10 && z<10&&j!=1&&z!=1){
            i = "<img src='images/"+j+".png' width='10' height='20'/>" + "<img src='images/"+z+".png' width='10' height='20'/>";
        }else if(j<10 && z<10&&j==1&&z!=1){

            i = "<img src='images/1.png' width='10' height='20'/>" + "<img src='images/"+z+".png' width='10' height='20'/>";

        }else if(j<10 && z<10&&z==1&&j!=1){
            i =  "<img src='images/"+j+".png' width='10' height='20'/>"+"<img src='images/1.png' width='10' height='20'/>";

        }else if(j<10 && z<10&&(j==1&&z==1)){
            i="<img src='images/1.png' width='10' height='20'/>"+"<img src='images/1.png' width='10' height='20'/>";
        }
    }
    return i;
}
