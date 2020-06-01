import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import apiData from '../apis/apiData';

function Projects() {
  const [projectData, setProjectData] = useState([]);

  const fetchProjects = (e) =>{
    // const response = await apiData.getData('')
    // setProjectData(response.data)
    // console.log(response)
    e.preventDefault()

    apiData.getData()
          .then((response) => {
            setProjectData(response.data)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
  }
  // useEffect(()=>{ fetchProjects() }, [])
  return (
    <>
      <div className="ui center aligned container">
        <h2>Projects</h2>
        {/* <h2>{projectData.length}</h2> */}
        {console.log(projectData)}

      </div>
      <div className="ui three cards">
        <ProjectCard />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />         */}
      </div>
    </>

  );
}

export default Projects;