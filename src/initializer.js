import { projectController } from "./projectController";
import { overviewController } from "./overviewProjects";
import { projectDOMController } from "./projectDOM";

const buttonForProject= document.querySelector(".button button");

buttonForProject.addEventListener("click", ()=>{
    let projectName = document.querySelector("#projectName").value;
    let projectObj = projectController.createProject(projectName);
    overviewController.addProject(projectObj);
    document.querySelector("#projectName").value = '';
    projectDOMController.createProjectDOM(projectObj)
})

