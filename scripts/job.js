


$(function(){
	$(".bg div").click(
		function(){
			play($(".bg div").index(this));
	});
	
	 function play(p){
        $(".bg div").removeClass("sel").eq(p).addClass("sel");
        $("#con div").removeClass("block").removeClass("none").eq(p).addClass("block").siblings().addClass("none");
    };
})
