$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else {
            $('.scroll-up-btn').removeClass("show")
        }
    })

    // typing animation script
    let typed = new Typed(".typing", {
        strings: ["Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    let typed_2 = new Typed(".typing-2", {
        strings: ["Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    let skills = new Typed(".list", {
        strings: ["HTML", "CSS","Javascript","Python", "Express", "Node","React","MongoDB", "Bootstrap", "jQuery"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
  
    })

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0})
    })

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            600: {
                items:2,
                nav:false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

        
    })

    anime({
        targets: '.navbar',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(450, {start:4000})
    })

    anime({
        targets: '.text-1',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(450, {start:1000})
    })
    anime({
        targets: '.text-2',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(450, {start:2000})
    })
    anime({
        targets: '.text-3',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(450, {start:3000})
    })


})