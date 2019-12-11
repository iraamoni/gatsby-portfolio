---
path: "/blog/day-twentyfour-of-100daysofcode"
date: "2019-12-11"
readingTime: "10"
title: "Day 24 - Tips for code newbies from an experienced programmer"
---

##### ABOUT ME [The Code Newbie]  
As mentioned before in my previous blog posts, I am a codeNewBie who has started learning front-end development for just over a month. I am currently learning HTML, CSS and Javascript on [FreeCodeCamp](https://www.freecodecamp.org/), [Udemy](https://www.udemy.com/), [CodeCademy](https://www.codecademy.com/learn) and Youtube. 

##### ABOUT FOYSAL [The Programmer]
Also this has been mentioned before but I am extremely lucky to have my husband, [Foysal](https://foysal.it) beside me who also happens to be a programmer with 8 years of experience in web development and the solution to all my programming related issues. Through him, I have received a lot of coding related advices which I feel other code newbies may not be privileged enough to receive or not at least until they start a job or find a mentor.

Hence I have decided to share those advises with you code newbies to fill in the gaps earlier rather than at a later stage of their programming career. 

##### 1. SHORTCUTS

Try to stay on the keyboard as much as possible which means learning the shortcuts of the code editor you are using and **avoid using the mouse** as much as possible to perform an action. This may not feel like a big deal at the moment but when you actually start building a project and you have to add, edit or delete certain block of code on a massive project with hundreds of lines of code, those shortcuts will extremely come in handy. So start practising the shortcuts as early as possible. 

> If you are not familiar with a lot of shortcuts I have a [post here on dev.to](https://dev.to/iraamoni/vs-code-shortcuts-for-code-newbies-mac-windows-gif-h6c) that might help you get started. 

##### 2. INDENTATIONS

Programming language such as Python relies on indentations meaning the program might break altogether based on your indentations. However, even if that's not the case for other languages such as: JavaScript, it is equally as important to practice getting the indentations right to **improve readability** and to be able to easily **maintain** and **navigate** through the code you have written over time.

##### 3. NAMING CONVENTIONS 

This one is my favourite one! Foysal's advice is to name our **functions** with a 'verb' and name our **variables** with a 'noun'. The reason behind this logic is that, functions always perform an action which is a 'do'. Anything you do is a verb so name your functions with a verb. On the other hand, **noun** is just names used to identify people, places or things. 

#### DO 

``` javascript
function checkAuthentication () {
	// get authentication info from database/browser storage etc.
	const authenticationInfo = getAuthenticationInfoFromDatabase();
	
	if (authenticationInfo)
		return true;

	return false;
}
```

#### DON'T
``` javascript
function authentication () {
	// get authentication info from database/browser storage etc.
	const auth = authenticationInfo();
	
	if (auth)
		return true;

	return false;
}
```

It is more than okay to have very long names for functions and variables as long as it helps you understand the action you are performing very well. So you/I should stop being lazy or reduce the urge to shorten function/variable names (e.g. auth instead of authentication) because apparently our future self will thank us for appropriate naming conventions. 

##### 4. COMMENTS 

Always practice leaving a comment next to your code which again, will improve the readability and help you maintain the code at a later stage.  Comments and naming your functions/variables appropriately work together to jog your memory and it will eventually reduce stress and time consumption as you won't have to spend any extra time figuring out your own code.
  

##### 5. CONSISTENCY

There are many rules programmer follow to stay consistent within/across their projects. I am just trying to follow Foysal's recommended way of staying consistent but that does not necessarily mean you have to do too. You can build your own rules as long as the rules remain consistent. A few of his recommendations look like the following: 

- **Naming Files/Images** - kebab-casing
- **Naming Objects** - PascalCasing
- **Naming Variables/Functions** - camelCasing

> If you don't know the casing types used in programming, then read my blog on [casing types here](https://dev.to/iraamoni/common-casing-types-in-programming-2ham)

##### READING CODE 

Try looking through experienced programmer's code on Github to see how they write/organise their code and what you can do as a developer to improve your writing. Look through their files to understand more about coding structures, file names, indentations and so on. 

#### ADDITIONAL TIPS

##### USERNAME 

Always try to use the same username everywhere you sign-up to allow others to find you easily. This will not only build your self-identity but also allow others to recognise you easily in different platforms. Examples where you may sign up as a developer includes: 
- Github 
- Twitter 
- Stack Overflow
- Dev
- Medium
- Envato

##### BROWSER

Internet is like a unicorn and not getting distracted by a unicorn is always almost impossible, which is why while programming whether you are learning or working you should always separate your browsers into two sections: Programming & Personal. For example, use Chrome for programming related purposes and Firefox for Amazon purchases, redditing, 9gagging or anything else that gives you joy. This will allow you to stay focused and not open other websites that may distract you from learning or focusing on your work.


> Most of the above recommendations/tips are personal opinions formed through personal experiences and programmers working with different tools under different conditions might form opinions that differ from the above.

If you are an experienced programmer and have other recommendations/tips, please let me know on the comment below. I would love to hear your opinion regarding this. Thank you for reading!