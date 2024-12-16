import { overviewController } from "./overviewProjects";
import { todoController } from "./todoController";
import { projectController } from "./projectController";
import { compareAsc, formatDistance } from 'date-fns';


export const smallTodoDOMController = (function() {
    const createSmallTodoDOM = function(projectDOM, index) {



        const titleInput = document.querySelector("#title");
        const descInput = document.querySelector("#desc");
        const dueInput = document.querySelector("#due");
        const priorityInput = document.querySelector("#priority");


        let title = titleInput.value;
        let desc = descInput.value;
        let due = new Date(dueInput.value);
        let priority = priorityInput.value;

    


        let projectObj = overviewController.returnProject(index);
        let todoObj = todoController.createTodo(title, desc, due, priority);
        projectController.addTodo(projectObj, todoObj);

        //Sort by  DUE DATE 
        projectObj.todoList.sort((a, b) => compareAsc(a.due, b.due));
  
        fromArrayToDom(projectObj,projectDOM);
        localStorage.setItem("allProjects", JSON.stringify(overviewController.getAllProjects())); // Save data to localStorage

    }
    const fromArrayToDom = function(projectObj,projectDOM){
        let list = projectDOM.querySelector("ul");
        list.innerHTML ="";

        projectObj.todoList.forEach(element => {
            let title = element.title;
            let desc = element.desc;
            let due = element.due;
            let priority = element.priority;

            //Format date-> How many days to go till deadline
            const today = new Date();
            let dueInDistance = formatDistance(due, today, { addSuffix: true });

            addTodoToDOM(projectDOM, title, desc, dueInDistance, priority, projectObj, element);
        });
        
    }

    const addTodoToDOM = function(projectDOM, title, desc, due, priority, projectObj, todoObj) {
        let list = projectDOM.querySelector("ul");

        let li = document.createElement("li");
        if(todoObj.completed){
            li.style.backgroundColor = "lightgreen"
        }else{
            li.style.backgroundColor = priorityColor(priority);
        }

        let titleDOM = document.createElement("p");
        let descDOM = document.createElement("p");
        let dueDOM = document.createElement("p");

        titleDOM.textContent = title;
        descDOM.textContent = desc;
        dueDOM.textContent = due;

        li.appendChild(titleDOM);
        li.appendChild(descDOM);
        li.appendChild(dueDOM);

        const delButton = document.createElement("button");
        delButton.textContent = "Del";
        li.appendChild(delButton);

        delButton.addEventListener("click", (e) => {
            let li = e.target.parentElement;
            deleteTODO(projectObj, li, todoObj);
        });

        list.appendChild(li);

        const checkButton = document.createElement("button");
        checkButton.textContent = "Complete";
        li.appendChild(checkButton)

        checkButton.addEventListener("click",()=>{
            todoController.complete(todoObj);
            li.style.backgroundColor = "lightgreen";
        })

        //Able to add change priority here if wanted

    }

    const deleteTODO = function(projectObj, li, todoObj) {
        projectController.removeTodo(projectObj, todoObj);
        //console.log(overviewController.getAllProjects())
        li.remove();
    }

    const priorityColor = function(priority) {
        if (priority === "High") {
            return "red";
        } else if (priority === "Medium") {
            return "yellow";
        } else {
            return "lightblue";
        }
    }

    return { createSmallTodoDOM, fromArrayToDom ,priorityColor };
})();