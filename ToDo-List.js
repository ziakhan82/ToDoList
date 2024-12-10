/*
1: create array to store todos
2:When we click "Add" button 
3:we get the text from the text box
4:Add it to array
*/

//1: create array to store todos
const todoList = [];

function addToDo(){
  //2: get the text in the text box
  const inputElement = document.querySelector('.js-name-input');

  //3: get the text out
  const name =inputElement.value;
  
  // add it to the array
  todoList.push(name);

  console.log(todoList);

  // reset the text box
  inputElement.value = empty = '';


}