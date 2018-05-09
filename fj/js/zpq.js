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
})