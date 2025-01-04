
$(function(){
    $('.slick_img').slick({
        dots: true,
        arrows: false,    
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint : 320,
                settings : {
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2
                }
            }
        ]
      });

      
      $("a").click(function(e){
          var a_a = $(this).attr("href")
              if(a_a === "#" || a_a == ""){
            e.preventDefault();
        }
    })

    $(".menu>li").click(function(){
        $(this).find(".menu_list").stop().slideToggle();
    })//

    // $(document).click(function(event){
    //     if(!$(event.target).closest(".menu>>li>a").length){
    //         $(".menu_list>li>a").slideUp();
    //     }
    // })
   

    $(".search_d, .search").hide();
    $(".sear").click(function(){
        $(".search, .search_d").show();
    })//
    
    $(".search_btn").click(function(){
        $(".search, .search_d").hide();
    
    })


    $(".pop_close a").click(function(){
        $(".popup").hide();
    })



    
    
})


