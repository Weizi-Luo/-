$('.list-group-item').on('click', function() {
	// $('.list-group-item-active').removeClass('list-group-item-active');
	$(this).addClass('list-group-item-active')
			.siblings().removeClass('list-group-item-active');
	var id = $(this).attr('href');
	$('.tab-pane').removeClass('active');
	$(id).addClass('active');
})

// 资源管理-系统管理的三角图标
$('#topAD').on('click', function() {
	$('#topA').toggleClass('glyphicon-triangle-bottom');
	$('#topA').toggleClass('glyphicon-triangle-right');
})

$('.toggle-btn').on('click', function() {
	$('.leftMenu').toggleClass('show');
	if($('.leftMenu.show').length == 1){
		$('.rightContent').css({paddingLeft:200})
	}else{
		$('.rightContent').css({paddingLeft:20})
	}	
})