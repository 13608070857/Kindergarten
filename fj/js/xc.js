/**
 * Created by Administrator on 2018/5/10/010.
 */
$(function () {

    imgZoomInit()//模块初始化
})


/*
 * 图片放大展示
 */
function imgZoomInit(){
    $('.piclist li.pic').append(function(){
        ht = $(this).find('.in').html();
        return "<div class='original'>"+ht+"</div>";
    });

    $(".piclist li.pic .in img").each(function(i){
        var img = $(this);
        var realWidth ;//原始宽度
        var realHeight ;//原始高度
        var vs ;//图片宽高比

        realWidth = this.width;
        realHeight = this.height;
        vs = realWidth/realHeight;

        //缩略图比例230:142(约等于1.62)
        if(vs>=1.62){//横图则固定高度
            $(img).css("width","auto").css("height","142px").css("marginLeft",115-(71*realWidth/realHeight)+"px");
        }
        else{//竖图则固定宽度
            $(img).css("width","230px").css("height","auto").css("marginTop",71-(115*realHeight/realWidth)+"px");
        }

        //图片放大水平垂直居中显示
        if(vs>=1){//横图或正方形
            $(img).parent().parent().parent().find('.original img').height(260);
            $(img).parent().parent().parent().find('.original img').width('auto');
            $(img).parent().parent().parent().find('.original').css({
                //此处需结合实际情况计算 左偏移：.original实际宽度的二分之一
                marginLeft: function(){
                    return -(130*realWidth/realHeight)-6;
                },
                left:'50%'
            })
        }else{//竖图
            $(img).parent().parent().parent().find('.original img').width(260);
            $(img).parent().parent().parent().find('.original img').height('auto');
            $(img).parent().parent().parent().find('.original').css({
                //此处需结合实际情况计算 上偏移：.original实际高度的二分之一
                marginTop: function(){
                    return -(130*realHeight/realWidth)-36;
                },
                top:'50%'
            });
            $(img).parent().parent().parent().find('.original b').css('display','block')
        }
    });


    $('.piclist li.pic').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });

    $(".piclist ul li:nth-child(4n)").addClass('r');
}
//删除
var queren=$("#queren");
// var hArr=[];
$("body").on("click",".pic",function () {
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
var f_photo=document.getElementById("f_photo");
var picc=document.getElementById("picc");
var li;
var div;
var div2;
var input;
var span;
var b;
var p;
var mz=document.getElementsByClassName("mz")[0];
var d=new Date();
var img;
f_Tj.click(function () {
    li=document.createElement("li");
    div=document.createElement("div");
    div2=document.createElement("div");
    img=document.createElement("img");
    input=document.createElement("input");
    span=document.createElement("span");
    b=document.createElement("b");
    p=document.createElement("p");
    var text=document.createTextNode(mz.value);
    var text2=document.createTextNode(d.toLocaleString());
    li.appendChild(div);
    div.appendChild(div2);
    div.appendChild(span);
    span.appendChild(b);
    b.appendChild(text);
    span.appendChild(p);
    p.appendChild(text2);
    div2.appendChild(img);
    div2.appendChild(input);
    f_photo.insertBefore(li,picc);
    setAttr();
});
function setAttr() {
    li.setAttribute("class","pic");
    li.setAttribute("id","f_Photo7");
    div.setAttribute("class","in");
    div2.setAttribute("class","imgdiv");
    input.setAttribute("type","button");
    input.setAttribute("class","btn");
    input.setAttribute("class","btn-default");
    input.setAttribute("data-toggle","modal");
    input.setAttribute("data-target","#Moda");
    input.setAttribute("value","删除");
    img.setAttribute("src","imgs/xc111.jpg");
    img.setAttribute("alt","");
    img.setAttribute("width","400px");
    img.setAttribute("height","300px");
    var realWidth ;//原始宽度
    var realHeight ;//原始高度
    var vs ;//图片宽高比
    realWidth = this.width;
    realHeight = this.height;
    vs = realWidth/realHeight;
    if(vs>=1.62) {
        img.setAttribute("style", "width:auto; height:142; margin-top:115-(71*realWidth/realHeight)+'px'");
    }
    else {
        img.setAttribute("style", "width:230; height:auto; margin-top:71-(115*realHeight/realWidth)+'px'");
    }
    console.log(mg.value);
    imgZoomInit()
}
function myBack() {
    history.back();
}