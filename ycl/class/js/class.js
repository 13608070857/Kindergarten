$.get("js/classList.js",function (data,status) {
    //执行加载数据的方法
    linksList();
});
function linksList(){
    //渲染数据
    function renderDate(){
        var dataHtml = '';
        for(var i=0;i<myclass.length;i++){
            dataHtml += '<tr>'
                +'<td>'+myclass[i].id+'</td>'
                +'<td>'+myclass[i].c_name+'</a></td>'
                +'<td>'+myclass[i].c_num+'</td>'
                +'<td>'+myclass[i].c_teacher+'</td>'
                +'<td>'+myclass[i].c_address+'</td>'
                +'<td>'+"查看"+'</td>'
                +'</tr>';
        }
        return dataHtml;
    }
    $(".links_content").html(renderDate());
}