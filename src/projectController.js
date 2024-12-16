class Project{
    constructor(name){
        this.name = name;
        this.todoList = [];
    }
}

export const projectController = (function(){

    const addTodo = function(projectObj,todoObj){
        projectObj.todoList.push(todoObj);
    }

    const removeTodo = function(projectObj,todoObj){
        const index = projectObj.todoList.findIndex(item => item == todoObj);
        projectObj.todoList.splice(index,1);
    }

    const returnTodoObj = function(projectObj,index){
        return projectObj.todoList[index];
    }

    const createProject = function(name){
        return new Project(name);
    }

    return{ addTodo,removeTodo,returnTodoObj,createProject}
})()

