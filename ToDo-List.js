/*
1: create array to store todos
2:When we click "Add" button 
3:we get the text from the text box
4:Add it to array
*/

//1: create array to store todos
const todoList = [];

function addToDo(){
  // get the text in the text box
  const inputElement = document.querySelector('.js-name-input');

  // get the text out
  const name =inputElement.value;
  console.log(name);


}