$(function(){

$(".cate>a").click(function(){
    $(".menu").toggleClass("on");
}) //

$(".sear>a").click(function(){
    $(".search_d").show();
    $(".search").css({display : "flex"});
    console.log("csdf");
}) //
$(".search_d").click(function(){
    $(".search, .search_d").hide();
})//

$(".button , .popup_bg").click(function(){
    $(".popup , .popup_bg").hide();

})



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
    // $("#s_slide").css({display: "flex"});
    // $("#.sd_sub#slide_b").removeClass("on");
    // $("#slide_b").parent(".slide").show();
    
    $(".ithide").hide();

    // $("#slide_b").parent(".slide").hide();
    $(".slide_b li").show();
}else {
    $("#s_slide").attr("class","");
    $("#s_slide1").attr("class","");
    $("#s_slide2").attr("class","");
    $("#s_slide3").attr("class","");
    $("#s_slide4").attr("class","");
    // $("#s_slide").css({display: "none"});
    // $("#.sd_sub#slide_b").addClass("on");
    // $("#slide_a li").show() 
    $(".slide_a li").show();  
    $(".slide_b li").hide();
}
})



}) //jquery