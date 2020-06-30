# dom-manipulation-2

## What's next?
Last [lecture](https://github.com/angeljuarez77/dom-manipulation) we spoke about the DOM and how to manipulate it. Specifically we reviewed how to select and modify elements in our HTML using Javascript. Today we're going to take it a step further. Instead of only selecting elements, modifying them, and adding to them. We're also going to talk about events inside of JS and HTML, what they are, why they're used, and how to handle them.

## But first... let's review.
Let's practice what we learned last lecture.
* We learned how to select elements
* Traverse information from an API call (or traversing objects)
* Render information into the DOM using JS (select your parent element. Then add a child to it)
* .innerHTML

Now if you remember the last activity we did during last weeks lecture. We're going to do the same thing again together. You should be able to see the starter code inside of the student_examples/starter_code folder inside of this repository

Here are some hints on how to accomplish this task:
<details>
<summary>Hint 1:</summary>
<br>
First we have to select the parent element. Why? Well the parent element is the container that's going to carry all of the information that are going to render. If you don't select something from the DOM then you'll essentially be sending the information we received to the void.

```javascript
/*
 * How do we select a SINGLE element from the DOM?
*/
const element = document.getElementById('element_id');
/*
 * Now that you selected in the element in the line above we could manipulate it (or add information to it) as we want/need
 * Here is an example of a few methods that we could run on it
*/
element.style.color = "red"; // <== this will change the font color of anything inside of the HTML element to red

element.style.appendChild(anotherElementCreatedFromJS); // <== do you remember what this does? Think: What is that param inside of the parentheses?
```
</details>
