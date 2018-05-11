/**
 * Created by Administrator on 2018/5/8/008.
 */
var Photo=$(".Photo");
var yd=$(".yb");
yd.click(function () {
    Photo.css({
        "display":"none"
    });
});
//删除
var queren=$("#queren");
// var hArr=[];
$("body").on("click",".Photo",function () {
    h=$(this);
    // hArr.push(h);

});
$("body").on("click","#queren",function () {
    // for(var i=0;i<hArr.length;i++){
    //     hArr.splice(i,1)
    //         console.log(hArr)
    // }

    h.css("display","none")
});
//添加
var f_Tj=$("#f_Tj");
var tj=document.getElementById("f_j");
var fz=$("#f_Photo4");
var xc=document.getElementById("f_xc");
var div;
var div2;
var img;
var p1;
var p2;
var p3;
var input1;
var input2;
var d=new Date();
var mz=document.getElementsByClassName("mz")[0];
f_Tj.click(function () {
    div=document.createElement("div");
    div2=document.createElement("div");
    img=document.createElement("img");
    p1=document.createElement("p");
    var text1=document.createTextNode(mz.value);
    var text2=document.createTextNode("创建人:林家辉");
    var text3=document.createTextNode(d.toLocaleString());
    p2=document.createElement("p");
    p3=document.createElement("p");
    input1=document.createElement("input");
    input2=document.createElement("input");
    div.appendChild(img);
    div.appendChild(div2);
    p1.appendChild(text1);
    p2.appendChild(text2);
    p3.appendChild(text3);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(input1);
    div2.appendChild(input2);
    xc.insertBefore(div,tj);
    setAttr();
});
function setAttr() {
    div.setAttribute("class","Photo");
    div.setAttribute("id","f_Photo5");
    img.setAttribute("src","imgs/tubiao.jpg");
    img.setAttribute("alt","");
    div2.setAttribute("class","Tc");
    input1.setAttribute("class","btn btn-default but");
    input1.setAttribute("onclick","location.href='f_empty album.html'");
    input2.setAttribute("class","btn btn-default but");
    input1.setAttribute("type","button");
    input2.setAttribute("type","button");
    input1.setAttribute("value","查看相册");
    input2.setAttribute("value","删除相册");
    input2.setAttribute("data-toggle","modal");
    input2.setAttribute("data-target","#myModal");
}
