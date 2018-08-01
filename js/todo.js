//check off specific todo
$("ul").on("click","li" ,function(){
	$(this).toggleClass("completed");
}); 
$("ul").on("click","span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});
$("input").on("keypress" ,function(event){
	if(event.which === 13)
	{
		var todotext = $(this).val();
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
		$(this).val("");
	}

})
$(".fa-plus").on("click",function(){
	$("input").fadeToggle();
})

