var ifHeight = document.documentElement.clientHeight;
var my_tableDiv = document.getElementById("my_tableDiv");
my_tableDiv.style.height=ifHeight+"px";
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
            currData = my_stuList.concat().splice(curr*nums-nums, nums);
        }else{
            currData = that.concat().splice(curr*nums-nums, nums);
        }
        var dataHtml = '';
        for(var i=0;i<currData.length;i++){
            dataHtml += '<tr>'
                +'<td>'+currData[i].id+'</td>'
                +'<td>'+currData[i].s_name+'</a></td>'
                +'<td>'+currData[i].s_sex+'</td>'
                +'<td>'+currData[i].s_class+'</td>'
                +'<td>'+currData[i].s_state+'</td>'
                +'<td class="operation">'+
                "<a class='query iconfont' id='"+currData[i].id+"' title='查看' data-toggle='modal' data-target='#myModal3'>&#xe62c;</a>"+
                "<a class='alter iconfont' id='"+currData[i].id+"' title='修改' data-toggle='modal' data-target='#myModal2'>&#xe608;</a>"+
                "<a class='delete iconfont' id='"+currData[i].id+"' title='删除' data-toggle='modal' data-target='#myModal'>&#xe61c;</a>"
                +'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    //分页
    nums = 10; //每页出现的数据量
    pages = Math.ceil(my_stuList.length/nums);//页总数
    $(".links_content").html(renderDate(my_stuList));
    $(function(){
        var element = $('#pagination');
        options = {
            bootstrapMajorVersion:3, //对应的bootstrap版本
            // currentPage: 1, //当前页数
            numberOfPages: my_stuList.length, //每页页数
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
        if (my_stuList.length>10){
            element.bootstrapPaginator(options);
        } else {
            element.css("display","none")
        }
    });
}
/*查看*/
$('body').on('click','.query', function () {
    queryId=$(this).attr("id");
    for(var i=0;i<my_stuList.length;i++){
        if(my_stuList[i].id == queryId){
            $("#exampleInputName022").val(my_stuList[i].id);
            $("#exampleInputName22").val(my_stuList[i].s_name);
            $("#exampleInputName44").val(my_stuList[i].s_sex);
            $("#exampleInputName55").val(my_stuList[i].s_class);
            $("#exampleInputName66").val(my_stuList[i].s_father);
            $("#exampleInputName011").val(my_stuList[i].fatherTel);
            $("#exampleInputName0166").val(my_stuList[i].s_mother);
            $("#exampleInputName00111").val(my_stuList[i].motherTel);
            $("#exampleInputName00").val(my_stuList[i].s_adderss);
            $("#exampleInputName33").val(my_stuList[i].s_state);
        }
    }
});
/*修改*/
$('body').on('click','.alter', function () {
    alterId=$(this).attr("id");
    for(var i=0;i<my_stuList.length;i++){
        if (my_stuList[i].id==alterId){
            $("#exampleInputName0022").val(my_stuList[i].id);
            $("#exampleInputName0122").val(my_stuList[i].s_name);
            $("#exampleInputName044").val(my_stuList[i].s_sex);
            $("#exampleInputName055").val(my_stuList[i].s_class);
            $("#exampleInputName066").val(my_stuList[i].s_father);
            $("#exampleInputName0011").val(my_stuList[i].fatherTel);
            $("#exampleInputName01666").val(my_stuList[i].s_mother);
            $("#exampleInputName001611").val(my_stuList[i].motherTel);
            $("#exampleInputName000").val(my_stuList[i].s_adderss);
            $("#exampleInputName033").val(my_stuList[i].s_state);
        }
    }
});
$('body').on('click','#btn_que2', function () {
    for(var i=0;i<my_stuList.length;i++){
        if (my_stuList[i].id==alterId){
            my_stuList[i].id=$("#exampleInputName0022").val();
            my_stuList[i].s_name=$("#exampleInputName0122").val();
            my_stuList[i].s_sex=$("#exampleInputName044").val();
            my_stuList[i].s_class=$("#exampleInputName055").val();
            my_stuList[i].s_father=$("#exampleInputName066").val();
            my_stuList[i].fatherTel=$("#exampleInputName0011").val();
            my_stuList[i].s_mother=$("#exampleInputName01666").val();
            my_stuList[i].motherTel=$("#exampleInputName001611").val();
            my_stuList[i].s_adderss=$("#exampleInputName000").val();
            my_stuList[i].s_state=$("#exampleInputName033").val();
            linksList(my_stuList);
        }
    }
    if (my_stuList.length>10){
        $('#pagination').css("display","inline-block");
    } else {
        $('#pagination').css("display","none");
    }
});
/*删除*/
$('body').on('click','.delete', function () {
    deleteId=$(this).attr("id");
});
$('body').on('click','#btn_que', function () {
    for(var i=0;i<my_stuList.length;i++){
        if(my_stuList[i].id == deleteId){
            my_stuList.splice(i,1);
            linksList(my_stuList);
        }
    }
});
//查询
$('body').on('click','#search_btn', function () {
    if ($(".cd-dropdown>span>span").get(0)!=undefined){
        var my_seleteOp=$(".cd-dropdown>span>span").get(0).innerHTML;  //状态
    }
    var my_sname=$("#s_name").val(); //姓名
    var my_sno=$("#sno").val(); //编号
    var newArry=[];
    if (my_sname!="" || my_sno!="" || my_seleteOp!=undefined){
        for (var i=0;i<my_stuList.length;i++){
            if (my_stuList[i].s_state==my_seleteOp){
                newArry.push(my_stuList[i]);
            }
            if (newArry.indexOf(my_seleteOp)==-1){
                linksList(newArry)
            }
            if (my_stuList[i].s_name==my_sname || my_stuList[i].id==my_sno){
                newArry.push(my_stuList[i]);
            }
            if (newArry.indexOf(my_sname)==-1 || newArry.indexOf(my_sno)==-1){
                linksList(newArry);
                $("#s_name").val("")
                $("#sno").val("")
            }
        }
        if (newArry.length>10){
            $('#pagination').css("display","inline-block");
        } else {
            $('#pagination').css("display","none");
        }
    } else {
        alert("查询字段不能为空哦！")
    }
});
//添加
var idNum=0;
var addList;
$('body').on('click','#btn_que5', function () {
    idNum=idNum+1;
    my_stuList.id="s_0"+(my_stuList.length+idNum);
    my_stuList.s_name=$("#exampleInputName77").val();
    my_stuList.s_state=$("#exampleInputName88").val();
    my_stuList.s_sex=$("#exampleInputName99").val();
    my_stuList.s_class=$("#exampleInputName100").val();
    my_stuList.s_father=$("#exampleInputName111").val();
    my_stuList.fatherTel=$("#exampleInputName122").val();
    my_stuList.s_mother=$("#exampleInputName1111").val();
    my_stuList.motherTel=$("#exampleInputName1122").val();
    my_stuList.s_adderss=$("#exampleInputName133").val();

    addList='{"id":"'+ my_stuList.id +'",';
    addList+= '"s_name":"'+ my_stuList.s_name +'",';
    addList+= '"s_sex":"'+ my_stuList.s_sex +'",';
    addList+= '"s_class":"'+ my_stuList.s_class +'",';
    addList+= '"s_father":"'+ my_stuList.s_father +'",';
    addList+= '"s_mother":"'+ my_stuList.s_mother +'",';
    addList+= '"fatherTel":"'+ my_stuList.fatherTel +'",';
    addList+= '"motherTel":"'+ my_stuList.motherTel +'",';
    addList += '"s_state":"'+ my_stuList.s_state +'"}';
    my_stuList.push(JSON.parse(addList));
    linksList(my_stuList);
});