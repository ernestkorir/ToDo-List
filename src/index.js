import './index.css';
import inject from './modules/inject.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import clearCompleted from './modules/clearCompleted.js';
import deleteTask from './modules/deleteTask.js';

const clearCompletedButton = document.getElementById('clear-completed');

inject();
form.addEventListener('submit', getAddedTodos);
clearCompleted();

document.addEventListener('click', (e) => {
    if (e.target.className === 'fa fa-times') {
      deleteTask(e.target.id);
    }
  });
  
  clearCompletedButton.addEventListener('click', clearCompleted);