import { projectController } from "./projectController";

export const overviewController = (function(){
    const allProjects = [];

    const addProject = function(name){
        allProjects.push(projectController.createProject(name));
    }

    const removeProject = function(index){
        allProjects[index] = undefined;
    }

    const returnProject = function(index){
        return allProjects[index];
    }
    return {addProject,removeProject,returnProject}
})()
