/* eslint-disable no-undef */
document.querySelector('.add-todo').addEventListener('click', function (e) {
  let field = document.querySelector('.field-todo');

  if (field.value && field.value !== ' ') {
    addTodo(field);
    field.value = '';
  } else {
    alert('Поле не може бути пустим!');
  }
});

//function for add task with 'enter'
document.querySelector('.field-todo').addEventListener('keydown', function (e) {
  if (e.keyCode === 13 && this.value && this.value !== ' ') {
    addTodo(this);
    this.value = '';
  }
});

// field cleaning
document.querySelector('.clean-value').addEventListener('click', function (e) {
  let field = document.querySelector('.field-todo');

  field.value = '';
});

// function add task
function addTodo(field) {
  let fieldValue = field.value;
  let todoList = document.querySelector('.todo');

  let elements = {
    li: document.createElement('li'),
    buttonsWrap: document.createElement('div'),
    addCheck: document.createElement('a'),
    deleteTodo: document.createElement('a'),
    faCheck: document.createElement('i'),
    faTrash: document.createElement('i'),
  };

  elements.buttonsWrap.classList.add('buttons');
  elements.addCheck.classList.add('add-check');
  elements.deleteTodo.classList.add('delete-todo');
  elements.faCheck.classList.add('fa', 'fa-check');
  elements.faTrash.classList.add('fa', 'fa-trash');

  elements.addCheck.appendChild(elements.faCheck);
  elements.deleteTodo.appendChild(elements.faTrash);

  elements.buttonsWrap.appendChild(elements.addCheck);
  elements.buttonsWrap.appendChild(elements.deleteTodo);

  elements.li.innerHTML = elements.li.innerHTML + fieldValue;
  elements.li.appendChild(elements.buttonsWrap);

  todoList.insertBefore(elements.li, todoList.firstChild);

  document.querySelector('.delete-todo').addEventListener('click', deleteTodo);
  document.querySelector('.add-check').addEventListener('click', completeTodo);
}

//the function of marking the task is completed
function completeTodo() {
  this.closest('li').classList.toggle('fill');
}

//function delete
function deleteTodo() {
  this.closest('li').remove();
}
