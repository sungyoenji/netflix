$(function(){
    // $('.login>input').click(function(){
    //     $(this).css({'background':'#555'}).parent().siblings().find('.input').css({'background':'#333'})
    // })
    //modal_login
    $('header .btn_login').click(function(){
        $('.modal_login').fadeIn()
        $('body').addClass('on')
    })
    $('.login .btn_close').click(function(){
        $('.modal_login').fadeOut()
        $('body').removeClass('on')
    })

   
   
    //아코디언 메뉴
    $('.gnb>ul>li>a').click(function(){
        $(this).stop().next().slideToggle('.depth2').parent().siblings().find('.depth2').slideUp()
    })
    $('section.faq .gnb>ul>li>a').click(function(){
        $(this).toggleClass('on')
    })
})