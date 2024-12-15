export const overviewController = (function(){
    const allProjects = [];
    
    const getAllProjects = function(){
        return allProjects;
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
    return {getAllProjects,addProject,removeProject,returnProject}
})()
