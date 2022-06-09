'use strict';

// A good practice when building a project is to select elements we need and store them in variables.
// A Node list behaves like an array 
//  Selecting elements we will need and storing them in variables.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const btnModal = document.querySelectorAll(".show-modal");

// for(let i = 0; i < btnModal.length; i++){
//     btnModal[i].addEventListener("click",function() {
//         console.log("The button's clicked")
//     })
// }

btnModal.forEach(function(btn){                   // btn is individual element of the array
    btn.addEventListener("click",function(){
        document.querySelector("div").classList.remove(".hidden");
        console.log("It works!");
    })
})

// forEach is much cleaner and makes more sense.
