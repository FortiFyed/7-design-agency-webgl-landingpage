class Animate{
    constructor() {
        this.controller = new ScrollMagic.Controller();
    }

    AnimateNavbar() {
        var navbar = new ScrollMagic.Scene({
            triggerElement: ".passion"
        })
        .setTween(".head", .3, {backgroundColor: "#7f28d7", position: 'fixed', zIndex: 500, width: '100%', padding: '10px 40px'})
        .addTo(this.controller);
    }

    AnimateHeader() {
        const timeline = gsap.timeline()
        timeline.from('.head .modern_menu', .5, {
            delay: .2,
            y: '20%',
            opacity: 0,
            ease: Expo.easeInOut,
        })
        .from('.head .logo', .5, {
            y: '20%',
            opacity: 0,
            ease: Expo.easeInOut,
        }, '-=.2')
        .from('.head_body .left_line', .5, {
            height: '0',
            opacity: 0,
            ease: Expo.easeOut,
        })
        .from('.head_body .back_text', .5, {
            y: '20%',
            opacity: 0,
            ease: Expo.easeOut,
        }, '-=.1')
        .from('.head_body .front_text', .5, {
            y: '20%',
            opacity: 0,
            ease: Expo.easeOut,
        }, '-=.35')
        .from('.head_body .body_text', .5, {
            y: '20%',
            opacity: 0,
            ease: Expo.easeOut,
        }, '-=.35')
        .from('.head_footer .line', .8, {
            width: '0',
            ease: Expo.easeInOut,
        }, '-=.4')
        .from('.head_footer #link1', .5, {
            x: '-50%',
            opacity: 0,
            ease: Expo.easeInOut,
        }, '-=.35')
        .from('.head_footer #link2', .5, {
            x: '-50%',
            opacity: 0,
            ease: Expo.easeInOut,
        }, '-=.35')
        .from('.head_footer #link3', .5, {
            x: '-50%',
            opacity: 0,
            ease: Expo.easeInOut,
        }, '-=.35')
        .from('.check', .5, {
            x: '50%',
            opacity: 0,
            stagger: .6,
            ease: Expo.easeInOut,
        }, '-=.2')
    }

    AnimatePassion() {
        const timeline = gsap.timeline(),
            img = timeline.from("section.passion .left .img_wrap", 0.5, {
                    x: '-50%',
                    opacity: 0,
                    ease: Expo.easeInOut,
                }),
            h1 = timeline.from("section.passion .right h1", 0.5, {
                    delay: .2,
                    y: '50%',
                    opacity: 0,
                    ease: Expo.easeInOut
                }, '-=.35'),
            h6 = timeline.from("section.passion .right h6", 0.5, {
                    y: '50%',
                    opacity: 0,
                    ease: Expo.easeInOut
                }, '-=.35'),
            p = timeline.from("section.passion .right p", 0.5, {
                    y: '50%',
                    opacity: 0,
                    ease: Expo.easeInOut
                }, '-=.35'),
            btn = timeline.from("section.passion .right .passion_btn", 0.5, {
                    y: '50%',
                    opacity: 0,
                    ease: Expo.easeInOut
                }, '-=.35')

        // container
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween("section.passion", 0.5, {
            backgroundColor: "rgb(220, 220, 220)"
        })
        .addTo(this.controller);
    
        // img
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween(img)
        .addTo(this.controller);
    
        // h1
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween(h1)
        .addTo(this.controller);
        
        // h6
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween(h6)
        .addTo(this.controller);
        
        // p
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween(p)
        .addTo(this.controller);
    
        // btn
        new ScrollMagic.Scene({
            triggerElement: "section.passion"
        })
        .setTween(btn)
        .addTo(this.controller);
    }

    AnimateStuff() {
        const stuff1 = gsap.from(".stuff .stuff1", 0.5, {
                y: '20%',
                opacity: 0,
                ease: Expo.easeInOut,
            }),
            stuff2 = gsap.from(".stuff .stuff2", 0.5, {
                delay: .3,
                y: '20%',
                opacity: 0,
                ease: Expo.easeInOut,
            }),
            stuff_line = gsap.from(".stuff .line_stuff", 1.5, {
                delay: .6,
                width: '0%',
                ease: Expo.easeInOut,
            }),
            stuff3 = gsap.from(".stuff .stuff3", 0.5, {
                delay: .6,
                y: '20%',
                opacity: 0,
                ease: Expo.easeInOut,
            })
            
        var header = new ScrollMagic.Scene({
            triggerElement: ".stuff"
        })
        .setTween([stuff1, stuff2, stuff3, stuff_line])
        .addTo(this.controller);
    }
    
    AnimateMenu() {
        const close = document.querySelector('.menu .modern_menu')
        const open = document.querySelector('header .modern_menu')
        const menu = document.querySelector('.menu')
        close.addEventListener('click', () => {
            const timeline = gsap.timeline()
            
            timeline.to('.menu .__link4', 0.1, {
                x: '-20px',
                opacity: 0
            })
            .to('.menu .__link3', 0.1, {
                x: '-20px',
                opacity: 0
            })
            .to('.menu .__link2', 0.1, {
                x: '-20px',
                opacity: 0
            })
            .to('.menu .__link1', 0.1, {
                x: '-20px',
                opacity: 0
            })
            .to(menu, .6,{
                width: '0%',
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete(){
                    menu.classList.add('hide')
                    gsap.to('.menu .__link4, .menu .__link3, .menu .__link2, .menu .__link1', 0.1, {
                        x: '0px',
                        opacity: 1
                    })                    
                }
            })
        })
    
        open.addEventListener('click', () => {
            menu.classList.remove('hide')
            const timeline = gsap.timeline()
            
            timeline.to(menu, .5,{
                width: '100vw',
                opacity: 1,
                ease: Expo.easeInOut,
            })
            .from('.menu .__link1', 0.2, {
                x: '-20px',
                opacity: 0
            })
            .from('.menu .__link2', 0.2, {
                x: '-20px',
                opacity: 0
            })
            .from('.menu .__link3', 0.2, {
                x: '-20px',
                opacity: 0
            })
            .from('.menu .__link4', 0.2, {
                x: '-20px',
                opacity: 0
            })
        })
    }

    AnimateChecker() {
        const check = document.querySelector('header .check')
        function AnimateSlider() {
            const timeline = gsap.timeline()
            timeline.from('.slider-inner', 1, {
                x: '-50%',
                opacity: 0,
                ease: Expo.easeInOut,
            })
            .from('.slide-title', .5, {
                y: '50%',
                opacity: 0,
                ease: Expo.easeInOut,
            })
            .from('.slide-status', .5, {
                y: '50%',
                opacity: 0,
                ease: Expo.easeInOut,
            }, '-=1')
            .from('.slider #pagination, .slider .btn_close', 1, {
                x: '50%',
                opacity: 0,
                ease: Expo.easeInOut,
            }, '-=1')
        }
        
        check.addEventListener('mouseenter', () => {
            gsap.to('.circle', 0.3, {
                duration: 1,
                width: '30px',
                height: '30px',
                stagger: 0.1,
                ease: Expo.easeInOut,
            })
        })
        check.addEventListener('mouseleave', () => {
            gsap.to('.circle', 0.3, {
                duration: 1,
                width: '0px',
                height: '0px',
                stagger: 0.1,
                ease: Expo.easeInOut,
                onComplete(){
                    gsap.to('.circle1', {
                        delay: .2,
                        width: '10px',
                        height: '10px',
                        ease: Expo.easeInOut,
                    })
                }
            })
        })
        
        check.addEventListener('click', () => {
            let clicked = false, width = '100%'
            if(check.classList.contains('clicked')){
                clicked = true
                width = 0
            }
            const timeline = gsap.timeline()
    
            timeline.to('main .bg_change', .2, { 
                width,
                ease: Expo.easeInOut,
                onComplete(){
                    if(clicked){
                        check.classList.remove('clicked')
                        timeline.to('section.slider', .5, {
                            x: '-100%',
                            opacity: 0,
                            ease: Expo.easeInOut,
                        }, '-=.2')
                    }else{
                        check.classList.add('clicked')
                        timeline.to('section.slider', .5, {
                            x: '0',
                            opacity: 1,
                            ease: Expo.easeInOut,
                        }, '-=0')
                        AnimateSlider()
                    }
                }
            })
        })
    
        document.querySelector('.btn_close').addEventListener('click', () => {
            const timeline = gsap.timeline()
            timeline.to('.slider', .5, {
                x: '-100%',
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete(){
                    timeline.to('main .bg_change', .5, { 
                        width: '0%',
                        ease: Expo.easeInOut,
                    }, '-=.2')
                }
            })
        })
    }
    
    AnimateFooter() {
        const footer = gsap.from("footer", .8, {
            delay: 1,
            background: 'rgb(33, 33, 33)',
            opacity: 0,
            ease: Expo.easeInOut,
        })
        var header = new ScrollMagic.Scene({
            triggerElement: ".stuff"
        })
        .setTween(footer)
        .addTo(this.controller);
    }
}