{
    const effects = [
        // Effect 1
        {
            options: {
                shapeColors: ['#614DFF','#AFAEFF','#E8A3F1','#e9e3ea']
            },
            hide: {
                lettersAnimationOpts: {
                    duration: 800,
                    delay: (t,i) => i*40,
                    easing: 'easeOutExpo',
                    opacity: {
                        value: 0, 
                        duration: 100,
                        delay: (t,i) => i*40,
                        easing: 'linear'
                    },
                    translateY: ['0%', '100%']
                }
            },
            show: {
                lettersAnimationOpts: {
                    duration: 250,
                    delay: (t,i) => i*40,
                    easing: 'easeOutElastic',
                    opacity: [0,1],
                    translateY: ['100%', '0%']
                },
                shapesAnimationOpts: {
                    duration: 800,
                    delay: (t,i) => i*30+50,
                    easing: 'easeOutQuad',
                    translateY: () => [anime.random(-15,15),anime.random(-200,200)],
                    scale: () => [0.2,randomBetween(0.5,4)],
                    opacity: [
                        {
                            value: 1, 
                            duration:1, 
                            delay: (t,i) => i*30+100
                        }, 
                        {
                            value: 0,
                            duration: 200, 
                            delay:200,
                            easing: 'linear'}
                    ]
                }
            }
        },
        
        
    ];

    class Slideshow {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;

            this.DOM.words = Array.from(this.DOM.el.querySelectorAll('.word'));
            this.current = 0;
            this.words = [];
            this.DOM.words.forEach((word, pos) => {
                this.words.push(new Word(word, effects[pos].options));
            });
            
            this.isAnimating = true;
            this.words[this.current].show(effects[this.current].show).then(() => this.isAnimating = false);
        }
        show(direction) {
            if ( this.isAnimating ) return;
            this.isAnimating = true;

            this.DOM.slides[newPos].style.opacity = 1;
            this.DOM.bgs[newPos].style.transform = 'none';
            anime({
                targets: this.DOM.bgs[currentPos],
                duration: 600,
                easing: [0.2,1,0.3,1],
                translateY: ['0%', direction === 'next' ? '-100%' : '100%'],
                
            });

            this.words[newPos].hide();
            this.words[this.current].hide(effects[currentPos].hide).then(() => {
                
                this.current = newPos;
            });
        }
    }

    const slideshow = new Slideshow(document.querySelector('.slideshow'));
    document.querySelector('.slidenav__item--prev').addEventListener('click', () => slideshow.show('prev') );
    document.querySelector('.slidenav__item--next').addEventListener('click', () => slideshow.show('next') );
    document.addEventListener('keydown', (ev) => {
        const keyCode = ev.keyCode || ev.which;
        if ( keyCode === 37 ) {
            slideshow.show('prev');
        }
        else if ( keyCode === 39 ) {
            slideshow.show('next');
        }
    });
}