---
path: "/blog/day-five-of-100daysofcode"
date: "2019-11-22"
readingTime: "7"
title: "Day 5"
---
Today I have built a web page by following a tutorial from [Youtube](https://www.youtube.com/watch?v=-2LtZRi6Q0s&t=106s). Out of all the things I have learned from this tutorial, applying **gradient** was the most exciting part. </br>
Below is a demonstration of how I applied gradient on the `sign-up` button: 

#Diamond web page

``` html
<div class="menu">  
    <ul>
        <i class="fas fa-gem"></i>
        <li id="active">Home</li>
        <li>Service</li>
        <li>Product</li>
        <li>Contact</li>
        <li><a href="#" class="sign-up-btn"><span>Sign Up</span></a></li>
    </ul>
</div>
```

```` css
.sign-up-btn {
    top: 40px;
    right: 80px;
    position: absolute;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 30px;
    background-image: linear-gradient(#42455a, #42455a), radial-gradient(circle at top left, #fd00da, #19d7f8);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.sign-up-btn span {
    display: block;
    padding: 10px 20px;
}

````

After being done with the web page, I have done the "Applied Visual Course" on freecodecamp](https://www.freecodecamp.org/suborna). And there are a few new things I have learnt from this course: 

# HTML

- `text-align: justify;` Causes all lines of text except the last line to meet the left and right edges of the line box.
- `text-decoration:` Line-through; to the element. </br>
- `<s></s>:` HTML line through tag
- `<hr>` border. Adds a horizontal line across the width of its containing element (self-closing tag).

# CSS

``` css
p {
      transform: scale(2);
}
```
To change the scale of an element, CSS has the transform property, along with its scale() function. 

``` css
p {
  transform: skewX(-32deg);
}
p {
  transform: skewY(78deg);
}
```
Skews the selected element along its X (horizontal) axis and Y (Vertical) axis by a given degree.

Finally I did some CSS animation practices which I believe I will have to gain more in-depth knowledge of, as this is a very new topic to me. But one interesting thing I have learnt though is: 

# CSS animation

`transition-timing-function:`
- `ease-in` - will start the animation slowly, and finish at full speed.
- `ease-out` -  will start the animation at full speed, then finish slowly.
- `ease-in-out` - will start slowly, be fastest at the middle of the animation, then finish slowly.
- `ease` -  is like ease-in-out, except it starts slightly faster than it ends.
- `linear` - uses no easing, applies a constant animation speed throughout.