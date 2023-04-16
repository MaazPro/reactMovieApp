---
id: e1f30
title: "React Movie App "
file_version: 1.1.2
app_version: 1.6.2
---

*   React components are injected here with an id of root.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 public/index.html
```html
31         <div id="root"></div>
32         <!--
```

<br/>

*   This renders the components in to the real application/Dom in to a div which has an id of root.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/index.js
```javascript
6      ReactDOM.render(<App />, document.getElementById('root'));
```

<br/>

*   Imports the 'App.js' file.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/index.js
```javascript
4      import App from './App';
```

<br/>

*   Imports the react library.

*   Imports the UseEffect and UseState hook.

*   Imports the App.css file.

*   Imports the search icon.

*   Imports the MovieCard jsx file which is the reusable movie card component.
<br/>
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
1      import React from 'react';
2      import { useEffect, useState } from 'react';
3      import './App.css';
4      import searchIcon from './search.svg';
5      import MovieCard from './MovieCard';
6      
```

<br/>

*   The api url that is used to access data from the api with the key. This url is used from within the component to fetch data.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
7      const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6872dc01';
8      
```

<br/>

*   Static data that is used for testing. This data is extracted from the api.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
10     const movie1 = {
11         "Title": "Amazing Spiderman Syndrome",
12         "Year": "2012",
13         "imdbID": "tt2586634",
14         "Type": "movie",
15         "Poster": "N/A"
16     }
```

<br/>

*   Functional component named App
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
19     const App = () => {
```

<br/>

*   Use State hook.

*   There are 2 useState hooks used in this project.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
20     
21         const [movies, setMovies] = useState([]);
```

<br/>

*   Use State hook.

*   There are 2 useState hooks used in this project. This function implements the fetch api to access the data. It first makes the call.

*   The `searchMovies`<swm-token data-swm-token=":src/App.js:23:3:3:`    const searchMovies = async (title) =&gt; {`"/> function implements the fetch api to access the data. It first makes the call.

*   This method accepts a string parameter which is the movie name that is concatenated to the Url.

*   Waits for a response and captures it in the 'data' constant in Json format.

*   `setMovies`<swm-token data-swm-token=":src/App.js:21:7:7:`    const [movies, setMovies] = useState([]);`"/> sets the initial state and fetches the movie data from the Api.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
23         const searchMovies = async (title) => {
24             const response = await fetch(`${API_URL}&s=${title}`); // calling the API
25             const data = await response.json();
26             // console.log(data.Search);
27             setMovies(data.Search);
28         }
```

<br/>

*   This div is the root container that holds all the elements.

*   Header of the page that is displayed at the top.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
33         return (
34             <div className='app'>
35                 <h1>Movies</h1>
36     
```

<br/>

*   This is a separate file that hold the react movie component. Jumping over to this component file.

*   Imports the react library.

*   Reusable functional component that displays the movie card.

*   The component takes in a movie prop as argument.

*   The prop is de-structured by using curly braces in order to target the value using the movie reference object instead of adding props.movie.name.

*   The div with the `className`<swm-token data-swm-token=":src/MovieCard.jsx:5:4:4:`        &lt;div className=&#39;movie&#39;&gt;`"/> name of "movie" is the wrapper div that hold all the elements in the card.

*   `movie.Year`<swm-token data-swm-token=":src/MovieCard.jsx:7:5:7:`            &lt;p&gt;{movie.Year}&lt;/p&gt;`"/> This div holds the p tag element that displays the movie year from the movie object.

*   `&lt;`<swm-token data-swm-token=":src/MovieCard.jsx:11:1:1:`            &lt;img src={movie.Poster !== &#39;N/A&#39; ? movie.Poster : &#39;https://via.placeholder.com/400&#39;}`"/>div> This div holds the image element that displays the movie poster/image.

*   `movie.Poster`<swm-token data-swm-token=":src/MovieCard.jsx:11:7:9:`            &lt;img src={movie.Poster !== &#39;N/A&#39; ? movie.Poster : &#39;https://via.placeholder.com/400&#39;}`"/> !== 'N/A' if statement that displays the movie image if the movie poster's value is not equivalent to "N/A". This value is provided by the api.

*   `&#39;https://via.placeholder.com/400&#39;`<swm-token data-swm-token=":src/MovieCard.jsx:11:27:37:`            &lt;img src={movie.Poster !== &#39;N/A&#39; ? movie.Poster : &#39;https://via.placeholder.com/400&#39;}`"/> If the image is not available a place holder image is displayed in its place. Otherwise only the movie title is displayed.

*   `&lt;div`<swm-token data-swm-token=":src/MovieCard.jsx:16:1:2:`        &lt;div&gt;`"/>\> The div tag holds the span element which displays the movie type. Another element is the h3 tag which displays movie title.
<br/>
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/MovieCard.jsx
```javascript
1      import React from "react";
2      
3      const MovieCard = ({movie})=>{
4          return(
5              <div className='movie'>
6              <div>
7                  <p>{movie.Year}</p>
8              </div>
9              
10             <div>
11                 <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
12                 alt = {movie.Title}
13                 />
14             </div>
15     
16             <div>
17                 <span>{movie.Type}</span>
18                 <h3>{movie.Title}</h3>
19             </div>
20         </div>
21         )
22     }
23     export default MovieCard;
```

<br/>

*   Jumping back over to the App.js file. This code block here calls the `MovieCard`<swm-token data-swm-token=":src/MovieCard.jsx:3:2:2:`const MovieCard = ({movie})=&gt;{`"/>described earlier.

*   This" `?.`<swm-token data-swm-token=":src/App.js:50:2:2:`                movies?.length &gt; 0`"/>" is an if statement that checks if the length is greater than 0. If it evaluates to true then the movie card is rendered on the screen.

*   Else block of the if statement. If the condition evaluates to false then this block of code `:`<swm-token data-swm-token=":src/App.js:60:3:3:`                    ) : (`"/> is triggered.

*   The `map`<swm-token data-swm-token=":src/App.js:55:3:3:`                                movies.map((movie) =&gt; (`"/> function allows to map over an array and obtain single movie object in each iteration of the callback function.

*   This allows to dynamically loop over movies array that is fetched from an Api. Each individual object is dynamically passed as a prop to movie card.

*   `movie`<swm-token data-swm-token=":src/App.js:56:4:4:`                                    &lt;MovieCard movie={movie} /&gt;`"/>Card card component is called here.
<br/>
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
49                 {
50                     movies?.length > 0
51                         ? (
52                             <div className='container'>
53                                 {/* <MovieCard movie={movies[0]}/> */}
54                                 {
55                                     movies.map((movie) => (
56                                         <MovieCard movie={movie} />
57                                     ))
58                                 }
59                             </div>
60                         ) : (
61                             <div className='empty'>
62                                 <h2>No movies found</h2>
63                             </div>
64                         )
65                 }
66     
67             </div>
68         );
69     }
```

<br/>

*   The second useState hook is used for the search functionality.

*   The initial state of the hook is empty because the value is passed to it from the input field.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
22         const [searchTerm, setSearchTerm] = useState('');
```

<br/>

*   The input field that takes in string values from the user.

*   The value is saved in the variable searchTerm.

*   onChange event sets the value for the useState hook. This data is used as an argument to set the state value.
<br/>
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
37                 <div className='search'>
38                     <input
39                         placeholder='Search movies here'
40                         value= {searchTerm}
41                         onChange={(e) => setSearchTerm(e.target.value)}
42                     />
43                     <img
44                         src={searchIcon}
45                         alt="Search"
46                         onClick={() => searchMovies(searchTerm)}
47                     />
48                 </div>
```

<br/>

*   The image tag is the magnifying glass that is to the right of the input field.

*   The on click event is used because it is also used as a button.

*   `onClick`<swm-token data-swm-token=":src/App.js:46:1:1:`                    onClick={() =&gt; searchMovies(searchTerm)}`"/> event uses the `searchTerm`<swm-token data-swm-token=":src/App.js:46:11:11:`                    onClick={() =&gt; searchMovies(searchTerm)}`"/> dynamic state. This changes the state as the button is clicked.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
43                     <img
44                         src={searchIcon}
45                         alt="Search"
46                         onClick={() => searchMovies(searchTerm)}
47                     />
```

<br/>

*   The useEffect hook that accepts a callback function and an empty array. This hook sets the initial state when the page is refreshed.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.js
```javascript
30         useEffect(() => {
31             searchMovies('Avengers');
32         }, []);
```

<br/>

*   This resets the default value of the margin, border and box-sizing properties.

*   The box-sizing property allows to define how the dimensions of an element are calculated, taking into account its padding and border.

*   The border-box value for box-sizing makes sure that the total width and height of an element include its content, padding, and border.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
3      
4      * {
5        margin: 0;
6        border: 0;
7        box-sizing: border-box;
8      }
```

<br/>

*   The :root pseudo-class targets the root html element of the document. This is wrapper div that holds all the html elements.

*   \--font-roboto and --font-raleway are defined as variables with the values "Roboto Slab", serif and "Raleway", sans-serif which can be used throughout the document.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
9      
10     :root {
11       --font-roboto: "Roboto Slab", serif;
12       --font-raleway: "Raleway", sans-serif;
13     }
14     
```

<br/>

*   This targetted element "body" sets the font-family and background-color properties for the body element.

*   The font-family property is set to var(--font-roboto), which is a CSS variable that holds the value "Roboto Slab", serif.<br/>
    This means that the body element will have the Roboto Slab font family applied to it.

*   The background-color property is set to #212426, which is a dark gray color value. This will set the background color of the body element to a dark gray color.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
15     body {
16       font-family: var(--font-roboto);
17       background-color: #212426;
18     }
```

<br/>

*   The .app element with a flex layout and centers and stacks its content, making it more responsive and visually appealing.

*   The padding property is set to 4rem, which means that the .app element will have a 4-rem padding on all sides, providing spacing between the content and the edges of the element.

*   The display property is set to flex, the .app element will use the flexbox layout model. This allows for flexible and responsive layout designs, where items can be positioned and resized according to the available space.

*   The justify-content property is set to center, which centers the flex items along the horizontal axis within the .app element.

*   The align-items property is set to center, which centers the flex items along the vertical axis within the .app element.

*   The flex-direction property is set to column, which means that the flex items will be stacked vertically within the .app element, as opposed to horizontally.

*   By using the display: flex and other flex properties, this CSS code snippet creates a flexible and responsive layout for the .app element, making it easy to center and stack content vertically within the element.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
20     .app {
21       padding: 4rem;
22     
23       display: flex;
24       justify-content: center;
25       align-items: center;
26       flex-direction: column;
27     }
28     
```

<br/>

*   The font size of the h1 tag is set to 3rem.

*   The property value pair letter-spacing: 0.9px; sets the letter-spacing property to 0.9 pixels.<br/>
    This means that there will be an additional space of 0.9 pixels between each character of the text element that this style is applied to.

*   The background property to a linear gradient that creates a fading effect from one color to transparent. The linear-gradient function is used to create a gradient that transitions from one color to another. It takes two parameters: the direction of the gradient (in degrees or keywords) and the color stops.

*   The value 90deg specifies that the gradient is vertical, with the top of the element being the starting point, and the rgba() color function is used to specify the colors at each stop of the gradient.

*   The first rgba(249, 211, 180, 1) value is the starting color, and it represents an opaque shade of light brown with an RGB value of (249, 211, 180). The 1 value is the opacity, which ranges from 0 to 1.

*   The second rgba(249, 211, 180, 0) value is the ending color and represents a fully transparent shade of light brown with the same RGB value. The 0 value represents 0% opacity, meaning it will fully fade out to transparency.

*   The property value pIR background-clip: text; sets the background clip property to text, which means that the background color is applied only to the text itself, instead of the entire element box. This allows the gradient background color to be seen only where the text is present.

*   webkit-background-clip: text; is a vendor prefix used for webkit-based browsers, such as Chrome and Safari, to ensure compatibility with those browsers.

*   webkit-text-fill-color: transparent; is another webkit-based property that sets the color of the text to transparent so that it becomes invisible, revealing the gradient background color beneath it.

*   width: fit-content; sets the width of the h1 element to the minimum width required to fit the content of the element. This ensures that the gradient background color is applied only to the width of the text and not the entire element.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
29     h1 {
30       font-size: 3rem;
31       letter-spacing: 0.9px;
32       background: linear-gradient(
33         90deg,
34         rgba(249, 211, 180, 1) 0%,
35         rgba(249, 211, 180, 0) 100%
36       );
37       background-clip: text;
38       -webkit-background-clip: text;
39       -webkit-text-fill-color: transparent;
40       width: fit-content;
41     }
```

<br/>

*   This targets the search div. It sets its width to 71% of the screen size.

*   The following attribute margin: 4rem 0 2rem; sets the top margin to 4rem, the bottom margin to 2rem, and the left and right margins to 0.

*   The display: flex; attribute sets the display property to flex, which enables flexbox layout for the element.

*   The attribute align-items: center; centers the child elements vertically within the flex container.

*   The property justify-content: center; centers the child elements horizontally within the flex container.

*   The property padding sets the spacing for within the element to 1.5rem from the top and bottom. And 1.75rem from the left and right.

*   The border-radius attribute allows to curve the border of the element to 3rem. This gives it a clean round look.

*   The background color is set to the hex value of '#1f2123' which is appears as dark grey color.

*   \-webkit-box-shadow is a CSS property that adds a shadow effect to an element. It is a vendor-specific prefix for webkit-based browsers, such as Safari and Chrome.

*   box-shadow is a CSS property that adds a shadow effect to an element. It works similarly to -webkit-box-shadow, but without the vendor-specific prefix.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
43     .search {
44       width: 71%;
45       margin: 4rem 0 2rem;
46     
47       display: flex;
48       align-items: center;
49       justify-content: center;
50     
51       padding: 1.5rem 1.75rem;
52       border-radius: 3rem;
53       background: #1f2123;
54       -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
55       box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
56     }
```

<br/>

*   This is targetting the embeded input element inside of the search div. flex: 1 is being applied to the input element within the .search class, which means that the input element will grow and shrink to fill the available horizontal space within the .search element.

*   The css attribute border: none removes the border.

*   It sets the font size of the text inside of the input element ot 1.5rem.

*   The font-family is set to the variable of --font-raleway which was defined earlier in the project.

*   The css property font-weight: 500 is being used to set the font weight to a value between normal and bold, creating a medium weight for the text.

*   The padding to the right of the element is 1rem.

*   outline: none is being used to remove the default outline that appears when an element is focused using the keyboard or other input method.

*   The color of the font is set to the hex value of #a1a1a1.

*   The backgroud color is set to the hex value of #1f2123.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
58     .search input {
59       flex: 1;
60       border: none;
61       font-size: 1.5rem;
62       font-family: var(--font-raleway);
63       font-weight: 500;
64       padding-right: 1rem;
65     
66       outline: none;
67       color: #a1a1a1;
68       background: #1f2123;
69     }
```

<br/>

*   This class target the image. The width and height of the image is set to 35px.

*   The cursor property allows the mouse to change to a pointer when it hovers over the image.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
71     .search img {
72       width: 35px;
73       height: 35px;
74       cursor: pointer;
75     }
76     
```

<br/>

*   This target the class name of empty.

*   width: 100%; sets the width of the element to 100% of its container, making it take up the full width of the available space.

*   margin-top: 3rem; adds a margin of 3 rem (which is 3 times the font size) to the top of the element, creating some vertical space between it and other elements on the page.

*   display: flex; sets the display property to flex, making the element a flex container.

*   justify-content: center; centers the child elements horizontally within the container.

*   align-items: center; centers the child elements vertically within the container.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
92     .empty {
93       width: 100%;
94       margin-top: 3rem;
95     
96       display: flex;
97       justify-content: center;
98       align-items: center;
99     }
100    
```

<br/>

*   This targets the h2 element embeded inside the div with the class name of empty.

*   The font size is 1.25rem.

*   The font-family is set to the variable of --font-raleway which was defined earlier in the project.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
101    .empty h2 {
102      font-size: 1.25rem;
103      color: #f9d3b4;
104      font-family: var(--font-raleway);
105    }
106    
```

<br/>

*   This targets the div with the class name of container.

*   width: 100%; sets the width of the element to 100% of its container, making it take up the full width of the available space.

*   margin-top: 3rem; adds a margin of 3 rem (which is 3 times the font size) to the top of the element, creating some vertical space between it and other elements on the page.

*   display: flex; sets the display property to flex, making the element a flex container.

*   justify-content: center; centers the child elements horizontally within the container.

*   align-items: center; centers the child elements vertically within the container.

*   flex-wrap: wrap; allows the child elements to wrap to the next line if there is not enough horizontal space.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
107    .container {
108      width: 100%;
109      margin-top: 3rem;
110    
111      display: flex;
112      justify-content: center;
113      align-items: center;
114      flex-wrap: wrap;
115    }
```

<br/>

*   width: 310px: Sets the width of the element to 310 pixels.

*   height: 460px: Sets the height of the element to 460 pixels.

*   margin: 1.5rem: Sets the margin around the element to 1.5rem (which is a shorthand for top, right, bottom, and left margins).

*   position: relative: Sets the position of the element to be relative to its parent element.

*   border-radius: 12px: Sets the radius of the element's corners to 12 pixels, giving it a rounded appearance.

*   overflow: hidden: Hides any content that overflows the element's boundaries.

*   border: none: Removes any borders around the element.

*   transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1): Specifies the property that will be transitioned (all) over a duration of 0.4 seconds using a cubic-bezier timing function.

*   box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1): Adds a box shadow to the element, with a horizontal offset of 0 pixels, a vertical offset of 13 pixels, a blur radius of 10 pixels, a spread radius of -7 pixels, and a color of rgba(0, 0, 0, 0.1). This gives the element a subtle drop shadow effect.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
117    .movie {
118      width: 310px;
119      height: 460px;
120      margin: 1.5rem;
121    
122      position: relative;
123      border-radius: 12px;
124      overflow: hidden;
125      border: none;
126    
127      transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
128      box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
129    }
130    
```

<br/>

*   This CSS rule selects the first div element within an element with the class of movie and applies the six attributes listed in the block.

*   position: absolute;: Positions the element relative to its closest positioned ancestor, which in this case is the .movie container that has position: relative set in a previous rule.

*   padding: 16px;: Adds 16 pixels of padding on all sides of the element's content.

*   width: 100%;: Sets the element's width to 100% of its container.

*   opacity: 0;: Makes the element fully transparent.

*   top: 0;: Positions the element at the top of its container.

*   color: #f9d3b4;: Sets the text color of the element to a light peach color.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
131    .movie div:nth-of-type(1) {
132      position: absolute;
133      padding: 16px;
134      width: 100%;
135      opacity: 0;
136      top: 0;
137      color: #f9d3b4;
138    }
139    
```

<br/>

*   The block of code adds the hover effects to the .movie element when a user hovers over it with their mouse.

*   box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1); adds a box shadow effect to the .movie element when the user hovers over it.

*   transform: scale(1.05, 1.05); scales up the size of the .movie element by 5% on both the X and Y axis, creating a zoom-in effect when the user hovers over it.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
140    .movie:hover {
141      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
142      transform: scale(1.05, 1.05);
143    }
144    
```

<br/>

*   This code is targeting the second div element inside the HTML element with the class "movie".

*   width: 100%; sets the width of the second div to 100% of its container.

*   height: 100%; sets the height of the second div to 100% of its container.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
145    .movie div:nth-of-type(2) {
146      width: 100%;
147      height: 100%;
148    }
149    
```

<br/>

*   This code selects the second div element inside the HTML element with class movie, and then applies a style to any img element that is a child of it.

*   Specifically, it sets the height and width of the img to 100%, which means it will take up the entire height and width of its parent div element.

*   This ensures that the movie poster image will fill the entire div and be properly displayed.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
150    .movie div:nth-of-type(2) img {
151      height: 100%;
152      width: 100%;
153    }
```

<br/>

*   This code is targeting the third div element inside the .movie.

*   z-index: 2;: Sets the stacking order of this element. Elements with a higher z-index value appear in front of elements with a lower value.

*   background-color: #343739;: Sets the background color of the element.

*   padding: 16px 24px 24px 24px;: Sets the padding of the element with 16 pixels at the top, 24 pixels on the right, 24 pixels at the bottom, and 24 pixels on the left.

*   position: absolute;: Sets the position of the element as absolute, which allows it to be positioned relative to its closest positioned ancestor or to the containing block.

*   bottom: 0; right: 0; left: 0;: Positions the element at the bottom of its containing block and stretches it to fill the entire width of the containing block.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
155    .movie div:nth-of-type(3) {
156      z-index: 2;
157      background-color: #343739;
158      padding: 16px 24px 24px 24px;
159    
160      position: absolute;
161      bottom: 0;
162      right: 0;
163      left: 0;
164    }
```

<br/>

*   This CSS code targets the span element inside the third div child element of the .movie element. It sets the font family to "Raleway" with a fallback to sans-serif if the font is not available. The text is transformed to uppercase with a font size of 13 pixels. The letter-spacing property specifies the space between each character. The font weight is set to 500 which is semi-bold and the color of the text is set to #f0f0f0 which is a light gray color.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
166    .movie div:nth-of-type(3) span {
167      font-family: "Raleway", sans-serif;
168      text-transform: uppercase;
169      font-size: 13px;
170      letter-spacing: 2px;
171      font-weight: 500;
172      color: #f0f0f0;
173    }
```

<br/>

*   movie div:nth-of-type(3) h3 uses CSS selectors to target the third h3 element inside a div element with the class name movie. The :nth-of-type(3) pseudo-class is used to select the third occurrence of the div element with the class name movie.

*   margin-top, font-family, and color are applied to the targeted h3 element. The margin-top property sets the top margin of the h3 element to 5 pixels, the font-family property specifies the font family to be used for the h3 element as "Roboto Slab",<br/>
    and the color property sets the color of the text inside the h3 element to #f9d3b4, which is a light shade of orange.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
174    
175    .movie div:nth-of-type(3) h3 {
176      margin-top: 5px;
177      font-family: "Roboto Slab", serif;
178      color: #f9d3b4;
179    }
180    
```

<br/>

*   movie:hover uses the :hover pseudo-class to select the div element with the class name movie when it is being hovered over by the user.

*   div:nth-of-type(2) further narrows down the selection by targeting the second occurrence of a div element inside the movie element.

*   The CSS properties height and opacity are then applied to the targeted div element. The height property sets the height of the div element to 100%, which will cause it to expand to the full height of its parent element. The opacity property sets the opacity of the div element to 0.3, which will make it slightly transparent.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
181    .movie:hover div:nth-of-type(2) {
182      height: 100%;
183      opacity: 0.3;
184    }
185    
```

<br/>

*   movie:hover uses the :hover pseudo-class to select the div element with the class name movie when it is being hovered over by the user.

*   The code div:nth-of-type(3) further narrows down the selection by targeting the third occurrence of a div element inside the movie element.

*   The CSS property background-color is then applied to the targeted div element, setting its background color to transparent.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
186    .movie:hover div:nth-of-type(3) {
187      background-color: transparent;
188    }
189    
```

<br/>

*   movie:hover uses the :hover pseudo-class to select the div element with the class name movie when it is being hovered over by the user.

*   The code div:nth-of-type(1) further narrows down the selection by targeting the first occurrence of a div element inside the movie element.

*   The CSS property opacity is then applied to the targeted div element, setting its opacity to 1. This will make the element fully opaque.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
190    .movie:hover div:nth-of-type(1) {
191      opacity: 1;
192    }
193    
```

<br/>

*   @media is a rule in CSS that enables to apply styles only when certain conditions are met. The condition is that the screen width must be less than or equal to 600 pixels.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
194    @media screen and (max-width: 600px) {
```

<br/>

*   Upon meeting the max-width limit of 600px this will implement the targetted class of .app. It will set its spacing from the top and bottom to 4rem. It will set the spacing from its right and left to 2rem.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
195      .app {
196        padding: 4rem 2rem;
197      }
```

<br/>

*   When the screen width is of 600px then the padding of the search class will be of 1rem from the top and bottom.<br/>
    And 1.75rem from the right and left.

*   It will the set its width to span the entire width of the screen. This is the reason why the user only sees the input field at the top of the screen to its maximum width.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
199      .search {
200        padding: 1rem 1.75rem;
201        width: 100%;
202      }
```

<br/>

*   This targets the input field nested inside the div element with a class name of search. It sets its font size to 1rem.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
204      .search input {
205        font-size: 1rem;
206      }
```

<br/>

*   This targets the img element nested inside of the search div. It is the icon on the side of the input field. The width and height of the icon is set to 20px once the screen width is of 600px.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
208      .search img {
209        width: 20px;
210        height: 20px;
211      }
```

<br/>

*   It sets the padding of the .app element to 4rem (4 times the value of the font-size of the element)<br/>
    at the top and bottom, and 1rem (1 times the value of the font-size of the element) on the left and right<br/>
    when the screen width is less than or equal to 400 pixels.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
213    
214    @media screen and (max-width: 400px) {
215      .app {
216        padding: 4rem 1rem;
217      }
218    
```

<br/>

*   Here, screen refers to the device's screen, and max-width: 400px is a condition that specifies the maximum<br/>
    width of the screen that the styles within the media query should apply to. Here the the font size of the H1 tag will be set to 2rem once the condition of 400px of width of the screen is met.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
219      h1 {
220        font-size: 2rem;
221      }
```

<br/>

*   The margin space from the top of the div with the class name of container.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
223      .container {
224        margin-top: 2rem;
225      }
```

<br/>

*   Upon meeting the condition of maximum screen width of 400px the div element with the class name of movie will span to 100% of its width. As a result the users will only see 1 movie card displayed on the screen
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.css
```css
227      .movie {
228        width: "100%";
229        margin: 1rem;
230      }
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBcmVhY3RNb3ZpZUFwcCUzQSUzQU1hYXpQcm8=/docs/e1f30).
