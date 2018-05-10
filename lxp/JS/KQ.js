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
                +'<td>'+"查看"+'</td>'
                +'<td>'+"<input>"+'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    $(".links_content").html(renderDate());
}
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
                +'<td>'+"查看"+'</td>'
                +'<td>'+"<input>"+'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    $(".links_content").html(renderDate());
}


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