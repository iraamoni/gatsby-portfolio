---
path: "/blog/day-four-of-100daysofcode"
date: "2019-11-21"
readingTime: "10-15"
title: "Day 4"
---

I have finished the "basic CSS" course today from [freecodecamp](https://www.freecodecamp.org/suborna). Among the new things I have learnt today, variables, how to style something using attribute values and CSS specificity are the most interesting ones. The next course is Applied visual design. I am really excited to see what that course is about.

# Override hierarchy 

There are many ways we can style our html element tags using CSS. We can override style rules by using different type of selectors. Below is a demonstration of which CSS selector has precedence over other css selectors: 

### Scenario 1
```html
<h1>
    Cat Shop
</h1>
```

``` css
body {
    color: green;
} 
```
**Output:** Cat Shop is green. </br>
**Reason:** Because we have assigned the color `green` to the body element. 

### Scenario 2
```html
<h1>
    Cat Shop
</h1>
```

``` css
body {
    color: green;
} 
h1 {
    color: red;
}
```
**Output:** Cat shop is red. </br>
**Reason:** Even though our parent container element `body` sets the color to be green, we are overriding the parent style rule with child element selector.

### Scenario 3

```html
<h1 class="blue-text">
    Cat Shop
</h1>
```

```css
body {
    color: green;
} 
h1 {
    color: red;
}
.blue-text {
    color: blue;
}
```

**Output:** Cat Shop is blue.  
**Reason:** A class can override the style rule set through the element selector.

### Scenario 4

```html
<h1 class="blue-text pink-text">
    Cat Shop
</h1>
```

```css
body {
    color: green;
} 
h1 {
    color: red;
}
.blue-text {
    color: blue;
}
.pink-text {
    color: pink;
}
```

**Output:** Cat Shop is pink.  
**Reason:** The order of the classes listed inside the `<h1>` element is irrelevant. However, in CSS, the second declaration will always override the first declaration because browsers always read CSS from top to bottom in order of their declaration. Since `pink-text` is below the `blue-text`, the text of Cat Shop changed to Pink. 

### Scenario 5

```html
<h1 id="orange-text" "class="blue-text pink-text">
    Cat Shop
</h1>
```

```css
body {
    color: green;
}
h1 {
    color: red;
}
.blue-text {
    color: blue;
}
#orange-text {
    color: orange;
}
.pink-text {
    color: pink;
}
```

**Output:** Cat Shop is orange.  
**Reason:** ID selector always takes precedence over class selector regardless of whether it was declared above or below the class style. 

### Scenario 6

``` html
<h1 style="color: black;" id="orange-text" "class="blue-text pink-text">
    Cat Shop
</h1>
```

**Output:** Cat Shop is black.  
**Reason:** Notice how we added `style="color: black;"` to our `h1` element. Inline HTML style attribute overrides the element, class and the ID selectors altogether.

### Scenario 7

``` html
<h1 style="color: black;" id="orange-text" "class="blue-text pink-text">
    Cat Shop
</h1>
```

```css
body {
    color: green;
} 
h1 {
    color: red;
}
.blue-text {
    color: blue !important;
}
#orange-text {
    color: orange;
}
.pink-text {
    color: pink;
}
```

**Output:** Cat Shop is blue.  
**Reason:** `!important` is the most powerful of all. So when you absolutely need to be sure that an element has specific CSS, you can use `!important` which overrides all of `element, class, ID selectors` and `inline style attribute.` Using `!important` should be last resort when attempting to override a previously defined style rule.

</section>



