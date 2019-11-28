
//check off sepecific todos by clicking

$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on X to delete a // TODO:
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
  if(event.which===13){
    //grabbing new text to add it to ul as a li
  var todoText=$(this).val();
  $("ul").append("<li><span><i class='fa fa-eraser'></i></span> "+todoText+"</li>");
    $(this).val("");
  }

});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
