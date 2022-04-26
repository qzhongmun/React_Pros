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
https://developer.mozilla.org/en-US/docs/Web/CSS/::marker  maker 修改

2个buttons 水平居中，放在总classname里面
  display: flex;
  justify-content: space-between; or center

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
start a new program app2
npx create-react-app@latest app2
cd app2
npm start

detele docs in /src and 
add folders: components(里面的文件名必须大写开头), images
add files: App.css, App.js, index.js
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