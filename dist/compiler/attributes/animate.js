const Attribute = require(ATTRIBUTE_CLASS_PATH);

/**
 * Example of usage
 * <h1 [animate]="fadeInUp">Hello, World</h1>
 * <h1 [animate]="fadeInUp" [speed]="speedy">Hello, World</h1>
 */
class AnimateAttribute extends Attribute {
    /**
     * {@inheritDoc}
     */
    init() {
        this.animationName = this.forcePull(this.attribute);
        this.speedMode = this.forcePull('speed') || 'normal';
        this.animationMethod = 'animate';

        if (this.animationName == 'random') {
            this.animationMethod = `animator.randomShow(${this.tag.variableName}, '${this.speedMode}')`;
        } else {
            this.animationMethod = `animator.animate(${this.tag.variableName}, '${this.animationName}', '${this.speedMode}')`;
        }
    }

    /**
     * {@inheritdoc}
     */
    build() {
        this.tag.onElementReady(`
            var animator = DI.resolve('animator');
            ${this.animationMethod};
        `);
    }
}

module.exports = {
    attr: 'animate',// it will be passed to the constructor
    handler: AnimateAttribute,
};