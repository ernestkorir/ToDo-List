import Todo from "./listData";

export const listSection = document.querySelector('.list-section');
const listContainer= document.createElement('ul');
listContainer.className = 'allToDos';
listSection.appendChild(listContainer);
const createToDo = () => {
    if (Todo.length !== 0) {
        listSection.style.display = 'block';
        Todo.map((a) => {
            const list = document.createElement('li');
            list.className = 'todo';
            list.innerHTML = `
          <div><input type="checkbox" id="checkbox">
          <p>${a.description}</p></div>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          `;
            listContainer.append(list);
            return list;
          });
    }
};

export default createToDo;