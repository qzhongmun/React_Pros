React:
hooks
figma
Basics: HTML,CSS,Javascript,cs6 
JSX

https://reactjs.org/docs/cdn-links.html
https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx

Create index.js  index.html   index.css
python -m http.server
visit http://localhost:8000/ 

ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
function MainContent() {return <h1>I'm learning React!</h1>;}
ReactDOM.render(<div><MainContent /></div>,document.getElementById("root"));

npx create-react-app@latest {project name}
cd {project name}
npm start
-------------------------------------------------------------------------------------------------------------------------------
CSS:
padding: 30px 25px;   top-bottom:30px, left-right padding:25px    这个不能用在主页面上，要不布局不齐
justify-content: space-between;
align-items: center;
font-weight: 600; 字体粗细
font-size: 22px; 字体大小
letter-spacing: -0.05em; 修改字体中间的距离
line-height: 19px; 修改字体高度
padding-block: 10px; 修改行之间的距离
max-width: 400px;   字段最大宽度
max-width: 100px;   解决图片最大宽度
text-align: justify;  文本左右齐
margin-right: auto;    文字自动靠右
text-indent: 5px;      文本前留空隙
<p><span className="bold">From $136</span> / person</p>   部分文字变成粗体 .bold{ font-weight: bold;}
https://developer.mozilla.org/en-US/docs/Web/CSS/::marker  maker 修改

<div className="Group">{DataElement}</div>          // 让模块并列排，可滑动
.Group {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-x: auto;
}
.整个模块{
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
}

  align-items: center;  //垂直居中

2个buttons 水平居中，放在总classname里面
  display: flex;
  justify-content: space-between; or center

 display: flex;            //水平居中
 align-items: center;

 body {
  min-height: 100vh; 
  display: flex;          //水平 垂直居中
  justify-content: center;       
  align-items: center;
}

height: 100px;
width: 100px;
border: 1px solid black;    //square shape
display: inline-block;      // display inline

set background picture:
main{
background-image: url(./images/reactjs-icon.png);
background-repeat: no-repeat;
background-position: right 50%;
background-size: cover;     背景图片占满整个容器
body {
  background: #282d35;
}

-------------------------------------------------------------------------------------------------------------------------------
Html:
<hr /> 换行

-------------------------------------------------------------------------------------------------------------------------------
JSX：
{Javascript}
{props.setup && <h3>Setup: {props.setup}</h3>}                                      // 如果存在setup，然后才显示setup
 <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>    // 如果存在setup，然后才显示setup
src={`../images/${props.img}`}      

Get data from hard writing:
Props input: <Contact img="./images/pumpkin.png"/>
Props output: export default function Contact(props) {return ( <img src={props.img}/>)}

Get data from file:
Props input: 
    import jokesData from "./jokesData"
    export default function App() {
    const jokeElements = jokesData.map(joke => {return <Joke setup={joke.setup} punchline="joke.punchline" /> })
Props output:   <div>{jokeElements}</div>

{props.openSpots === 0 && <div className="soldout">SOLD OUT</div>}   //一样的意思
{!props.openSpots && <div className="soldout">SOLD OUT</div>}         //一样的意思

input:
import Data from "./Data";
export default function App() {
  const DataElement = Data.map((x) => (
    <Footer
      key={x.id}
      item={x}
    />
  ));
output: src={`../images/${props.item.coverImg}`}

input:
import Data from "./Data";
export default function App() {
  const DataElement = Data.map((x) => (
    <Footer
      key={x.id}
      {...x}
    />
  ));
output: src={`../images/${props.coverImg}`}
------------------------------------------------------------------------------------------------------------------------------
Program1:
------------------------------------------------------------------------------------------------------------------------------
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
var s = document.getElementById('root');

function myFunction(text) {
    var h = document.createElement("H1");
    var t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
}
ReactDOM.render(myFunction('231'),s)
 
Ture answers are here:
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

-------------------------------------------------------------------------------------------------------------------------------

// JSX
ReactDOM.render(
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)
-------------------------------------------------------------------------------------------------------------------------------
import React from "react"
import ReactDOM from "react-dom"
 instead of <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
-------------------------------------------------------------------------------------------------------------------------------
Quize:
1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do and expect it to handle the details. 
Imperative means I need to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something larger/greater than the individual pieces.

-------------------------------------------------------------------------------------------------------------------------------
Custom Components:
-------------------------------------------------------------------------------------------------------------------------------
import React from "react"
import ReactDOM from "react-dom"

function TemporaryName() {
    return (
        <div>
            <img src="./react-logo.png" width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<TemporaryName />, document.getElementById("root"))
-------------------------------------------------------------------------------------------------------------------------------
import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" width="40px" />
                </nav>
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
-------------------------------------------------------------------------------------------------------------------------------
Quiz:
1. What is a React component?
A function that returns React elements. (UI), it is reusable

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
MyComponent()

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```
<Header />
-------------------------------------------------------------------------------------------------------------------------------
Child and Parent(Page()) Component:

import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
-------------------------------------------------------------------------------------------------------------------------------
css:
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    width: 60px;
}

.nav-items {
    list-style: none;
    display: flex;
}

.nav-items > li {
    padding: 10px;
}

index.js
import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
-------------------------------------------------------------------------------------------------------------------------------
Footer.js:
import React from "react";
export default function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

Main.js:
import Header from "./Header"
-------------------------------------------------------------------------------------------------------------------------------
Set up a local react environment with create react app:
Check for "node -v" and "npm -v"
npx create-react-app@latest {project name}
cd {project name}
npm start

https://elemefe.github.io/element-react/#/zh-CN/time-picker
https://www.amcharts.com/demos/
Free fonts style:
https://fonts.google.com/
CSS style:
https://developer.mozilla.org/en-US/docs/Web/CSS/::marker
-------------------------------------------------------------------------------------------------------------------------------
start a new program app2
npx create-react-app@latest app2
cd app2
npm start

detele docs in /src and 
add folders: components(里面的文件名必须大写开头), images
add files: App.css, App.js, index.js
-------------------------------------------------------------------------------------------------------------------------------
Git:
git init
git remote add origin url
git remote add master url
git pull
git —version
Git stash
git clone url
git branch -M master 
git checkout master
git remote remove origin //delete existed .git

git add .
git commit -m 'your message'
git push 


git remote -v
git branch
git add .
git commit -m "new commit"
git push origin master
git remote -v
git remote origin set-url https://github.com/qzhongmun/React_Pros.git
git remote set-url origin https://github.com/qzhongmun/React_Pros.git
git push origin master
-------------------------------------------------------------------------------------------------------------------------------
2. Data driven React:
props
creating omponents from an array

import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()     //logic part
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }                          //logic part
    
    return (
        <h1>Good {timeOfDay}!</h1>   //display part     it is JSX: <h1>Good {timeOfDay}!</h1>  inside{}is JavaScript
    )
}

HTML:
<input placeholder="First Name" />                => input 
<input placeholder="First Name" type="submit" />  => bottom 
<input placeholder="First Name" type="radio" />   => checkbox
-------------------------------------------------------------------------------------------------------------------------------
props:
import React from "react"
import Contact from "./Contact"

export default function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}



import React from "react"
export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/
-------------------------------------------------------------------------------------------------------------------------------
Quiz:
1. What do props help us accomplish?
Make a component more reusable.


2. How do you pass a prop into a component?
<MyAwesomeHeader title="???" />


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object!
-------------------------------------------------------------------------------------------------------------------------------
export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
Props: passing in non-string props
 Bool:           isPun={true}
 number:         upvotes={10}
 list:           comments={[{author: "", body: "", title: ""}, {...}]}
-------------------------------------------------------------------------------------------------------------------------------
map()

const squares = nums.map(function(num) {
    return num * num
})

const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

const squares = nums.map( x => x * x)
-------------------------------------------------------------------------------------------------------------------------------
export default function App() {
    const colors = [
            <h3>Red</h3>, 
            <h3>Orange</h3>, 
            <h3>Yellow</h3>,
            <h3>Green</h3>,
            <h3>Blue</h3>,
            <h3>Indigo</h3>,
            <h3>Violet</h3>
        ]
    return (
        <div>
            {colors}
        </div>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
Map Quiz:
1. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


2. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


3. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.

for(let i = 0; i < someArray.length; i++) {
    
}
-------------------------------------------------------------------------------------------------------------------------------
If picture can't display, put images file into public file, pictures will show
-------------------------------------------------------------------------------------------------------------------------------
Dynamic web app:
Event listeners
State
Conditional rendering
Forms
Side effects
-------------------------------------------------------------------------------------------------------------------------------
Header CSS:
* {
    box-sizing: border-box;
}

body {
    font-family: "Karla", sans-serif;
    margin: 0;
}

.header {
    display: flex;
    align-items: center;
    height: 65px;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
    color: white;
    padding: 20px;
}

.header--image {
    height: 100%;
    margin-right: 6px;
}

.header--title {
    font-size: 1.25rem;
    margin-right: auto;
}

.header--project {
    font-size: 0.75rem;
    font-weight: 500;
}
-------------------------------------------------------------------------------------------------------------------------------
Html + Css:

    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>

.form {
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;
}
.form--button {
    grid-column: 1 / -1;   //width=100%
}

-------------------------------------------------------------------------------------------------------------------------------
Listener:
https://reactjs.org/docs/events.html#mouse-events

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    
    function handleOnMouseOver() {
        console.log("MouseOver")
    }
    
    return (
        <div className="container">
            <img 
                src="https://picsum.photos/640/360" 
                onMouseOver={handleOnMouseOver} 
            />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

-------------------------------------------------------------------------------------------------------------------------------
const [things, setThings] = React.useState([]);
  let url;
  function addItem() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    const newThingText = url;
    // setThings((prevState) => [...prevState, newThingText]);  重复增加
    setThings((prevState) => [newThingText]); //只增加一次
  }

  const thingsElements = things.map((thing) => (
    <img key={thing} src={thing} className="img1" />
  ));

  return (
        <button className="form--button" onClick={addItem}>Get a new meme image 🖼</button>
      {thingsElements}
  );
}

-------------------------------------------------------------------------------------------------------------------------------
<Navbar darkMode={true} coverImage="some-image2" />   darkmode and lightmode ???

Props: imutable
State: will change the value
-------------------------------------------------------------------------------------------------------------------------------
states:

import React from "react";
import ReactDOM from "react-dom";

function APP(){
     const [users, setUsers] = React.useState([]);
     
    function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    const newUser = `Good ${timeOfDay}, ${name}!`
    setUsers((prevState) => [newUser]);
}

 const thingsElements = users.map((a) => (
    <p>{a}</p>
  ));

return(
    <div>
    <button onClick={() => greeting("bob1")}> hi</button>
    {thingsElements}
    </div>
);
    }

ReactDOM.render(<APP />, document.getElementById("root"))

-------------------------------------------------------------------------------------------------------------------------------
Quiz for state and props:

1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)


2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.


3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).


4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. State is mutable.
-------------------------------------------------------------------------------------------------------------------------------
React Hooks:
1. useState()
import React, {useState} from "react"     //or
React.useState()

destructure useState:
const [isImportant,  setIsImportant] = React.useState("Yes")

const [count, setCount] = React.useState(0)   
function add() {
    setCount(count + 1)     // equal to count++       
    //这个地方最好用call back：setCount(preCount => preCount+1) or  setCount(function(oldValue) { return oldValue + 1 })   
}

-------------------------------------------------------------------------------------------------------------------------------
State:

import React from "react"
export default function App() {
    const result = React.useState("Yes")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
state:

import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    function handleClick() {
        setIsImportant("No")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
useState:

import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)   
    function add() {
        setCount(count + 1)     // equal to count++       
        //这个地方最好用call back：setCount(preCount => preCount+1) or  setCount(function(oldValue) { return oldValue + 1 })   
    }
    
    function subtract() {
        setCount(count - 1)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}


css:
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #262626;
    color: #D9D9D9;
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.counter {
    display: flex;
    align-items: flex-end;
}

.counter > button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: #737373;
    color: #D9D9D9;
    font-size: 1.5rem;
}

.counter > button:hover {
    background-color: #404040;
    color: #D9D9D9;
}

.counter > button:focus {
    outline: none;
}

.counter--count {
    background-color: white;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #262626;
}

.counter--plus {
    margin-left: -20px;
}

.counter--minus {
    margin-right: -20px;
    z-index: 1;
}
-------------------------------------------------------------------------------------------------------------------------------
Quiz2: useState:

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

-------------------------------------------------------------------------------------------------------------------------------
useState: 用此方法，修改后自动更新
export default function Meme() {
    const [isImportant, setIsImportant] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setIsImportant(memesArray[randomNumber].url)
    }
    return (
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            <img className="img2" src={isImportant}></img>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
ternary：
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
condition ? exprIfTrue : exprIfFalse

let answer = isGoingOut === true ? "Yes" : "No"     /or below

const isGoingOut = false                          /or below
let answer = isGoingOut ? "Yes" : "No"

const isGoingOut = false
return (
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value">
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    </div>
)
-------------------------------------------------------------------------------------------------------------------------------
useState: 通过点击Yes/No 连续变化
export default function App() {
    const [isGoingOut,setIsGoingOut] = React.useState(true)
    const [isGoing,setIsGoing] = React.useState("Yes")
    function handleGoing(){
        isGoingOut ? setIsGoing("No") : setIsGoing("Yes")
        setIsGoingOut(!isGoingOut)
    }
    return (
            <div className="state--value" onClick={handleGoing}>
                <h1>{isGoing}</h1>
            </div>
    )
}

updated code:
export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    return (
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>)}
-------------------------------------------------------------------------------------------------------------------------------
useState: Add pages
function App() {
    const [thingsArray,setThingsArray] = React.useState(["Thing 1", "Thing 2"]) 
    function addItem() {
        setThingsArray(predata =>[...predata,`Thing ${predata.length + 1}`])
    } 
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
-------------------------------------------------------------------------------------------------------------------------------
useState + CSS : Card 
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

CSS:
* {
    box-sizing: border-box;
}

body {
    background-color: whitesmoke;
    margin: 0;
    font-family: "Inter", sans-serif;
}

main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 200px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 350px;
    box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -webkit-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
    -moz-box-shadow: 5px 5px 5px 1px rgba(120,120,120,0.44);
}

.card--image {
    width: 100%;
    padding: 10%;
    padding-bottom: 0;
}

.card--name {
    margin-block: 13px;
    color: #333333;
}

.card--info {
    padding: 10px;
}

.card--favorite {
    width: 25px;
    cursor: pointer;
}

.card--contact {
    font-size: 0.75rem;
    color: gray;
    margin-block: 7px;
}
-------------------------------------------------------------------------------------------------------------------------------
useState: only change part of it

const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
})

function toggleFavorite() {
    setContact(prevContact => {
        return {
            ...prevContact,                  //important
            isFavorite: !prevContact.isFavorite //only change this one
        }
    })
}

or 
setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite    //(include object) 
        }))
    
-------------------------------------------------------------------------------------------------------------------------------
react will automatically update when you change the components, it is wonderful

APP.js
import React from "react"
import Count from "./Count"
export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    console.log("App component rendered")
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

Count.js
import React from "react"
export default function Count(props) {
    console.log("Count component rendered")
    
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}

-------------------------------------------------------------------------------------------------------------------------------
Setting state from child components

App.js (parent)
import React from "react"
import Star from "./Star"
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }  
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

Star.js (Child)
import React from "react"
export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}
-------------------------------------------------------------------------------------------------------------------------------
Passing data to components: sibling can't pass data, we have to move data to parent, then sibling can share the data

App.js Parent:
import React from "react"
import Header from "./Header"
import Body from "./Body"
export default function App() {
    const [user, setUser] = React.useState("Joe1")
    return (
        <main>
            <Header name={user}/>
            <Body name={user}/>
        </main>
    )
}

Header.js Child1:
import React from "react"
export default function Header(props) {
    return (
        <header>
            <p>Current user: {props.name}</p>
        </header>
    )
}

Body.js   Child2:
import React from "react"
export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.name}!</h1>
        </section>
    )
}

-------------------------------------------------------------------------------------------------------------------------------
Dynamic Styles:

index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(<App darkMode={false} />, document.getElementById("root"))

App.js
import React from "react"
import boxes from "./boxes"
export default function App(props) {
    const [squares, setSquares] = React.useState(boxes) 
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }  
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>       //it is important here, we can use {{backgroundColor: props.darkMode ? "#222222" : "#cccccc"}} too
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
-------------------------------------------------------------------------------------------------------------------------------
import React from "react"
import boxes from "./boxes"
import Box from "./Box"
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />      //have to include key, or err, but can't have onClick listeners, it won't work. but onclike works in div,h1...begin with lower words
    ))   
    return (
        <main>
            {squareElements}
        </main>
    )
}

-------------------------------------------------------------------------------------------------------------------------------
Boxes Change: it is too complicate, we have to state at app.js and box.js
App.js
import React from "react"
import boxes from "./boxes"
import Box from "./Box"
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

Box.js
import React from "react"
export default function Box(props) {
    const [on, setOn] = React.useState(props.on)
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}

CSS:
.box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    display: inline-block;
    margin-right: 4px;
    border-radius: 5px;
}
-------------------------------------------------------------------------------------------------------------------------------
Derived State:
https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

Boxes Change: we only use one state to do it
App.js
import React from "react"
import boxes from "./boxes"
import Box from "./Box"
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    function toggle(id) {
        console.log(id)                //important
    }
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}           //important
            on={square.on} 
            toggle={toggle}          //important
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}

Box.js
import React from "react"
export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}     //important, only this way, we can pass parameter
        >
        </div>
    )
}

-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------













-------------------------------------------------------------------------------------------------------------------------------
 Alt+command+F    align code
 npm i element-react  --legacy-peer-deps
  npm install element-theme-default --legacy-peer-deps

  npm view react version

  -------------------------------------------------------------------------------------------------------------------------------
React-native:

npm install react-native-elements --legacy-peer-deps

-------------------------------------------------------------------------------------------------------------------------
element library: A Desktop UI Library
Element, a Vue 2.0 based component library for developers, designers and product managers