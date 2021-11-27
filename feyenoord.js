$(document).ready(() => {
    $('#teams').on('click', () => {
        $('#dropdown').slideToggle();
        $('#dropdown2').hide();
        $('#dropdown3').hide();
    })
    $('#club').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').slideToggle();
        $('#dropdown3').hide();
    })
    $('#supporters').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').slideToggle();
    })
    $('#dropdown').on('mouseleave', event => {
        $(event.currentTarget).slideUp();
    })
    $('#dropdown2').on('mouseleave', event => {
        $(event.currentTarget).slideUp();
    })
    $('#dropdown3').on('mouseleave', event => {
        $(event.currentTarget).slideUp();
    })
    $('#iconcontainer').on('click', () => {
        $('#headmenu').toggle();
    })
    
    $('#teams1').on('click', () => {
        $('#dropdown').slideDown();
        $('#dropdown2').hide();
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#club1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').slideDown();
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#supporters1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').slideDown();
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
            }, 2000);
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
            }, 2000);
            $('#next').addClass('btn-active');
            $picture = 2;
        }         
    })

})







