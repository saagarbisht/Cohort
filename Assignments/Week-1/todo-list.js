/*
    Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

    Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todo = [];
    }
    add(str) {
        if (typeof str === "string") {
            this.todo.push(str)
        }
    }
    remove(index) {
        if (typeof index === "number") {
            this.todo.splice(index, 1);
        }
    }
    update(index, str) {
        if (typeof str === "string" && typeof index === "number") {
            if (index > this.todo.length - 1) return
            this.todo[index] = str;
        }
    }
    getAll() {
        return this.todo
    }
    get(index) {
        if (typeof index === "number") {
            if (index > this.todo.length - 1) return null
            return this.todo[index];
        }
    }
    clear() {
        this.todo = [];
    }
}

const week1 = new Todo();
week1.add("I will start workout from today");
console.log(week1.getAll())
week1.update(0,"Lets start from tomorrow");
console.log(week1.get(0))
week1.remove(0);