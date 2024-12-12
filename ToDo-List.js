/*
1: create array to store todos
2:When we click "Add" button 
3:we get the text from the text box
4:Add it to array
*/

//1: create array to store todos
const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
  },
  {
  name:'wash dishes',
  dueDate: '2022-12-22'
}];
renderToDoList();
function renderToDoList(){
//accumulater pattern
  let todoListHTML = '';


  // loop thorugh each index of the array
  for(let i=0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    // we can use the short called destructing
   // const {name, dueDate} = todoObject;

    const html = `
    <div>${name}</div>
     <div>${dueDate}</div>
     <button onClick="
     todoList.splice(${i}, 1);
     renderToDoList();
     " class = "delete-todo-button">Delete</button>`;
    todoListHTML += html;
  }
 

  // get the div element from html and put it inside the javascript
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  }
function addToDo(){
  //2: get the text in the text box
  const inputElement = document.querySelector('.js-name-input');

  //3: get the text out
  const name =inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;
  
  // add it to the array
  todoList.push({
    name: name,
    dueDate :dueDate
  });


  // reset the text box
  inputElement.value   = '';
renderToDoList();

}