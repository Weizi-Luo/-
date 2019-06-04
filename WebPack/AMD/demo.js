(function() {
	require.config({
		paths:{
			m1:'./modules/m1',
			m2:'./modules/m2',
			jquery:'./js/jquery-3.3.1'
		}
	})
	require(['m2','jquery'],function(m2,$) {
		m2.show();
		$('body').css('backgroundColor','#000');
	});
})();