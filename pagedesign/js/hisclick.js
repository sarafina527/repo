function clickNode(){
	$('.nodelist li').removeClass('active');
	$(this).addClass('active');
}
$(document).ready(function(){
	$('.nodelist li').bind('click',clickNode);
});
