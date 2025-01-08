$(function(){

    const Full =  new fullpage('#fullpage', {
        navigation:false,
        navigationPosition:"left",
        // navigationTooltips:["page1" , "page2" , "page3" , "page4" , "page5"],
        ScrollingSpeed:5000,
        slidesNavigation:true,
        scrollBar:false,
        keyboardScrolling:false,
        autoScrolling:false,

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

    let fullpageInstance;
    let slickInstance;

    function initializePlugins() {
        if (window.innerWidth > 768) { // PC 버전
            // Fullpage 초기화
            fullpageInstance = new fullpage('#fullpage', {
                // 풀페이지 옵션
                autoScrolling: true,
                scrollHorizontally: true
                // 기타 옵션들...
            });

            // Slick 초기화
            slickInstance = $('.your-slider').slick({
                // 슬릭 옵션
                dots: true,
                arrows: true
                // 기타 옵션들...
            });
        } else { // 태블릿/모바일 버전
            // 이미 초기화되어 있다면 제거
            if (fullpageInstance) {
                fullpage_api.destroy('all');
                fullpageInstance = null;
            }
            
            if ($('.your-slider').hasClass('slick-initialized')) {
                $('.your-slider').slick('unslick');
                slickInstance = null;
            }
        }
    }

    // 페이지 로드 시 실행
    $(document).ready(function() {
        initializePlugins();
    });

    // 리사이즈 시 실행 (디바운스 처리 추가)
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            initializePlugins();
        }, 250);
    });

}) //jquery