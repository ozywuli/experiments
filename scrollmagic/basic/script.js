$(document).ready(function() {

    var controller = new ScrollMagic.Controller({

    });

    /*------------------------------------*\
      BOX1
    \*------------------------------------*/
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".trigger-box1"
    })
    .setTween(".box1", 0.5, {backgroundColor: "black", scale: 2.5}) // trigger a TweenMax.to tween
    .addTo(controller);




    /*------------------------------------*\
      BOX 2
    \*------------------------------------*/
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.trigger-box2'
    })
    .setTween(
        '.box2',
        0.5,
        {
            backgroundColor: 'black',
            scale: 0.5
        }
    )
    .addTo(controller);



    /*------------------------------------*\
      PIN 1
    \*------------------------------------*/
    var pin1 = new ScrollMagic.Scene({
        triggerElement: '.trigger-pin1',
        duration: 2000
    })
    .setPin('.pin1')
    .addTo(controller)


    /*------------------------------------*\
      PIN 2
    \*------------------------------------*/
    var pin2 = new ScrollMagic.Scene({
        triggerElement: '.trigger-pin2',
        duration: 1000
    })
    .setPin('.pin2')
    .addTo(controller)


    /*------------------------------------*\
      SCENE WIPES WITH PANELS
    \*------------------------------------*/


    var panelController = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: window.innerHeight,
            triggerHook: 'onLeave'
        }
    });


    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        // console.log(slides[i].className.split(' ')[1]);
        // console.log('.' + slides[i].className.split(' ')[1]);
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i])
            .setClassToggle('.menu-option.mod-' + slides[i].className.split(' ')[1], "is-active")
            .addIndicators() // add indicators (requires plugin)
            .addTo(panelController);
    }



    /*------------------------------------*\
      CUSTOM ACTIONS
    \*------------------------------------*/
    var customActions = new ScrollMagic.Scene({
        triggerElement: '.trigger-customActions',
        duration: window.innerHeight,
        triggerHook: 'onLeave'
    })
    .setPin('.customActions')
    .addTo(controller)
    .addIndicators()
    .on('update', function(e) {
        $('.scrollDirection').text(e.target.controller().info('scrollDirection'));
    })
    .on('enter leave', function(e) {
        $('.state').text(e.type === 'enter' ? 'inside' : 'outside');
    })
    .on('start end', function(e) {
        $('.lastHit').text(e.type === 'start' ? 'top' : 'bottom');
    })
    .on('progress', function(e) {
        $('.progress').text(e.progress.toFixed(3));
    })




    /*------------------------------------*\
      ANIMATE CSS
    \*------------------------------------*/


    var animateCss = new ScrollMagic.Scene({
        triggerElement: '.trigger-animateCss1'
    })
    .setClassToggle('.animateCss1', 'zap')
    .addIndicators({
        name: '1 - add a class'
    })
    .addTo(controller)



    var animateElem = document.querySelector('.animateCss2');
    var animateCss2 = new ScrollMagic.Scene({
        triggerElement: '.trigger-animateCss2',
        duration: 500
    })
    .on('enter', function() {
        animateElem.style.backgroundColor = 'grey';
    })
    .on('leave', function() {
        animateElem.style.backgroundColor = '';
    })
    .addIndicators({
        name: '2 - change inline style'
    })
    .addTo(controller)




});