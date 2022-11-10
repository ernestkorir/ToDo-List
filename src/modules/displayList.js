import TodoList from './listclass.js';

const todo = new TodoList();
const listSection = document.querySelector('.list-section');

const createTodo = () => {
  const listSection = document.querySelector('.list-section');
  listSection.replaceChildren();
  if (todo.allTodos.length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'allTodos';
    listSection.appendChild(listContainer);
    todo.allTodos.map((a) => {
      const list = document.createElement('li');
      list.className = 'todo';

      const descrptContainer = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox';
      if (a.completed === true) { checkbox.checked = 'checked'; }

      checkbox.onclick = (e) => {
        todo.completedTodo(e.target.checked, a.index);
      };
      descrptContainer.appendChild(checkbox);

      const descrpt = document.createElement('p');
      descrpt.id = 'task-description';
      descrpt.textContent = a.description;
      descrptContainer.appendChild(descrpt);
      list.appendChild(descrptContainer);

      const dragIcon = document.createElement('i');
      dragIcon.className = 'fa fa-ellipsis-v';
      list.appendChild(dragIcon);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa fa-times';
      deleteIcon.id = a.index;

      list.onclick = () => {
        descrpt.contentEditable = 'true';
        list.appendChild(deleteIcon);
        dragIcon.style.display = 'none';
      };
      listContainer.append(list);
      return list;
    });
    document.createElement('p').addEventListener('keyup', (e) => {
      if (e.target.id === 'task-description') {
        if (e.key === 'Enter') {
          createTodo();
        } else {
          todo.editTodo(e.target, a.index);
        }
      }
    });
    listSection.appendChild(listContainer);
  }
};

export { createTodo, todo };