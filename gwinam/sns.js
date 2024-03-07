$(document).ready(function(){
    $("#header .gnb>li>a").css({"color":"#fff"});
    $(window).scroll(function(){
        let top = $(window).scrollTop();
        if(top > 0)
        $("#header").css({"background-color":"transparent"});
        $("#header").mouseleave(function(){
            $(this).css({"background-color":"transparent"});
            $("#header .gnb>li>a").css({"color":"#fff"});
        });
    });

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 100){
        $("#header").css({"background-color":"#fff"});
        $("#header .gnb>li>a").css({"color":"black"});
        $("#header").addClass("on77");
        $("#header").mouseleave(function(){
            $(this).css({"background-color":"#fff"});
            $("#header .gnb>li>a").css({"color":"black"});
        });

    }else{
            $("#header").css({"background-color":"transparent"});
            $("#header .gnb>li>a").css({"color":"white"});
            $("#header").removeClass("on77");                    
        }
    });


    $("#header").mouseenter(function(){
        $(this).css({"height":"400px","background-color":"#fff","color":"black"});
        $(this).find(".gnb>li>a").css({"color":"black"});
    });
    $("#header").mouseleave(function(){
        $(this).css({"height":"100px","background-color":"transparent"});
        $(this).find(".gnb>li>a").css({"color":"white"});
    });


    $(".expend>span").click(function(){
        $(".another").stop().slideToggle();
    });



// ㅡㅡㅡㅡㅡㅡㅡㅡ스크롤효과ㅡㅡㅡㅡㅡㅡㅡ

    const $counters = $(".scroll_on");
    
    const exposurePercentage = 100;
    const loop = true; 
    $(window).on('scroll', function() {
        $counters.each(function() {
            const $el = $(this);
            const rect = $el[0].getBoundingClientRect();
            const winHeight = window.innerHeight;
            const contentHeight = rect.bottom - rect.top;
            if (rect.top <= winHeight - (contentHeight * exposurePercentage / 250) && rect.bottom >= (contentHeight * exposurePercentage / 250)) {
                $el.addClass('active');
            }
        });
    }).scroll();




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ유튜브 영상 슬라이드ㅡㅡㅡㅡㅡㅡㅡㅡ

$(".next").click(function(){
    $(".con1 .bottom>ul").stop().animate({"margin-left":"-12.5%"},function(){
        $(".con1 .bottom>ul>li").first().appendTo(".con1 .bottom>ul");
        $(".bottom>ul").css({"margin-left":"0%"});
    });
});
$(".prev").click(function(){
    $(".con1 .bottom>ul").stop().animate({"margin-left":"12.5%"},function(){
        $(".con1 .bottom>ul>li").last().prependTo(".con1 .bottom>ul");
        $(".bottom>ul").css({"margin-left":"0%"})
    });
});


    });