$(function(){

$(".cate>a").click(function(){
    $(".menu").toggleClass("on");
}) //

$(".sear>a").click(function(){
    $(".search_d").show();
    $(".search").css({display : "flex"});
    console.log("csdf");
}) //
$(".search_btn a").click(function(){
    $(".search, .search_d").hide();
})//




$(".ithide").hide();

$(window).resize(function(){
w = $(window).innerWidth()

console.log(w);

if(w > 428){
    $("#s_slide").attr("class","slide fp-slide fp-table fp-is-overflow active");
    $("#s_slide1").attr("class","slide fp-slide fp-table fp-is-overflow active");
    $("#s_slide2").attr("class","slide fp-slide fp-table fp-is-overflow active");
    $("#s_slide3").attr("class","slide fp-slide fp-table fp-is-overflow active");
    $("#s_slide4").attr("class","slide fp-slide fp-table fp-is-overflow active");
    
    $(".ithide").hide();

    $(".slide_b li").show();
}else {
    $("#s_slide").attr("class","");
    $("#s_slide1").attr("class","");
    $("#s_slide2").attr("class","");
    $("#s_slide3").attr("class","");
    $("#s_slide4").attr("class","");
    $(".slide_a li").show();  
    $(".slide_b li").hide();
}
})



}) //jquery