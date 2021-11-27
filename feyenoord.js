$(document).ready(() => {
    $('#teams').on('click', () => {
        $('#dropdown').toggle();
        $('#dropdown2').hide();
        $('#dropdown3').hide();
    })
    $('#club').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').toggle();
        $('#dropdown3').hide();
    })
    $('#supporters').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').toggle();
    })
    $('#dropdown').on('mouseleave', event => {
        $(event.currentTarget).hide();
    })
    $('#dropdown2').on('mouseleave', event => {
        $(event.currentTarget).hide();
    })
    $('#dropdown3').on('mouseleave', event => {
        $(event.currentTarget).hide();
    })
    $('#iconcontainer').on('click', () => {
        $('#headmenu').toggle();
    })
    
    $('#teams1').on('click', () => {
        $('#dropdown').show();
        $('#dropdown2').hide();
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#club1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').show();
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#supporters1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').show();
        $('#headmenu').hide();
    })
    $picture = 1;
    $('#next').on('click', () => {
        if ($picture == 1) {
            $('.kuipimg').animate({
                left: "100%"
            }, 2000);
            $('.selectieimg').animate({
                left: "0%"
            }, 2000);
            $('.vanpersie').animate({
                left: '-100%'
            }, 2000);
            $('#prev').addClass('btn-active');
            $picture = 2;
        } else if ($picture == 2) {
            $('.kuipimg').animate({
                left: "200%"
            }, 2000);
            $('.selectieimg').animate({
                left: "100%"
            }, 2000);
            $('.vanpersie').animate({
                left: '0%'
            }, 2000);
            $('#next').removeClass('btn-active');
            $picture = 3;
        }         
    })
    $('#prev').on('click', () => {
        if ($picture == 2) {
            $('.kuipimg').animate({
                left: "0%"
            }, 2000);
            $('.selectieimg').animate({
                left: "-100%"
            }, 2000);
            $('.vanpersie').animate({
                left: '-200%'
            }, 2000)
            $('#prev').removeClass('btn-active');
            $picture = 1;
        } else if ($picture == 3) {
            $('.kuipimg').animate({
                left: "100%"
            }, 2000);
            $('.selectieimg').animate({
                left: "0%"
            }, 2000);
            $('.vanpersie').animate({
                left: '-100%'
            }, 2000)
            $('#next').addClass('btn-active');
            $picture = 2;
        }         
    })

})







