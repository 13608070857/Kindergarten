$.get("js/workDuty.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
var dataHtml = '';
function linksList(that){
    //渲染数据
    function renderDate(curr){
        
        if(!that){
            currData = duties.concat().splice(curr*nums-nums, nums);
        }else{
            currData = that.concat().splice(curr*nums-nums, nums);
        }
        for(var i=0;i<currData.length;i++){
            dataHtml += '<tr>'
                +'<td>'+currData[i].id+'</td>'
                +'<td>'+currData[i].w_name+'</a></td>'
                +'<td>'+currData[i].w_describe+'</td>'
                +'<td>'+currData[i].w_num+'</td>'
                +'<td>'+currData[i].w_admin+'</td>'
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
    pages = Math.ceil(duties.length/nums);//页总数
    $(".links_content").html(renderDate(duties));
    $(function(){
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            currentPage: 1, //当前页数
            numberOfPages: duties.length, //每页页数
            totalPages: pages, //总页数
        };
    });
}
/*查看*/
$('body').on('click','.query', function () {
    queryId=$(this).attr("id");
    for(var i=0;i<duties.length;i++){
        if(duties[i].id == queryId){
            $("#exampleInputName1").val(duties[i].id);
            $("#exampleInputName2").val(duties[i].w_name);
            $("#exampleInputName3").val(duties[i].w_describe);
            $("#exampleInputName4").val(duties[i].w_num);
            $("#exampleInputName5").val(duties[i].w_admin);
        }
    }
});
/*修改*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    for(var i=0;i<duties.length;i++){
        if (duties[i].id==alterId){
            // console.log(duties[i])
            $("#exampleInputName6").val(duties[i].id);
            $("#exampleInputName7").val(duties[i].w_name);
            $("#exampleInputName8").val(duties[i].w_describe);
            $("#exampleInputName9").val(duties[i].w_num);
            $("#exampleInputName10").val(duties[i].w_admin);
        }
    }
});
$('body').on('click','#btn_que2', function () {
    for(var i=0;i<duties.length;i++){
        if (duties[i].id==alterId){
            $("#exampleInputName6").val(duties[i].id);
            $("#exampleInputName7").val(duties[i].w_name);
            $("#exampleInputName8").val(duties[i].w_describe);
            $("#exampleInputName9").val(duties[i].w_num);
            $("#exampleInputName10").val(duties[i].w_admin);
            linksList(duties);
        }
    }
});
/*删除*/
$('body').on('click','.delete', function () {
    deleteD = $(this);
    deleteId = $(this).attr("id");
    deleteIndex = deleteD.parent().parent().index();
});
$('body').on('click','#btn_que', function () {
    if(duties[deleteIndex].w_num > 0) {
        alert("您部门还有人，不能删除!!!");
    }else {
        for(var i=0;i<duties.length;i++){
            if(duties[i].id == deleteId){
                duties.splice(i,1);
                linksList(duties);
                alert("删除成功！！！");
            }
        }
    }
    
});

// 查询
$(".my_btn").click(function() {
    for(var i=0;i<duties.length;i++) {
        if(duties[i].w_name == $(".cd-dropdown>span>span").get(0).innerHTML) {
            for(var j=0;j<$(dataHtml).length;j++) {
                if(duties[i].id == $($(dataHtml)[j]).children().html()) {
                    $(".links_content").empty();
                    $(".links_content").append($(dataHtml)[j]);
                }
            }
            
        }
    }
})