# flk-animator

An animation package for elements animations.

This package mainly uses [Animate.css](https://daneden.github.io/animate.css/)

# Installation

`flk install flk-animation` 

# Usage

Add to any element you want to animate `animate` class with `animate` attribute with any of `Animate.css` classes.

# Example

```html

<h1 class="animate" animate="fadeInUpBig">Hello, World</h1>

<!-- Or using dynamic values -->

<h1 class="animate" [animate]="this.defaultAnimation">Hello, World</h1>
```

# Speed
By default the animation has a `normal` speed but you can change it to `slow` or `fast` using the `speed` attribute.


```html

<h1 class="animate" animate="fadeIn" speed="fast">Hello, World</h1>
```

# Random
If you want to display elements randomly use the `random` value  

```html

<h1 class="animate" animate="random">Hello, World</h1>
```