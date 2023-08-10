$(function(){
    let orgin_t = $('.vision .topBox>.info .title').html();

    $(window).resize(function(){
        let win_w = window.innerWidth
        
        /* Vision */  
        if(win_w < 960){
            $('.vision .topBox>.info .title').html('KCC VISION');
        }else $('.vision .topBox > .info .title').html(orgin_t);

    })
    




    /* Bisuness */
    $('.business .tab > li > a').on('click',function(e){
        e.preventDefault();
        let i = $(this).parent().index();
        console.log(i)
        $('.business .tab > li > .panel').hide();
        $(this).next('.panel').show();
    })

    $('.business .tab > li:not(:first-child) > .panel').hide();
    $('.business .tab > li > .tab').first().trigger('click');

    $('.business .iconBox > .icon a').on('click',function(e){
        e.preventDefault()
    });
});
