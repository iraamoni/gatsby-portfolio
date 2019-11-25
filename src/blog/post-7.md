---
path: "/blog/day-seven-of-100daysofcode"
date: "2019-11-24"
readingTime: "5-8"
title: "Day 7 - CSS FlexBox"
---

Today is sunday and also my birthday (I am 27 today 😭😭😭). I didn't get much done except doing the "CSS Flexbox" course on [freecodecamp](https://www.freecodecamp.org/suborna) and watched a CSS Flexbox tutorial playlist done by [The Net Ninja](https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG). CSS Flexbox is completely new to me hence it was very interesting to learn but I will need a lot of practice in order to grab the concept of it. 

Here is a few notes I have taken while playing the [Flexbox Froggy](https://flexboxfroggy.com/) game which might help me remember flexbox a little better in the future: 

# justify-content
Aligns items horizontally (unless flex-direction: column;). Below are the following values it accepts: 

- `flex-start:` Items align to the left side of the container. <br/>
- `flex-end:` Items align to the right side of the container.<br/>
- `center:` Items align at the center of the container.<br/>
<br/>
- `space-between:` Items display with equal spacing between them.<br/>
- `space-around:`Items display with equal spacing around them.<br/>

---

# align-items
Aligns items vertically. Below are the following values it accepts: 

- `flex-start:` Items align to the top side of the container. <br/>
- `flex-end:` Items align to the bottom side of the container.<br/>
- `center:` Items align at the vertical center of the container.<br/>
<br/>
- `baseline:` Items display at the baseline of the container.<br/>
- `stretch:` Items are stretched to fit the container.<br/>

---

# flex-direction
This CSS property defines the direction items are placed in the container. Below are the following values it accepts:

- `row:` Items are placed the same as the text direction.
- `row-reverse:` Items are placed opposite to the text direction.
- `column:` Items are placed top to bottom.
- `column-reverse:` Items are placed bottom to top.

---

# flex-wrap
The CSS `flex-wrap` property is used to specify whether flex items are forced into a single line or wrapped onto multiple lines.

- `nowrap:` Every item is fit to a single line.
- `wrap:` Items wrap around to additional lines.
- `wrap-reverse:` Items wrap around to additional lines in reverse.

---

# flex-flow
Flex-flow is a combination of these two properties: `flex-direction` and `flex-wrap`. This shorthand property accepts the value of one of the two properties separated by a space.

`flex-flow: column wrap` - an example

--- 

# align-content
This property sets how multiple lines are spaced apart from each other. This property takes the following values:

- `flex-start:` Lines are packed at the top of the container.
- `flex-end:` Lines are packed at the bottom of the container.
- `center:` Lines are packed at the vertical center of the container.
- `space-between:` Lines display with equal spacing between them.
- `space-around:` Lines display with equal spacing around them.
- `stretch:` Lines are stretched to fit the container.

NOTE: This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect


