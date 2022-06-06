'use strict';

// A good practice when building a project is to select elements we need and store them in variables.
// A Node list behaves like an array 
//  Selecting elements we will need and storing them in variables.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const btnModal = document.querySelectorAll(".show-modal")

for (let i = 0; i < btnModal.length; i++){
    console.log(btnModal[i].textContent);
}