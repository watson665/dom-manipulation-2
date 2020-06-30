# dom-manipulation-2

## What's next?
Last [lecture](https://github.com/angeljuarez77/dom-manipulation) we spoke about the DOM and how to manipulate it. Specifically we reviewed how to select and modify elements in our HTML using Javascript. Today we're going to take it a step further. Instead of only selecting elements, modifying them, and adding to them. We're also going to talk about events inside of JS and HTML, what they are, why they're used, and how to handle them.

## But first... let's review.
Let's practice what we learned last lecture.
* We learned how to select elements
* Traverse information from an API call (or traversing objects)
* Render information into the DOM using JS (select your parent element. Then add a child to it)
* .innerHTML

Now if you remember the last activity we did during last weeks lecture. We're going to do the same thing again together. You should be able to see the starter code inside of the student_examples/starter_code folder inside of this repository.
<details open>
<summary>Last weeks code:</summary>
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Star Wars!!!</title>
</head>
<body>
    <h1>StarWarsssssss</h1>
    <ul id="list-of-starships">
        <!-- render li tags inside of here -->
            <!-- get element by id -->
            <!-- we have to create children elements inside of this <ul> -->
            <!-- Each child element would be an <li> tag -->
            <!-- document.createElement("li") -->
            <!-- Now I have to add content to this li -->
            <!-- li.innerHTML = starship.name -->
        <!-- each li tag. to have the name of the starship -->
            <!-- pull name of starship -->
    </ul>

    <div id="parent">
    </div>
    <script src="./javascript/app.js"></script>
</body>
</html>
```

```javascript
const BASE_URL = "https://swapi.dev/api/"

function getData() {
    fetch(BASE_URL + 'starships')
    .then(res => res.json())
    .then(data => {
        const arr = data.results;
        console.log(arr);
        // loop over arr
        arr.map(starship => {
            const ul = document.getElementById("list-of-starships")
            const li = document.createElement("li");
            li.innerHTML = starship.name;

            ul.appendChild(li);
        });
    })
    .catch(e => console.error(e))
    .finally(console.log('API call finished'));
}

getData();
```
</details>

Requirements.
* Attach an h1 to the body with your name in it (all of this should take place inside of your Javascript file)
* I want to render a div inside of the DOM. Each div would have an h1 tag with the name of the person (from our API response/data), an h2 tag with the birth year of the person, and an h3 with the hair color of the person.
The div should have a class of person. All of this content would be created inside of our JS file.
```html
<div class="person">
    <h1>{{ name }}</h1>
    <h2>{{ birth year }}</h2>
    <h3>{{ hair color }}</h3>
</div>
```

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
 * Now that you selected the element in the line above we could manipulate it (or add information to it) as we want/need
 * Here is an example of a few methods that we could run on it
*/
element.style.color = "red"; // <== this will change the font color of anything inside of the HTML element to red

element.style.appendChild(anotherElementCreatedFromJS); // <== do you remember what this does? Think: What is that param inside of the parentheses?
```
</details>

<details>
<summary>Hint 2:</summary>
<br>
When you choose a parent element you could add children to it (remember. A CHILD element is just an element inside of another element)
Example of children element:

```html
<!-- the ul (unordered list) in this case is the parent element of all of the li tags -->
<ul>
    <li>First Item</li> <!-- This li is the child element of the ul tag. Why? Because this li is inside of the ul tag -->
    <li>Second Item</li>
    <li>Third Item</li>
    <li>Fourth Item</li>
</ul>
```

Now that we have a parent element. We could CREATE elements inside of our Javascript file that would later be intended to be used as children elements. The way we make these created elements to children elements is like so

```javascript
// first you choose the parent element
const el = document.getElementById('element_id');
const newCreatedElement = document.createElement('h1'); // <== this creates an h1 tag that we could use throughout our JS file
h1.innerHTML = "Some hardcoded text";
el.appendChild(newCreatedElement); // <== this adds the h1 we created and manipulated in the last 2 lines as a CHILD of HTML element selected in the first line.
```
</details>

<details>
<summary>Hint 3:</summary>
<br>
In the last 2 hints we selected a parent element and also learned how to create an element and append it as a child. We just have to just loop through our API data (an array of objects) and use the techniques from the last 2 hints to append the information we're looping through to our selected DOM element.

How do we loop through an array of information? Well there are a few options. We could use a [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for), the [.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) array method, and the [.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) array method in our Javascript. I HIGHLY recommend you use the .map method so we could tackle 2 problems constantly encountered in software engineering.
1) We want to minimize the amount of code we write.
2) We don't want to risk compromising the integrity of our source of information.

```javascript
const arrOfObjects; // <== let's imagine this is an array of objects
/*
 * we could loop through it with a .map method and console.log every individual object to our html page/browser console
*/
arrOfObjects.map(item => console.log(item)); // <== this would log out every individual index/element/object within our array to the console on seperate lines.

arrOfObjects.map(item => console.log(item.property));

/*
 * if we have an array with objects. And every object inside of the array looks LIKE this obj below
 * (properties stay the same. Values change)
 * {
 *     "birth_year": "19 BBY",
 *     "eye_color": "Blue",
 *     "films": [
 *         "https://swapi.dev/api/films/1/",
 *         ...
 *     ],
 *     "gender": "Male",
 *     "hair_color": "Blond",
 *     "height": "172",
 *     "homeworld": "https://swapi.dev/api/planets/1/",
 *     "mass": "77",
 *     "name": "Luke Skywalker",
 *     "skin_color": "Fair",
 *     "created": "2014-12-09T13:50:51.644000Z",
 *     "edited": "2014-12-10T13:52:43.172000Z",
 *     "species": [
 *         "https://swapi.dev/api/species/1/"
 *     ],
 *     "starships": [
 *         "https://swapi.dev/api/starships/12/",
 *         ...
 *     ],
 *     "url": "https://swapi.dev/api/people/1/",
 *     "vehicles": [
 *         "https://swapi.dev/api/vehicles/14/"
 *         ...
 *     ]
 * }
 * And remember... All we want to do is grab up the specific property and add it to our corresponding HTML tag
*/
const data; // let's imagine this is the information from the api response, specifically the array of objects with each person
data.map(person => {
    // let's select the parent element
    const el = document.getElementById('element_id');
    // let's create the elements we'll need that don't exist in our dom
    // and will be used later to append to the parent element
    const div = document.createElement('div'); // html equivalent = <div></div>
    const h1 = document.createElement('h1'); // html equivalent = <h1></h1>
    h1.innerHTML = person.name; // html equivalent = <h1>Luke Skywalker</h1>
    const h2 = document.createElement('h2'); // html equiv = <h2></h2>
    h2.innerHTML = person.birth_year; // html equiv = <h2>19 BBY</h2>
    const h3 = document.createElement('h3'); // html equiv = <h3></h3>
    h3.innerHTML = person.hair_color; // html equiv = <h3>Blonde</h3>
    // we need to add the h1, h2, and h3 to our div as children of the div element so...
    div.appendChild(h1);
    /*
     * our div went from being an empty div (<div></div>) to this -->
     * <div>
     *    <h1>Luke Skywalker</h1>
     * </div>
    */
    div.appendChild(h2);
    /*
     * our div went from...
     * <div>
     *    <h1>Luke Skywalker</h1>
     * </div>
     *
     * to...
     *
     * <div>
     *    <h1>Luke Skywalker</h1>
     *    <h2>19 BBY</h2>
     * </div>
    */
    div.appendChild(h3);
    /*
     * our div went from...
     * <div>
     *    <h1>Luke Skywalker</h1>
     *    <h2>19 BBY</h2>
     * </div>
     *
     * to...
     *
     * <div>
     *    <h1>Luke Skywalker</h1>
     *    <h2>19 BBY</h2>
     *    <h3>Blonde</h3>
     * </div>
    */
    // now that we finally have our div with all the info we want. We could append the div to our parent element
    el.appendChild(div);
})
```
</details>

## Extra side practice...
* render 1000 divs with a for loop to the body of the HTML
* color each div a random color
* number every div from 1 - 1000

## Let's talk about events
What are [events](https://www.w3schools.com/js/js_events.asp) inside of HTMl and Javascript?

If we think about websites. They are now meant to be interactive. When we interact with something we always take some actions towards it. Sometimes with websites we click on items, submit forms, hover over elements, type inside of input boxes, and many others things. Every single one of these is an event. An action taken upon something in our HTML element.

A big part of front end development is to use our Javascript to decide how to interact with our events. And to take actions at every event.

What kind of actions are there? Here are a few...
* [onClick](https://www.w3schools.com/jsref/event_onclick.asp) -> is emmited when you click on an item inside of your HTML.
* [onSubmit](https://www.w3schools.com/jsref/event_onsubmit.asp) -> is emmited when you submit a form or click a submit button.
* [onLoad](https://www.w3schools.com/jsref/event_onload.asp) -> is emmited as soon as the page is loaded
* [on mouse over](https://www.w3schools.com/jsref/event_onmouseover.asp) -> is emmited when you put your mouse over an element

Every event could be categorized under certain event objects. What an event object is, is a general category for all possible events inside of our websites.

## How do we use them?

#### Event listeners
In order to use events inside of our Javascript files we first have to ATTACH [*_event listeners_*](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) to each individual element. The reason why is because instead of listening for EVERYTHING by default and _then_ deciding what events to ignore. It would be easier to explicitly tell our code "When THIS happens do THIS". Let us start practicing by making a button console log a greeting when we click it.

For this task we'll
* select the button in our Javascript file to use it later
* create a function with the specific action we want to run when clicked
* attach an onClick event listener to the button
* test it

## Additional Resources
* https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement - creating elements inside of js
* https://www.w3schools.com/jsref/prop_html_innerhtml.asp - adding content to an html element inside of our js
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map - .map
* https://www.w3schools.com/js/js_events.asp - events in js
* https://www.w3schools.com/jsref/obj_events.asp - event objects