$(document).ready(function(){


        // header
        $(window).scroll(function(){
            let top = $(window).scrollTop();
            if(top > 0)
            $("#header").css({"background-color":"transparent"});
            $("#header").mouseleave(function(){
                $(this).css({"background-color":"transparent"});
                $("#header .gnb>li>a").css({"color":"#fff"});
            });
        });
        $("#header .gnb>li>a").css({"color":"#fff"});
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

            //탭메뉴 on 활성화
        $(".att_tab>ul>li").click(function(){
            let list = $(this).index();
            $(".att_tab>ul>li").removeClass("on");
            $(".att_tab>ul>li").eq(list).addClass("on");
            
        });

            //탭 클릭시 스크롤
            let link = $(".att_tab>ul>li>a");
            link.click(function(e){
                e.preventDefault();

                let target = $($(this).attr("href"));
                let scrollTopValue = target.offset().top - 160; 
                $("html,body").stop().animate({scrollTop:scrollTopValue},600);

            });
           
            //top버튼 특정위치에서 나타나고 사라지게
            $("#top_btn").css({"opacity":"0"});
            $(window).scroll(function(){
                if($(this).scrollTop() > 200) {
                    $("#top_btn").css({"opacity":"1"});
                    $("#top_btn").fadeIn(200);
                }else{
                    $("#top_btn").fadeOut(200);
                }
            });
            //top버튼 클릭하면 상단 이동
            $("#top_btn").click(function(event){
                event.preventDefault();
                $("html,body").animate({scrollTop:0},300);
            });


            //모달창 열기
            

            $(".att_con_all>div").click(function(){
                let list = $(this).index();
                $(".att_all_modal").eq(list).stop().fadeIn();
            });

            //모달창 닫기

            $(".att_all_modal").click(function(){
                $(".att_all_modal").stop().fadeOut();
            });

            $(".att_tit").click(function(){
                $(".att_all_modal").hide();
            });

        //footer
        $(".expend>span").click(function(){
            $(".another").stop().slideToggle();
        });
    

});
