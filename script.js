'use strict';

// A good practice when building a project is to select elements we need and store them in variables.
// A Node list behaves like an array 
//  Selecting elements we will need and storing them in variables.
// In the beginning , the modal is hidden. 
// We select the modal element and remove the hidden class when any of the buttons are clicked
// We close the modal by re-adding the hidden class whenever the close button is clicked or whenever the overlay is clicked
// We created two functions that are executed in the event and used the function as the second argument
// I went for the forEach method as I found it to be more appropriate.


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnModal = document.querySelectorAll(".show-modal");

const openModal = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnModal.forEach(function(btn){
    btn.addEventListener("click",openModal)
})

btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal)


// Handling Keypress Events

document.addEventListener("keydown",closeModal);
