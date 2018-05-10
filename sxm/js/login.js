$(function() {
	var loginBtn = $(".loginBtn");
	var userName = $(".userName");
	var passWd = $(".passWd");
	var errorInfo = $(".errorInfo");

	$.get("js/user.js",function (data,status) {
	    //执行加载数据的方法
	    loginBtn.click(function() {
	    	// 登录
			for(var i=0;i<userInfo.length;i++) {
				if(userName.val() == userInfo[i].name && passWd.val() == userInfo[i].password) {
					$.cookie = "username = " + userName;
					$.cookie = "password = " + passWd;
					location.href = "../ycl/index.html";
					break;
				}else {
					errorInfo.css("opacity","1");
				}
			}

			// 记住密码
			
	    })
	});	
})