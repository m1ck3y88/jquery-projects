$(function(){
    $("#accordion p:not(:first)").hide();
    $("#accordion h4").click(function(){
        $(this).next().slideToggle(500)
               .siblings("p:visible").slideUp(500);
    });
});