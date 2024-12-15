import { overviewController } from "./overviewProjects";

const projectsContainer = document.querySelector(".projects-container");

export const projectDOMController = (function(){
    
   let i = 0;

   const deleteProjectDOM = function(projectDOM,index){
    projectDOM.remove();
    overviewController.removeProject(index);
   }

   const createProjectDOM = function(projectObj){
    let projectDOM = document.createElement("div");
    projectsContainer.appendChild(projectDOM);
    projectDOM.className = "Project";

    const index = Array.from(projectsContainer.children).indexOf(projectDOM);
    
    let nameDOM = document.createElement("p");
    nameDOM.textContent = projectObj.name;
    nameDOM.style.textAlign = "center";
    let todoList = document.createElement("ul");
    todoList.style.listStyleType = "none";
    todoList.style.paddingLeft = 0;
    projectDOM.appendChild(nameDOM);
    projectDOM.appendChild(todoList);

    overviewController.addProject(projectObj);

    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    projectDOM.appendChild(delButton);
    delButton.addEventListener("click",(e)=>{

            const button = e.target;

            const parent = button.parentElement;

            const index = Array.from(parent.parentElement.children).indexOf(parent);
            console.log(overviewController.getAllProjects());
            deleteProjectDOM(parent,index);
    })

    //ADD A add TODO button? make the html form visible:none ? shortTodoDOM and expanededTodoDOM

   }


   return { createProjectDOM };

})()