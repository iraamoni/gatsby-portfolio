---
path: "/blog/day-two-of-100daysofcode"
date: "2019-11-19"
readingTime: "5 - 7"
title: "Day 2 - Signup page"
---

Today has been a very productive day. I have gone through the basics of HTML again from [freecodecamp](https://www.freecodecamp.org/suborna) and finished the whole course. I have also created a beautiful sign-up form by following a tutorial from Youtube which was created by [Clever Techie](https://www.freecodecamp.org/suborna). The form was created using HTML and CSS. A few things I wasn't aware of until I made this form was: 

- `<fieldset>` - the `<fieldset>` element provides a grouping for a part of an HTML form, with a nested 
`<legend>` element providing a caption for the `<fieldset>`.

- Label - The `<label>` element is one of a handful of elements that only exists and makes sense in relationship to another element. For a `<label>` to work properly, it must include a **for** attribute, which identifies the `<input>` to which it is associated. The for attribute's value should match the id (not the name) of the `<input>` element.

- Internal links - To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to internally link to, usually further down the page. You then need to add the same `id` attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.Below is an example of an internal anchor link and its target element:

    ```{
        <a href="#contacts-header">Contacts</a>
        <h2 id="contacts-header">Contacts</h2>

- Required field - Make your text `input` a `required` field, so that your user can't submit the form without completing this field. For example; 

    ```<input type="text" required>```

I have also learned how to use [CopePen](https://codepen.io/suborna00/full/NWWoBNL) as I have never used it before. So I had to sing up and play around with it. I have also learnt how to share it on Twitter and how to copy paste the code from the local editor to the codepen editor. Here is an image of the from I have created: 

![signup_page](./images/sign-up.png)

    








