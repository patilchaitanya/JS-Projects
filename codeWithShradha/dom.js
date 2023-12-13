// // Prac Qs1 [DOM] : append h2 tag with text

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college students";

// // Prac Qs2 add unique text in div

// let divs = document.querySelectorAll(".box");


// let idx = 1;
// for (div of divs ) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// //OR

// // divs[0].innerText = "new unique value 1";
// // divs[1].innerText = "new unique value 2";

// // Prac Qs3 [DOM - add element and style ] : 
// // Create new button element  and add first in the body 

// let newBtn = document.createElement("button");

// document.querySelector("body").prepend(newBtn);

// // update innerText and style of btn

// newBtn.innerText = "Click Me!";

// newBtn.style.backgroundColor = "red";

// newBtn.style.color = "white"; 


// // set attribute value 
// newBtn.setAttribute("id", "newbtn" );
// console.log(newBtn);

// // Prac Qs4 (p - in index.html and class in css)
// // Create p tag giving it class & style

// // let para = document.createElement("p");
// // para.innerText = "Hello, Chaitanya here!"
// // para.setAttribute("class", "para1");


// let para = document.querySelector("p");

// // Override Class to change the class and accordingly properties like color

// // para.setAttribute("class", "newClass");

// // Upper method overides classList doesn't use it.
// para.classList.add("newClass");

// // To remove classList 
// para.classList.remove("newClass");


// Prac Qs 5 [Event Handling ] : Toggle Light to Dark Mode
let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

const changeTheme = () => {
    
    if(currMode === "light"){
        currMode= "dark";

        // body.style.backgroundColor = "black";
        // modeBtn.style.color = "white";

        //OR
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";

        // body.style.backgroundColor = "white";
        // modeBtn.style.color = "black";

        //OR
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
}

modeBtn.addEventListener("click", changeTheme);




