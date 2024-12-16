class Todo{
    constructor(title,desc,due,priority){
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = priority;
        this.completed = false;
    }
}

export const todoController = (function(){
    const complete = function(todoObj){
        todoObj.completed = true;
    }

    const changePriority = function(todoObj,newPrio){
        todoObj.priority = newPrio;
    }

    const createTodo = function(title,desc,due,priority){
        return new Todo(title,desc,due,priority);
    }
    return { complete, changePriority, createTodo}
})()

