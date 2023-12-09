// // Prac Qs1 [DOM] : append h2 tag with text

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college students";

// Prac Qs2 add unique text in div

let divs = document.querySelectorAll(".box");


let idx = 1;
for (div of divs ) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";