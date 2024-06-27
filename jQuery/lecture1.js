$(function(){
    $('#hide').click(function(){
        $('.code-1').hide()
    })
})

$(function(){
    $('#show').click(function(){
        $('.code-1').show()
    })
})

$(function(){
    $('#button').click(function(){
        $('#div-1').fadeIn(1000);
        $('#div-2').fadeIn(3000);
        $('#div-3').fadeIn(5000);
    })
})

$(function(){
    $('#button1').click(function(){
        $('#div-1').fadeout(2000);
        $('#div-2').fadeout(3000);
        $('#div-3').fadeout(4000);
    })
})