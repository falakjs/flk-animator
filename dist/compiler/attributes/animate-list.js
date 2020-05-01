const Attribute = require(ATTRIBUTE_CLASS_PATH);

/**
 * Example of usage
 * <h1 [animate]="fadeInUp">Hello, World</h1>
 * <h1 [animate]="fadeInUp" [speed]="speedy">Hello, World</h1>
 */
class AnimateAttribute extends Attribute {
    /**
     * {@inheritdoc}
     */
    map() {
        return {
            'animate': this.animate,
            '[animate]': this.animate,
        };
    }

    /**
     * {@inheritDoc}
     */
    animate() {
        if (this.tag.type() != 'tag') return;

        this.animationName = this.pull('animate');

        this.speedMode = this.pull('speed', 'normal');
        this.animationMethod = 'animate';

        if (this.animationName == 'random') {
            this.animationMethod = `animator.randomShow(${this.tag.variableName}, ${this.speedMode})`;
        } else {
            this.animationMethod = `animator.animate(${this.tag.variableName}, ${this.animationName}, ${this.speedMode})`;
        }
        
        this.tag.onElementReady(`
            var animator = DI.resolve('animator');
            ${this.animationMethod};
        `);
    }
}


module.exports = AnimateAttribute;
