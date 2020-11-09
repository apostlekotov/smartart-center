$(document).ready(function(){
    $('#onoff').click(function(){
        if ($('nav').css('opacity') == '1') {
            $('nav').css('opacity', '0');
            $('nav').css('pointer-events', 'none');
            $('#onoff i').removeClass("fa-times");
            $('#onoff i').addClass("fa-bars");
        } else {
            $('nav').css('opacity', '1');
            $('nav').css('pointer-events', 'auto');
            $('#onoff i').removeClass("fa-bars");
            $('#onoff i').addClass("fa-times");
        }
    });
});