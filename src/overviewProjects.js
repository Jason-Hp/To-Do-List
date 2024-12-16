export const overviewController = (function(){
    let allProjects = [];
    
    const getAllProjects = function(){
        return allProjects;
    }

    const setAllProjects = function(allP){
        allProjects = allP;
    }
    const addProject = function(projectObj){
        allProjects.push(projectObj);
    }

    const removeProject = function(index){
        allProjects.splice(index,1);
    }

    const returnProject = function(index){
        return allProjects[index];
    }
    return {getAllProjects, setAllProjects, addProject,removeProject,returnProject}
})()
