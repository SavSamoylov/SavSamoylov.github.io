$(document).ready(function(){


// Listen for portfolio Item width, and adjust the height to match.

get_pItemHeight();

let pItemWidth = $(".pItem").width();
$(".pItem").height(pItemWidth);

function get_pItemHeight(){
	$(window).resize(function(){
		let pItemWidth = $(".pItem").width();
		$(".pItem").height(pItemWidth);
	});
};

})