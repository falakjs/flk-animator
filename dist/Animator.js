class Animator {
    /**
    * Constructor
    *
    */
    constructor() {
        this.showAnimations = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "rollIn"];
        this.hideAnimations = ["bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flipOuflk", "flipOutY", "lightSpeedOut", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideOutUp", "slideOutDown", "slideOutLeft", "slideOutRight", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "hinge", "rollOut"];
        this.animations = this.showAnimations.concat(this.hideAnimations);
        this.totalAnimations = this.animations.length;
    }

    /**
    * Animate the given element with the given animation name
    * if no animation name is given, then display a random one
    *
    * @param HTMLElement element
    * @param string animation
    * @param string speedMode
    */
    animate(element, animation, speedMode = Animator.NORMAL_SPEED) {
        return new Promise((resolve, reject) => {
            let classes = 'animated ' + animation + ' ' + speedMode;

            element.style.display = 'block';

            for (let event of 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend'.split(' ')) {
                element.addEventListener(event, resolve);
            }

            element.classList.add(...classes.split(' '));
        });
    }

    /**
    * Get random animation name for show
    *
    * @return string
    */
    randomShow(element, speedMode = Animator.NORMAL_SPEED) {
        let animationIndex = Math.floor(Math.random() * this.showAnimations.length - 1) + 0;

        return this.animate(element, this.showAnimations[animationIndex], speedMode);
    }

    /**
    * Get random animation name for hide
    *
    * @return string
    */
    randomHide(element, speedMode = Animator.NORMAL_SPEED) {
        let animationIndex = Math.floor(Math.random() * this.hideAnimations.length - 1) + 0;

        return this.animate(element, this.hideAnimations[animationIndex], speedMode);
    }
}

Animator.NORMAL_SPEED = 'normal';
Animator.SPEEDY = 'speedy';
Animator.SLOW_MOTION = 'slow';

DI.register({
    class: Animator,
    alias: 'animator',
});