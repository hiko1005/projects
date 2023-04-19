jQuery(function() {
    // анімація кнопок
    let design = $('#design');
    let coding = $('#coding');
    let back_end = $('#back-end');
    design.click(function() {
        $(this).animate({'font-size': '40px'}).animate({'font-size': '3rem'});
    })
    coding.click(function() {
        $(this).animate({'font-size': '40px'}).animate({'font-size': '3rem'});
    })
    back_end.click(function() {
        $(this).animate({'font-size': '40px'}).animate({'font-size': '3rem'});
    })

    // плавний скролл
    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 200);
        return false;
    });

    // анімація стрілки-вниз
    let arrow = $('#arrow-down');
    let container_arrow = $('.want');

    function container_hover() {
        // arrow.css({'-webkit-transform': 'translateY(20px)'});
        arrow.css({"-webkit-transform":"translateY(20px)"});
    }

    function container_unhover() {
        arrow.css({"-webkit-transform": "translateY(-20px)"});
    }

    container_arrow.hover(container_hover, container_unhover);
})
