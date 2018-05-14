$( function() {
    $( '#cd-dropdown1' ).dropdown();
});
$.get("../class/js/classList.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(that){
    //渲染数据
    function renderDate(curr){
        if(!that){
            currData = attend.concat().splice(curr*nums-nums, nums);
        }else{
            currData = that.concat().splice(curr*nums-nums, nums);
        }
        var dataHtml = '';
        for(var i=0;i<currData.length;i++){
            dataHtml += '<tr>'
                +'<td>'+currData[i].id+'</td>'
                +'<td class="my_name1">'+currData[i].name+'</td>'
                +'<td class="my_name2" style="display: none">'+currData[i].name2+'</td>'
                +'<td>'+currData[i].class+'</td>'
                +'<td>'+currData[i].rTime+'</td>'
                +'<td>'+currData[i].lTime+'</td>'
                +'<td>'+currData[i].qTime+'</td>'
                +'<td>'+currData[i].fTime+'</td>'
                +'<td>'+currData[i].note+'</td>'
                +'<td class="operation">'+
                "<a class='query iconfont' id='"+currData[i].id+"' title='查看' data-toggle='modal' data-target='#myModal2'>&#xe62c;</a>"+
                "<a class='alter iconfont' id='"+currData[i].id+"' title='修改' data-toggle='modal' data-target='#myModal3'>&#xe608;</a>"+
                "<a class='delete iconfont' id='"+currData[i].id+"' title='删除' data-toggle='modal' data-target='#myModal'>&#xe61c;</a>"
                +'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    //分页
    nums = 10; //每页出现的数据量
    pages = Math.ceil(attend.length/nums);//页总数
    $(".links_content").html(renderDate(myclass));
    $(function(){
        var element = $('#pagination');
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            // currentPage: 1, //当前页数
            numberOfPages: attend.length, //每页页数
            totalPages: pages, //总页数
            // shouldShowPage:true,//是否显示该按钮
            itemTexts: function (type, page, current) {//设置显示的样式，默认是箭头
                switch (type) {
                    case "first":
                        return "首页";
                    case "prev":
                        return "上一页";
                    case "next":
                        return "下一页";
                    case "last":
                        return "末页";
                    case "page":
                        return page;
                }
            },
            //点击事件
            onPageClicked: function (event, originalEvent, type, page) {
                $(".links_content").html(renderDate(page));
            }
        };
        if (attend.length>10){
            element.bootstrapPaginator(options);
        } else {
            element.css("display","none")
        }
    });
}
/*查看*/
$('body').on('click','.query', function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    queryId=$(this).attr("id");
    for(var i=0;i<attend.length;i++){
        if(attend[i].id == queryId){
            $("#exampleInputName1").val(attend[i].id);
            if (my_seleteOp=="学生"){
                $("#exampleInputName2").val(attend[i].name);
            }
            if (my_seleteOp=="老师"){
                $("#exampleInputName2").val(attend[i].name2);
            }
            $("#exampleInputName3").val(attend[i].class);
            $("#exampleInputName4").val(attend[i].rTime);
            $("#exampleInputName5").val(attend[i].lTime);
            $("#exampleInputName6").val(attend[i].qTime);
            $("#exampleInputName7").val(attend[i].fTime);
            $("#exampleInputName8").val(attend[i].note);
        }
    }
});
/*修改*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    for(var i=0;i<attend.length;i++){
        if (attend[i].id==alterId){
            $("#exampleInputName11").val(attend[i].id);
            $("#exampleInputName12").val(attend[i].name);
            if (my_seleteOp=="学生"){
                $("#exampleInputName12").val(attend[i].name);
            }
            if (my_seleteOp=="老师"){
                $("#exampleInputName12").val(attend[i].name2);
            }
            $("#exampleInputName13").val(attend[i].class);
            $("#exampleInputName14").val(attend[i].rTime);
            $("#exampleInputName15").val(attend[i].lTime);
            $("#exampleInputName16").val(attend[i].qTime);
            $("#exampleInputName17").val(attend[i].fTime);
            $("#exampleInputName18").val(attend[i].note);
        }
    }
});
$('body').on('click','#btn_que2', function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    for(var i=0;i<attend.length;i++){
        if (attend[i].id==alterId){
            attend[i].id=$("#exampleInputName11").val();
            if (my_seleteOp=="学生"){
                attend[i].name=$("#exampleInputName12").val();
            }
            if (my_seleteOp=="老师"){
                attend[i].name2=$("#exampleInputName12").val();
            }
            attend[i].class=$("#exampleInputName13").val();
            attend[i].rTime=$("#exampleInputName14").val();
            attend[i].lTime=$("#exampleInputName15").val();
            attend[i].qTime=$("#exampleInputName16").val();
            attend[i].fTime=$("#exampleInputName17").val();
            attend[i].note=$("#exampleInputName18").val();
            linksList(attend);
        }
    }
    if (attend.length>10){
        $('#pagination').css("display","inline-block");
    } else {
        $('#pagination').css("display","none");
    }
});
//查询
$('body').on('click','#search_btn', function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    if (my_seleteOp=="学生"){
        $(".my_name1").css("display","inline-block");
        $(".my_name2").css("display","none");
    }
    if (my_seleteOp=="老师"){
        $(".my_name1").css("display","none");
        $(".my_name2").css("display","inline-block");
    }
});
/*删除*/
$('body').on('click','.delete', function () {
    deleteId=$(this).attr("id");
});
$('body').on('click','#btn_que', function () {
    for(var i=0;i<attend.length;i++){
        if(attend[i].id == deleteId){
            attend.splice(i,1);
            linksList(attend);
        }
    }
});