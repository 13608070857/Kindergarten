$.get("js/classList.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(that){
    //渲染数据
    function renderDate(curr){
        var dataHtml = '';
        if(!that){
            currData = myclass.concat().splice(curr*nums-nums, nums);
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
    pages = Math.ceil(myclass.length/nums);//页总数
    $(".links_content").html(renderDate(myclass));
    $(function(){
        var element = $('#pagination');
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            currentPage: 1, //当前页数
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
        element.bootstrapPaginator(options);
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