export default class TodoList {
    allTodos = [];

    addTodo(description) {
      const todo = {
        description,
        completed: false,
        index: this.allTodos.length + 1,
      };
      this.allTodos.push(todo);
      this.saveTodo();
    }

    saveTodo() {
        const todos = JSON.stringify(this.allTodos);
        localStorage.setItem('todos', todos);
      }

    deleteTodo(indx) {
      this.allTodos.splice(indx - 1, 1);
      this.allTodos.forEach((t) => {
        if (t.index > indx) {
          t.index -= 1;
        }
      });
      this.saveTodo();
    }

    getStoredTodos() {
      this.allTodos = JSON.parse(localStorage.getItem('todos'));
    }

    editTodo(newValue, index) {
      this.allTodos[index - 1].description = newValue;
      this.saveTodo();
    }
}