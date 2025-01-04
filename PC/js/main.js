$(function(){

    const Full =  new fullpage('#fullpage', {
        navigation:true,
        navigationPosition:"left",
        // navigationTooltips:["page1" , "page2" , "page3" , "page4" , "page5"],
        ScrollingSpeed:5000,
        slidesNavigation:true,
        scrollBar:false,
        KeyboardScrolling:true,
        autoScrolling:true,

        // beforeLeave: function(index){
        //     console.log(index.index)
        //     if(index.index == 0||index.index == 2 || index.index == 4){
        //         $(".logo a").addClass("on");
        //         $("header").css({top:0});
        //     }else{
        //         $(".logo a").removeClass("on");
        //         $("header").css({top:0});
        //     }
        // },
        
        // afterLoad: function(index){
        //     console.log(index.index)
        //     if(index.index == 1||index.index == 3){
        //         $(".logo a").removeClass("on");
        //         $("header").css({top:0});
        //     }
        // }
    }) //
    
    $(".button , .modal_bg").click(function(){
        $(".modal , .modal_bg").hide();
        Full.KeyboardScrolling = false;
        Full.autoScrolling = false;
    })
}) //jquery