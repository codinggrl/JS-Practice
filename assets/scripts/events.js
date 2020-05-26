const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
 // event.target.disabled = true;
 console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};


// sconst boundFn = buttonClickHandler.bind(this);
// button.onclick = buttonClickHandler;

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });
//preventing default of sending form

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});

//
const div = document.querySelector('div');

//capturing
div.addEventListener('mouseenter', event => {
  console.log('CLICKED DIV');
  console.log(event);
});


// bubbling
button.addEventListener('mouseeenter', event => {
  //default behavior still occurs ,but stops ancestor event
  event.stopPropagation();
  console.log('CLICKED BUTTON');
  console.log(event);

});

// 2 approches
//1. getting all list items and adding event listeners for each one
//1
const listItems = document.querySelectorAll('li');
//2
// const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');// list that holds the list items

//1.multiple listeners, not a good approach

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });



//2.using delegate pattern, just one listener
// using the event propagation, the bubbling
// taking advantage of event propagation and adding event listener on the higher element instead the children

// list.addEventListener('click',event => {
//     event.target.classList.toggle('highlight');
// });


// if we have more complex list items , with more connent can be a problem
// because the event.target always refers to the clicked element
// so we use another event, event.currentTarget

// list.addEventListener('click',event => {
//   console.log(event.currentTarget);// gives us the <ul>tag, the entire list
//     event.target.classList.toggle('highlight');
// });


// event.currentTarget unless event.target is not the exact element u clicked
// but yhe element wher u added the lisener
// in this case
// const list = document.querySelector('ul')
// so we have to traverse the dom
// first we need to locate the event target, we know is inside our list, the ul


list.addEventListener('click',event => {
  event.target.closest('li').classList.toggle('highlight');
});

// closest can be seleced by id, class, tag
//exsites on all dom objects, and traverses up into ancesstor tree
//it does include the elelement on which u called it  event.target, itself









