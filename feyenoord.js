//jquery
$(document).ready(() => {
    //open up teams menu with teams button and close the other menus
    $('#teams').on('click', () => {
        $('#dropdown').slideToggle('slow');
        $('#dropdown2').hide();
        $('#dropdown3').hide();
    })
    //open up club menu with club button and close the other menus
    $('#club').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').slideToggle('slow');
        $('#dropdown3').hide();
    })
    //open up supporters menu with supporters button and close the other menus
    $('#supporters').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').slideToggle('slow');
    })
    //close the menu when leaving the menu with the mouse
    $('#dropdown').on('mouseleave', event => {
        $(event.currentTarget).slideUp('slow');
    })
    $('#dropdown2').on('mouseleave', event => {
        $(event.currentTarget).slideUp('slow');
    })
    $('#dropdown3').on('mouseleave', event => {
        $(event.currentTarget).slideUp('slow');
    })
    //open and close the menu-buttons on small screen or mobile device
    $('#iconcontainer').on('click', () => {
        $('#headmenu').toggle();
    })
    
    //open the menus via the menu-icon on small screen or mobile device
    $('#teams1').on('click', () => {
        $('#dropdown').slideDown('slow');
        $('#dropdown2').hide();
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#club1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').slideDown('slow');
        $('#dropdown3').hide();
        $('#headmenu').hide();
    })
    $('#supporters1').on('click', () => {
        $('#dropdown').hide();
        $('#dropdown2').hide();
        $('#dropdown3').slideDown('slow');
        $('#headmenu').hide();
    })

    //slideshow

    //variable picture to track what order the pictures are in at what moment
    $picture = 1;
    //functionality of the next-button, move all the pictures one place and when at the end of the line de-activate the next-button
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

    //functionality for the previous-button, move all the pictures one place and when at the beginning of the line de-activate the previous-button
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







