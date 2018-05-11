var ifHeight = document.documentElement.clientHeight;
var my_tableDiv = document.getElementById("my_tableDiv");
my_tableDiv.style.height=ifHeight+"px";
$.get("../../ycl/class/js/classList.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(that){
    //渲染数据
    function renderDate(curr){
        var dataHtml = '';
        if(!that){
            currData = myTeacher.concat().splice(curr*nums-nums, nums);
        }else{
            currData = that.concat().splice(curr*nums-nums, nums);
        }
        for(var i=0;i<currData.length;i++){
            dataHtml += '<tr>'
                +'<td>'+currData[i].id+'</td>'
                +'<td>'+currData[i].c_name+'</a></td>'
                +'<td>'+currData[i].c_num+'</td>'
                +'<td>'+currData[i].c_teacher+'</td>'
                +'<td>'+currData[i].c_address+'</td>'
                +'<td class="operation">'+
                "<a class='query iconfont' id='"+currData[i].id+"' data-toggle='modal' data-target='#myModal3'>&#xe62c;</a>"+
                "<a class='alter iconfont' id='"+currData[i].id+"' data-toggle='modal' data-target='#myModal2'>&#xe608;</a>"+
                "<a class='delete iconfont' id='"+currData[i].id+"' data-toggle='modal' data-target='#myModal'>&#xe61c;</a>"
                +'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    //分页
    nums = 5; //每页出现的数据量
    pages = Math.ceil(myTeacher.length/nums);//页总数
    $(".links_content").html(renderDate(myTeacher));
    $(function(){
        var element = $('#pagination');
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            currentPage: 1, //当前页数
            numberOfPages: myTeacher.length, //每页页数
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
        if (myTeacher.length>5){
            element.bootstrapPaginator(options);
        } else {
            element.css("display","none")
        }
    });
}
/*查看*/
$('body').on('click','.query', function () {
    queryId=$(this).attr("id");
    for(var i=0;i<myTeacher.length;i++){
        if(myTeacher[i].id == queryId){
            $("#exampleInputName1").val(myTeacher[i].id);
            $("#exampleInputName2").val(myTeacher[i].c_name);
            $("#exampleInputName3").val(myTeacher[i].c_num);
            $("#exampleInputName4").val(myTeacher[i].c_address);
            $("#exampleInputName5").val(myTeacher[i].c_teacher);
            $("#exampleInputName6").val(myTeacher[i].c_teacher2);
        }
    }
});
/*修改*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    for(var i=0;i<myTeacher.length;i++){
        if (myTeacher[i].id==alterId){
            $("#exampleInputName7").val(myTeacher[i].id);
            $("#exampleInputName8").val(myTeacher[i].c_name);
            $("#exampleInputName9").val(myTeacher[i].c_num);
            $("#exampleInputName10").val(myTeacher[i].c_address);
            $("#exampleInputName11").val(myTeacher[i].c_teacher);
            $("#exampleInputName12").val(myTeacher[i].c_teacher2);
        }
    }
});
$('body').on('click','#btn_que2', function () {
    for(var i=0;i<myTeacher.length;i++){
        if (myTeacher[i].id==alterId){
            myTeacher[i].c_name=$("#exampleInputName8").val();
            myTeacher[i].c_num=$("#exampleInputName9").val();
            myTeacher[i].c_address=$("#exampleInputName10").val();
            myTeacher[i].c_teacher=$("#exampleInputName11").val();
            myTeacher[i].c_teacher2=$("#exampleInputName12").val();
            linksList(myTeacher);
        }
    }
    if (myTeacher.length>5){
        $('#pagination').css("display","inline-block");
    } else {
        $('#pagination').css("display","none");
    }
});
/*添加*/

/*删除*/
$('body').on('click','.delete', function () {
    deleteId=$(this).attr("id");
});
$('body').on('click','#btn_que', function () {
    for(var i=0;i<myTeacher.length;i++){
        if(myTeacher[i].id == deleteId){
            myTeacher.splice(i,1);
            linksList(myTeacher);
        }
    }
});
/*查询*/
$("#search_btn").click(function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    var newArry=[];
    for (var i=0;i<myTeacher.length;i++){
        if (myTeacher[i].c_teacher==my_seleteOp){
            newArry.push(myTeacher[i]);
        }
        if (newArry.indexOf({c_teacher:my_seleteOp})==-1){
            linksList(newArry)
        }
    }
    if (newArry.length>10){
        $('#pagination').css("display","block");
    } else {
        $('#pagination').css("display","none");
    }
});
//添加
var idNum=0;
var addList;
$('body').on('click','#btn_que4', function () {
    idNum=idNum+1;
    myTeacher.id="c_0"+(myTeacher.length+idNum);
    myTeacher.c_name=$("#exampleInputName13").val();
    myTeacher.c_num=$("#exampleInputName14").val();
    myTeacher.c_address=$("#exampleInputName15").val();
    myTeacher.c_teacher=$("#exampleInputName16").val();
    addList='{"id":"'+ myTeacher.id +'",';
    addList+= '"c_name":"'+ myTeacher.c_name +'",';
    addList+= '"c_num":"'+ myTeacher.c_num +'",';
    addList+= '"c_address":"'+ myTeacher.c_address +'",';
    addList += '"c_teacher":"'+ myTeacher.c_teacher +'"}';
    myTeacher.push(JSON.parse(addList));
    linksList(myTeacher);
});