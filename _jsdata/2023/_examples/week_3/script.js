console.log('doc:', document);

const todoElement = document.querySelector('.todo');

console.log('todo:', todoElement);

todoElement.addEventListener('click', () => {
  todoElement.style.color = 'red';
});

const todoElements = document.querySelectorAll('.todo');
console.log(todoElements);

todoElements.forEach((todoEl) => {
  todoEl.addEventListener('click', () => {
    todoEl.style.color = 'purple';
  });
});

const inputElement = document.querySelector('#todo-input');
inputElement.addEventListener('keydown', () => {
  //console.log(inputElement.value);
});

const addBtnElement = document.getElementById('add-btn');
const todoListElement = document.querySelector('.todos');

addBtnElement.addEventListener('click', addTodo);

function addTodo(e) {
  e.preventDefault();
  //console.log('deneme');

  const newTask = inputElement.value;
  console.log(newTask);

  if (newTask.trim() == '') {
    alert("You can't enter empty messages!");
  } else {
    const todo_div = document.createElement('div');
    todo_div.classList.add('todo');

    const todo_content = document.createElement('div');
    todo_content.classList.add('todo-content');
    todo_content.innerText = newTask;

    todo_div.appendChild(todo_content);
    todoListElement.appendChild(todo_div);
    inputElement.value = '';
  }
}
