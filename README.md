# Interactive_Button_Click_Tracker
## Date: 12/07/2025
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" ></script>
    <title>Button Click Tracker</title>
  </head>
  <body>
    <section class="container">
      <h1>Click Counter</h1>
      <button onclick="handleClick()">Click Me</button>
      <div id="result"></div>
    </section>
  </body>
</html>
```
## CSS Code:
```css
.container {
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container button{
    padding: 2em;
    border: #ffffff 1px solid;
    background-color: rgb(171, 184, 0);
    color: white;
    border-radius: 50%;
}
.container button:hover{
    cursor: pointer;
}
#result{
    margin: 20px;
    
}
```
## JavaScript Code:
```js

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();

function handleClick() {
  const resultDiv = document.getElementById("result");
  const currentCount = counter();
  resultDiv.textContent = `Count: ${currentCount}`;
}

```
## Output:
![alt text](image.png)
## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
