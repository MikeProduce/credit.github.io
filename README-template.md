# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Screenshot

![](./images/Screen%20Shot%202022-08-26%20at%205.25.34%20PM.png)

### Links

- Live Site URL: [https://mikeproduce.github.io/credit.github.io/]

## My process

I worked from top to bottom starting with using flexbox to manage the 2 main sides of the page and worked my way from there. I typed out all the html first then worked my way into the CSS and at the end added all the Javascript.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- I did not use mobile first workflow but definetly will next time i learned my lesson lol

### What I learned

I learned a lot especially when it came to Javascript. I had copied other cites before just using HTML and CSS but this was the first time i implemented Javascript myself using the DOM.
My project is no where near perfect and I can see some issues especially when it came to media querys. I struggled a lot when it came to making my webpage responsive. I got it to the best I could but will continue to practice this.

### Continued development

As I said above media querys are something I will 100% keep working on. It was the most difficult thing for me this project.
I need to learn how to refactor my code better. I tried to keep it 'DRY' but sometimes I just couldnt figure it out. one major example was this code

This was my if else statement that required all the inputs to be filled out. I tried to make an array of all the HTML elements then run a loop through them to check if they were all green but what ended up happening was that it would just pass as soon as the first one was green. I also tried 'every()' array method and that also did the same thing. I am unsure of how else I should of gone about this.

```
cardNum.style.borderColor === "green" &&
    expDate.style.borderColor === "green" &&
    monthYear.style.borderColor === "green" &&
    cvcInput.style.borderColor === "green" &&
    cardHolderTag.style.borderColor === "green" &&
    cvcInput.value.length === 3 &&
    monthYear.value.length === 2 &&
    expDate.value.length === 2 &&
    cardNum.value.length === 19
```

media querys and refactoring some CSS was also quiet challanging but i will continue to improve

### Useful resources

The website I used the most was stackoverflow for refrence on how some javascript functions worked and google. nothing fancy

## Author

- Website - [Miguel](https://mikeproduce.github.io/credit.github.io/)
- Frontend Mentor - [@MikeProduce](https://www.frontendmentor.io/profile/MikeProduce)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

I want to thank frontendmentor this was a really cool experience. As a new developer I dont really know what to build and this really helped me really put my skills to the test. I will continue to do more frontendmentor challanges!

```

```
