var count = 0;
$(".checkboxC").click(function() {
	if(count%2 == 0) {
		$(this).attr("checked","checked");
	}else {
		$(this).removeAttr("checked","checked");
	}
});
setInterval(function() {
	if($(".checkboxC[checked]").length == $(".cont").length) {
		$(".checkboxT").attr("checked","checked");
	}else {
		console.log($(".checkboxC[checked]").length);
		$(".checkboxT").removeAttr("checked");
	}
},100);
$(".del").click(function() {
	for(var i=0;i<$(".cont").length;i++) {
		if($(".checkboxC[checked]")) {
			$($(".cont")[$(".checkboxC[checked]").index()]).remove();
			if($(".checkboxC[checked]").index() > -1) {
				i--;
			}else {
				break;
			}
		}
	}
});