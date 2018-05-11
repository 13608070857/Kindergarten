var ifHeight = document.documentElement.clientHeight-89;
var my_tableDiv = document.getElementById("my_tableDiv");
my_tableDiv.style.height=ifHeight+"px";
$( function() {
    $( '#cd-dropdown1' ).dropdown();
    $( '#cd-dropdown2' ).dropdown();
});
$.get("js/classList.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(that){
    //渲染数据
    function renderDate(curr){
        if(!that){
            currData = myclass.concat().splice(curr*nums-nums, nums);
        }else{
            currData = that.concat().splice(curr*nums-nums, nums);
        }
        var dataHtml = '';
        for(var i=0;i<currData.length;i++){
            dataHtml += '<tr>'
                +'<td>'+currData[i].id+'</td>'
                +'<td>'+currData[i].c_name+'</a></td>'
                +'<td>'+currData[i].c_address+'</td>'
                +'<td>'+currData[i].c_num+'</td>'
                +'<td>'+currData[i].c_teacher+'</td>'
                +'<td class="operation">'+
                "<a class='query iconfont' id='"+currData[i].id+"' title='查看' data-toggle='modal' data-target='#myModal3'>&#xe62c;</a>"+
                "<a class='alter iconfont' id='"+currData[i].id+"' title='修改' data-toggle='modal' data-target='#myModal2'>&#xe608;</a>"+
                "<a class='delete iconfont' id='"+currData[i].id+"' title='删除' data-toggle='modal' data-target='#myModal'>&#xe61c;</a>"+
                "<a class='go_up iconfont' id='"+currData[i].id+"' title='升班' data-toggle='modal' data-target='#myModa4'>升班</a>"
                +'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    //分页
    nums = 10; //每页出现的数据量
    pages = Math.ceil(myclass.length/nums);//页总数
    $(".links_content").html(renderDate(myclass));
    $(function(){
        var element = $('#pagination');
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            // currentPage: 1, //当前页数
            numberOfPages: myclass.length, //每页页数
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
        if (myclass.length>10){
            element.bootstrapPaginator(options);
        } else {
            element.css("display","none")
        }
    });
}
/*查看*/
$('body').on('click','.query', function () {
    queryId=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == queryId){
            $("#exampleInputName1").val(myclass[i].id);
            $("#exampleInputName2").val(myclass[i].c_name);
            $("#exampleInputName3").val(myclass[i].c_num);
            $("#exampleInputName4").val(myclass[i].c_address);
            $("#exampleInputName5").val(myclass[i].c_teacher);
            $("#exampleInputName6").val(myclass[i].c_teacher2);
        }
    }
});
/*修改*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    for(var i=0;i<myclass.length;i++){
        if (myclass[i].id==alterId){
            $("#exampleInputName7").val(myclass[i].id);
            $("#exampleInputName8").val(myclass[i].c_name);
            $("#exampleInputName9").val(myclass[i].c_num);
            $("#exampleInputName10").val(myclass[i].c_address);
            $("#exampleInputName11").val(myclass[i].c_teacher);
            $("#exampleInputName12").val(myclass[i].c_teacher2);
        }
    }
});
$('body').on('click','#btn_que2', function () {
    for(var i=0;i<myclass.length;i++){
        if (myclass[i].id==alterId){
            myclass[i].c_name=$("#exampleInputName8").val();
            myclass[i].c_num=$("#exampleInputName9").val();
            myclass[i].c_address=$("#exampleInputName10").val();
            myclass[i].c_teacher=$("#exampleInputName11").val();
            myclass[i].c_teacher2=$("#exampleInputName12").val();
            linksList(myclass);
        }
    }
});
/*删除*/
$('body').on('click','.delete', function () {
    deleteId=$(this).attr("id");
});
$('body').on('click','#btn_que', function () {
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == deleteId){
            myclass.splice(i,1);
            linksList(myclass);
        }
    }
});
/*班级提升*/
$('body').on('click','.go_up', function () {
    go_upId=$(this).attr("id");
});
$('body').on('click','#btn_que4', function () {
    for(var i=0;i<myclass.length;i++){
        if(myclass[i].id == go_upId){
            if (myclass[i].c_address=="大班"){
                myclass[i].c_address="已毕业";
            }
            if (myclass[i].c_address=="中班"){
                myclass[i].c_address="大班";
            }
            if (myclass[i].c_address=="小班"){
                myclass[i].c_address="中班";
            }
            linksList(myclass);
        }
    }
});
//查询
$('body').on('click','#search_btn', function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;
    }
    var newArry=[];
    for (var i=0;i<myclass.length;i++){
        if (myclass[i].c_name==my_seleteOp){
            newArry.push(myclass[i]);
        }
        if (newArry.indexOf({c_name:my_seleteOp})==-1){
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
$('body').on('click','#btn_que5', function () {
    idNum=idNum+1;
    myclass.id="c_0"+(myclass.length+idNum);
    myclass.c_name=$("#exampleInputName88").val();
    myclass.c_num=$("#exampleInputName99").val();
    myclass.c_address=$("#exampleInputName100").val();
    myclass.c_teacher=$("#exampleInputName111").val();
    myclass.c_teacher2=$("#exampleInputName122").val();
    addList='{"id":"'+ myclass.id +'",';
    addList+= '"c_name":"'+ myclass.c_name +'",';
    addList+= '"c_num":"'+ myclass.c_num +'",';
    addList+= '"c_address":"'+ myclass.c_address +'",';
    addList+= '"c_teacher":"'+ myclass.c_teacher +'",';
    addList += '"c_teacher2":"'+ myclass.c_teacher2 +'"}';
    myclass.push(JSON.parse(addList));
    linksList(myclass);
});