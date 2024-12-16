import './initializer.js';
import { overviewController } from './overviewProjects.js';
import { projectDOMController } from './projectDOM.js';
import { smallTodoDOMController } from './smallTodoDOM.js';

window.addEventListener("beforeunload", async () => {

        console.log(overviewController.getAllProjects()); // Log the updated projects (optional)
        localStorage.setItem("allProjects", JSON.stringify(overviewController.getAllProjects())); // Save data to localStorage

  });

window.addEventListener("DOMContentLoaded",()=>{
    
    let storedOverview = JSON.parse(localStorage.getItem("allProjects"));


    if (!storedOverview) {
        storedOverview = [];
    }

    overviewController.setAllProjects(storedOverview);


    //ForEach is not feasible here as getAllProjects returns a COPY and not reference
    let length = overviewController.getAllProjects().length;

    for(let i=0;i<length;i++){

        let currentProject = overviewController.returnProject(i);
        console.log(currentProject);
        let projectDOM = projectDOMController.createProjectDOM(currentProject);

        smallTodoDOMController.fromArrayToDom(currentProject,projectDOM)

        
    }
})
