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
    });