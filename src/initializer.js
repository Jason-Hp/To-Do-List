import { projectController } from "./projectController";
import { overviewController } from "./overviewProjects";
import { projectDOMController } from "./projectDOM";

const buttonForProject= document.querySelector(".button button");

buttonForProject.addEventListener("click", ()=>{
    let projectName = document.querySelector("#projectName").value;
    let projectObj = projectController.createProject(projectName);

    document.querySelector("#projectName").value = '';
    projectDOMController.createProjectDOM(projectObj)
    console.log(overviewController.getAllProjects());
})

