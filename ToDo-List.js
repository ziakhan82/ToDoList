/*
1: create array to store todos
2:When we click "Add" button 
3:we get the text from the text box
4:Add it to array
*/

//1: create array to store todos
const todoList = ['make dinner', 'wash dishes'];
renderToDoList();
function renderToDoList(){
//accumulater pattern
  let todoListHTML = '';


  // loop thorugh each index of the array
  for(let i=0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  // get the div element from html and put it inside the javascript
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  }
function addToDo(){
  //2: get the text in the text box
  const inputElement = document.querySelector('.js-name-input');

  //3: get the text out
  const name =inputElement.value;
  
  // add it to the array
  todoList.push(name);

  console.log(todoList);

  // reset the text box
  inputElement.value   = '';
renderToDoList();

}