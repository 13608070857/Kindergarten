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
                "<a class='query iconfont'>&#xe62c;</a>"+
                "<a class='alter iconfont'>&#xe608;</a>"+
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
$('#myModal').on('click','#btn_que', function () {
    console.log()
    for(var i=0;i<myclass.length;i++){
        console.log($(".delete").attr("id"));
        if(myclass[i].id == $(".delete").attr("id")){
            myclass.splice(i,1);
            linksList(myclass);
        }
    }
});