$(document).ready(function() {

// Controller
var controller = new ScrollMagic.Controller();



// Box 1
var box1 = $('.box-1');
var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1'
})
.setClassToggle('.box-1', 'zap')
.addIndicators({name: '1 - add a class'})
.addTo(controller);



// Box 2
var box2 = $('.box-2');

// console.log(box2);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.trigger2',
    duration: 500
})
    .on('enter', function() {
        box2[0].style.backgroundColor = 'grey';
    })
    .on('leave', function() {
        box2[0].style.backgroundColor = '';
    })
    .addIndicators({name: '2 - change inline syle'})
    .addTo(controller);


// Box 3

var box3 = $('.box-3');

var tween3 = TweenMax.fromTo(
        '.box-3', 
        1,
        {
            left: -100
        },
        {
            left: 100,
            repeat: -1,
            yoyo: true,
            ease: Circ.easeInOut
        }
    )

var scene3 = new ScrollMagic.Scene({
    triggerElement: '.trigger3',
    duration: 500,
    offset: -50
})
    .setTween(tween3)
    .addIndicators({name: 'loop'})
    .addTo(controller);


// Box 4
var box4 = $('.box-4');
    // build tween
    var tween4 = new TimelineMax()
        .to(".box-4", 1, {top: "-=200",
                onStart: function () {box4.html("This");},
                onReverseComplete: function () {box4.html("Let's draw!");}
            }
        )
        .to(".box-4", 1, {top: "+=200", left: "+=200",
                onStart: function () {box4.html("is");},
                onReverseComplete: function () {box4.html("This");}
            }
        )
        .to(".box-4", 1, {top: "-=200",
                onStart: function () {box4.html("the");},
                onReverseComplete: function () {box4.html("is");}
            }
        )
        .to(".box-4", 1, {left: "-=200",
                onStart: function () {box4.html("house");},
                onReverseComplete: function () {box4.html("the");}
            }
        )
        .to(".box-4", 1, {top: "-=100", left: "+=100",
                onStart: function () {box4.html("of");},
                onReverseComplete: function () {box4.html("house");}
            }
        )
        .to(".box-4", 1, {top: "+=100", left: "+=100",
                onStart: function () {box4.html("San...");},
                onReverseComplete: function () {box4.html("of");}
            }
        )
        .to(".box-4", 1, {top: "+=200", left: "-=200",
                onStart: function () {box4.html("...ta");},
                onReverseComplete: function () {box4.html("San...");}
            }
        )
        .to(".box-4", 1, {left: "+=200",
                onStart: function () {box4.html("Clause.");},
                onReverseComplete: function () {box4.html("...ta");}
            }
        );

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.trigger4'
    })
        .setTween(tween4)
        .addIndicators({
            name: 'timeline'
        })
        .addTo(controller);



// Box 5
var tween5 = TweenMax.to(
    '.box-5',
    1,
    {
        className: '+=fish'
    }
)


var scene5 = new ScrollMagic.Scene({
    triggerElement: '.trigger5',
    duration: 500,
    offset: -50
})
    .setTween(tween5)
    .addIndicators({
        name: 'tween css class'
    })
    .addTo(controller);


// Box 6
var tween6 = TweenMax.staggerFromTo(
        '.box-row',
        2,
        {
            left: 700
        },
        {
            left: 0,
            ease: Back.easeOut,
        },
        0.15
    )

var scene6 = new ScrollMagic.Scene({
    triggerElement: '.trigger6',
    duration: 500
})
    .setTween(tween6)
    .addIndicators({
        name: 'staggering'
    })
    .addTo(controller);



// Box 7
var wipeAnimation = new TimelineMax()
    .fromTo(
        '.subpanel.mod-turquoise',
        1,
        {
            x: '-100%'
        },
        {
            x: '0%',
            ease: Linear.easeNone
        }
    )
    .fromTo(
        '.subpanel.mod-green',
        1,
        {
            x: '-100%'
        },
        {
            x: '0%',
            ease: Linear.easeNone
        }
    )
    .fromTo(
        '.subpanel.mod-palegreen',
        1,
        {
            x: '-100%'
        },
        {
            x: '0%',
            ease: Linear.easeNone
        }
    )

var scene7 = new ScrollMagic.Scene({
    triggerElement: '.panel7',
    triggerHook: 'onLeave',
    duration: '300%'
})
    .setPin('.panel7')
    .setTween(wipeAnimation)
    .addIndicators()
    .addTo(controller);



// Scene 8

var wipeAnimation = new TimelineMax()
    .to('.slidepanelContainer',
        0.5,
        {
            z: -150   
        }
    )
    .to('.slidepanelContainer',
        1,
        {
            x: '-25%'
        }
    )
    .to('.slidepanelContainer',
        0.5,
        {
            z: 0
        }
    )
    .to('.slidepanelContainer',
        0.5,
        {
            z: -150,
            delay: 1   
        }
    )
    .to('.slidepanelContainer',
        1,
        {
            x: '-50%'
        }
    )
    .to('.slidepanelContainer',
        0.5,
        {
            z: 0
        }
    )
    .to('.slidepanelContainer',
        0.5,
        {
            z: -150,
            delay: 1
        }
    )
    .to('.slidepanelContainer',
        1,
        {
            x: '-75%'
        }
    )
    .to('.slidepanelContainer',
        0.5,
        {
            z: 0
        }
    )



    new ScrollMagic.Scene({
        triggerElement: '.panel8',
        triggerHook: 'onLeave',
        duration: '500%'
    })
        .setPin('.panel8')
        .setTween(wipeAnimation)
        .addIndicators()
        .addTo(controller)



// Scene 9
function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css('stroke-dasharray', lineLength)
    $el.css('stroke-dashoffset', lineLength)
}

var $word = $('path#word');
var $dot = $('path#dot');

var tween9 = new TimelineMax()
    .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to('path', 1, {stroke: '#33629c', ease: Linear.easeNone}), 0);

    new ScrollMagic.Scene({
        triggerElement: '.panel9',
        duration: 400,
        tweenChanges: true
        // tweenChanges: false
    })
        .setTween(tween9)
        .addIndicators()
        .addTo(controller)



// Scene 10

var tween10 = TweenMax.from(
    '.box10',
    0.5,
    {
        autoAlpha: 0,
        scale: 0.7
    }
)

var scene10 = new ScrollMagic.Scene({
    triggerElement: '.panel10',
    duration: '100%',
    triggerHook: 'onLeave'
})
    .addIndicators()
    .addTo(controller)
    .setTween(tween10)


// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function(newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});
console.log(controller.scrollTo);


$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    var id = $(this).attr('href');

    console.log(id);

    if ($(id).length > 0) {

        controller.scrollTo(id);
    }
})


// Scene 11
var horizontalController = new ScrollMagic.Controller({
    vertical: false
});

var tween = new TimelineMax ()
    .add([
        TweenMax.to(".horizontalLayer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
        TweenMax.to(".horizontalLayer2", 1, {backgroundPosition: "-500% 0", ease: Linear.easeNone}),
        TweenMax.to(".horizontalLayer3", 1, {backgroundPosition: "-225% 0", ease: Linear.easeNone})
    ]);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".horizontalPanel", duration: 2000, offset: 450})
                .setTween(tween)
                .setPin(".horizontalWrapper")
                .addIndicators() // add indicators (requires plugin)
                .addTo(horizontalController);






}); // end document ready