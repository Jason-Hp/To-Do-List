import { overviewController } from "./overviewProjects";
import { smallTodoDOMController } from "./smallTodoDOM";


export const projectDOMController = (function(){
   const projectsContainer = document.querySelector(".projects-container");

   const deleteProjectDOM = function(projectDOM,index){
    projectDOM.remove();
    overviewController.removeProject(index);
    localStorage.setItem("allProjects", JSON.stringify(overviewController.getAllProjects())); // Save data to localStorage
   }

   const createProjectDOM = function(projectObj) {

        

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
    
        
    
        let delButton = document.createElement("button");
        delButton.textContent = "Delete";
        projectDOM.appendChild(delButton);
        delButton.addEventListener("click", (e) => {
            const button = e.target;
            const parent = button.parentElement;
            const index = Array.from(parent.parentElement.children).indexOf(parent);
            console.log(overviewController.getAllProjects());
            deleteProjectDOM(parent, index);
        });
    

        let createTodoButton = document.createElement("button");
        const form = document.querySelector(".form");
        createTodoButton.textContent = "Add";
        projectDOM.appendChild(createTodoButton);
    
        createTodoButton.addEventListener("click", () => {
            let actualForm = form.querySelector("form");
            actualForm.reset();
            form.style.display = "block";
       
            const submit = document.querySelector("#form");
            const clonedSubmit = submit.cloneNode(true); 
            submit.parentNode.replaceChild(clonedSubmit, submit);
    
            clonedSubmit.addEventListener("click", (e) => {
                e.preventDefault();
                smallTodoDOMController.createSmallTodoDOM(projectDOM, index);

                actualForm.reset();

                form.style.display = "none"; 
            })
        })
 
        localStorage.setItem("allProjects", JSON.stringify(overviewController.getAllProjects())); // Save data to localStorage
        return projectDOM;
    }
    


   return { createProjectDOM };

})()